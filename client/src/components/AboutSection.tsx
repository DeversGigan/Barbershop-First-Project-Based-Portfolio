import { motion } from "framer-motion";
import { Award, Clock, Users } from "lucide-react";
import aboutImage from "@assets/generated_images/barbershop_waiting_area.png";
import toolsImage from "@assets/generated_images/barber_tools_still_life.png";

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Users, value: "10K+", label: "Happy Clients" },
  { icon: Award, value: "25+", label: "Awards Won" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="Our barbershop"
                className="rounded-lg w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden border-4 border-background hidden sm:block">
                <img
                  src={toolsImage}
                  alt="Barber tools"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-2 mb-6 tracking-wide">
              CRAFTING STYLE SINCE 2009
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Classic Cut was founded with a simple mission: to provide
                every gentleman with an exceptional grooming experience that
                combines traditional barbering techniques with modern style.
              </p>
              <p>
                Our team of skilled barbers brings decades of combined
                experience to every cut. We believe that a great haircut is more
                than just a service—it's an experience that leaves you looking
                and feeling your best.
              </p>
              <p>
                From classic cuts to contemporary fades, hot towel shaves to
                beard sculpting, we take pride in our craft and treat every
                client like family.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
