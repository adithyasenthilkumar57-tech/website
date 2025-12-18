import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ChefHat, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/food/ProductCard';

export default function Home() {
    const featuredProducts = [
        {
            title: "Truffle Mushroom Burger",
            description: "Juicy wagyu beef patty topped with truffle oil sautéed wild mushrooms, swiss cheese, and caramelized onions on a brioche bun.",
            price: 18.99,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
            category: "Burgers"
        },
        {
            title: "Artisan Pepperoni Pizza",
            description: "Wood-fired crust with San Marzano tomato sauce, fresh mozzarella, spicy pepperoni, and hot honey drizzle.",
            price: 22.50,
            image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
            category: "Pizza"
        },
        {
            title: "Avocado Super Bowl",
            description: "Quinoa base, sliced avocado, cherry tomatoes, cucumber, chickpeas, and lemon tahini dressing.",
            price: 16.95,
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
            category: "Healthy"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1544025162-d76690b60943?auto=format&fit=crop&w=1920&q=80"
                        alt="Gourmet Food Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-stone-900/60" />
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white">
                    <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            Taste the <span className="text-orange-500">Extraordinary</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-stone-200 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Experience a symphony of flavors crafted with passion. Fresh ingredients, unforgettable meals, delivered to your table.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/menu">
                                <Button size="lg" className="w-full sm:w-auto text-lg px-10">
                                    View Full Menu
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-10 border-white text-white hover:bg-white hover:text-stone-900">
                                    Book a Table
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-stone-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-6">
                                <ChefHat size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-stone-900">Master Chefs</h3>
                            <p className="text-stone-600">
                                Our culinary team brings years of experience and passion to every dish they create.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-6">
                                <Star size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-stone-900">Premium Quality</h3>
                            <p className="text-stone-600">
                                We source only the finest, freshest ingredients from local farmers and trusted suppliers.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 text-center hover:shadow-md transition-shadow">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-6">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-stone-900">Fast Delivery</h3>
                            <p className="text-stone-600">
                                Hot and fresh food delivered to your doorstep in 30 minutes or it's on us.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Menu Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">Popular Dishes</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2">Trending This Week</h2>
                        </div>
                        <Link href="/menu" className="hidden md:flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors">
                            View All Menu <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link href="/menu">
                            <Button variant="outline" className="w-full">View All Menu</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-stone-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80"
                        alt="Restaurant Interior"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Experience Gourmet?</h2>
                    <p className="text-stone-300 text-lg max-w-2xl mx-auto mb-10">
                        Book a table for an unforgettable evening or order online for a cozy night in.
                    </p>
                    <Button size="lg" className="px-10 text-lg">Order Online Now</Button>
                </div>
            </section>
        </div>
    );
}
