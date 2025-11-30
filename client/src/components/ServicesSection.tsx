import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Clock } from "lucide-react";

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
}

// todo: remove mock functionality
const services: Service[] = [
  {
    id: "1",
    name: "Classic Cut",
    description:
      "Traditional haircut with precision clipping and styling. Includes hot towel and styling product.",
    price: 35,
    duration: "30 min",
  },
  {
    id: "2",
    name: "Fade & Taper",
    description:
      "Modern fade haircut with seamless blending. Choose from low, mid, or high fade.",
    price: 40,
    duration: "45 min",
  },
  {
    id: "3",
    name: "Beard Trim",
    description:
      "Professional beard shaping and trimming. Includes hot towel treatment and beard oil.",
    price: 25,
    duration: "20 min",
  },
  {
    id: "4",
    name: "Hot Towel Shave",
    description:
      "Luxurious straight razor shave with hot towels, pre-shave oil, and aftershave treatment.",
    price: 45,
    duration: "40 min",
  },
  {
    id: "5",
    name: "Cut & Beard Combo",
    description:
      "Complete grooming package with haircut and beard trim. Our most popular service.",
    price: 55,
    duration: "50 min",
  },
  {
    id: "6",
    name: "Kids Cut",
    description:
      "Gentle and fun haircuts for children under 12. Patient barbers and quick service.",
    price: 25,
    duration: "20 min",
  },
];

interface ServicesSectionProps {
  onBookClick?: () => void;
}

export default function ServicesSection({ onBookClick }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-2 tracking-wide">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From classic cuts to modern styles, we offer a full range of premium
            grooming services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                className="h-full hover-elevate transition-transform"
                data-testid={`card-service-${service.id}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Scissors className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="font-display text-2xl">${service.price}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Button
            onClick={onBookClick}
            size="lg"
            className="uppercase tracking-wider text-xs font-semibold"
            data-testid="button-book-services"
          >
            Book a Service
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
