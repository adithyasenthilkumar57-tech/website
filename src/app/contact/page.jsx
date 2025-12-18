import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <div className="pt-24 pb-20 min-h-screen bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Contact Us</h1>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out for reservations, private events, or just to say hello.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
                            <h3 className="text-2xl font-bold text-stone-900 mb-6">Get in Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-stone-900">Visit Us</h4>
                                        <p className="text-stone-600">123 Culinary Avenue<br />Foodie District, NY 10012</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-stone-900">Call Us</h4>
                                        <p className="text-stone-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-stone-900">Email Us</h4>
                                        <p className="text-stone-600">hello@gourmet.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-stone-900">Opening Hours</h4>
                                        <p className="text-stone-600">Mon - Fri: 8am - 10pm</p>
                                        <p className="text-stone-600">Sat - Sun: 9am - 11pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden bg-stone-200">
                            {/* Placeholder for Map */}
                            <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-medium">
                                Map View (Placeholder)
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
                        <h3 className="text-2xl font-bold text-stone-900 mb-6">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-stone-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-stone-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-stone-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                                    placeholder="Private Event Inquiry"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-stone-700">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                                    placeholder="Tell us more..."
                                ></textarea>
                            </div>
                            <Button size="lg" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
