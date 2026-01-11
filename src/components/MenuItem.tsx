import { Flame, Leaf } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { MenuItem as MenuItemType } from '@/data/menuData';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem = ({ item }: MenuItemProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-elevated transition-all duration-300 bg-card">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder.svg';
          }}
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {item.isSpicy && (
            <Badge className="bg-spice text-spice-foreground border-0">
              <Flame className="h-3 w-3" />
            </Badge>
          )}
          {item.isVegan && (
            <Badge className="bg-primary text-primary-foreground border-0">
              <Leaf className="h-3 w-3" />
            </Badge>
          )}
        </div>
        {item.isSpecial && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-0">
            Chef's Pick
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <span className="font-display font-bold text-primary shrink-0">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </Card>
  );
};
