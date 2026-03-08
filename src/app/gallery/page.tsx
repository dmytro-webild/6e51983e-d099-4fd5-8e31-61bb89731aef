"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import Link from "next/link";
import { ImageIcon, Leaf } from "lucide-react";

export default function GalleryPage() {
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

      <div id="gallery" data-section="gallery">
        <BlogCardOne
          title="Before & After Gallery"
          description="See the beautiful transformations we've created for homeowners throughout Addison and surrounding areas."
          tag="Portfolio"
          tagIcon={ImageIcon}
          blogs={[
            {
              id: "1",
              category: "Lawn Mowing",
              title: "Residential Lawn Transformation",
              excerpt: "Complete lawn maintenance and mowing transformation creating a pristine, well-maintained yard.",
              imageSrc: "http://img.b2bpic.net/free-photo/back-view-young-woman-taking-care-plants_23-2148509882.jpg",
              imageAlt: "Lawn transformation project",
              authorName: "FB Landscaping",
              authorAvatar: "http://img.b2bpic.net/free-photo/senior-couple-harvesting-carrots_23-2148256714.jpg",
              date: "Featured Project",
            },
            {
              id: "2",
              category: "Landscaping",
              title: "Garden Design & Installation",
              excerpt: "Custom landscape design featuring new plantings, mulch beds, and professional finishing touches.",
              imageSrc: "http://img.b2bpic.net/free-photo/fresh-potted-flower-plants-growing-garden_23-2147948343.jpg",
              imageAlt: "Garden design project",
              authorName: "FB Landscaping",
              authorAvatar: "http://img.b2bpic.net/free-photo/senior-couple-harvesting-carrots_23-2148256714.jpg",
              date: "Featured Project",
            },
            {
              id: "3",
              category: "Yard Cleanup",
              title: "Spring Yard Cleanup & Refresh",
              excerpt: "Seasonal yard cleanup with debris removal, edging, and landscape bed preparation.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-people-greenhouse_23-2149098326.jpg",
              imageAlt: "Yard cleanup project",
              authorName: "FB Landscaping",
              authorAvatar: "http://img.b2bpic.net/free-photo/senior-couple-harvesting-carrots_23-2148256714.jpg",
              date: "Featured Project",
            },
            {
              id: "4",
              category: "Landscaping",
              title: "Premium Landscape Renovation",
              excerpt: "Full yard renovation with professional landscaping design and quality plantings.",
              imageSrc: "http://img.b2bpic.net/free-psd/botanical-garden-template-design_23-2150323310.jpg",
              imageAlt: "Landscape renovation",
              authorName: "FB Landscaping",
              authorAvatar: "http://img.b2bpic.net/free-photo/senior-couple-harvesting-carrots_23-2148256714.jpg",
              date: "Featured Project",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
          ariaLabel="Gallery section showcasing landscaping projects"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyThree
          title="Explore Our Services"
          description="Each project showcases our commitment to quality and attention to detail. Discover the range of landscaping services we offer."
          tag="Services"
          tagIcon={Leaf}
          features={[
            {
              id: "1",
              title: "Lawn Mowing",
              tags: ["Regular Service", "Professional"],
              imageSrc: "http://img.b2bpic.net/free-photo/senior-mows-grass-yard-with-lawn-mower_1157-29769.jpg",
              imageAlt: "Professional lawn mowing",
            },
            {
              id: "2",
              title: "Landscaping Design",
              tags: ["Creative", "Custom"],
              imageSrc: "http://img.b2bpic.net/free-psd/botanical-garden-template-design_23-2150323310.jpg",
              imageAlt: "Beautiful landscape design",
            },
            {
              id: "3",
              title: "Yard Cleanup",
              tags: ["Seasonal", "Thorough"],
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-strong-man-gloves-cutting-leaves-his-garden-farmer-spending-summer-morning-working-garden-near-countryside-house_176420-19902.jpg",
              imageAlt: "Complete yard cleanup",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Request Service", href: "/#contact" }]}
          ariaLabel="Services section featuring landscaping offerings"
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