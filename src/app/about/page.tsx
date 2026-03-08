"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import { CheckCircle, Leaf, Star } from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Services",
      items: [
        { label: "Lawn Mowing", href: "/#services" },
        { label: "Lawn Maintenance", href: "/#services" },
        { label: "Landscaping Design", href: "/#services" },
        { label: "Yard Cleanup", href: "/#services" },
        { label: "Seasonal Services", href: "/#services" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Gallery", href: "/gallery" },
        { label: "Contact", href: "/#contact" },
        { label: "Service Areas", href: "#" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "Call: (312) 823-8720", href: "tel:(312)823-8720" },
        { label: "Email: fernando@fblandscaping.com", href: "mailto:info@fblandscaping.com" },
        { label: "Addison, IL 60101", href: "#" },
        { label: "Open until 6:00 PM", href: "#" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="largeSmallSizeMediumTitles"
      background="blurBottom"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="FB Landscaping"
          navItems={navItems}
          button={{
            text: "Call Now",
            href: "tel:(312)823-8720",
          }}
          className="z-50"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Why Choose FB Landscaping?"
          description="With years of experience serving Addison and surrounding communities, Fernando brings expertise, reliability, and attention to detail to every project. We're committed to transforming outdoor spaces into beautiful, well-maintained landscapes that exceed expectations."
          tag="About Us"
          tagIcon={CheckCircle}
          imageSrc="http://img.b2bpic.net/free-photo/senior-couple-harvesting-carrots_23-2148256714.jpg?_wi=3"
          imageAlt="FB Landscaping team at work"
          buttons={[
            { text: "Learn More", href: "/about" },
            { text: "Contact Us", href: "/#contact" },
          ]}
          useInvertedBackground={false}
          ariaLabel="About section featuring landscaping expertise"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyThree
          title="Our Services"
          description="Complete landscaping solutions tailored to keep your property beautiful year-round. From routine maintenance to full landscape transformations."
          tag="Services"
          tagIcon={Leaf}
          features={[
            {
              id: "1",
              title: "Lawn Mowing",
              tags: ["Regular Service", "Professional"],
              imageSrc: "http://img.b2bpic.net/free-photo/senior-mows-grass-yard-with-lawn-mower_1157-29769.jpg?_wi=5",
              imageAlt: "Professional lawn mowing",
            },
            {
              id: "2",
              title: "Lawn Maintenance",
              tags: ["Trimming", "Edging"],
              imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-male-worker-using-leaf-blower-city-park-fall-back-view-strong-man-wearing_7502-10305.jpg?_wi=3",
              imageAlt: "Expert lawn maintenance",
            },
            {
              id: "3",
              title: "Landscaping Design",
              tags: ["Creative", "Custom"],
              imageSrc: "http://img.b2bpic.net/free-psd/botanical-garden-template-design_23-2150323310.jpg?_wi=8",
              imageAlt: "Beautiful landscape design",
            },
            {
              id: "4",
              title: "Yard Cleanup",
              tags: ["Seasonal", "Thorough"],
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-strong-man-gloves-cutting-leaves-his-garden-farmer-spending-summer-morning-working-garden-near-countryside-house_176420-19902.jpg?_wi=3",
              imageAlt: "Complete yard cleanup",
            },
            {
              id: "5",
              title: "Seasonal Services",
              tags: ["Spring", "Fall"],
              imageSrc: "http://img.b2bpic.net/free-photo/inside-greenhouse_23-2147685399.jpg?_wi=3",
              imageAlt: "Seasonal landscaping updates",
            },
            {
              id: "6",
              title: "Mulching & Garden Beds",
              tags: ["Aesthetic", "Protective"],
              imageSrc: "http://img.b2bpic.net/free-psd/botanical-garden-template-design_23-2150323310.jpg?_wi=9",
              imageAlt: "Professional mulching service",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Request Service", href: "/#contact" }]}
          ariaLabel="Services section featuring landscaping offerings"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="What Our Clients Say"
          description="Real testimonials from satisfied homeowners in Addison and surrounding areas who've trusted us with their landscaping."
          tag="Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Homeowner",
              company: "Addison, IL",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-middle-aged-businesswoman-looking-camera_74855-4120.jpg?_wi=2",
              imageAlt: "Sarah Johnson testimonial",
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Owner",
              company: "Elmhurst, IL",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-business-woman_23-2148603029.jpg?_wi=2",
              imageAlt: "Michael Chen testimonial",
            },
            {
              id: "3",
              name: "Jennifer Martinez",
              role: "Property Manager",
              company: "Bensenville, IL",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg?_wi=2",
              imageAlt: "Jennifer Martinez testimonial",
            },
            {
              id: "4",
              name: "David Williams",
              role: "Homeowner",
              company: "Villa Park, IL",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-successful-confident-young-woman-start-career-look-determined-get-job-waiting-interview-lean-glass-wall-business-center-smiling-looking-away-satisfied_197531-30572.jpg?_wi=2",
              imageAlt: "David Williams testimonial",
            },
          ]}
          kpiItems={[
            { value: "500+", label: "Satisfied Customers" },
            { value: "⭐ 5.0", label: "Google Rating" },
            { value: "10+ Years", label: "Local Experience" },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Customer testimonials section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={footerColumns}
          copyrightText="© 2025 FB Landscaping LLC. All rights reserved. | Serving Addison, Elmhurst, Bensenville, Lombard, Villa Park & surrounding Chicago suburbs."
          ariaLabel="Footer section"
        />
      </div>
    </ThemeProvider>
  );
}