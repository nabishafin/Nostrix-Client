import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Fades + slides its content in when it scrolls into view.
 * `stagger` > 0 animates the direct children one after another instead of the wrapper.
 * Skipped entirely for users who prefer reduced motion.
 */
const Reveal = ({ children, className = '', y = 40, x = 0, delay = 0, stagger = 0, duration = 0.8 }) => {
    const ref = useRef(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add('(prefers-reduced-motion: no-preference)', () => {
            const el = ref.current;
            if (!el) return;
            const targets = stagger && el.children.length ? el.children : el;
            gsap.from(targets, {
                y,
                x,
                opacity: 0,
                duration,
                delay,
                stagger,
                ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 88%', once: true },
            });
        });
        return () => mm.revert();
    }, { scope: ref });

    return <div ref={ref} className={className}>{children}</div>;
};

export default Reveal;
