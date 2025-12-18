'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/menu', label: 'Menu' },
        { href: '/about', label: 'Story' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-sm py-4'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-orange-600 p-2 rounded-full text-white group-hover:scale-110 transition-transform">
                            <UtensilsCrossed size={24} />
                        </div>
                        <span className={cn("text-2xl font-bold tracking-tighter", isScrolled ? "text-stone-900" : "text-stone-900")}>
                            Gourmet.
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-stone-600 hover:text-orange-600 font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="relative p-2 text-stone-600 hover:text-orange-600 transition-colors">
                            <ShoppingBag size={24} />
                            <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                0
                            </span>
                        </button>
                        <Button size="sm">Order Now</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-stone-800"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium text-stone-700 py-2 border-b border-stone-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button className="w-full">Order Now</Button>
                </div>
            )}
        </nav>
    );
}
