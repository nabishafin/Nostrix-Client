// Edit this file to update the public /resume page.
// Any section left as an empty array/string is simply hidden.

const resume = {
    name: 'Mahamodon Nabi Shafin',
    title: 'Full-Stack Web Developer',
    location: 'Cumilla, Bangladesh',
    email: '',        // e.g. 'you@example.com'
    phone: '',
    website: '',      // e.g. 'https://yourportfolio.com'
    github: '',       // e.g. 'https://github.com/yourname'
    linkedin: '',

    summary:
        'Full-stack developer who designs and ships complete web products: React front ends with smooth, modern motion, and Node/Express and MongoDB back ends with authentication, role-based admin panels, image uploads and analytics. Founder of Nostrix Creative, a digital agency delivering web, UI/UX, graphics and marketing work.',

    experience: [
        {
            role: 'Founder & Web Developer',
            company: 'Nostrix Creative',
            period: '',
            points: [
                'Lead design and development of client websites and web applications.',
                'Built this platform end to end: public site, admin panel, REST API and deployment.',
            ],
        },
    ],

    education: [
        // { school: 'University name', degree: 'BSc in Computer Science', period: '2019 - 2023' },
    ],

    // Fallback list, used only if no skills have been added in the admin panel
    skills: [
        { name: 'React', level: 90, category: 'Frontend' },
        { name: 'Redux Toolkit / RTK Query', level: 85, category: 'Frontend' },
        { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
        { name: 'GSAP / Framer Motion', level: 80, category: 'Frontend' },
        { name: 'Node.js / Express', level: 85, category: 'Backend' },
        { name: 'MongoDB / Mongoose', level: 80, category: 'Backend' },
        { name: 'JWT Auth & Security', level: 80, category: 'Backend' },
        { name: 'Git & Vercel', level: 85, category: 'Tools' },
    ],
};

export default resume;
