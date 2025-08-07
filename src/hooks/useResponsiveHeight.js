import { useState, useEffect } from "react";

const useResponsiveHeight = (breakpoints = [
    { width: 992, height: '417px' },
    { width: 768, height: '360px' },
    { width: 576, height: '300px' },
    { width: 0, height: '220px' },
]) => {
    const [height, setHeight] = useState('220px');

    useEffect(() => {
        const updateHeight = () => {
            const width = window.innerWidth;
            const matched = breakpoints.find(bp => width >= bp.width);
            if (matched) setHeight(matched.height);
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, [breakpoints]);

    return height;
};

export default useResponsiveHeight;


