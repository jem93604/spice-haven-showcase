import { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

export const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Reservation request submitted! We\'ll confirm shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      occasion: '',
      notes: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM',
  ];

  const guestOptions = ['1-2', '3-4', '5-6', '7-8', '9-10', '10+'];

  const occasions = ['Birthday', 'Anniversary', 'Business Dinner', 'Date Night', 'Family Gathering', 'Other'];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            required
          />
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            Number of Guests
          </Label>
          <Select value={formData.guests} onValueChange={(value) => handleChange('guests', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select guests" />
            </SelectTrigger>
            <SelectContent>
              {guestOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option} guests
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <Label htmlFor="date" className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            Preferred Date
          </Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => handleChange('date', e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        {/* Time */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            Preferred Time
          </Label>
          <Select value={formData.time} onValueChange={(value) => handleChange('time', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Occasion */}
        <div className="space-y-2 md:col-span-2">
          <Label className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
            Occasion (Optional)
          </Label>
          <Select value={formData.occasion} onValueChange={(value) => handleChange('occasion', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select occasion" />
            </SelectTrigger>
            <SelectContent>
              {occasions.map((occasion) => (
                <SelectItem key={occasion} value={occasion}>
                  {occasion}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Notes */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="notes">Special Requests</Label>
          <Textarea
            id="notes"
            placeholder="Any dietary requirements, seating preferences, or special requests..."
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            rows={4}
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Request Reservation'}
      </Button>

      <p className="text-center text-muted-foreground text-sm">
        We'll confirm your reservation via email or phone within 2 hours.
      </p>
    </form>
  );
};
