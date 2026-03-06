import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/mock';

const ProjectsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const projects = portfolioData.projects;

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, projects.length]);

    const goToNext = () => { setIsAutoPlaying(false); setCurrentIndex((prev) => (prev + 1) % projects.length); };
    const goToPrev = () => { setIsAutoPlaying(false); setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length); };

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + projects.length) % projects.length;
            visible.push({ ...projects[index], offset: i });
        }
        return visible;
    };

    return (
        <section className="py-20 bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">
                        Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                </div>

                <div className="relative h-[600px]">
                    <div className="flex items-center justify-center h-full relative">
                        {getVisibleProjects().map((project) => {
                            const isCenter = project.offset === 0;
                            return (
                                <div
                                    key={project.id}
                                    className="absolute transition-all duration-500 ease-out"
                                    style={{
                                        // On mobile, keep side cards hidden. On PC, translate them to the sides.
                                        transform: `translateX(${project.offset * (window.innerWidth < 768 ? 0 : 120)}%) scale(${isCenter ? 1 : 0.8})`,
                                        opacity: isCenter ? 1 : (window.innerWidth < 768 ? 0 : 0.4),
                                        zIndex: isCenter ? 10 : 0,
                                        pointerEvents: isCenter ? 'auto' : 'none',
                                        visibility: isCenter || window.innerWidth >= 768 ? 'visible' : 'hidden'
                                    }}
                                >
                                    <Card className="w-[85vw] md:w-[400px] bg-gray-800 border-gray-700 hover:border-cyan-500 transition-colors shadow-2xl">
                                        <CardHeader>
                                            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                            </div>
                                            <CardTitle className="text-2xl text-white">{project.title}</CardTitle>
                                            <CardDescription className="text-gray-400 line-clamp-2">
                                                {project.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardFooter className="flex gap-3">
                                            {project.links.map((link, linkIdx) => (
                                                <Button
                                                    key={linkIdx}
                                                    variant="outline"
                                                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0"
                                                    onClick={() => window.open(link.url, '_blank')}
                                                >
                                                    {link.label}
                                                    <ExternalLink className="w-4 h-4 ml-2" />
                                                </Button>
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>

                    <Button variant="outline" size="icon" className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 text-white z-20" onClick={goToPrev}>
                        <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button variant="outline" size="icon" className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-gray-800/80 text-white z-20" onClick={goToNext}>
                        <ChevronRight className="w-6 h-6" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsCarousel;