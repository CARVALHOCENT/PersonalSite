import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/mock';
import TechParticles from './TechParticles';

const HeroSection = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const fullText = `I'm ${portfolioData.name}`;

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setDisplayedText('');
                setCurrentIndex(0);
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
            {/* Tech Particles Background */}
            <div className="absolute inset-0">
                <TechParticles />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex items-center justify-between gap-16">
                    {/* Left side - Text content in box */}
                    <div className="flex-1">
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12 shadow-2xl shadow-cyan-500/10">
                            <h1 className="text-7xl md:text-8xl font-bold text-white mb-8">
                                {portfolioData.greeting}
                            </h1>

                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent min-h-[4rem] mb-8">
                                {displayedText}
                                <span className={`inline-block w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-500 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                            </div>

                            {/* Professional Tagline and Social Bar */}
                            <div className="mb-8 space-y-6">
                                <h2 className="text-lg font-semibold text-gray-300">
                                    {portfolioData.tagline}
                                </h2>

                                <div className="flex items-center gap-4">
                                    <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer"
                                        className="p-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer"
                                        className="p-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a href={`mailto:${portfolioData.contact.email}`}
                                        className="p-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
                                        <Mail className="w-6 h-6" />
                                    </a>

                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {portfolioData.about.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gray-900 text-cyan-400 rounded-full text-sm font-medium border border-gray-700 hover:border-cyan-500 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side - Profile Image in rotating frame */}
                    <div className="relative w-[550px] h-[550px] flex-shrink-0 flex items-center justify-center">
                        {/* Outer Glow Ring */}
                        <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 200 200">
                            <defs>
                                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#06b6d4" />
                                    <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                            </defs>
                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill="none"
                                stroke="url(#circleGradient)"
                                strokeWidth="3"
                                strokeDasharray="424 141"
                                strokeLinecap="round"
                                className="drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                            />
                        </svg>

                        {/* Centered scaled image */}
                        <img
                            src="/images/ProfilePic.jpeg"
                            alt="Salvador Carvalho"
                            className="w-full h-full rounded-full object-cover scale-[0.75] object-[center_25%] relative z-20"
                        />

                        {/* Orbiting dots */}
                        <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                        </div>
                        <div className="absolute inset-0 animate-[spin_12s_linear_infinite_reverse]">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </section>
    );
};

export default HeroSection;