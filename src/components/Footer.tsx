import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="font-display text-2xl font-semibold">Spice Haven</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Experience the authentic flavors of Kerala's coastal cuisine. 
              Fresh seafood, traditional recipes, unforgettable memories.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Our Menu', path: '/menu' },
                { name: 'About Us', path: '/about' },
                { name: 'Reservations', path: '/contact' },
                { name: 'Private Dining', path: '/contact' },
                { name: 'Gift Cards', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  42 Bazaar Road, Fort Kochi,<br />Kochi, Kerala 682001
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+914842217890" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +91 484 221 7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:hello@spicehaven.in" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  hello@spicehaven.in
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <div className="text-primary-foreground/80">
                  <p className="font-medium text-primary-foreground">Lunch</p>
                  <p>12:00 PM – 3:30 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <div className="text-primary-foreground/80">
                  <p className="font-medium text-primary-foreground">Dinner</p>
                  <p>7:00 PM – 11:00 PM</p>
                </div>
              </li>
              <li className="text-primary-foreground/60 text-xs pt-2">
                Closed on Mondays
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 Spice Haven. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
