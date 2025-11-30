import { Scissors, MapPin, Phone, Mail } from "lucide-react";
import { SiInstagram, SiFacebook } from "react-icons/si";

// todo: remove mock functionality
const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  contact: {
    address: "123 Main Street, Downtown, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "info@theclassiccut.com",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="h-6 w-6 text-primary" />
              <span className="font-display text-xl tracking-wide">
                THE CLASSIC CUT
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Premium barbershop experience where tradition meets modern style.
              Expert barbers, classic cuts, and a welcoming atmosphere.
            </p>
            <div className="flex gap-3">
              <a
                href={footerLinks.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
              <a
                href={footerLinks.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="link-footer-facebook"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>{footerLinks.contact.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${footerLinks.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-phone"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {footerLinks.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-email"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {footerLinks.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} The Classic Cut. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
