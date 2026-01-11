import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { TodaysSpecials } from '@/components/TodaysSpecials';
import { GoogleReviews } from '@/components/GoogleReviews';
import { Cart } from '@/components/Cart';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Utensils, Fish, Leaf, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-seafood.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Cart />

      <main>
        <Hero heroImage={heroImage} />

        {/* Features Section */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Fish, title: 'Fresh Catch Daily', desc: 'Sourced from local fishermen every morning' },
                { icon: Utensils, title: 'Traditional Recipes', desc: 'Passed down through three generations' },
                { icon: Leaf, title: 'Organic Spices', desc: 'From Kerala\'s finest plantations' },
                { icon: MapPin, title: 'Fort Kochi', desc: 'Heritage waterfront location' },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center p-6 rounded-xl bg-background shadow-soft animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TodaysSpecials />

        <GoogleReviews />

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready for an Unforgettable
              <span className="text-accent block mt-2">Culinary Journey?</span>
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Join us for a memorable dining experience where the flavors of Kerala's coast
              come alive in every dish. Reserve your table today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                <Link to="/contact">
                  Book a Table
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/menu">
                  View Full Menu
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
