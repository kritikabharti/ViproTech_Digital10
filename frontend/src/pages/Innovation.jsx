import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  BrainCircuit,
  Workflow,
  Sparkles,
  Bot,
  Layers3,
  Rocket,
  Search,
  FlaskConical,
  Code2,
  Zap,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";

import "./Innovation.css";

const innovationAreas = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    text: "Explore intelligent digital solutions that can support automation, analysis and smarter business workflows.",
  },
  {
    icon: Workflow,
    title: "Smart Automation",
    text: "Transform repetitive processes into efficient digital workflows that save time and improve productivity.",
  },
  {
    icon: Code2,
    title: "Modern Applications",
    text: "Build modern web and mobile applications designed around real business and user requirements.",
  },
  {
    icon: Layers3,
    title: "Digital Products",
    text: "Turn ideas into practical digital products with a clear focus on usability, scalability and value.",
  },
  {
    icon: Bot,
    title: "Intelligent Solutions",
    text: "Combine technology and creative thinking to solve business challenges in smarter ways.",
  },
  {
    icon: Rocket,
    title: "Emerging Technology",
    text: "Explore evolving technologies and identify opportunities where they can create meaningful business value.",
  },
];

const innovationProcess = [
  {
    number: "01",
    title: "Explore",
    text: "Understand the idea, challenge, audience and opportunity.",
  },
  {
    number: "02",
    title: "Research",
    text: "Evaluate technologies, possibilities and practical approaches.",
  },
  {
    number: "03",
    title: "Prototype",
    text: "Turn concepts into early digital experiences that can be tested and refined.",
  },
  {
    number: "04",
    title: "Build",
    text: "Develop a practical, scalable and user-focused technology solution.",
  },
  {
    number: "05",
    title: "Improve",
    text: "Continuously refine the solution based on feedback, data and changing needs.",
  },
];

const principles = [
  {
    icon: Sparkles,
    title: "Creative Thinking",
    text: "Look beyond conventional approaches to discover new possibilities.",
  },
  {
    icon: Search,
    title: "Curious by Design",
    text: "Explore technologies and ideas with a practical business perspective.",
  },
  {
    icon: FlaskConical,
    title: "Experiment & Learn",
    text: "Test concepts, learn from results and improve through iteration.",
  },
  {
    icon: Zap,
    title: "Practical Innovation",
    text: "Focus innovation on solutions that can create meaningful value.",
  },
];

export default function Innovation() {
  return (
    <main className="innovation-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="innovation-hero">

        <div className="innovation-orb innovation-orb-one" />
        <div className="innovation-orb innovation-orb-two" />
        <div className="innovation-grid-pattern" />

        <div className="innovation-container innovation-hero-grid">

          <motion.div
            className="innovation-hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

          
            <h1>
              Ideas Into
              <span> Possibilities.</span>
              <br />
              Possibilities Into Impact.
            </h1>

            <p>
              We transform ideas into practical and innovative
              technology solutions that help businesses solve
              challenges, improve experiences and explore new
              opportunities.
            </p>

            <div className="innovation-hero-buttons">

              <a
                href="/contact"
                className="innovation-primary-btn"
              >
                Start an Idea
                <ArrowRight size={18} />
              </a>

              <a
                href="/services"
                className="innovation-secondary-btn"
              >
                Explore Technology
              </a>

            </div>

            <div className="innovation-trust-row">

              <span>
                <CheckCircle2 size={17} />
                Creative Thinking
              </span>

              <span>
                <CheckCircle2 size={17} />
                Modern Technology
              </span>

              <span>
                <CheckCircle2 size={17} />
                Practical Solutions
              </span>

            </div>

          </motion.div>


          {/* =================================================
              INNOVATION VISUAL
          ================================================= */}

          <motion.div
            className="innovation-visual"
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

            <div className="innovation-visual-ring ring-one" />
            <div className="innovation-visual-ring ring-two" />

            <motion.div
              className="innovation-lightbulb"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Lightbulb size={58} />
            </motion.div>

            <div className="innovation-core">

              <span className="innovation-core-small">
                IDEA
              </span>

              <strong>
                INNOVATE
              </strong>

              <span className="innovation-core-line" />

              <span className="innovation-core-small">
                CREATE • TEST • IMPROVE
              </span>

            </div>


            <motion.div
              className="innovation-floating-card innovation-card-one"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <BrainCircuit size={21} />

              <div>
                <strong>Intelligent</strong>
                <span>Technology</span>
              </div>
            </motion.div>


            <motion.div
              className="innovation-floating-card innovation-card-two"
              animate={{
                y: [0, 9, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Rocket size={21} />

              <div>
                <strong>Future</strong>
                <span>Possibilities</span>
              </div>
            </motion.div>


            <motion.div
              className="innovation-floating-card innovation-card-three"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <RefreshCw size={19} />

              <div>
                <strong>Continuous</strong>
                <span>Improvement</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="innovation-intro">

        <div className="innovation-container innovation-intro-grid">

          <motion.div
            className="innovation-intro-number"
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
            <span>01</span>

            <div>IDEA</div>
            <div>TECHNOLOGY</div>
            <div>IMPACT</div>
          </motion.div>


          <motion.div
            className="innovation-intro-content"
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

            <span className="innovation-small-title">
              OUR INNOVATION MINDSET
            </span>

            <h2>
              Innovation Starts With
              <span> Better Questions.</span>
            </h2>

            <p>
              Innovation is more than adopting the latest technology.
              It is about understanding a challenge, exploring
              possibilities and creating a solution that makes a
              meaningful difference.
            </p>

            <p>
              At VProTech Digital, we combine creative thinking,
              technology and practical implementation to turn ideas
              into digital experiences and business solutions.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          INNOVATION AREAS
      ===================================================== */}

      <section className="innovation-areas">

        <div className="innovation-container">

          <div className="innovation-section-heading">

            <span className="innovation-small-title">
              WHERE WE INNOVATE
            </span>

            <h2>
              Technology That Opens
              <span> New Possibilities.</span>
            </h2>

            <p>
              We explore technology from a practical perspective,
              focusing on where it can improve products, processes
              and digital experiences.
            </p>

          </div>


          <div className="innovation-areas-grid">

            {innovationAreas.map((area, index) => {

              const Icon = area.icon;

              return (
                <motion.article
                  className="innovation-area"
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

                  <div className="innovation-area-top">

                    <div className="innovation-area-icon">
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

      <section className="innovation-process">

        <div className="innovation-container">

          <div className="innovation-section-heading">

            <span className="innovation-small-title">
              OUR PROCESS
            </span>

            <h2>
              From Thought
              <span> To Technology.</span>
            </h2>

            <p>
              A structured innovation process helps us move from an
              initial idea to a practical solution.
            </p>

          </div>


          <div className="innovation-process-track">

            {innovationProcess.map((step, index) => (

              <motion.div
                className="innovation-process-step"
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

                <div className="innovation-step-number">
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

      <section className="innovation-principles">

        <div className="innovation-container innovation-principles-grid">

          <div className="innovation-principles-heading">

            <span className="innovation-small-title">
              OUR PRINCIPLES
            </span>

            <h2>
              Innovation With
              <span> Purpose.</span>
            </h2>

            <p>
              Great ideas become valuable when they solve real
              problems and create experiences people can use.
            </p>

          </div>


          <div className="innovation-principles-list">

            {principles.map((principle, index) => {

              const Icon = principle.icon;

              return (
                <motion.div
                  className="innovation-principle"
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

                  <div className="innovation-principle-icon">
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
          IDEA FLOW
      ===================================================== */}

      <section className="innovation-flow">

        <div className="innovation-container">

          <div className="innovation-flow-box">

            <div className="innovation-flow-heading">

              <span>
                THE INNOVATION FLOW
              </span>

              <h2>
                Think.
                <strong> Explore.</strong>
                Build.
              </h2>

            </div>


            <div className="innovation-flow-steps">

              <div>
                <span>01</span>
                <strong>Think</strong>
              </div>

             

              <div>
                <span>02</span>
                <strong>Explore</strong>
              </div>

          

              <div>
                <span>03</span>
                <strong>Prototype</strong>
              </div>

             

              <div>
                <span>04</span>
                <strong>Build</strong>
              </div>

       

              <div className="innovation-flow-result">
              
                <strong>Impact</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="innovation-cta">

        <div className="innovation-container">

          <motion.div
            className="innovation-cta-box"
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
                HAVE AN IDEA?
              </span>

              <h2>
                Let's Turn Your
                <br />
                <strong>Idea Into Reality.</strong>
              </h2>

              <p>
                Bring us your challenge, concept or idea and let's
                explore what technology can make possible.
              </p>

            </div>


            <a
              href="/contact"
              className="innovation-cta-button"
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