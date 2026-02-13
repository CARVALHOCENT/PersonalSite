import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-xl font-bold text-white">
                    {portfolioData.name}
                </div>
                <Button
                    variant="outline"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg shadow-cyan-500/20"
                    onClick={() => window.open(portfolioData.contact.cvUrl, '_blank')}
                >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                </Button>
            </div>
        </header>
    );
};

export default Header;