"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import MediaAbout from "@/components/sections/about/MediaAbout";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Leaf, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Services", id: "/services" },
    { name: "About", id: "#about" },
    { name: "Gallery", id: "#gallery" },
    { name: "Contact", id: "#contact" },
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

      <div id="services-detail" data-section="services-detail">
        <FeatureCardTwentyThree
          title="Comprehensive Landscaping Services"
          description="We offer a full range of professional landscaping services designed to transform and maintain your outdoor space. Each service is performed with meticulous attention to detail and a commitment to excellence."
          tag="Services"
          tagIcon={Leaf}
          features={[
            {
              id: "1",
              title: "Lawn Mowing & Grass Cutting",
              tags: ["Weekly", "Bi-weekly", "Monthly"],
              imageSrc: "http://img.b2bpic.net/free-photo/senior-mows-grass-yard-with-lawn-mower_1157-29769.jpg?_wi=4",
              imageAlt: "Professional lawn mowing",
            },
            {
              id: "2",
              title: "Lawn Maintenance & Trimming",
              tags: ["Edge Trimming", "Weed Control"],
              imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-male-worker-using-leaf-blower-city-park-fall-back-view-strong-man-wearing_7502-10305.jpg?_wi=2",
              imageAlt: "Lawn maintenance and trimming",
            },
            {
              id: "3",
              title: "Professional Landscaping Design",
              tags: ["Custom Design", "Installation"],
              imageSrc: "http://img.b2bpic.net/free-psd/botanical-garden-template-design_23-2150323310.jpg?_wi=6",
              imageAlt: "Landscape design services",
            },
            {
              id: "4",
              title: "Yard Cleanup & Debris Removal",
              tags: ["Spring", "Fall", "Year-round"],
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-strong-man-gloves-cutting-leaves-his-garden-farmer-spending-summer-morning-working-garden-near-countryside-house_176420-19902.jpg?_wi=2",
              imageAlt: "Yard cleanup services",
            },
            {
              id: "5",
              title: "Seasonal Landscaping Services",
              tags: ["Spring Planting", "Fall Preparation"],
              imageSrc: "http://img.b2bpic.net/free-photo/inside-greenhouse_23-2147685399.jpg?_wi=2",
              imageAlt: "Seasonal landscaping",
            },
            {
              id: "6",
              title: "Mulching & Garden Bed Preparation",
              tags: ["Fresh Mulch", "Bed Design"],
              imageSrc: "http://img.b2bpic.net/free-psd/botanical-garden-template-design_23-2150323310.jpg?_wi=7",
              imageAlt: "Garden bed preparation",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            {
              text: "Request a Free Estimate",
              href: "#contact",
            },
          ]}
          ariaLabel="Detailed services section"
        />
      </div>

      <div id="service-commitment" data-section="service-commitment">
        <MediaAbout
          title="Our Service Commitment"
          description="Every project, large or small, receives the same level of professionalism and care. We use quality equipment, employ proven techniques, and deliver results that enhance your property value and curb appeal. Your satisfaction is our priority."
          tag="Our Promise"
          tagIcon={CheckCircle}
          imageSrc="http://img.b2bpic.net/free-photo/senior-couple-harvesting-carrots_23-2148256714.jpg?_wi=2"
          imageAlt="Professional landscaping team"
          buttons={[
            {
              text: "View Gallery",
              href: "#gallery",
            },
            {
              text: "Get Free Quote",
              href: "#contact",
            },
          ]}
          useInvertedBackground={false}
          ariaLabel="Service commitment section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Phone}
          title="Schedule Your Service Today"
          description="Contact FB Landscaping for a free estimate on any of our services. We'll assess your property and provide a detailed quote tailored to your needs."
          imageSrc="http://img.b2bpic.net/free-photo/house-with-fence-around-it-with-clear-sky_181624-3120.jpg?_wi=2"
          imageAlt="Addison Illinois service area"
          mediaPosition="right"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          background={{
            variant: "radial-gradient",
          }}
          inputPlaceholder="Enter your email"
          buttonText="Request Quote"
          termsText="We respond to all service requests within 24 business hours."
          ariaLabel="Services contact section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Lawn Mowing",
                  href: "#services-detail",
                },
                {
                  label: "Lawn Maintenance",
                  href: "#services-detail",
                },
                {
                  label: "Landscaping Design",
                  href: "#services-detail",
                },
                {
                  label: "Yard Cleanup",
                  href: "#services-detail",
                },
                {
                  label: "Seasonal Services",
                  href: "#services-detail",
                },
              ],
            },
            {
              title: "Company",
              items: [
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "About Us",
                  href: "/about",
                },
                {
                  label: "Contact",
                  href: "#contact",
                },
                {
                  label: "Service Areas",
                  href: "#",
                },
              ],
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Call: (312) 823-8720",
                  href: "tel:(312)823-8720",
                },
                {
                  label: "Email: fernando@fblandscaping.com",
                  href: "mailto:info@fblandscaping.com",
                },
                {
                  label: "Addison, IL 60101",
                  href: "#",
                },
                {
                  label: "Open until 6:00 PM",
                  href: "#",
                },
              ],
            },
          ]}
          copyrightText="© 2025 FB Landscaping LLC. All rights reserved. | Serving Addison, Elmhurst, Bensenville, Lombard, Villa Park & surrounding Chicago suburbs."
          ariaLabel="Footer section"
        />
      </div>
    </ThemeProvider>
  );
}