import React, { useMemo, useState } from 'react';
import PageBanner from '../../components/shared/PageBanner';
import Heading from '../../components/shared/Heading';
import ProjectCard from '../../components/shared/ProjectCard';
import Marque from '../../components/shared/Marque';
import ContactUs from '../../components/ui/ContactUs';
import Testimonials from '../../components/ui/Testimonials';
import Reveal from '../../components/shared/Reveal';
import Seo from '../../components/shared/Seo';
import { useGetProjectsQuery } from '../../redux/features/projects/projectsApi';

const PAGE_SIZE = 6;

const Projects = () => {
    const { data: projectData = [], isLoading, isError } = useGetProjectsQuery();

    const [category, setCategory] = useState('All');
    const [search, setSearch] = useState('');
    const [visible, setVisible] = useState(PAGE_SIZE);

    const categories = useMemo(() => {
        const set = new Set(projectData.map((p) => p.category).filter(Boolean));
        return ['All', ...set];
    }, [projectData]);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        return projectData.filter((p) => {
            const matchesCategory = category === 'All' || p.category === category;
            const haystack = `${p.title} ${p.description} ${(p.tags || []).join(' ')}`.toLowerCase();
            return matchesCategory && (!q || haystack.includes(q));
        });
    }, [projectData, category, search]);

    const shown = filtered.slice(0, visible);

    const changeCategory = (c) => { setCategory(c); setVisible(PAGE_SIZE); };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div>
            <Seo title="Projects" description="Selected case studies and recent work from Nostrix." />
            <div>
                <PageBanner title={'Projects'} subtitle={'Our Latest Projects'} />
                <Marque />
            </div>

            <div className='md:w-10/12 w-full px-4 md:px-0 mx-auto min-h-[400px]'>
                <Heading title={'Our Projects'} subtitle={'Our Recent Work Portfolio'} />

                {isError ? (
                    <div className="text-center mt-10 text-red-500 font-bold">
                        Failed to load projects. Please try again later.
                    </div>
                ) : projectData.length === 0 ? (
                    <div className="text-center mt-10 text-gray-500 font-semibold italic text-xl">
                        No projects found at the moment. Coming soon!
                    </div>
                ) : (
                    <>
                        {/* Filters */}
                        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                                {categories.map((c) => (
                                    <button
                                        key={c}
                                        onClick={() => changeCategory(c)}
                                        className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                                            category === c
                                                ? 'bg-primary border-primary text-black'
                                                : 'border-gray-300 text-gray-600 hover:border-primary'
                                        }`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                            <input
                                type="search"
                                value={search}
                                onChange={(e) => { setSearch(e.target.value); setVisible(PAGE_SIZE); }}
                                placeholder="Search projects or tech..."
                                className="w-full md:w-72 px-4 py-2 rounded-full border border-gray-300 focus:border-primary outline-none text-sm"
                            />
                        </div>

                        {filtered.length === 0 ? (
                            <p className="text-center mt-16 text-gray-500">No projects match your filters.</p>
                        ) : (
                            // key forces the reveal to replay when the filter changes
                            <Reveal key={`${category}-${search}`} stagger={0.1} y={30} className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
                                {shown.map((data, index) => (
                                    <ProjectCard
                                        key={data._id || index}
                                        bgcolor="bg-base-200"
                                        data={data}
                                        textColor="text-black"
                                        categorybg="bg-[#20D374]"
                                        borderColor={'border-white'}
                                    />
                                ))}
                            </Reveal>
                        )}

                        {filtered.length > PAGE_SIZE && (
                            <div className='text-center mt-10'>
                                {visible < filtered.length ? (
                                    <button
                                        onClick={() => setVisible((v) => v + PAGE_SIZE)}
                                        className="px-4 py-2 rounded-full bg-primary font-semibold text-black hover:bg-black hover:text-white transition-all"
                                    >
                                        Load More Projects
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setVisible(PAGE_SIZE)}
                                        className="px-4 py-2 rounded-full bg-primary font-semibold text-black hover:bg-black hover:text-white transition-all"
                                    >
                                        Show Less
                                    </button>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>

            <ContactUs bg={'bg-black'} textColor={'text-white'} bginput={'bg-gray-800'} />
            <Testimonials />
        </div>
    );
};

export default Projects;
