"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import MediaAbout from "@/components/sections/about/MediaAbout";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Leaf, CheckCircle, Star, Sparkles, ImageIcon, Phone } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="FB LANDSCAPING"
          description="Professional lawn care, landscaping, and yard maintenance from a trusted local expert serving Addison and surrounding Illinois communities."
          buttons={[
            {
              text: "Call Now (312) 823-8720",
              href: "tel:(312)823-8720",
            },
            {
              text: "Get Free Quote",
              href: "#contact",
            },
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/garden-with-wooden-bench-plants_250224-84.jpg",
              imageAlt: "Professional landscaping transformation",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/senior-mows-grass-yard-with-lawn-mower_1157-29769.jpg?_wi=1",
              imageAlt: "Expert lawn mowing service",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-psd/botanical-garden-template-design_23-2150323310.jpg?_wi=1",
              imageAlt: "Beautiful landscape design",
            },
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
          ariaLabel="Hero section with landscaping services showcase"
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
              imageSrc: "http://img.b2bpic.net/free-photo/senior-mows-grass-yard-with-lawn-mower_1157-29769.jpg?_wi=2",
              imageAlt: "Professional lawn mowing",
            },
            {
              id: "2",
              title: "Lawn Maintenance",
              tags: ["Trimming", "Edging"],
              imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-male-worker-using-leaf-blower-city-park-fall-back-view-strong-man-wearing_7502-10305.jpg?_wi=1",
              imageAlt: "Expert lawn maintenance",
            },
            {
              id: "3",
              title: "Landscaping Design",
              tags: ["Creative", "Custom"],
              imageSrc: "http://img.b2bpic.net/free-psd/botanical-garden-template-design_23-2150323310.jpg?_wi=2",
              imageAlt: "Beautiful landscape design",
            },
            {
              id: "4",
              title: "Yard Cleanup",
              tags: ["Seasonal", "Thorough"],
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-strong-man-gloves-cutting-leaves-his-garden-farmer-spending-summer-morning-working-garden-near-countryside-house_176420-19902.jpg?_wi=1",
              imageAlt: "Complete yard cleanup",
            },
            {
              id: "5",
              title: "Seasonal Services",
              tags: ["Spring", "Fall"],
              imageSrc: "http://img.b2bpic.net/free-photo/inside-greenhouse_23-2147685399.jpg?_wi=1",
              imageAlt: "Seasonal landscaping updates",
            },
            {
              id: "6",
              title: "Mulching & Garden Beds",
              tags: ["Aesthetic", "Protective"],
              imageSrc: "http://img.b2bpic.net/free-psd/botanical-garden-template-design_23-2150323310.jpg?_wi=3",
              imageAlt: "Professional mulching service",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            {
              text: "Request Service",
              href: "#contact",
            },
          ]}
          ariaLabel="Services section featuring landscaping offerings"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Why Choose FB Landscaping?"
          description="With years of experience serving Addison and surrounding communities, Fernando brings expertise, reliability, and attention to detail to every project. We're committed to transforming outdoor spaces into beautiful, well-maintained landscapes that exceed expectations."
          tag="About Us"
          tagIcon={CheckCircle}
          imageSrc="http://img.b2bpic.net/free-photo/senior-couple-harvesting-carrots_23-2148256714.jpg?_wi=1"
          imageAlt="FB Landscaping team at work"
          buttons={[
            {
              text: "Learn More",
              href: "/about",
            },
            {
              text: "Contact Us",
              href: "#contact",
            },
          ]}
          useInvertedBackground={false}
          ariaLabel="About section featuring landscaping expertise"
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
              imageSrc: "http://img.b2bpic.net/free-photo/confident-middle-aged-businesswoman-looking-camera_74855-4120.jpg?_wi=1",
              imageAlt: "Sarah Johnson testimonial",
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Owner",
              company: "Elmhurst, IL",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-business-woman_23-2148603029.jpg?_wi=1",
              imageAlt: "Michael Chen testimonial",
            },
            {
              id: "3",
              name: "Jennifer Martinez",
              role: "Property Manager",
              company: "Bensenville, IL",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg?_wi=1",
              imageAlt: "Jennifer Martinez testimonial",
            },
            {
              id: "4",
              name: "David Williams",
              role: "Homeowner",
              company: "Villa Park, IL",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-successful-confident-young-woman-start-career-look-determined-get-job-waiting-interview-lean-glass-wall-business-center-smiling-looking-away-satisfied_197531-30572.jpg?_wi=1",
              imageAlt: "David Williams testimonial",
            },
          ]}
          kpiItems={[
            {
              value: "500+",
              label: "Satisfied Customers",
            },
            {
              value: "⭐ 5.0",
              label: "Google Rating",
            },
            {
              value: "10+ Years",
              label: "Local Experience",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Customer testimonials section"
        />
      </div>

      <div id="process" data-section="process">
        <FeatureCardTwentyThree
          title="Our Simple Process"
          description="Getting started with FB Landscaping is easy. Follow these three simple steps to transform your outdoor space."
          tag="How It Works"
          tagIcon={Sparkles}
          features={[
            {
              id: "1",
              title: "Request a Free Quote",
              tags: ["Call", "Form"],
              imageSrc: "http://img.b2bpic.net/free-psd/botanical-garden-template-design_23-2150323310.jpg?_wi=4",
              imageAlt: "Request consultation",
            },
            {
              id: "2",
              title: "Schedule Your Service",
              tags: ["Flexible", "Convenient"],
              imageSrc: "http://img.b2bpic.net/free-photo/senior-mows-grass-yard-with-lawn-mower_1157-29769.jpg?_wi=3",
              imageAlt: "Schedule landscaping service",
            },
            {
              id: "3",
              title: "Enjoy Your Beautiful Yard",
              tags: ["Satisfaction", "Guaranteed"],
              imageSrc: "http://img.b2bpic.net/free-photo/back-view-young-woman-taking-care-plants_23-2148509882.jpg?_wi=1",
              imageAlt: "Beautiful landscaping results",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            {
              text: "Get Started Today",
              href: "#contact",
            },
          ]}
          ariaLabel="Process section explaining landscaping workflow"
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
              imageSrc: "http://img.b2bpic.net/free-photo/back-view-young-woman-taking-care-plants_23-2148509882.jpg?_wi=2",
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
              imageSrc: "http://img.b2bpic.net/free-photo/fresh-potted-flower-plants-growing-garden_23-2147948343.jpg?_wi=1",
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
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-people-greenhouse_23-2149098326.jpg?_wi=1",
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
              imageSrc: "http://img.b2bpic.net/free-psd/botanical-garden-template-design_23-2150323310.jpg?_wi=5",
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

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Phone}
          title="Ready for a Beautiful Yard?"
          description="Contact FB Landscaping today for a free estimate. Call us or fill out the form below and we'll get back to you within 24 hours."
          imageSrc="http://img.b2bpic.net/free-photo/house-with-fence-around-it-with-clear-sky_181624-3120.jpg?_wi=1"
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

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Lawn Mowing",
                  href: "#services",
                },
                {
                  label: "Lawn Maintenance",
                  href: "#services",
                },
                {
                  label: "Landscaping Design",
                  href: "#services",
                },
                {
                  label: "Yard Cleanup",
                  href: "#services",
                },
                {
                  label: "Seasonal Services",
                  href: "#services",
                },
              ],
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "/about",
                },
                {
                  label: "Gallery",
                  href: "#gallery",
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