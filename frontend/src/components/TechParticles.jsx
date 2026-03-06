import React, { useEffect, useRef } from 'react';

const TechParticles = () => {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: null, y: null, radius: 150 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const archImg = new Image();
        archImg.src = '/images/arch-linux.svg';

        const setupCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = canvas.clientWidth * dpr;
            canvas.height = canvas.clientHeight * dpr;
            ctx.scale(dpr, dpr);
        };

        setupCanvas();

        // Increased particle counts
        const particleCount = 150; 
        const logoCount = 30; 
        let entities = [];

        class Particle {
            constructor(isLogo = false) {
                this.isLogo = isLogo;
                this.init();
            }
            init() {
                const w = canvas.width / (window.devicePixelRatio || 1);
                const h = canvas.height / (window.devicePixelRatio || 1);
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = this.isLogo ? (Math.random() * 30 + 30) : (Math.random() * 2 + 1);
                this.speedX = Math.random() * 0.4 - 0.2;
                this.speedY = Math.random() * 0.4 - 0.2;
                this.density = (Math.random() * 20) + 2; // How fast they get pushed
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.01;
                this.color = `rgba(6, 182, 212, ${Math.random() * 0.3 + 0.2})`;
            }
            update() {
                // Regular floating movement
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.isLogo) this.rotation += this.rotationSpeed;

                // Mouse Repel Physics
                if (mouse.current.x !== null) {
                    let dx = mouse.current.x - this.x;
                    let dy = mouse.current.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouse.current.radius) {
                        const force = (mouse.current.radius - distance) / mouse.current.radius;
                        const directionX = (dx / distance) * force * this.density;
                        const directionY = (dy / distance) * force * this.density;
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }

                // Screen Wrap
                const w = canvas.width / (window.devicePixelRatio || 1);
                const h = canvas.height / (window.devicePixelRatio || 1);
                if (this.x > w + 50) this.x = -50; else if (this.x < -50) this.x = w + 50;
                if (this.y > h + 50) this.y = -50; else if (this.y < -50) this.y = h + 50;
            }
            draw() {
                if (this.isLogo) {
                    if (!archImg.complete) return;
                    ctx.save();
                    ctx.translate(this.x, this.y);
                    ctx.rotate(this.rotation);
                    ctx.globalAlpha = 0.25;
                    ctx.drawImage(archImg, -this.size / 2, -this.size / 2, this.size, this.size);
                    ctx.restore();
                } else {
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        const initScene = () => {
            entities = [];
            for (let i = 0; i < particleCount; i++) entities.push(new Particle(false));
            for (let i = 0; i < logoCount; i++) entities.push(new Particle(true));
        };

        initScene();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            entities.forEach(e => {
                e.update();
                e.draw();
            });
            requestAnimationFrame(animate);
        };
        animate();

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };
        
        const handleMouseLeave = () => {
            mouse.current.x = null;
            mouse.current.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', setupCanvas);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', setupCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0 pointer-events-none" />;
};

export default TechParticles;