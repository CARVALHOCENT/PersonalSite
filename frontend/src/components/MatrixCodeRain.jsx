import React, { useEffect, useRef, useState } from 'react';

const MatrixCodeRain = ({ isVisible }) => {
    const canvasRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !isVisible) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const columns = Math.floor(canvas.width / 20);
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * canvas.height;
        }

        const chars = '01}{<>=+-*&|~#@$%^';
        const techSymbols = '{}[]()<>/';

        function draw() {
            ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = '14px monospace';

            for (let i = 0; i < drops.length; i++) {
                const isSymbol = Math.random() > 0.7;
                const text = isSymbol
                    ? techSymbols[Math.floor(Math.random() * techSymbols.length)]
                    : chars[Math.floor(Math.random() * chars.length)];

                // Gradient effect
                const gradient = ctx.createLinearGradient(0, drops[i] - 20, 0, drops[i]);
                gradient.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
                gradient.addColorStop(1, 'rgba(6, 182, 212, 0.8)');
                ctx.fillStyle = gradient;

                ctx.fillText(text, i * 20, drops[i]);

                if (drops[i] > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += 15;
            }
        }

        const interval = setInterval(draw, 50);

        return () => clearInterval(interval);
    }, [mounted, isVisible]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full absolute top-0 left-0"
            style={{ opacity: 0.4 }}
        />
    );
};

export default MatrixCodeRain;