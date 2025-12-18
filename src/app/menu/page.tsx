import React from 'react';
import { ProductCard } from '@/components/food/ProductCard';

const menuItems = [
    // Starters
    {
        title: "Crispy Calamari",
        description: "Lightly battered calamari rings served with house-made marinara sauce and lemon wedges.",
        price: 12.99,
        category: "Starters",
        image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Bruschetta Board",
        description: "Toasted baguette slices topped with tomatoes, fresh basil, garlic, and balsamic glaze.",
        price: 9.99,
        category: "Starters",
        image: "https://images.unsplash.com/photo-1572695157363-bc31c5d5316c?auto=format&fit=crop&w=800&q=80"
    },
    // Mains
    {
        title: "Grilled Salmon",
        description: "Atlantic salmon fillet served with asparagus, roasted potatoes, and dill cream sauce.",
        price: 24.50,
        category: "Mains",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Wagyu Beef Burger",
        description: "Premium wagyu patty, aged cedar cheese, arugula, and truffle mayo on a brioche bun.",
        price: 19.95,
        category: "Mains",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Truffle Mushroom Pasta",
        description: "Fresh fettuccine tossed in a rich truffle cream sauce with wild mushrooms and parmesan.",
        price: 18.99,
        category: "Mains",
        image: "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=800&q=80"
    },
    // Desserts
    {
        title: "Molten Chocolate Cake",
        description: "Warm chocolate cake with a gooey center, served with vanilla bean ice cream.",
        price: 10.99,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "New York Cheesecake",
        description: "Classic creamy cheesecake with a graham cracker crust and fresh strawberry topping.",
        price: 9.50,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=800&q=80"
    }
];

export default function MenuPage() {
    const categories = ["All", "Starters", "Mains", "Desserts", "Drinks"];

    return (
        <div className="pt-24 pb-20 min-h-screen bg-stone-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">MY Menu</h1>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Explore our diverse selection of dishes, crafted to perfection. From appetizers to desserts, there's something for every palate.
                    </p>
                </div>

                {/* Categories (Visual Only) */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat, i) => (
                        <button
                            key={cat}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${i === 0
                                ? 'bg-orange-600 text-white shadow-md'
                                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuItems.map((item, index) => (
                        <ProductCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
