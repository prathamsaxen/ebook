
import { BookOpen, Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" strokeWidth={2.5} />
              <span className="text-xl font-serif font-semibold">BlissBooks</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Discover your next favorite book at BlissBooks. 
              Curated literary experiences for curious minds.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/books" className="text-muted-foreground hover:text-primary transition-colors">Books</Link></li>
              <li><Link href="/authors" className="text-muted-foreground hover:text-primary transition-colors">Authors</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif font-medium text-lg mb-4">Categories</h3>
            <ul className="space-y-3">
              <li><Link href="/genre/fiction" className="text-muted-foreground hover:text-primary transition-colors">Fiction</Link></li>
              <li><Link href="/genre/non-fiction" className="text-muted-foreground hover:text-primary transition-colors">Non-Fiction</Link></li>
              <li><Link href="/genre/childrens" className="text-muted-foreground hover:text-primary transition-colors">Children's</Link></li>
              <li><Link href="/genre/poetry" className="text-muted-foreground hover:text-primary transition-colors">Poetry</Link></li>
              <li><Link href="/genre/science-fiction" className="text-muted-foreground hover:text-primary transition-colors">Science Fiction</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif font-medium text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="text-muted-foreground hover:text-primary transition-colors">Returns</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} BlissBooks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;