import karimeenImg from '@/assets/karimeen.jpg';
import crabRoastImg from '@/assets/crab-roast.jpg';
import prawnFryImg from '@/assets/prawn-fry.jpg';
import fishCurryImg from '@/assets/fish-curry.jpg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'appetizers' | 'seafood' | 'vegetarian' | 'drinks';
  isSpecial?: boolean;
  isSpicy?: boolean;
  isVegan?: boolean;
}

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 'app-1',
    name: 'Kerala Fish Cutlet',
    description: 'Crispy fish croquettes with aromatic spices, served with mint chutney',
    price: 280,
    image: '/images/fish-cutlet.jpg',
    category: 'appetizers',
    isSpicy: true,
  },
  {
    id: 'app-2',
    name: 'Prawn Pepper Fry',
    description: 'Jumbo prawns tossed with crushed black pepper and curry leaves',
    price: 420,
    image: prawnFryImg,
    category: 'appetizers',
    isSpecial: true,
    isSpicy: true,
  },
  {
    id: 'app-3',
    name: 'Banana Bajji',
    description: 'Ripe banana fritters in gram flour batter, a Kerala teatime favorite',
    price: 150,
    image: '/images/banana-bajji.jpg',
    category: 'appetizers',
    isVegan: true,
  },
  {
    id: 'app-4',
    name: 'Squid Roast',
    description: 'Tender squid rings in spicy masala with onions and coconut',
    price: 380,
    image: '/images/squid-roast.jpg',
    category: 'appetizers',
    isSpicy: true,
  },

  // Seafood Mains
  {
    id: 'sea-1',
    name: 'Karimeen Pollichathu',
    description: 'Pearl spot fish marinated in spices, wrapped in banana leaf and grilled',
    price: 650,
    image: karimeenImg,
    category: 'seafood',
    isSpecial: true,
  },
  {
    id: 'sea-2',
    name: 'Malabar Fish Curry',
    description: 'Fresh catch in tangy coconut curry with raw mango and kokum',
    price: 480,
    image: fishCurryImg,
    category: 'seafood',
    isSpicy: true,
  },
  {
    id: 'sea-3',
    name: 'Crab Roast',
    description: 'Whole crab in fiery red masala, a Kochi specialty',
    price: 750,
    image: crabRoastImg,
    category: 'seafood',
    isSpecial: true,
    isSpicy: true,
  },
  {
    id: 'sea-4',
    name: 'Prawn Moilee',
    description: 'Tiger prawns in mild coconut milk curry with green chilies',
    price: 580,
    image: '/images/prawn-moilee.jpg',
    category: 'seafood',
  },
  {
    id: 'sea-5',
    name: 'Alleppey Fish Fry',
    description: 'Seer fish steaks marinated in red chili paste and shallow fried',
    price: 520,
    image: '/images/fish-fry.jpg',
    category: 'seafood',
    isSpicy: true,
  },
  {
    id: 'sea-6',
    name: 'Lobster Thermidor',
    description: 'Whole lobster in creamy Kerala-style sauce with cheese gratin',
    price: 1850,
    image: '/images/lobster.jpg',
    category: 'seafood',
    isSpecial: true,
  },

  // Vegetarian
  {
    id: 'veg-1',
    name: 'Avial',
    description: 'Mixed vegetables in coconut and yogurt sauce with curry leaves',
    price: 280,
    image: '/images/avial.jpg',
    category: 'vegetarian',
  },
  {
    id: 'veg-2',
    name: 'Kerala Sadya Thali',
    description: 'Traditional feast with 12 dishes served on banana leaf',
    price: 450,
    image: '/images/sadya.jpg',
    category: 'vegetarian',
    isSpecial: true,
    isVegan: true,
  },
  {
    id: 'veg-3',
    name: 'Vendakka Mappas',
    description: 'Okra in creamy coconut curry with mustard and fenugreek',
    price: 260,
    image: '/images/vendakka.jpg',
    category: 'vegetarian',
    isVegan: true,
  },
  {
    id: 'veg-4',
    name: 'Thoran',
    description: 'Dry stir-fry of seasonal greens with fresh coconut',
    price: 220,
    image: '/images/thoran.jpg',
    category: 'vegetarian',
    isVegan: true,
  },

  // Drinks
  {
    id: 'drink-1',
    name: 'Fresh Tender Coconut',
    description: 'Chilled coconut water served in shell',
    price: 120,
    image: '/images/coconut.jpg',
    category: 'drinks',
    isVegan: true,
  },
  {
    id: 'drink-2',
    name: 'Mango Lassi',
    description: 'Creamy yogurt smoothie with Alphonso mango',
    price: 180,
    image: '/images/lassi.jpg',
    category: 'drinks',
  },
  {
    id: 'drink-3',
    name: 'Masala Chai',
    description: 'Spiced tea brewed with cardamom, ginger and cinnamon',
    price: 80,
    image: '/images/chai.jpg',
    category: 'drinks',
  },
  {
    id: 'drink-4',
    name: 'Filter Coffee',
    description: 'Strong South Indian coffee with frothy milk',
    price: 100,
    image: '/images/coffee.jpg',
    category: 'drinks',
  },
];

export const categories = [
  { id: 'appetizers', name: 'Appetizers', icon: '🍤' },
  { id: 'seafood', name: 'Seafood Specialties', icon: '🦀' },
  { id: 'vegetarian', name: 'Vegetarian', icon: '🥬' },
  { id: 'drinks', name: 'Beverages', icon: '🥥' },
];
