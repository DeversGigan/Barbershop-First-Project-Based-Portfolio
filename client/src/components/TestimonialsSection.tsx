import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

// todo: remove mock functionality
const testimonials = [
  {
    id: "1",
    name: "James Wilson",
    initials: "JW",
    rating: 5,
    text: "Best barbershop in town! The attention to detail is unmatched. I've been coming here for 3 years and never had a bad cut.",
  },
  {
    id: "2",
    name: "Michael Chen",
    initials: "MC",
    rating: 5,
    text: "The hot towel shave experience is incredible. It's not just a haircut, it's a whole relaxation experience. Highly recommended!",
  },
  {
    id: "3",
    name: "David Roberts",
    initials: "DR",
    rating: 5,
    text: "Finally found my go-to barbershop. The team is professional, friendly, and always makes sure I leave looking sharp.",
  },
  {
    id: "4",
    name: "Chris Martinez",
    initials: "CM",
    rating: 5,
    text: "Great atmosphere, skilled barbers, and fair prices. What more could you ask for? The Classic Cut is now my only choice.",
  },
  {
    id: "5",
    name: "Andrew Thompson",
    initials: "AT",
    rating: 5,
    text: "The fade work here is exceptional. They really take their time to get it perfect. Worth every penny!",
  },
  {
    id: "6",
    name: "Robert Kim",
    initials: "RK",
    rating: 5,
    text: "I bring my son here for his cuts too. They're patient with kids and always do a great job. Family-friendly environment.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            What Our Clients Say
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-2 tracking-wide">
            TESTIMONIALS
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                className="h-full"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
