import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { overallRating, totalReviews } from '@/data/reviewsData';

interface HeroProps {
  heroImage: string;
}

export const Hero = ({ heroImage }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kerala seafood spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(overallRating) ? 'fill-accent text-accent' : 'fill-muted text-muted'}`}
                />
              ))}
            </div>
            <span className="font-semibold text-foreground">{overallRating}</span>
            <span className="text-muted-foreground text-sm">({totalReviews} reviews)</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Authentic Kerala{' '}
            <span className="text-accent">Flavors</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Fresh from the Arabian Sea to your plate. Experience the rich traditions 
            of coastal Kerala cuisine at Fort Kochi's finest seafood restaurant.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
              <Link to="/menu">
                Explore Menu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
              <Link to="/contact">
                Book a Table
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-8 mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '25+', label: 'Years of Legacy' },
              { value: '50+', label: 'Seafood Dishes' },
              { value: '100%', label: 'Fresh Daily' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl md:text-3xl font-display font-bold text-accent">{stat.value}</p>
                <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
