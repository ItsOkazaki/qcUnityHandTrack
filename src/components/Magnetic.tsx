import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Magnetic({ children }: { children: React.ReactNode }) {
    const magnetic = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current!.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const currentMagnetic = magnetic.current;
        currentMagnetic?.addEventListener("mousemove", handleMouseMove);
        currentMagnetic?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            currentMagnetic?.removeEventListener("mousemove", handleMouseMove);
            currentMagnetic?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div ref={magnetic} style={{ position: 'relative' }}>
            {children}
        </div>
    );
}
