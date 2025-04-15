
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, ShoppingBag, Users, BookMarked } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BookCard from "@/components/book-card";
import GenreCard from "@/components/genre-card";
import TestimonialCard from "@/components/testimonial-card";
import Newsletter from "@/components/newsletter";
import { featuredBooks, newReleases, genres, testimonials } from "@/constant/mockData";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
            alt="Books on a shelf" 
            className="w-full h-[70vh] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight mb-4 animate-fade-in">
                  Discover Your Next Literary Adventure
                </h1>
                <p className="text-white/80 text-lg mb-8 animate-fade-in">
                  Carefully curated books for every reader. 
                  From bestsellers to hidden gems, find your perfect match.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                  <Button size="lg" className="gap-2">
                    Shop Now
                    <ShoppingBag className="h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 gap-2">
                    Join Book Club
                    <Users className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-5">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Curated Selection</h3>
                <p className="text-muted-foreground">
                  Handpicked books from knowledgeable staff who love literature as much as you do.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-5">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Free Shipping</h3>
                <p className="text-muted-foreground">
                  Enjoy free shipping on all orders over $35, with careful packaging to protect your books.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-5">
                  <BookMarked className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Personalized Recommendations</h3>
                <p className="text-muted-foreground">
                  Get customized book suggestions based on your reading preferences and history.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Books Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-serif font-medium">Featured Books</h2>
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredBooks.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Browse by Genre Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-medium text-center mb-4">Browse by Genre</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              From heart-pounding thrillers to thought-provoking literary fiction, 
              we have books for every taste and interest.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {genres.map((genre) => (
                <GenreCard key={genre.slug} {...genre} />
              ))}
            </div>
          </div>
        </section>
        
        {/* New Releases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-serif font-medium">New Releases</h2>
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newReleases.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-medium text-center mb-4">What Our Readers Say</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Read testimonials from our community of book lovers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;