import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  LockKeyhole,
  Server,
  Cloud,
  CheckCircle2,
  Database,
  Layers3,
  RefreshCw,
  Zap,
  Eye,
  Fingerprint,
  Activity,
  Globe2,
} from "lucide-react";

import "./TrustedTechnology.css";

const trustAreas = [
  {
    icon: ShieldCheck,
    title: "Security First",
    text: "Build digital experiences with security considered from architecture to deployment.",
  },
  {
    icon: Server,
    title: "Reliable Infrastructure",
    text: "Create dependable technology foundations designed for stable and consistent performance.",
  },
  {
    icon: Cloud,
    title: "Cloud Ready",
    text: "Use modern cloud approaches that support flexibility, accessibility and business growth.",
  },
  {
    icon: Database,
    title: "Data Protection",
    text: "Design solutions with responsible data handling, access control and protection in mind.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    text: "Build technology foundations that can evolve as users, workloads and business needs grow.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    text: "Monitor, optimize and improve digital systems to maintain long-term value.",
  },
];

const technologyPrinciples = [
  {
    icon: LockKeyhole,
    title: "Secure by Design",
    text: "Security is considered throughout the technology lifecycle rather than added as an afterthought.",
  },
  {
    icon: Activity,
    title: "Reliable Performance",
    text: "Solutions are structured around stability, maintainability and dependable user experiences.",
  },
  {
    icon: Zap,
    title: "Built for Scale",
    text: "Technology should be ready to adapt when your business requirements change.",
  },
  {
    icon: Eye,
    title: "Transparent Approach",
    text: "Clear technology decisions help businesses understand how their digital ecosystem works.",
  },
];

const technologyStack = [
  "Web Platforms",
  "Mobile Applications",
  "Cloud Solutions",
  "APIs & Integrations",
  "Data Systems",
  "Digital Security",
];

export default function TrustedTechnology() {
  return (
    <main className="trusted-tech-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="trusted-tech-hero">

        <div className="trusted-tech-grid" />

        <div className="trusted-tech-glow trusted-glow-one" />
        <div className="trusted-tech-glow trusted-glow-two" />

        <div className="trusted-tech-container trusted-tech-hero-grid">

          <motion.div
            className="trusted-tech-hero-content"
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="trusted-tech-eyebrow">
              TRUSTED TECHNOLOGY
            </span>

            <h1>
              Technology You
              <span> Can Trust.</span>
            </h1>

            <p>
              Deliver secure, reliable and future-ready digital
              experiences built to support your business today and
              adapt to tomorrow's opportunities.
            </p>

            <div className="trusted-tech-buttons">

              <a
                href="/contact"
                className="trusted-tech-primary-btn"
              >
                Build With Us
                <ArrowRight size={18} />
              </a>

              <a
                href="/services"
                className="trusted-tech-secondary-btn"
              >
                Explore Technology
              </a>

            </div>

            <div className="trusted-tech-trust-row">

              <span>
                <CheckCircle2 size={17} />
                Secure
              </span>

              <span>
                <CheckCircle2 size={17} />
                Reliable
              </span>

              <span>
                <CheckCircle2 size={17} />
                Scalable
              </span>

            </div>

          </motion.div>


          {/* =================================================
              HERO TECHNOLOGY VISUAL
          ================================================= */}

          <motion.div
            className="trusted-tech-visual"
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
          >

            <div className="trusted-tech-orbit orbit-one" />
            <div className="trusted-tech-orbit orbit-two" />
            <div className="trusted-tech-orbit orbit-three" />


            <motion.div
              className="trusted-tech-shield"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <div className="trusted-shield-ring">

                <ShieldCheck size={58} />

              </div>

              <span>
                TRUSTED
              </span>

            </motion.div>


            <motion.div
              className="trusted-tech-status status-one"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <span className="status-dot" />

              <div>
                <strong>System Secure</strong>
                <small>Protection Active</small>
              </div>

            </motion.div>


            <motion.div
              className="trusted-tech-status status-two"
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <Activity size={18} />

              <div>
                <strong>Performance</strong>
                <small>Optimized</small>
              </div>

            </motion.div>


            <div className="trusted-tech-network">

              <div className="network-node node-top">
                <Cloud size={20} />
              </div>

              <div className="network-node node-left">
                <Database size={20} />
              </div>

              <div className="network-node node-right">
                <Globe2 size={20} />
              </div>

              <div className="network-node node-bottom">
                <Server size={20} />
              </div>

              <div className="network-lines">
                <span />
                <span />
                <span />
                <span />
              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="trusted-tech-intro">

        <div className="trusted-tech-container trusted-tech-intro-grid">

          <motion.div
            className="trusted-tech-intro-visual"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="security-dashboard">

              <div className="security-dashboard-top">

                <div>
                  <span>TECHNOLOGY HEALTH</span>
                  <strong>Digital Environment</strong>
                </div>

                <div className="security-check">
                  <ShieldCheck size={20} />
                </div>

              </div>


              <div className="security-score">

                <div className="security-score-circle">

                  <div>
                    <strong>98</strong>
                    <span>%</span>
                  </div>

                </div>

                <div>
                  <span>OVERALL STATUS</span>
                  <strong>Healthy & Secure</strong>
                </div>

              </div>


              <div className="security-metrics">

                <div>
                  <span>Security</span>
                  <strong>Protected</strong>
                  <i />
                </div>

                <div>
                  <span>Performance</span>
                  <strong>Optimized</strong>
                  <i />
                </div>

                <div>
                  <span>Scalability</span>
                  <strong>Ready</strong>
                  <i />
                </div>

              </div>

            </div>

          </motion.div>


          <motion.div
            className="trusted-tech-intro-content"
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
            }}
          >

            <span className="trusted-tech-small-title">
              TECHNOLOGY WITH CONFIDENCE
            </span>

            <h2>
              Digital Solutions
              <span> Built To Last.</span>
            </h2>

            <p>
              Technology becomes valuable when people can depend on
              it. From websites and applications to connected
              digital systems, reliability and security should be
              part of the foundation.
            </p>

            <p>
              Our approach focuses on creating digital solutions
              that are practical, maintainable and prepared for
              continuous growth.
            </p>

            <div className="trusted-tech-check-list">

              <span>
                <CheckCircle2 size={18} />
                Reliable digital foundations
              </span>

              <span>
                <CheckCircle2 size={18} />
                Scalable technology architecture
              </span>

              <span>
                <CheckCircle2 size={18} />
                Security-conscious development
              </span>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          TRUST AREAS
      ===================================================== */}

      <section className="trusted-tech-areas">

        <div className="trusted-tech-container">

          <div className="trusted-tech-heading">

            <span className="trusted-tech-small-title">
              OUR TECHNOLOGY PROMISE
            </span>

            <h2>
              Built Around
              <span> Trust.</span>
            </h2>

            <p>
              Strong technology combines security, reliability,
              scalability and continuous improvement.
            </p>

          </div>


          <div className="trusted-tech-areas-grid">

            {trustAreas.map((area, index) => {

              const Icon = area.icon;

              return (
                <motion.article
                  className="trusted-tech-area"
                  key={area.title}
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
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                >

                  <div className="trusted-tech-area-top">

                    <div className="trusted-tech-area-icon">
                      <Icon size={24} />
                    </div>

                    <span>
                      0{index + 1}
                    </span>

                  </div>

                  <h3>
                    {area.title}
                  </h3>

                  <p>
                    {area.text}
                  </p>

                  <ArrowRight
                    size={19}
                    className="trusted-tech-area-arrow"
                  />

                </motion.article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section className="trusted-tech-principles">

        <div className="trusted-tech-container trusted-tech-principles-grid">

          <div className="trusted-tech-principles-content">

            <span className="trusted-tech-small-title">
              HOW WE THINK
            </span>

            <h2>
              Trust Is Built
              <span> Into The Process.</span>
            </h2>

            <p>
              Every technology decision can influence security,
              performance, usability and long-term business value.
            </p>

          </div>


          <div className="trusted-tech-principles-list">

            {technologyPrinciples.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  className="trusted-tech-principle"
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >

                  <div className="trusted-tech-principle-icon">
                    <Icon size={21} />
                  </div>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>

                </motion.div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY ECOSYSTEM
      ===================================================== */}

      <section className="trusted-tech-ecosystem">

        <div className="trusted-tech-container">

          <div className="trusted-tech-ecosystem-box">

            <div className="trusted-tech-ecosystem-heading">

              <span>
                DIGITAL ECOSYSTEM
              </span>

              <h2>
                Technology That
                <strong> Connects.</strong>
              </h2>

              <p>
                Build connected digital experiences across the
                platforms and systems your business depends on.
              </p>

            </div>


            <div className="trusted-tech-stack">

              {technologyStack.map((item, index) => (

                <motion.div
                  key={item}
                  className="trusted-tech-stack-item"
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >

                  <CheckCircle2 size={18} />

                  <span>
                    {item}
                  </span>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECURITY FLOW
      ===================================================== */}

      <section className="trusted-tech-flow">

        <div className="trusted-tech-container">

          <div className="trusted-tech-heading">

            <span className="trusted-tech-small-title">
              BUILT FOR THE LONG TERM
            </span>

            <h2>
              From Foundation
              <span> To Future.</span>
            </h2>

          </div>


          <div className="trusted-tech-flow-grid">

            <div className="trusted-tech-flow-card">

              <div className="flow-number">
                01
              </div>

              <LockKeyhole size={25} />

              <h3>
                Protect
              </h3>

              <p>
                Establish a technology foundation with security
                and responsible access in mind.
              </p>

            </div>


            <div className="flow-connector">
              <ArrowRight size={20} />
            </div>


            <div className="trusted-tech-flow-card">

              <div className="flow-number">
                02
              </div>

              <Server size={25} />

              <h3>
                Perform
              </h3>

              <p>
                Build reliable systems that deliver consistent
                digital experiences.
              </p>

            </div>


            <div className="flow-connector">
              <ArrowRight size={20} />
            </div>


            <div className="trusted-tech-flow-card">

              <div className="flow-number">
                03
              </div>

              <TrendingIcon />

              <h3>
                Scale
              </h3>

              <p>
                Prepare your technology ecosystem to evolve with
                your business.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="trusted-tech-cta">

        <div className="trusted-tech-container">

          <motion.div
            className="trusted-tech-cta-box"
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
            }}
          >

            <div>

              <span>
                BUILD WITH CONFIDENCE
              </span>

              <h2>
                Technology That
                <br />
                <strong>Moves You Forward.</strong>
              </h2>

              <p>
                Let's create secure, reliable and scalable digital
                solutions designed around your business.
              </p>

            </div>


            <a
              href="/contact"
              className="trusted-tech-cta-button"
            >
              Start a Conversation
              <ArrowRight size={19} />
            </a>

          </motion.div>

        </div>

      </section>

    </main>
  );
}


/* Small inline icon used by the Scale card */
function TrendingIcon() {
  return (
    <TrendingUpIcon />
  );
}

function TrendingUpIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </svg>
  );
}