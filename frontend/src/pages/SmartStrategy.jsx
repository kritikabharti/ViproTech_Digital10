import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  BarChart3,
  Compass,
  BrainCircuit,
  Layers3,
  Workflow,
  TrendingUp,
  CheckCircle2,
  Route,
  Gauge,
  Lightbulb,
  ShieldCheck,
  LineChart,
} from "lucide-react";

import "./SmartStrategy.css";

const strategyAreas = [
  {
    icon: Target,
    title: "Business Goals",
    text: "Translate business objectives into clear digital priorities and actionable technology plans.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    text: "Use meaningful data and measurable indicators to support better digital decision-making.",
  },
  {
    icon: Compass,
    title: "Digital Direction",
    text: "Create a practical technology roadmap aligned with your current needs and future ambitions.",
  },
  {
    icon: BrainCircuit,
    title: "Technology Planning",
    text: "Identify the right technologies and approaches for building sustainable digital solutions.",
  },
  {
    icon: Workflow,
    title: "Process Optimization",
    text: "Improve workflows and identify opportunities for smarter, more efficient operations.",
  },
  {
    icon: Layers3,
    title: "Scalable Solutions",
    text: "Design digital foundations that can adapt as your business, customers and requirements evolve.",
  },
];

const strategyProcess = [
  {
    number: "01",
    title: "Understand",
    text: "Study your goals, challenges, audience and current digital environment.",
  },
  {
    number: "02",
    title: "Analyze",
    text: "Identify opportunities, gaps, priorities and areas for improvement.",
  },
  {
    number: "03",
    title: "Plan",
    text: "Develop a focused roadmap connecting technology with business objectives.",
  },
  {
    number: "04",
    title: "Execute",
    text: "Turn the strategy into practical digital initiatives and solutions.",
  },
  {
    number: "05",
    title: "Measure",
    text: "Track progress and continuously improve based on meaningful results.",
  },
];

const strategyPrinciples = [
  {
    icon: Target,
    title: "Outcome Focused",
    text: "Every digital initiative should have a clear purpose and measurable objective.",
  },
  {
    icon: Gauge,
    title: "Practical Planning",
    text: "Build realistic strategies that can move from planning into execution.",
  },
  {
    icon: TrendingUp,
    title: "Designed for Growth",
    text: "Think beyond immediate requirements and prepare technology for future scale.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Technology",
    text: "Balance innovation, usability, reliability and long-term digital value.",
  },
];

export default function SmartStrategy() {
  return (
    <main className="smart-strategy-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="smart-strategy-hero">

        <div className="smart-strategy-grid-pattern" />

        <div className="smart-strategy-orb strategy-orb-one" />
        <div className="smart-strategy-orb strategy-orb-two" />

        <div className="smart-strategy-container smart-strategy-hero-grid">

          <motion.div
            className="smart-strategy-hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

     

            <h1>
              Turn Digital
              <span> Ambition</span>
              <br />
              Into Direction.
            </h1>

            <p>
              Create technology strategies focused on measurable
              business results, smarter decisions and sustainable
              digital growth.
            </p>

            <div className="smart-strategy-buttons">

              <a
                href="/contact"
                className="smart-strategy-primary-btn"
              >
                Build Your Strategy
                <ArrowRight size={18} />
              </a>

              <a
                href="/services"
                className="smart-strategy-secondary-btn"
              >
                Explore Our Services
              </a>

            </div>

            <div className="smart-strategy-trust-row">

              <span>
                <CheckCircle2 size={17} />
                Business Focused
              </span>

              <span>
                <CheckCircle2 size={17} />
                Data Informed
              </span>

              <span>
                <CheckCircle2 size={17} />
                Future Ready
              </span>

            </div>

          </motion.div>


          {/* =================================================
              STRATEGY VISUAL
          ================================================= */}

          <motion.div
            className="smart-strategy-visual"
            initial={{
              opacity: 0,
              scale: 0.85,
              x: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
          >

            <div className="strategy-ring strategy-ring-one" />
            <div className="strategy-ring strategy-ring-two" />

            <motion.div
              className="strategy-target"
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Target size={55} />
            </motion.div>


            <div className="strategy-dashboard">

              <div className="strategy-dashboard-header">
                <span>STRATEGY</span>

                <div className="strategy-status">
                  <span />
                  ON TRACK
                </div>
              </div>

              <div className="strategy-dashboard-title">
                Digital Growth
              </div>

              <div className="strategy-chart">

                <div className="strategy-chart-grid">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <svg
                  viewBox="0 0 360 130"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="strategyGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop
                        offset="0%"
                        stopColor="#1769aa"
                      />

                      <stop
                        offset="100%"
                        stopColor="#16b894"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M5 112 C45 105 48 92 82 96 C115 100 120 75 155 78 C185 80 190 55 220 61 C250 68 268 39 295 43 C320 47 335 22 355 15"
                    fill="none"
                    stroke="url(#strategyGradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M5 112 C45 105 48 92 82 96 C115 100 120 75 155 78 C185 80 190 55 220 61 C250 68 268 39 295 43 C320 47 335 22 355 15 L355 130 L5 130 Z"
                    fill="url(#strategyGradient)"
                    opacity="0.08"
                  />
                </svg>

              </div>

              <div className="strategy-dashboard-metrics">

                <div>
                  <span>FOCUS</span>
                  <strong>Growth</strong>
                </div>

                <div>
                  <span>APPROACH</span>
                  <strong>Data</strong>
                </div>

                <div>
                  <span>VISION</span>
                  <strong>Scale</strong>
                </div>

              </div>

            </div>


            <motion.div
              className="strategy-floating-card strategy-card-one"
              animate={{
                y: [0, -9, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <Compass size={21} />

              <div>
                <strong>Clear Direction</strong>
                <span>Strategic Roadmap</span>
              </div>

            </motion.div>


            <motion.div
              className="strategy-floating-card strategy-card-two"
              animate={{
                y: [0, 9, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <LineChart size={21} />

              <div>
                <strong>Measurable</strong>
                <span>Business Results</span>
              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="smart-strategy-intro">

        <div className="smart-strategy-container smart-strategy-intro-grid">

          <motion.div
            className="smart-strategy-intro-visual"
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

            <div className="strategy-route-card">

              <div className="strategy-route-top">
                <span>YOUR DIGITAL JOURNEY</span>
                <Route size={18} />
              </div>

              <div className="strategy-route-line">

                <div className="route-point route-active">
                  <span>01</span>
                  <strong>Goal</strong>
                </div>

                <div className="route-line" />

                <div className="route-point">
                  <span>02</span>
                  <strong>Plan</strong>
                </div>

                <div className="route-line" />

                <div className="route-point">
                  <span>03</span>
                  <strong>Build</strong>
                </div>

                <div className="route-line" />

                <div className="route-point route-future">
                  <span>04</span>
                  <strong>Scale</strong>
                </div>

              </div>

            </div>

          </motion.div>


          <motion.div
            className="smart-strategy-intro-content"
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

            <span className="smart-strategy-small-title">
              STRATEGY WITH PURPOSE
            </span>

            <h2>
              Technology Works Better
              <span> With Direction.</span>
            </h2>

            <p>
              Digital transformation is not simply about adding
              technology. It is about knowing what to build, why it
              matters and how it contributes to your business goals.
            </p>

            <p>
              We help connect business objectives with digital
              opportunities, creating practical strategies that
              provide clarity from the first idea through execution
              and future growth.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          STRATEGY AREAS
      ===================================================== */}

      <section className="smart-strategy-areas">

        <div className="smart-strategy-container">

          <div className="smart-strategy-section-heading">

            <span className="smart-strategy-small-title">
              STRATEGIC FOCUS
            </span>

            <h2>
              A Smarter Approach To
              <span> Digital Decisions.</span>
            </h2>

            <p>
              Build a clear connection between your business
              priorities and the technology required to support them.
            </p>

          </div>


          <div className="smart-strategy-areas-grid">

            {strategyAreas.map((area, index) => {

              const Icon = area.icon;

              return (
                <motion.article
                  className="smart-strategy-area"
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
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                >

                  <div className="smart-strategy-area-top">

                    <div className="smart-strategy-area-icon">
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


                </motion.article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="smart-strategy-process">

        <div className="smart-strategy-container">

          <div className="smart-strategy-section-heading">

            <span className="smart-strategy-small-title">
              OUR STRATEGIC PROCESS
            </span>

            <h2>
              From Business Goals
              <span> To Measurable Action.</span>
            </h2>

            <p>
              A structured approach keeps digital initiatives
              connected to real business priorities.
            </p>

          </div>


          <div className="smart-strategy-process-track">

            {strategyProcess.map((step, index) => (

              <motion.div
                className="smart-strategy-process-step"
                key={step.number}
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
                  delay: index * 0.1,
                }}
              >

                <div className="smart-strategy-step-number">
                  {step.number}
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section className="smart-strategy-principles">

        <div className="smart-strategy-container smart-strategy-principles-grid">

          <div className="smart-strategy-principles-heading">

            <span className="smart-strategy-small-title">
              WHAT GUIDES US
            </span>

            <h2>
              Strategy Built For
              <span> Real Progress.</span>
            </h2>

            <p>
              Good strategy provides clarity, creates priorities and
              gives teams a practical path forward.
            </p>

          </div>


          <div className="smart-strategy-principles-list">

            {strategyPrinciples.map((principle, index) => {

              const Icon = principle.icon;

              return (
                <motion.div
                  className="smart-strategy-principle"
                  key={principle.title}
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

                  <div className="smart-strategy-principle-icon">
                    <Icon size={21} />
                  </div>

                  <div>

                    <h3>
                      {principle.title}
                    </h3>

                    <p>
                      {principle.text}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          STRATEGY FRAMEWORK
      ===================================================== */}

      <section className="smart-strategy-framework">

        <div className="smart-strategy-container">

          <div className="strategy-framework-box">

            <div className="strategy-framework-heading">

              <span>
                THE SMART STRATEGY FRAMEWORK
              </span>

              <h2>
                Align.
                <strong> Prioritize.</strong>
                Execute.
              </h2>

            </div>


            <div className="strategy-framework-flow">

              <div className="framework-item">

                <div className="framework-icon">
                  <Target size={21} />
                </div>

                <strong>Align</strong>

                <span>
                  Business Goals
                </span>

              </div>


              <ArrowRight size={21} />


              <div className="framework-item">

                <div className="framework-icon">
                  <Compass size={21} />
                </div>

                <strong>Prioritize</strong>

                <span>
                  Digital Opportunities
                </span>

              </div>


              <ArrowRight size={21} />


              <div className="framework-item">

                <div className="framework-icon">
                  <Workflow size={21} />
                </div>

                <strong>Execute</strong>

                <span>
                  Practical Solutions
                </span>

              </div>


              <ArrowRight size={21} />


              <div className="framework-result">

                <BarChart3 size={22} />

                <strong>Measure</strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="smart-strategy-cta">

        <div className="smart-strategy-container">

          <motion.div
            className="smart-strategy-cta-box"
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
                READY TO MOVE FORWARD?
              </span>

              <h2>
                Give Your Digital
                <br />
                <strong>Vision A Direction.</strong>
              </h2>

              <p>
                Let's turn your business goals into a focused digital
                strategy built around practical action and measurable
                progress.
              </p>

            </div>


            <a
              href="/contact"
              className="smart-strategy-cta-button"
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