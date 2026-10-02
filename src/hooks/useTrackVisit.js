import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://progoti-soft-backed.vercel.app/api';

const getVisitorId = () => {
    try {
        let id = localStorage.getItem('visitorId');
        if (!id) {
            id = crypto.randomUUID();
            localStorage.setItem('visitorId', id);
        }
        return id;
    } catch {
        return 'anonymous';
    }
};

/** Sends one anonymous page view to the backend per route change. */
const useTrackVisit = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname.startsWith('/admin')) return;
        fetch(`${BASE_URL}/analytics/track`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                path: pathname,
                visitorId: getVisitorId(),
                referrer: document.referrer || '',
            }),
            keepalive: true,
        }).catch(() => { /* analytics must never break the site */ });
    }, [pathname]);
};

export default useTrackVisit;
