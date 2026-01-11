import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { reviews, overallRating, totalReviews } from '@/data/reviewsData';

export const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-accent text-accent' : 'fill-muted text-muted'}`}
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
            <span className="text-sm font-medium text-muted-foreground">Google Reviews</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">{renderStars(Math.floor(overallRating))}</div>
            <span className="text-2xl font-bold text-foreground">{overallRating}</span>
            <span className="text-muted-foreground">({totalReviews} reviews)</span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex bg-background shadow-soft"
            onClick={goToPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex bg-background shadow-soft"
            onClick={goToNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Review Card */}
          <Card className="p-8 md:p-10 bg-background shadow-elevated border-0">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg shrink-0">
                {reviews[currentIndex].author.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{reviews[currentIndex].author}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">{renderStars(reviews[currentIndex].rating)}</div>
                  <span className="text-muted-foreground text-sm">{reviews[currentIndex].relativeTime}</span>
                </div>
              </div>
            </div>
            <blockquote className="text-foreground text-lg leading-relaxed italic">
              "{reviews[currentIndex].text}"
            </blockquote>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 md:hidden">
            <Button variant="outline" size="sm" onClick={goToPrev}>
              <ChevronLeft className="h-4 w-4 mr-1" /> Prev
            </Button>
            <Button variant="outline" size="sm" onClick={goToNext}>
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Leave Review CTA */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href="https://g.page/r/YOUR_PLACE_ID/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Review
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
