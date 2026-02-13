import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/mock';

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-20 overflow-hidden relative"
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-5xl font-bold text-white">
                            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
                        </h2>
                        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                            <p>
                                I am a <span className="font-bold text-white">3rd-year Electrical and Computer Engineering student</span> at <span className="font-bold text-white">Instituto Superior Técnico</span> with a passion for solving complex problems. My academic journey is driven by a deep interest in <span className="font-bold text-cyan-400">Robotics, Home Automation, and IoT</span>, where I actively explore the intersection of hardware and software to build smarter systems. Outside the classroom, I am a dedicated enthusiast of <span className="font-bold text-white">Lego Technic</span> and <span className="font-bold text-white">Formula 1</span>, hobbies that from a young age <span className="font-bold text-cyan-400">sparked my interest</span> in engineering and understanding how complex systems are built.
                            </p>
                            <p>
                                With a <span className="font-bold text-white">C1 Advanced certification in English</span> from Cambridge and currently expanding my linguistic skills by <span className="font-bold text-white">learning German</span>, I am prepared to collaborate in international and multicultural environments. I am always looking for new challenges that allow me to apply my technical background to real-world projects, whether they involve developing <span className="font-bold text-cyan-400">autonomous systems</span> or optimizing <span className="font-bold text-cyan-400">automated environments</span>.
                            </p>
                        </div>
                    </div>

                    {/* Video Container */}
                    <div className="relative h-[600px] bg-gray-950/50 backdrop-blur-sm rounded-lg border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-500/10 flex items-center justify-center">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            style={{
                                backfaceVisibility: 'hidden',
                                transform: 'translate3d(0,0,0)',
                                willChange: 'transform'
                            }}
                        >
                            <source src="/videos/Lego.mp4" type="video/mp4" />
                        </video>

                    </div>
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </section>
    );
};

export default AboutSection;
