import { Flame, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { menuItems } from '@/data/menuData';

export const TodaysSpecials = () => {
  const specials = menuItems.filter(item => item.isSpecial).slice(0, 3);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-spice text-spice">
            <Clock className="h-3 w-3 mr-1" />
            Today's Specials
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Chef's Recommendations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked by our head chef featuring the freshest catch of the day 
            and seasonal Kerala specialties.
          </p>
        </div>

        {/* Specials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {specials.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-0 shadow-soft hover:shadow-elevated transition-all duration-300 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                {item.isSpicy && (
                  <Badge className="absolute top-4 right-4 bg-spice text-spice-foreground border-0">
                    <Flame className="h-3 w-3 mr-1" />
                    Spicy
                  </Badge>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-2xl font-display font-bold text-foreground">
                    {formatPrice(item.price)}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
