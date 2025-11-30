# Barbershop Website Design Guidelines

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern service business websites like premium salon/barbershop sites (Fellow Barber, Blind Barber) and Squarespace salon templates. Focus: Building trust through visual storytelling, showcasing craftsmanship, and creating an approachable yet professional aesthetic.

## Core Design Principles
1. **Visual-First Storytelling** - Photography drives credibility and emotional connection
2. **Masculine Refinement** - Balance ruggedness with polish, tradition with modernity
3. **Effortless Navigation** - Clear path to booking, minimal friction

## Typography
- **Primary Font**: Inter or DM Sans (Google Fonts) - clean, modern sans-serif for UI
- **Accent Font**: Bebas Neue or Oswald (Google Fonts) - bold, impactful for headlines
- **Hierarchy**:
  - Hero Headlines: text-5xl to text-7xl, font-bold (accent font)
  - Section Headers: text-3xl to text-4xl, font-bold
  - Body Text: text-base to text-lg, leading-relaxed
  - Buttons/CTAs: text-sm to text-base, font-semibold, uppercase tracking

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 (mobile: py-12)
- Component gaps: gap-8 to gap-12
- Container max-width: max-w-7xl with px-4 to px-8

## Page Structure

### Hero Section (Full viewport ~90vh)
- Full-width background image: High-quality photo of barbershop interior or satisfied customer
- Centered overlay content with blurred background card (backdrop-blur-md, bg-white/10)
- Business name in large accent font
- Tagline below in primary font
- Primary CTA button: "Book Your Cut" with blurred background
- Trust indicator below CTA: "★★★★★ 500+ Happy Clients"

### About Section (Multi-column on desktop)
- 2-column layout: Left side with owner/team photo, right side with story text
- Include: Years in business, philosophy, team size
- Secondary photo: Shop interior or team action shot

### Services Section
- 3-column grid (desktop), single column (mobile)
- Each service card: Icon from Heroicons, service name, description, price, duration
- Services: Classic Cut, Fade, Beard Trim, Hot Towel Shave, Kids Cut, etc.
- Hover effect: Subtle lift (translate-y-[-4px])

### Gallery Section
- Masonry/Grid layout: 3-4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- 8-12 high-quality images: Before/after cuts, shop atmosphere, detail shots
- Lightbox interaction on click (use shadcn/ui Dialog)

### Testimonials Section
- 3-column testimonial cards (desktop), carousel on mobile
- Each card: Customer name, star rating, photo (placeholder avatar), quote
- Include 6-9 testimonials for credibility

### Location & Hours Section (2-column)
- Left: Embedded Google Maps (iframe, rounded corners)
- Right: Address, phone (clickable tel: link), business hours in clean list, social media icons (Instagram, Facebook)

### Booking Section
- Full-width with subtle background treatment
- Centered form with max-w-2xl
- Form fields: Name, Phone, Email, Date Picker, Time Selector, Service Dropdown, Additional Notes
- Use shadcn/ui form components for consistency
- Large, prominent "Confirm Booking" button
- Success message animation after submission

### Footer
- 3-column layout: Business info (address, phone), Quick Links (Home, Services, About, Book Now), Social Media
- Newsletter signup: "Stay updated with grooming tips" with email input
- Copyright and privacy policy links

## Component Library

**Navigation**
- Sticky header with logo left, nav links center, "Book Now" CTA right
- Mobile: Hamburger menu with slide-in drawer
- Transparent on hero, solid background on scroll

**Buttons**
- Primary: Solid with hover scale effect (scale-105)
- Secondary: Outline style
- All buttons: Rounded (rounded-lg), padding (px-6 py-3)

**Cards**
- Service cards: White background, subtle shadow, rounded-xl, border
- Testimonial cards: Centered text, rounded-full avatar, quote marks

**Form Inputs**
- shadcn/ui Input, Select, Textarea components
- Label above input, helper text below
- Focus ring for accessibility

## Images

**Required Images**:
1. **Hero Image**: Large format (1920x1080+) - Barbershop interior with chairs, mirrors, warm lighting, or close-up of fresh haircut
2. **About Section**: Owner portrait or team photo (800x600+)
3. **Gallery**: 8-12 images showcasing haircuts, beard trims, shop atmosphere, styling products, barber at work
4. **Testimonial Avatars**: Customer photos or placeholder avatars

**Image Treatment**: All images use rounded corners (rounded-lg to rounded-xl), subtle shadow, optimized with Next.js Image component

## Admin Dashboard
- Simple table view with shadcn/ui Table component
- Columns: Customer Name, Phone, Date, Time, Service, Status
- Filter by date range
- Basic authentication with Supabase Auth

## Animations (Framer Motion - Minimal)
- Hero elements fade in on load (stagger children)
- Section scroll reveal: Fade up on viewport entry
- Gallery images: Scale on hover
- Booking form: Success checkmark animation
- Keep animations subtle, performance-first

## Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation throughout
- Sufficient color contrast (test with WCAG AA)
- Form validation with clear error messages
- Skip to main content link