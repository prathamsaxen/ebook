'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu, X, BookOpen } from "lucide-react";
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-6 bg-background border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" strokeWidth={2.5} />
          <span className="text-xl font-serif font-semibold">BlissBooks</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/books" className="font-medium hover:text-primary transition-colors">Books</Link>
          <Link href="/authors" className="font-medium hover:text-primary transition-colors">Authors</Link>
          <Link href="/about" className="font-medium hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="font-medium hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="default">Sign In</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background pt-16 px-4">
          <div className="flex flex-col space-y-6 pt-6">
            <Link href="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/books" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Books</Link>
            <Link href="/authors" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Authors</Link>
            <Link href="/about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            
            <div className="pt-4 flex flex-col space-y-4">
              <Button variant="outline" className="w-full justify-start" onClick={() => setIsMenuOpen(false)}>
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => setIsMenuOpen(false)}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
              </Button>
              <Button className="w-full" onClick={() => setIsMenuOpen(false)}>Sign In</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
