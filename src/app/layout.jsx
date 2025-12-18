import { Outfit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
    title: 'Gourmet. | Premium Food Shop',
    description: 'Experience the finest dining.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${outfit.className} bg-stone-50 text-stone-900 antialiased`}>
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
