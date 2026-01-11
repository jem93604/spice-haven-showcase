import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import { MenuItem } from '@/components/MenuItem';
import { menuItems, categories } from '@/data/menuData';
import { cn } from '@/lib/utils';
import { Flame, Leaf } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Cart />

      <main className="pt-20 md:pt-24">
        {/* Header */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Menu
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Discover the authentic taste of Kerala's coast. Every dish is prepared 
              with love, fresh ingredients, and traditional recipes.
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
              <button
                onClick={() => setActiveCategory('all')}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                  activeCategory === 'all'
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                All Items
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Legend */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Flame className="h-4 w-4 text-spice" /> Spicy
            </span>
            <span className="flex items-center gap-1">
              <Leaf className="h-4 w-4 text-primary" /> Vegan
            </span>
          </div>
        </div>

        {/* Menu Grid */}
        <section className="py-8 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No items found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
