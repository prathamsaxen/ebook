'use client';
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Search, Sliders, Grid, List, ChevronDown, ChevronUp, X
} from "lucide-react";
import BookCard from "@/components/book-card";
import { featuredBooks, newReleases } from "@/constant/mockData";
import Newsletter from "@/components/newsletter";

// Combine book data for demonstration
const allBooks = [...featuredBooks, ...newReleases];

// Define filter categories
const categories = [
  { id: "fiction", label: "Fiction" },
  { id: "non-fiction", label: "Non-Fiction" },
  { id: "sci-fi", label: "Science Fiction" },
  { id: "mystery", label: "Mystery & Thriller" },
  { id: "romance", label: "Romance" },
  { id: "fantasy", label: "Fantasy" },
  { id: "biography", label: "Biography & Memoir" },
  { id: "history", label: "History" },
];

const priceRanges = [
  { id: "under-10", label: "Under $10" },
  { id: "10-to-20", label: "$10 - $20" },
  { id: "20-to-30", label: "$20 - $30" },
  { id: "over-30", label: "Over $30" },
];

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [showGrid, setShowGrid] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const [categoryExpanded, setCategoryExpanded] = useState(true);
  const [priceExpanded, setPriceExpanded] = useState(true);
  
  // Filter books based on search query and filters
  const filteredBooks = allBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    // In a real app, you would have category and price data to filter
    // This is just for demonstration
    return matchesSearch;
  });
  
  // Toggle category selection
  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };
  
  // Toggle price range selection
  const togglePriceRange = (rangeId: string) => {
    if (selectedPriceRanges.includes(rangeId)) {
      setSelectedPriceRanges(selectedPriceRanges.filter(id => id !== rangeId));
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, rangeId]);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-secondary/50 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-semibold text-center mb-4">
              Explore Our Books
            </h1>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              Discover a curated collection of books across genres, from bestsellers to hidden gems. 
              Find your next literary adventure.
            </p>
            
            {/* Search bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search by title, author, or keyword..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>
        
        {/* Main content with filters and books */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar/filters - Desktop */}
              <div className="hidden lg:block w-64 shrink-0">
                <div className="sticky top-8">
                  <h2 className="text-lg font-serif font-medium mb-6">Filters</h2>
                  
                  {/* Categories */}
                  <div className="mb-6">
                    <button 
                      className="flex items-center justify-between w-full mb-3"
                      onClick={() => setCategoryExpanded(!categoryExpanded)}
                    >
                      <h3 className="text-base font-medium">Categories</h3>
                      {categoryExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    
                    {categoryExpanded && (
                      <div className="space-y-2">
                        {categories.map(category => (
                          <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`category-${category.id}`} 
                              checked={selectedCategories.includes(category.id)}
                              onCheckedChange={() => toggleCategory(category.id)}
                            />
                            <label 
                              htmlFor={`category-${category.id}`}
                              className="text-sm"
                            >
                              {category.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Price ranges */}
                  <div className="mb-6">
                    <button 
                      className="flex items-center justify-between w-full mb-3"
                      onClick={() => setPriceExpanded(!priceExpanded)}
                    >
                      <h3 className="text-base font-medium">Price</h3>
                      {priceExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    
                    {priceExpanded && (
                      <div className="space-y-2">
                        {priceRanges.map(range => (
                          <div key={range.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`price-${range.id}`} 
                              checked={selectedPriceRanges.includes(range.id)}
                              onCheckedChange={() => togglePriceRange(range.id)}
                            />
                            <label 
                              htmlFor={`price-${range.id}`}
                              className="text-sm"
                            >
                              {range.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Clear filters button */}
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedPriceRanges([]);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
              
              {/* Mobile filters button */}
              <div className="lg:hidden flex justify-between items-center mb-6">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <Sliders size={16} />
                  Filters
                </Button>
                
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className={showGrid ? "text-primary" : "text-muted-foreground"}
                    onClick={() => setShowGrid(true)}
                  >
                    <Grid size={18} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className={!showGrid ? "text-primary" : "text-muted-foreground"}
                    onClick={() => setShowGrid(false)}
                  >
                    <List size={18} />
                  </Button>
                </div>
              </div>
              
              {/* Mobile filters sidebar */}
              {mobileFiltersOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-background">
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b flex justify-between items-center">
                      <h2 className="text-lg font-medium">Filters</h2>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <X size={18} />
                      </Button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-6">
                      {/* Categories */}
                      <div className="mb-6">
                        <button 
                          className="flex items-center justify-between w-full mb-3"
                          onClick={() => setCategoryExpanded(!categoryExpanded)}
                        >
                          <h3 className="text-base font-medium">Categories</h3>
                          {categoryExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        
                        {categoryExpanded && (
                          <div className="space-y-2">
                            {categories.map(category => (
                              <div key={category.id} className="flex items-center space-x-2">
                                <Checkbox 
                                  id={`mobile-category-${category.id}`} 
                                  checked={selectedCategories.includes(category.id)}
                                  onCheckedChange={() => toggleCategory(category.id)}
                                />
                                <label 
                                  htmlFor={`mobile-category-${category.id}`}
                                  className="text-sm"
                                >
                                  {category.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Price ranges */}
                      <div className="mb-6">
                        <button 
                          className="flex items-center justify-between w-full mb-3"
                          onClick={() => setPriceExpanded(!priceExpanded)}
                        >
                          <h3 className="text-base font-medium">Price</h3>
                          {priceExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                        
                        {priceExpanded && (
                          <div className="space-y-2">
                            {priceRanges.map(range => (
                              <div key={range.id} className="flex items-center space-x-2">
                                <Checkbox 
                                  id={`mobile-price-${range.id}`} 
                                  checked={selectedPriceRanges.includes(range.id)}
                                  onCheckedChange={() => togglePriceRange(range.id)}
                                />
                                <label 
                                  htmlFor={`mobile-price-${range.id}`}
                                  className="text-sm"
                                >
                                  {range.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-4 border-t">
                      <div className="grid grid-cols-2 gap-4">
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setSelectedCategories([]);
                            setSelectedPriceRanges([]);
                          }}
                        >
                          Clear All
                        </Button>
                        <Button onClick={() => setMobileFiltersOpen(false)}>
                          Apply Filters
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Books grid */}
              <div className="flex-1">
                {/* Desktop view toggles */}
                <div className="hidden lg:flex justify-between items-center mb-6">
                  <p className="text-muted-foreground">
                    Showing <span className="font-medium text-foreground">{filteredBooks.length}</span> results
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className={showGrid ? "text-primary" : "text-muted-foreground"}
                      onClick={() => setShowGrid(true)}
                    >
                      <Grid size={18} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className={!showGrid ? "text-primary" : "text-muted-foreground"}
                      onClick={() => setShowGrid(false)}
                    >
                      <List size={18} />
                    </Button>
                  </div>
                </div>
                
                {/* Grid View */}
                {showGrid ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBooks.map((book) => (
                      <BookCard key={book.id} {...book} />
                    ))}
                  </div>
                ) : (
                  /* List View */
                  <div className="space-y-6">
                    {filteredBooks.map((book) => (
                      <div key={book.id} className="flex flex-col sm:flex-row gap-6 border rounded-lg p-4">
                        <div className="sm:w-1/3 lg:w-1/4">
                          <div className="aspect-[2/3] relative group">
                            <img 
                              src={book.cover} 
                              alt={book.title} 
                              className="w-full h-full object-cover rounded-md shadow-sm transition-all"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-xl font-medium mb-1">{book.title}</h3>
                          <p className="text-muted-foreground mb-2">by {book.author}</p>
                          
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}
                          </p>
                          
                          <div className="flex items-center gap-3 mb-4">
                            <p className="text-lg font-medium">${book.price.toFixed(2)}</p>
                            {book.price && (
                              <p className="text-sm text-muted-foreground line-through">
                                ${book.price.toFixed(2)}
                              </p>
                            )}
                          </div>
                          
                          <Button className="w-full sm:w-auto">Add to Cart</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Empty state */}
                {filteredBooks.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium mb-2">No books found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search or filters to find what you&apos;re looking for.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategories([]);
                        setSelectedPriceRanges([]);
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
                
                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" disabled>
                      <ChevronDown className="h-4 w-4 rotate-90" />
                    </Button>
                    <Button variant="outline" className="h-9 w-9 p-0 font-medium text-primary">
                      1
                    </Button>
                    <Button variant="ghost" className="h-9 w-9 p-0 font-medium">
                      2
                    </Button>
                    <Button variant="ghost" className="h-9 w-9 p-0 font-medium">
                      3
                    </Button>
                    <Button variant="ghost" className="h-9 w-9 p-0 font-medium">
                      4
                    </Button>
                    <Button variant="ghost" className="h-9 w-9 p-0 font-medium">
                      5
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronDown className="h-4 w-4 -rotate-90" />
                    </Button>
                  </div>
                </div>
              </div>
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

export default Books;