import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import { ReservationForm } from '@/components/ReservationForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = '919876543210'; // Replace with actual number
  const whatsappMessage = encodeURIComponent('Hello! I would like to make a reservation at Spice Haven.');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Cart />

      <main className="pt-20 md:pt-24">
        {/* Header */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Reserve your table or get in touch with us. We'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6 mb-10">
                  <Card className="p-6 border-0 shadow-soft flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        42 Bazaar Road, Fort Kochi,<br />
                        Kochi, Kerala 682001, India
                      </p>
                    </div>
                  </Card>

                  <Card className="p-6 border-0 shadow-soft flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+914842217890" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 484 221 7890
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        For reservations and inquiries
                      </p>
                    </div>
                  </Card>

                  <Card className="p-6 border-0 shadow-soft flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:hello@spicehaven.in" className="text-muted-foreground hover:text-primary transition-colors">
                        hello@spicehaven.in
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </Card>

                  <Card className="p-6 border-0 shadow-soft flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p><span className="font-medium">Lunch:</span> 12:00 PM – 3:30 PM</p>
                        <p><span className="font-medium">Dinner:</span> 7:00 PM – 11:00 PM</p>
                        <p className="text-sm mt-2">Closed on Mondays</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* WhatsApp Button */}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Reservation Form */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Make a Reservation
                </h2>
                <Card className="p-6 md:p-8 border-0 shadow-elevated">
                  <ReservationForm />
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4544454444444!2d76.2388!3d9.9653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sFort%20Kochi!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Spice Haven Location"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
