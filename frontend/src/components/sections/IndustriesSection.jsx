import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  Building2,
  Factory,
  BriefcaseBusiness,
  Rocket,
  Landmark,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

import "./IndustriesSection.css";

const industries = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "Digital platforms, learning solutions and websites for educational organizations.",
    expandedTitle: "Digital Solutions for Education",
    expandedText:
      "We help educational organizations create modern digital experiences that make learning, communication and administration easier. From institutional websites to learning platforms, our solutions are designed around accessibility, usability and growth.",
    solutions: [
      "Educational Websites",
      "Learning Management Systems",
      "Student Portals",
      "Online Course Platforms",
      "Admission & Enquiry Systems",
      "Institute Management Solutions",
    ],
  },

  {
    icon: ShoppingCart,
    title: "E-Commerce",
    text: "Modern online stores and digital experiences designed for growing businesses.",
    expandedTitle: "Digital Solutions for E-Commerce",
    expandedText:
      "We build e-commerce experiences that help businesses present their products, manage customers and create smooth online shopping journeys across devices.",
    solutions: [
      "E-Commerce Websites",
      "Product Catalogues",
      "Shopping Cart Systems",
      "Payment Integration",
      "Order Management",
      "Customer Accounts",
    ],
  },

  {
    icon: HeartPulse,
    title: "Healthcare",
    text: "User-friendly digital solutions for healthcare and wellness services.",
    expandedTitle: "Digital Solutions for Healthcare",
    expandedText:
      "We create user-friendly digital platforms for healthcare and wellness organizations, helping patients and service providers interact through simple and accessible digital experiences.",
    solutions: [
      "Healthcare Websites",
      "Appointment Systems",
      "Patient Portals",
      "Doctor Profiles",
      "Online Enquiry Systems",
      "Wellness Platforms",
    ],
  },

  {
    icon: Building2,
    title: "Real Estate",
    text: "Property websites, digital platforms and technology solutions for real estate.",
    expandedTitle: "Digital Solutions for Real Estate",
    expandedText:
      "We help real estate businesses showcase properties, generate enquiries and provide potential customers with a smooth digital property discovery experience.",
    solutions: [
      "Real Estate Websites",
      "Property Listings",
      "Property Search",
      "Lead Generation",
      "Agent Profiles",
      "Enquiry Management",
    ],
  },

  {
    icon: Factory,
    title: "Manufacturing",
    text: "Technology solutions that help manufacturing businesses improve their digital presence.",
    expandedTitle: "Digital Solutions for Manufacturing",
    expandedText:
      "We develop digital solutions that help manufacturing businesses communicate their capabilities, showcase products and improve their overall digital presence.",
    solutions: [
      "Corporate Websites",
      "Product Catalogues",
      "Business Portals",
      "Enquiry Systems",
      "Digital Branding",
      "Business Applications",
    ],
  },

  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    text: "Professional websites and applications that help service businesses connect with customers.",
    expandedTitle: "Digital Solutions for Professional Services",
    expandedText:
      "We create professional digital experiences that help service-based businesses communicate their expertise, showcase their services and connect with customers.",
    solutions: [
      "Business Websites",
      "Service Platforms",
      "Customer Portals",
      "Booking Systems",
      "Lead Generation",
      "Business Applications",
    ],
  },

  {
    icon: Rocket,
    title: "Startups",
    text: "Flexible digital products that help startups turn ideas into working solutions.",
    expandedTitle: "Digital Solutions for Startups",
    expandedText:
      "We work with startups to transform ideas into practical digital products. Solutions can be developed with flexibility and scalability in mind as the business evolves.",
    solutions: [
      "MVP Development",
      "Startup Websites",
      "Mobile Applications",
      "SaaS Platforms",
      "UI/UX Design",
      "Product Development",
    ],
  },

  {
    icon: Landmark,
    title: "Finance",
    text: "Modern digital experiences for financial and business service organizations.",
    expandedTitle: "Digital Solutions for Finance",
    expandedText:
      "We build modern digital experiences for financial and business service organizations with a focus on usability, clear communication and reliable digital workflows.",
    solutions: [
      "Financial Websites",
      "Business Portals",
      "Customer Dashboards",
      "Lead Generation",
      "Information Platforms",
      "Business Applications",
    ],
  },
];

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(null);

  const handleToggle = (index) => {
    setActiveIndustry((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="industries-section">

      <div className="industries-container">

        {/* HEADER */}
        <motion.div
          className="industries-header"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="industries-label">
            <Sparkles size={15} />
            <span>INDUSTRIES WE SERVE</span>
          </div>

          <h2>
            Technology That
            <span> Fits Your Industry.</span>
          </h2>

          <p>
            We create digital experiences and technology solutions
            for businesses across different industries and stages
            of growth.
          </p>

        </motion.div>


        {/* VERTICAL INDUSTRY LIST */}

        <div className="industries-list">

          {industries.map((industry, index) => {

            const Icon = industry.icon;
            const isActive = activeIndustry === index;

            return (
              <motion.div
                key={industry.title}
                className={`industry-wrapper ${
                  isActive ? "industry-wrapper-active" : ""
                }`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >

                {/* MAIN VERTICAL CARD */}

                <div className="industry-card">

                  <div className="industry-number">
                    0{index + 1}
                  </div>

                  <div className="industry-icon">
                    <Icon size={25} />
                  </div>

                  <div className="industry-content">

                    <h3>
                      {industry.title}
                    </h3>

                    <p>
                      {industry.text}
                    </p>

                  </div>

                  <button
                    type="button"
                    className={`industry-arrow ${
                      isActive
                        ? "industry-arrow-active"
                        : ""
                    }`}
                    onClick={() => handleToggle(index)}
                    aria-label={`View ${industry.title} details`}
                    aria-expanded={isActive}
                  >
                    <ArrowUpRight size={20} />
                  </button>

                </div>


                {/* EXPANDED CONTENT */}

                <AnimatePresence initial={false}>

                  {isActive && (

                    <motion.div
                      className="industry-expanded"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                    >

                      <div className="industry-expanded-inner">

                        {/* LEFT CONTENT */}

                        <div className="industry-expanded-text">

                          <span className="industry-small-label">
                            {industry.title.toUpperCase()}
                          </span>

                          <h4>
                            {industry.expandedTitle}
                          </h4>

                          <p>
                            {industry.expandedText}
                          </p>

                        </div>


                        {/* RIGHT SOLUTIONS */}

                        <div className="industry-solutions">

                          <span className="solutions-heading">
                            What We Can Build
                          </span>

                          <div className="solutions-list">

                            {industry.solutions.map(
                              (solution) => (
                                <div
                                  className="solution-item"
                                  key={solution}
                                >

                                  <span className="solution-check">
                                    <Check size={14} />
                                  </span>

                                  <span>
                                    {solution}
                                  </span>

                                </div>
                              )
                            )}

                          </div>

                        </div>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}