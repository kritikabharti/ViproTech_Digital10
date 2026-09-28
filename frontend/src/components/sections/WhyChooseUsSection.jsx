import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Lightbulb,
  ShieldCheck,
  Rocket,
  Users,
  Headphones,
  Sparkles,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

import img1 from "../../assets/img11.jpg";

import "./WhyChooseUsSection.css";

const reasons = [
  {
    number: "01",
    icon: Code2,
    title: "Modern Technology",
    description:
      "We use modern development technologies and practical solutions to create fast, scalable and reliable digital products.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Creative Solutions",
    description:
      "Every project receives a thoughtful approach focused on solving real business problems through creative digital solutions.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Quality Focused",
    description:
      "From design to development, we focus on quality, usability, performance and a smooth user experience.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Built to Grow",
    description:
      "Our websites and applications are designed with scalability in mind so your digital presence can grow with your business.",
  },
  {
    number: "05",
    icon: Users,
    title: "Experienced Team",
    description:
      "Our team brings together design, development and digital expertise to work on projects from concept to delivery.",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "We stay connected after delivery to help with improvements, updates, maintenance and future digital requirements.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="why-section">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="why-bg-glow why-bg-glow-one"></div>
      <div className="why-bg-glow why-bg-glow-two"></div>

      <div className="why-grid-pattern"></div>

      <div className="why-bg-circle why-circle-one"></div>
      <div className="why-bg-circle why-circle-two"></div>
      <div className="why-bg-circle why-circle-three"></div>

      <div className="why-small-dot why-dot-one"></div>
      <div className="why-small-dot why-dot-two"></div>
      <div className="why-small-dot why-dot-three"></div>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="why-container">


        {/* ===================================================
            LEFT SIDE
        =================================================== */}

        <motion.div
          className="why-left"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          {/* LABEL */}

          <div className="why-label">
            <Sparkles size={15} />

            <span>
              WHY VPROTECH DIGITAL
            </span>
          </div>


          {/* MAIN HEADING */}

          <h2 className="why-main-title">

            Digital Solutions

            <br />

            <span>
              Built Around You.
            </span>

          </h2>


          {/* DESCRIPTION */}

          <p className="why-main-description">
            We combine technology, creativity and practical thinking
            to build digital experiences that help businesses move
            forward.
          </p>


          {/* =================================================
              VISUAL AREA
          ================================================= */}

          <div className="why-visual">


            {/* LARGE DECORATIVE RINGS */}

            <div className="why-ring why-ring-one"></div>

            <div className="why-ring why-ring-two"></div>

            <div className="why-ring why-ring-three"></div>


            {/* MAIN IMAGE */}

            <motion.div
              className="why-image"
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
            >

              <img
                src={img1}
                alt="VProTech Digital team"
              />

            </motion.div>


            {/* IMAGE OVERLAY */}

            <div className="why-image-overlay"></div>


            {/* TOP FLOATING ELEMENT */}

            <motion.div
              className="why-floating-box why-floating-top"
              initial={{
                opacity: 0,
                y: -20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
            >

              <div className="why-floating-icon">
                <BarChart3 size={19} />
              </div>

              <div className="why-floating-text">

                <strong>
                  Smart Solutions
                </strong>

                <span>
                  Designed to perform
                </span>

              </div>

            </motion.div>


            {/* BOTTOM FLOATING ELEMENT */}

            <motion.div
              className="why-floating-box why-floating-bottom"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
            >

              <div className="why-floating-icon">
                <Code2 size={19} />
              </div>

              <div className="why-floating-text">

                <strong>
                  Digital Products
                </strong>

                <span>
                  Built for real impact
                </span>

              </div>

              <ArrowUpRight
                className="why-floating-arrow"
                size={17}
              />

            </motion.div>


            {/* SMALL DECORATIVE ORB */}

            <motion.div
              className="why-orb"
              animate={{
                y: [0, -12, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span></span>
            </motion.div>


            {/* SMALL TEXT */}

            <div className="why-visual-text">
              <span>
                YOUR VISION
              </span>

              <strong>
                OUR TECHNOLOGY
              </strong>
            </div>

          </div>

        </motion.div>


        {/* ===================================================
            RIGHT SIDE
        =================================================== */}

        <div className="why-right">


          {/* RIGHT SIDE INTRO */}

          <motion.div
            className="why-right-intro"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <span>
              WHAT MAKES US DIFFERENT
            </span>

            <div className="why-intro-line"></div>

          </motion.div>


          {/* =================================================
              FEATURE LIST
          ================================================= */}

          <div className="why-features">

            {reasons.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  className="why-feature"
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >


                  {/* NUMBER */}

                  <div className="why-feature-number">
                    {item.number}
                  </div>


                  {/* ICON */}

                  <div className="why-feature-icon">
                    <Icon size={22} />
                  </div>


                  {/* CONTENT */}

                  <div className="why-feature-content">

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </div>


                


                  {/* BOTTOM LINE */}

                  <div className="why-feature-line"></div>

                </motion.div>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}