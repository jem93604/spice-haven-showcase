export interface Review {
  id: string;
  author: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  time: string;
  relativeTime: string;
}

// Mock reviews - ready for Google Places API integration
export const reviews: Review[] = [
  {
    id: '1',
    author: 'Priya Menon',
    rating: 5,
    text: 'The Karimeen Pollichathu was absolutely divine! Authentic Kerala flavors that reminded me of my grandmother\'s cooking. The ambiance is perfect for family dinners.',
    time: '2024-01-08',
    relativeTime: '3 days ago',
  },
  {
    id: '2',
    author: 'Rajesh Kumar',
    rating: 5,
    text: 'Best seafood in Kochi, hands down. The crab roast is incredibly fresh and the spice level is just right. Staff is very attentive and friendly.',
    time: '2024-01-05',
    relativeTime: '1 week ago',
  },
  {
    id: '3',
    author: 'Sarah Thompson',
    rating: 4,
    text: 'As a tourist, this was the highlight of our Kerala trip. The fish curry is unlike anything I\'ve tasted before. Highly recommend the Prawn Moilee!',
    time: '2024-01-01',
    relativeTime: '2 weeks ago',
  },
  {
    id: '4',
    author: 'Arun Nair',
    rating: 5,
    text: 'Finally, a restaurant that does justice to traditional Kerala cuisine. The Sadya thali on Sundays is a must-try. Pure vegetarian bliss!',
    time: '2023-12-28',
    relativeTime: '2 weeks ago',
  },
  {
    id: '5',
    author: 'Michelle Lee',
    rating: 5,
    text: 'The waterfront view combined with exceptional food makes this a perfect dining experience. Lobster thermidor was cooked to perfection!',
    time: '2023-12-20',
    relativeTime: '3 weeks ago',
  },
  {
    id: '6',
    author: 'Deepak Pillai',
    rating: 4,
    text: 'Love the authentic taste and generous portions. The squid roast appetizer is addictive. Only wish they had more parking space.',
    time: '2023-12-15',
    relativeTime: '4 weeks ago',
  },
];

export const overallRating = 4.8;
export const totalReviews = 847;
