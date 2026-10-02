import { useLenis } from 'lenis/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Keeps GSAP ScrollTrigger in step with Lenis' smooth scrolling. Renders nothing. */
const LenisScrollSync = () => {
    useLenis(ScrollTrigger.update);
    return null;
};

export default LenisScrollSync;
