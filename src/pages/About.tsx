import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Award, Users, Leaf, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import restaurantImage from '@/assets/restaurant-interior.jpg';

const About = () => {
  const milestones = [
    { year: '1998', event: 'Founded by Chef Krishnan and family in Fort Kochi' },
    { year: '2005', event: 'Expanded to our current waterfront location' },
    { year: '2012', event: 'Featured in BBC Travel\'s "Best of India"' },
    { year: '2018', event: 'Awarded "Best Seafood Restaurant in Kerala"' },
    { year: '2023', event: 'Celebrating 25 years of culinary excellence' },
  ];

  const awards = [
    { title: 'Times Food Award', year: '2023', category: 'Best Seafood' },
    { title: 'TripAdvisor Travelers\' Choice', year: '2022-2024', category: 'Top Restaurant' },
    { title: 'Kerala Tourism Award', year: '2021', category: 'Culinary Excellence' },
    { title: 'Zomato Gold', year: '2019-2024', category: 'Premium Partner' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={restaurantImage}
            alt="Spice Haven Restaurant Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
            <div className="text-center text-primary-foreground px-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our Story
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
                A legacy of authentic Kerala flavors since 1998
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    From Family Kitchen to 
                    <span className="text-primary"> Kochi's Favorite</span>
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Spice Haven began in 1998 when Chef Krishnan Nair, a third-generation 
                      fisherman's son, decided to share his mother's treasured recipes with 
                      the world. What started as a small eatery on the Fort Kochi waterfront 
                      has grown into one of Kerala's most celebrated seafood destinations.
                    </p>
                    <p>
                      Every morning, we source the freshest catch directly from local 
                      fishermen who've worked these waters for generations. Our spices 
                      come from the hills of Wayanad and Munnar, ensuring the authentic 
                      flavors that have made Kerala cuisine legendary.
                    </p>
                    <p>
                      Today, three generations of the Nair family work together to bring 
                      you an experience that's more than just a meal – it's a journey 
                      through Kerala's rich culinary heritage.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Users, value: '50+', label: 'Team Members' },
                    { icon: Award, value: '12', label: 'Awards Won' },
                    { icon: Leaf, value: '100%', label: 'Fresh Daily' },
                    { icon: Clock, value: '25', label: 'Years Legacy' },
                  ].map((stat) => (
                    <Card key={stat.label} className="p-6 text-center border-0 shadow-soft">
                      <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                      <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-16">
                <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
                  Our Journey
                </h3>
                <div className="relative">
                  <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-border" />
                  <div className="space-y-8">
                    {milestones.map((milestone, index) => (
                      <div
                        key={milestone.year}
                        className={`relative flex items-center gap-8 ${
                          index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                        }`}
                      >
                        <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          <span className="font-display text-2xl font-bold text-accent">{milestone.year}</span>
                          <p className="text-muted-foreground mt-1">{milestone.event}</p>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-soft z-10" />
                        <div className="flex-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Awards */}
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
                  Awards & Recognition
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {awards.map((award) => (
                    <Card key={award.title} className="p-6 text-center border-0 shadow-soft bg-secondary/50">
                      <Award className="h-8 w-8 mx-auto mb-3 text-accent" />
                      <h4 className="font-semibold text-foreground mb-1">{award.title}</h4>
                      <p className="text-sm text-muted-foreground">{award.category}</p>
                      <p className="text-sm font-medium text-primary mt-2">{award.year}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Find Us
            </h3>
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-elevated">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.4544454444444!2d76.2388!3d9.9653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sFort%20Kochi!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Spice Haven Location"
              />
            </div>
            <p className="text-center text-muted-foreground mt-4">
              42 Bazaar Road, Fort Kochi, Kochi, Kerala 682001
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
