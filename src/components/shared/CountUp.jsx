import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Number that counts up from 0 when scrolled into view. */
const CountUp = ({ end = 0, suffix = '', duration = 1.8, className = '' }) => {
    const ref = useRef(null);

    useGSAP(() => {
        const el = ref.current;
        if (!el) return;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) {
            el.textContent = `${end}${suffix}`;
            return;
        }
        const state = { n: 0 };
        gsap.to(state, {
            n: end,
            duration,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            onUpdate: () => { el.textContent = `${Math.round(state.n)}${suffix}`; },
        });
    }, { scope: ref, dependencies: [end, suffix] });

    return <span ref={ref} className={className}>0{suffix}</span>;
};

export default CountUp;
