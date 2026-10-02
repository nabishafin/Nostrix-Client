import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/shared/PageBanner';
import Reveal from '../../components/shared/Reveal';
import Seo from '../../components/shared/Seo';
import resume from '../../data/resume';
import { useGetProjectsQuery } from '../../redux/features/projects/projectsApi';
import { useGetSkillsQuery } from '../../redux/features/content/contentApi';

const Section = ({ title, children }) => (
    <section className="mb-10">
        <h2 className="text-lg font-bold text-black border-b-2 border-primary inline-block pb-1 mb-4 uppercase tracking-wider">{title}</h2>
        {children}
    </section>
);

const ResumePage = () => {
    const { data: projects = [] } = useGetProjectsQuery();
    const { data: apiSkills = [] } = useGetSkillsQuery();

    const skills = apiSkills.length ? apiSkills : resume.skills;
    const grouped = skills.reduce((acc, s) => {
        const key = s.category || 'General';
        (acc[key] = acc[key] || []).push(s);
        return acc;
    }, {});

    const contacts = [
        resume.location,
        resume.email && { label: resume.email, href: `mailto:${resume.email}` },
        resume.phone,
        resume.website && { label: resume.website.replace(/^https?:\/\//, ''), href: resume.website },
        resume.github && { label: 'GitHub', href: resume.github },
        resume.linkedin && { label: 'LinkedIn', href: resume.linkedin },
    ].filter(Boolean);

    return (
        <div>
            <Seo title="Resume" description={`${resume.name} - ${resume.title}. Skills, experience and selected projects.`} />
            <div className="no-print"><PageBanner title="Resume" subtitle="Resume" /></div>

            <div className="md:w-8/12 w-full px-4 md:px-0 mx-auto my-16 text-black">
                <div className="no-print flex justify-end mb-6">
                    <button onClick={() => window.print()} className="px-5 py-2 rounded-full bg-primary font-semibold text-black hover:bg-black hover:text-white transition-all">
                        Download PDF
                    </button>
                </div>

                <Reveal>
                    <header className="mb-10">
                        <h1 className="text-4xl md:text-5xl font-bold">{resume.name}</h1>
                        <p className="text-xl text-primary font-semibold mt-1">{resume.title}</p>
                        <p className="mt-3 text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
                            {contacts.map((c, i) =>
                                typeof c === 'string'
                                    ? <span key={i}>{c}</span>
                                    : <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline-offset-2 hover:underline">{c.label}</a>
                            )}
                        </p>
                    </header>
                </Reveal>

                {resume.summary && (
                    <Reveal><Section title="Summary"><p className="text-gray-700 leading-relaxed">{resume.summary}</p></Section></Reveal>
                )}

                {resume.experience.length > 0 && (
                    <Reveal>
                        <Section title="Experience">
                            <div className="space-y-5">
                                {resume.experience.map((job, i) => (
                                    <div key={i}>
                                        <div className="flex flex-wrap justify-between gap-2">
                                            <h3 className="font-semibold">{job.role} <span className="text-gray-500 font-normal">· {job.company}</span></h3>
                                            {job.period && <span className="text-sm text-gray-500">{job.period}</span>}
                                        </div>
                                        <ul className="list-disc ml-5 mt-1 text-gray-700 text-sm space-y-1">
                                            {job.points.map((p, j) => <li key={j}>{p}</li>)}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    </Reveal>
                )}

                <Reveal>
                    <Section title="Skills">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                            {Object.entries(grouped).map(([cat, list]) => (
                                <div key={cat}>
                                    <h3 className="text-sm font-semibold text-gray-500 mb-2">{cat}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {list.map((s) => (
                                            <span key={s.name} className="px-3 py-1 rounded-full bg-gray-100 text-sm border border-gray-200">{s.name}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                </Reveal>

                {projects.length > 0 && (
                    <Reveal>
                        <Section title="Selected projects">
                            <div className="space-y-4">
                                {projects.slice(0, 6).map((p) => (
                                    <div key={p._id}>
                                        <h3 className="font-semibold">
                                            <Link to={`/projects/${p._id}`} className="hover:text-primary">{p.title}</Link>
                                            {p.liveLink && <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="ml-2 text-xs text-primary hover:underline">live</a>}
                                        </h3>
                                        <p className="text-sm text-gray-700 line-clamp-2">{p.description}</p>
                                        {p.tags?.length > 0 && <p className="text-xs text-gray-500 mt-1">{p.tags.join(' · ')}</p>}
                                    </div>
                                ))}
                            </div>
                        </Section>
                    </Reveal>
                )}

                {resume.education.length > 0 && (
                    <Reveal>
                        <Section title="Education">
                            {resume.education.map((e, i) => (
                                <div key={i} className="flex flex-wrap justify-between gap-2">
                                    <div><h3 className="font-semibold">{e.degree}</h3><p className="text-sm text-gray-600">{e.school}</p></div>
                                    <span className="text-sm text-gray-500">{e.period}</span>
                                </div>
                            ))}
                        </Section>
                    </Reveal>
                )}
            </div>
        </div>
    );
};

export default ResumePage;
