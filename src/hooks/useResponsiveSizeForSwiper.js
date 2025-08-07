import { useState, useEffect } from "react";

const useResponsiveSizeForSwiper = (breakpoints = [
    { width: 992, size: { width: 620, height: 600 } }, // taller than 357
    { width: 768, size: { width: 420, height: 450 } },
    { width: 576, size: { width: 320, height: 330 } },
    { width: 0, size: { width: 260, height: 250 } },
]) => {
    const [size, setSize] = useState({ width: 260, height: 250 });

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            const matched = breakpoints.find(bp => width >= bp.width);
            if (matched) setSize(matched.size);
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, [breakpoints]);

    return size;
};

export default useResponsiveSizeForSwiper;
