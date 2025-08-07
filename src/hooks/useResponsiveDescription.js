import { useState, useEffect } from "react";

const useResponsiveDescription = (breakpoints = [
    { width: 1200, size: { width: 620, height: 357 } }, // Large screens
    { width: 992, size: { width: 520, height: 300 } },  // Medium desktops
    { width: 768, size: { width: 420, height: 236 } },  // Tablets
    { width: 576, size: { width: 320, height: 180 } },  // Small phones
    { width: 0, size: { width: 260, height: 146 } },    // Extra small
]) => {
    const [size, setSize] = useState({ width: 260, height: 146 });

    useEffect(() => {
        const updateSize = () => {
            const screenWidth = window.innerWidth;
            const matched = breakpoints.find(bp => screenWidth >= bp.width);
            if (matched) setSize(matched.size);
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, [breakpoints]);

    return size;
};

export default useResponsiveDescription;
