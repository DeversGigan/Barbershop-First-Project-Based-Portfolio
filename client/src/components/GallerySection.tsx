import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

import img1 from "@assets/generated_images/fresh_haircut_showcase_back.png";
import img2 from "@assets/generated_images/beard_grooming_showcase.png";
import img3 from "@assets/generated_images/barbershop_interior_detail.png";
import img4 from "@assets/generated_images/premium_styling_products.png";
import img5 from "@assets/generated_images/textured_haircut_detail.png";
import img6 from "@assets/generated_images/barber_tools_still_life.png";
import img7 from "@assets/generated_images/barbershop_waiting_area.png";
import img8 from "@assets/generated_images/barbershop_interior_hero_image.png";

const galleryImages = [
  { src: img1, alt: "Fresh haircut" },
  { src: img2, alt: "Beard grooming" },
  { src: img3, alt: "Barbershop interior" },
  { src: img4, alt: "Styling products" },
  { src: img5, alt: "Textured haircut" },
  { src: img6, alt: "Barber tools" },
  { src: img7, alt: "Waiting area" },
  { src: img8, alt: "Shop atmosphere" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-2 tracking-wide">
            GALLERY
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Take a look at our work and the atmosphere that makes The Classic
            Cut unique.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              data-testid="button-close-gallery"
            >
              <X className="h-5 w-5" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
