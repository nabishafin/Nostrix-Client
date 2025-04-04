import React, { useState } from 'react';
import Heading from '../shared/Heading';

const FaqAccordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(1); // Initially, the second accordion is active

    const accordionData = [
        {
            title: 'What services does your digital agency offer?',
            content: 'Our digital agency offers a wide range of services including website design and development, search engine optimization (SEO), social media marketing, content creation, and digital advertising.',
        },
        {
            title: 'What industries do you specialize in?',
            content: 'We specialize in working with clients in the e-commerce, healthcare, and technology industries. Our expertise in these sectors allows us to provide tailored solutions that meet the unique needs of each industry.',
        },
        {
            title: 'What is your process for working with clients?',
            content: 'Our process begins with an initial consultation to understand your goals and requirements. We then develop a customized strategy, execute the plan, and provide regular updates and reports to ensure your satisfaction.',
        },
        {
            title: 'What platforms and technologies do you specialize in?',
            content: 'We specialize in using platforms such as WordPress, Shopify, and Magento for website development. Our technology stack includes HTML, CSS, JavaScript, React, and Node.js for building robust and scalable web applications.',
        },
        {
            title: 'How can your agency help my business grow online?',
            content: 'Our agency can help your business grow online by increasing your online visibility, driving targeted traffic to your website, and improving your conversion rates. We use data-driven strategies and the latest digital marketing techniques to achieve measurable results.',
        },
        {
            title: 'How do you handle communication and feedback during a project?',
            content: 'We maintain open and transparent communication with our clients throughout the project lifecycle. We provide regular updates, seek feedback at key milestones, and are always available to address any questions or concerns.',
        },
    ];

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <section className='mt-10'>
            <Heading
                title={"FAQs"}
                subtitle={'Questions? Look here.'}
            >
            </Heading>
            <div className=" md:w-10/12 px-4 md:px-0 mx-auto mt-10">
                {accordionData.map((item, index) => (
                    <div key={index} className={`border rounded-lg overflow-hidden mt-4  ${activeAccordion === index ? 'bg-primary' : 'bg-white'}`}>
                        <button
                            className="w-full flex justify-between items-center p-4 "
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="font-semibold">{item.title}</span>
                            <span>{activeAccordion === index ? '−' : '+'}</span>
                        </button>
                        {activeAccordion === index && item.content && (
                            <div className="p-4 bg-primary">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqAccordion;