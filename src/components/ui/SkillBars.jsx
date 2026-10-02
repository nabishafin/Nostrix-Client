import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Heading from '../shared/Heading';
import resume from '../../data/resume';
import { useGetSkillsQuery } from '../../redux/features/content/contentApi';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Skills grouped by category, with progress bars that fill when scrolled into view. */
const SkillBars = () => {
    const { data: apiSkills = [] } = useGetSkillsQuery();
    const skills = apiSkills.length ? apiSkills : resume.skills;
    const ref = useRef(null);

    const grouped = skills.reduce((acc, s) => {
        const key = s.category || 'General';
        (acc[key] = acc[key] || []).push(s);
        return acc;
    }, {});

    useGSAP(() => {
        const bars = gsap.utils.toArray('.skill-fill');
        const mm = gsap.matchMedia();
        mm.add('(prefers-reduced-motion: no-preference)', () => {
            bars.forEach((bar) => {
                gsap.fromTo(
                    bar,
                    { width: '0%' },
                    {
                        width: `${bar.dataset.level}%`,
                        duration: 1.2,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: bar, start: 'top 92%', once: true },
                    }
                );
            });
        });
        mm.add('(prefers-reduced-motion: reduce)', () => {
            bars.forEach((bar) => { bar.style.width = `${bar.dataset.level}%`; });
        });
        return () => mm.revert();
    }, { scope: ref, dependencies: [skills.length], revertOnUpdate: true });

    return (
        <section className="px-4 md:px-0 md:w-10/12 mx-auto my-16" ref={ref}>
            <Heading title="Skills" subtitle="Technologies I Work With" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-10">
                {Object.entries(grouped).map(([category, list]) => (
                    <div key={category}>
                        <h3 className="text-lg font-bold mb-4 border-l-4 border-primary pl-3">{category}</h3>
                        <div className="space-y-4">
                            {list.map((s) => (
                                <div key={s._id || s.name}>
                                    <div className="flex justify-between text-sm font-semibold mb-1">
                                        <span>{s.name}</span>
                                        <span className="text-gray-500">{s.level}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="skill-fill h-full bg-primary rounded-full" data-level={s.level} style={{ width: 0 }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillBars;
