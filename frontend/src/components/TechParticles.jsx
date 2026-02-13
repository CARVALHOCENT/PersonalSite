import React, { useEffect, useRef } from 'react';

const TechParticles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // 1. Load the local SVG from your public folder
        const archImg = new Image();
        archImg.src = '/images/arch-linux.svg'; // Change this if your filename is different

        const setupCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = canvas.offsetHeight * dpr;
            ctx.scale(dpr, dpr);
        };

        setupCanvas();

        const particles = [];
        const particleCount = 60;

        class Particle {
            constructor() {
                const w = canvas.width / (window.devicePixelRatio || 1);
                const h = canvas.height / (window.devicePixelRatio || 1);
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.color = `rgba(6, 182, 212, ${Math.random() * 0.3 + 0.2})`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                const w = canvas.width / (window.devicePixelRatio || 1);
                const h = canvas.height / (window.devicePixelRatio || 1);
                if (this.x > w) this.x = 0;
                if (this.x < 0) this.x = w;
                if (this.y > h) this.y = 0;
                if (this.y < 0) this.y = h;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class ArchLogo {
            constructor() {
                const w = canvas.width / (window.devicePixelRatio || 1);
                const h = canvas.height / (window.devicePixelRatio || 1);
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 50 + 40;
                this.speedX = Math.random() * 0.4 - 0.2;
                this.speedY = Math.random() * 0.4 - 0.2;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.01;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.rotation += this.rotationSpeed;
                const w = canvas.width / (window.devicePixelRatio || 1);
                const h = canvas.height / (window.devicePixelRatio || 1);
                if (this.x > w + 50) this.x = -50;
                if (this.x < -50) this.x = w + 50;
                if (this.y > h + 50) this.y = -50;
                if (this.y < -50) this.y = h + 50;
            }

            draw() {
                if (!archImg.complete) return;
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.globalAlpha = 0.3; // Low opacity for subtle background effect
                ctx.drawImage(archImg, -this.size / 2, -this.size / 2, this.size, this.size);
                ctx.restore();
            }
        }

        // Initialize
        for (let i = 0; i < particleCount; i++) particles.push(new Particle());
        for (let i = 0; i < 12; i++) particles.push(new ArchLogo());

        function animate() {
            const w = canvas.width / (window.devicePixelRatio || 1);
            const h = canvas.height / (window.devicePixelRatio || 1);
            ctx.clearRect(0, 0, w, h);

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => setupCanvas();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full absolute top-0 left-0"
        />
    );
};

export default TechParticles;