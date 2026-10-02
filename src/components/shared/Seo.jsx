import React from 'react';

const SITE = 'Nostrix';

/**
 * Per-page title + meta tags. React 19 hoists these into <head> automatically.
 * Usage: <Seo title="Projects" description="..." image="https://..." />
 */
const Seo = ({ title, description, image }) => {
    const fullTitle = title ? `${title} | ${SITE}` : `${SITE} Creative | Digital Agency`;
    return (
        <>
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            {image && <meta property="og:image" content={image} />}
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
        </>
    );
};

export default Seo;
