import React from 'react';
import { Button } from './ui/button';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
    return (
        <footer className="bg-gray-950 border-t border-gray-800 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            Want to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Connect</span> ?
                        </h3>
                        <p className="text-gray-400">
                            Feel free to reach out!
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-white">Get in Touch</h4>
                        <div className="space-y-4">
                            <a
                                href={`mailto:${portfolioData.contact.email}`}
                                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group break-all"
                            >
                                <div className="w-10 h-10 shrink-0 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-sm md:text-base">{portfolioData.contact.email}</span>
                            </a>

                            <a
                                href={portfolioData.contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                            >
                                <div className="w-10 h-10 shrink-0 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 transition-all">
                                    <Github className="w-5 h-5" />
                                </div>
                                <span className="text-sm md:text-base">GitHub Profile</span>
                            </a>

                            <a
                                href={portfolioData.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                            >
                                <div className="w-10 h-10 shrink-0 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <span className="text-sm md:text-base">LinkedIn Profile</span>
                            </a>
                        </div>

                        <Button
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                            onClick={() => window.open(portfolioData.contact.cvUrl, '_blank')}
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Download My CV
                        </Button>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;