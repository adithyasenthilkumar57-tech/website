import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-200 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">Gourmet.</h3>
                        <p className="text-stone-400 leading-relaxed">
                            Crafting unforgettable dining experiences with fresh, locally sourced ingredients and passion.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                            <li><Link href="/menu" className="hover:text-orange-500 transition-colors">Our Menu</Link></li>
                            <li><Link href="/about" className="hover:text-orange-500 transition-colors">Our Story</Link></li>
                            <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Opening Hours</h4>
                        <ul className="space-y-3 text-stone-400">
                            <li className="flex justify-between">
                                <span>Mon - Fri</span>
                                <span>8:00 AM - 10:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span>9:00 AM - 11:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>10:00 AM - 9:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-orange-500 shrink-0" size={20} />
                                <span className="text-stone-400">123 Culinary Avenue, Foodie District, NY 10012</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-orange-500 shrink-0" size={20} />
                                <span className="text-stone-400">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-orange-500 shrink-0" size={20} />
                                <span className="text-stone-400">hello@gourmet.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-stone-800 pt-8 text-center text-stone-500 text-sm">
                    © {new Date().getFullYear()} Gourmet. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
