import { Award, BookOpen, Map, Users } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Newsletter from "@/components/newsletter";

const About = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                        alt="Books on shelves in a library"
                        className="w-full h-[50vh] object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex items-center">
                        <div className="container px-4 mx-auto">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white leading-tight mb-4">
                                    Our Story
                                </h1>
                                <p className="text-white/80 text-lg mb-4">
                                    Founded with a passion for literature and a vision to create a community of book lovers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-serif font-medium mb-6">Our Mission</h2>
                                <p className="text-muted-foreground mb-6">
                                    At BlissBooks, we believe that books have the power to transform lives, spark imagination, and
                                    build connections. Our mission is to curate exceptional literary experiences and make them accessible
                                    to readers of all backgrounds and interests.
                                </p>
                                <p className="text-muted-foreground mb-6">
                                    Whether you&apos;re searching for your next great adventure, a thought-provoking classic, or an
                                    undiscovered gem, we&apos;re here to guide you to books that will resonate with your unique tastes and perspectives.
                                </p>
                                <p className="text-muted-foreground">
                                    We&apos;re not just a bookstore – we&apos;re a community hub for literary enthusiasts, a trusted source of
                                    recommendations, and champions of diverse voices in literature.
                                </p>
                            </div>

                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"
                                    alt="Books with coffee"
                                    className="rounded-lg shadow-xl"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-primary p-4 rounded-lg shadow-lg">
                                    <p className="text-white font-medium text-lg">Sharing stories since 2010</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-secondary/50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-serif font-medium text-center mb-4">Our Values</h2>
                        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                            These core principles guide everything we do at BlissBooks.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                                <div className="bg-primary/10 p-3 rounded-full mb-5">
                                    <BookOpen className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-serif text-xl font-medium mb-3">Accessibility</h3>
                                <p className="text-muted-foreground">
                                    We believe everyone deserves access to quality literature, regardless of background or circumstances.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                                <div className="bg-primary/10 p-3 rounded-full mb-5">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-serif text-xl font-medium mb-3">Community</h3>
                                <p className="text-muted-foreground">
                                    Books bring people together. We foster connection through shared literary experiences.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                                <div className="bg-primary/10 p-3 rounded-full mb-5">
                                    <Award className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-serif text-xl font-medium mb-3">Quality</h3>
                                <p className="text-muted-foreground">
                                    We handpick titles that meet our standards for exceptional storytelling and craftsmanship.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                                <div className="bg-primary/10 p-3 rounded-full mb-5">
                                    <Map className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-serif text-xl font-medium mb-3">Diversity</h3>
                                <p className="text-muted-foreground">
                                    We celebrate and promote diverse voices, perspectives, and narratives in literature.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-serif font-medium text-center mb-4">Meet Our Team</h2>
                        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                            Passionate book lovers dedicated to helping you discover your next favorite read.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
                                    alt="Emily Parker"
                                    className="w-40 h-40 object-cover rounded-full border-4 border-primary/20 mb-4"
                                />
                                <h3 className="font-serif text-xl font-medium">Emily Parker</h3>
                                <p className="text-primary mb-2">Founder & Head Curator</p>
                                <p className="text-muted-foreground">
                                    Former literature professor with a passion for connecting readers with life-changing books.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                                    alt="David Kim"
                                    className="w-40 h-40 object-cover rounded-full border-4 border-primary/20 mb-4"
                                />
                                <h3 className="font-serif text-xl font-medium">David Kim</h3>
                                <p className="text-primary mb-2">Fiction Specialist</p>
                                <p className="text-muted-foreground">
                                    Published author with an uncanny ability to match readers with their perfect literary companions.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
                                    alt="Sarah Johnson"
                                    className="w-40 h-40 object-cover rounded-full border-4 border-primary/20 mb-4"
                                />
                                <h3 className="font-serif text-xl font-medium">Sarah Johnson</h3>
                                <p className="text-primary mb-2">Community Manager</p>
                                <p className="text-muted-foreground">
                                    Book club enthusiast who creates magical experiences that bring readers together.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 bg-secondary/50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <p className="text-5xl font-serif font-semibold text-primary mb-2">15+</p>
                                <p className="text-lg">Years of Experience</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <p className="text-5xl font-serif font-semibold text-primary mb-2">50K+</p>
                                <p className="text-lg">Books Curated</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <p className="text-5xl font-serif font-semibold text-primary mb-2">100K+</p>
                                <p className="text-lg">Happy Readers</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <p className="text-5xl font-serif font-semibold text-primary mb-2">25+</p>
                                <p className="text-lg">Book Clubs</p>
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

export default About;