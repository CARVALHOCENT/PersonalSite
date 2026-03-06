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
        <section className="min-h-screen flex items-center pt-24 md:pt-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
            <div className="absolute inset-0">
                <TechParticles />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Changed to flex-col for mobile, lg:flex-row for desktop */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    
                    {/* Left side - Text content */}
                    <div className="w-full lg:flex-1 order-2 lg:order-1">
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 md:p-12 shadow-2xl shadow-cyan-500/10">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8">
                                {portfolioData.greeting}
                            </h1>

                            <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent min-h-[4rem] mb-6 md:mb-8">
                                {displayedText}
                                <span className={`inline-block w-1 h-8 md:h-12 bg-gradient-to-b from-cyan-400 to-blue-500 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                            </div>

                            <div className="mb-8 space-y-6">
                                <h2 className="text-base md:text-lg font-semibold text-gray-300">
                                    {portfolioData.tagline}
                                </h2>

                                <div className="flex items-center gap-4">
                                    <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer"
                                        className="p-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-400 hover:text-cyan-400 transition-all">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer"
                                        className="p-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-400 hover:text-blue-400 transition-all">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a href={`mailto:${portfolioData.contact.email}`}
                                        className="p-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-400 hover:text-cyan-400 transition-all">
                                        <Mail className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {portfolioData.about.skills.map((skill, index) => (
                                    <span key={index} className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-900 text-cyan-400 rounded-full text-xs md:text-sm font-medium border border-gray-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side - Profile Image (Responsive sizing) */}
                    <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] flex-shrink-0 flex items-center justify-center order-1 lg:order-2">
                        <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 200 200">
                            <defs>
                                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#06b6d4" />
                                    <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                            </defs>
                            <circle cx="100" cy="100" r="90" fill="none" stroke="url(#circleGradient)" strokeWidth="3" strokeDasharray="424 141" strokeLinecap="round" />
                        </svg>

                        <img
                            src="/images/ProfilePic.jpeg"
                            alt="Salvador Carvalho"
                            className="w-full h-full rounded-full object-cover scale-[0.75] object-[center_25%] relative z-20"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;