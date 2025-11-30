import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleBookClick = () => {
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookClick={handleBookClick} />
      <main>
        <HeroSection onBookClick={handleBookClick} />
        <AboutSection />
        <ServicesSection onBookClick={handleBookClick} />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection onBookClick={handleBookClick} />
      </main>
      <Footer />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
}
