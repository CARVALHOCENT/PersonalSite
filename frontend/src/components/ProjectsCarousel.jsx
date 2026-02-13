import React, { useState, useEffect, useRef } from 'react';
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

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const goToPrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + projects.length) % projects.length;
            visible.push({ ...projects[index], offset: i });
        }
        return visible;
    };

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">
                        Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Explore my latest work and creations
                    </p>
                </div>

                <div className="relative h-[600px]">
                    <div className="flex items-center justify-center h-full relative">
                        {getVisibleProjects().map((project, idx) => {
                            const isCenter = project.offset === 0;
                            const scale = isCenter ? 1 : 0.8;
                            const opacity = isCenter ? 1 : 0.5;
                            const zIndex = isCenter ? 10 : 0;
                            const translateX = project.offset * 120;

                            return (
                                <div
                                    key={project.id}
                                    className="absolute transition-all duration-500 ease-out"
                                    style={{
                                        transform: `translateX(${translateX}%) scale(${scale})`,
                                        opacity: opacity,
                                        zIndex: zIndex,
                                        pointerEvents: isCenter ? 'auto' : 'none'
                                    }}
                                >
                                    <Card className="w-[400px] bg-gray-800 border-gray-700 hover:border-cyan-500 transition-colors shadow-2xl">
                                        <CardHeader>
                                            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                                            </div>
                                            <CardTitle className="text-2xl text-white">{project.title}</CardTitle>
                                            <CardDescription className="text-gray-400">
                                                {project.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardFooter className="flex gap-3">
                                            {project.links.map((link, linkIdx) => (
                                                <Button
                                                    key={linkIdx}
                                                    variant="outline"
                                                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
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

                    {/* Navigation buttons */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-cyan-600 text-white border-gray-700 hover:border-cyan-600 z-20"
                        onClick={goToPrev}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-cyan-600 text-white border-gray-700 hover:border-cyan-600 z-20"
                        onClick={goToNext}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </Button>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setCurrentIndex(idx);
                                    setIsAutoPlaying(false);
                                }}
                                className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 w-8'
                                        : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsCarousel;