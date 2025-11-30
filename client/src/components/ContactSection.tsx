import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";

// todo: remove mock functionality - replace with actual business details
const businessInfo = {
  address: "123 Main Street, Downtown, New York, NY 10001",
  phone: "+1 (555) 123-4567",
  email: "info@theclassiccut.com",
  hours: [
    { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
    { day: "Saturday", time: "9:00 AM - 6:00 PM" },
    { day: "Sunday", time: "10:00 AM - 4:00 PM" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919355!2d-74.00425878428698!3d40.71278834379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1640c06d3f%3A0x38f8be06bfc95f1b!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

interface ContactSectionProps {
  onBookClick?: () => void;
}

export default function ContactSection({ onBookClick }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Visit Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-2 tracking-wide">
            LOCATION & HOURS
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Come visit us at our convenient downtown location. Walk-ins welcome,
            but appointments are recommended.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden h-[300px] lg:h-full min-h-[400px]"
          >
            <iframe
              src={businessInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barbershop Location"
              className="rounded-lg"
              data-testid="map-iframe"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      {businessInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <div className="space-y-1">
                      {businessInfo.hours.map((item) => (
                        <div
                          key={item.day}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-muted-foreground">
                            {item.day}
                          </span>
                          <span className="font-medium">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href={businessInfo.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                      data-testid="link-instagram"
                    >
                      <SiInstagram className="h-5 w-5" />
                    </a>
                    <a
                      href={businessInfo.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                      data-testid="link-facebook"
                    >
                      <SiFacebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <Button
                  onClick={onBookClick}
                  className="w-full uppercase tracking-wider text-xs font-semibold"
                  size="lg"
                  data-testid="button-book-contact"
                >
                  Book an Appointment
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
