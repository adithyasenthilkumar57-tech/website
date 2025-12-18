import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ProductCard({ title, description, price, image, category }) {
    return (
        <div className="group bg-white rounded-3xl p-4 transition-all duration-300 hover:shadow-xl border border-stone-100">
            <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-stone-800 uppercase tracking-wide">
                    {category}
                </span>
            </div>

            <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-stone-900 leading-tight">{title}</h3>
                    <span className="text-lg font-bold text-orange-600">${price.toFixed(2)}</span>
                </div>

                <p className="text-stone-500 text-sm mb-4 line-clamp-2 min-h-[40px]">
                    {description}
                </p>

                <Button className="w-full gap-2 group-hover:bg-orange-600" variant="secondary">
                    <Plus size={18} />
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}
