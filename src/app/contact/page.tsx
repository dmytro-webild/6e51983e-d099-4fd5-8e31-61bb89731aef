"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Services", id: "/services" },
    { name: "About", id: "/about" },
    { name: "Gallery", id: "/gallery" },
    { name: "Contact", id: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Services",
      items: [
        { label: "Lawn Mowing", href: "#services" },
        { label: "Lawn Maintenance", href: "#services" },
        { label: "Landscaping Design", href: "#services" },
        { label: "Yard Cleanup", href: "#services" },
        { label: "Seasonal Services", href: "#services" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Gallery", href: "/gallery" },
        { label: "Contact", href: "/contact" },
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
          navItems={navItems.map((item) => ({
            name: item.name,
            id: item.id,
          }))}
          button={{
            text: "Call Now",
            href: "tel:(312)823-8720",
          }}
          className="z-50"
        />
      </div>

      <main className="min-h-screen">
        <div id="contact" data-section="contact" className="py-20">
          <ContactSplit
            tag="Get Started"
            tagIcon={Phone}
            title="Ready for a Beautiful Yard?"
            description="Contact FB Landscaping today for a free estimate. Call us or fill out the form below and we'll get back to you within 24 hours."
            imageSrc="http://img.b2bpic.net/free-photo/house-with-fence-around-it-with-clear-sky_181624-3120.jpg"
            imageAlt="Addison, Illinois location"
            mediaPosition="right"
            mediaAnimation="slide-up"
            useInvertedBackground={false}
            background={{
              variant: "radial-gradient",
            }}
            inputPlaceholder="Enter your email"
            buttonText="Request Quote"
            termsText="We respect your privacy and will respond within 24 business hours."
            ariaLabel="Contact form section"
          />
        </div>
      </main>

      <FooterBaseReveal
        columns={footerColumns}
        copyrightText="© 2025 FB Landscaping LLC. All rights reserved. | Serving Addison, Elmhurst, Bensenville, Lombard, Villa Park & surrounding Chicago suburbs."
        ariaLabel="Footer section"
      />
    </ThemeProvider>
  );
}