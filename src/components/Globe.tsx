'use client';

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;
        let width = 0;
        const onResize = () => {
            if (canvasRef.current) {
                width = canvasRef.current.offsetWidth;
            }
        };
        window.addEventListener('resize', onResize);
        onResize();
        const globe = createGlobe(canvasRef.current!, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0,
            dark: 0,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [1, 1, 1],
            markerColor: [255 / 255, 102 / 255, 0], // #ff6600
            glowColor: [1, 1, 1],
            markers: [
                { location: [20.5937, 78.9629], size: 0.1 }, // India
                { location: [37.7595, -122.4367], size: 0.05 }, // San Francisco
                { location: [51.5072, 0.1276], size: 0.05 }, // London
                { location: [25.2048, 55.2708], size: 0.08 } // Dubai
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.005;
                state.width = width * 2;
                state.height = width * 2;
            }
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div style={{ width: '100%', aspectRatio: 1 }} className={className}>
            <canvas
                ref={canvasRef}
                style={{ width: "100%", height: "100%", contain: 'layout paint size', opacity: 1, mixBlendMode: 'multiply' }}
            />
        </div>
    );
}
