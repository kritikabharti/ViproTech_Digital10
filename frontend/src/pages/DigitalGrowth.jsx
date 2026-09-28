import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Globe,
  Smartphone,
  Megaphone,
  Workflow,
  TrendingUp,
  Search,
  Users,
  Target,
  Zap,
  CheckCircle2,
} from "lucide-react";

import "./DigitalGrowth.css";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    text: "Modern, responsive websites designed to strengthen your digital presence and support business growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "User-focused mobile experiences that keep your customers connected with your business.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    text: "Performance-focused digital marketing that helps your brand reach and engage the right audience.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    text: "Smart digital workflows that reduce repetitive tasks and improve operational efficiency.",
  },
  {
    icon: Search,
    title: "SEO & Visibility",
    text: "Search-focused strategies designed to improve online visibility and discoverability.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Optimization",
    text: "Use meaningful digital insights to understand performance and continuously improve.",
  },
];

const growthStages = [
  {
    number: "01",
    title: "Discover",
    text: "Understand your business, audience, challenges and digital goals.",
  },
  {
    number: "02",
    title: "Build",
    text: "Create the right digital products and experiences around your requirements.",
  },
  {
    number: "03",
    title: "Optimize",
    text: "Improve performance, usability and engagement using continuous refinement.",
  },
  {
    number: "04",
    title: "Scale",
    text: "Prepare your digital ecosystem to support future business growth.",
  },
];

const outcomes = [
  {
    icon: Globe,
    title: "Better Visibility",
    text: "Make your business easier to discover across digital channels.",
  },
  {
    icon: Users,
    title: "Stronger Engagement",
    text: "Create digital experiences that encourage meaningful customer interactions.",
  },
  {
    icon: Zap,
    title: "Improved Efficiency",
    text: "Use technology and automation to streamline important business processes.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    text: "Build digital solutions that can evolve alongside your business.",
  },
];

export default function DigitalGrowth() {
  return (
    <main className="digital-growth-page">

      {/* HERO */}
      <section className="dg-hero">
        <div className="dg-hero-orb dg-orb-one" />
        <div className="dg-hero-orb dg-orb-two" />

        <div className="dg-container dg-hero-grid">

          <motion.div
            className="dg-hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="dg-eyebrow">
              DIGITAL GROWTH
            </span>

            <h1>
              Grow Smarter.
              <span> Scale Faster.</span>
              <br />
              Go Digital.
            </h1>

            <p>
              We build scalable digital solutions that help businesses
              strengthen their online presence, connect with customers
              and turn digital opportunities into measurable growth.
            </p>

            <div className="dg-hero-buttons">
              <a href="/services" className="dg-primary-btn">
                Explore Our Solutions
                <ArrowRight size={18} />
              </a>

              <a href="/contact" className="dg-secondary-btn">
                Talk to Our Team
              </a>
            </div>

            <div className="dg-trust-row">
              <span>
                <CheckCircle2 size={17} />
                Business Focused
              </span>

              <span>
                <CheckCircle2 size={17} />
                Scalable Solutions
              </span>

              <span>
                <CheckCircle2 size={17} />
                Future Ready
              </span>
            </div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            className="dg-dashboard-wrap"
            initial={{ opacity: 0, scale: 0.85, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="dg-dashboard">

              <div className="dg-dashboard-top">
                <div>
                  <span>Digital Growth</span>
                  <strong>Business Overview</strong>
                </div>

                <div className="dg-growth-badge">
                  <TrendingUp size={15} />
                  Growth
                </div>
              </div>

              <div className="dg-growth-number">
                <strong>Digital</strong>
                <span>Momentum</span>
              </div>

              <div className="dg-chart">
                <span className="dg-chart-line" />
                <span className="dg-chart-point p1" />
                <span className="dg-chart-point p2" />
                <span className="dg-chart-point p3" />
                <span className="dg-chart-point p4" />
                <span className="dg-chart-point p5" />
              </div>

              <div className="dg-dashboard-bottom">
                <div>
                  <Globe size={18} />
                  <span>Web</span>
                </div>

                <div>
                  <Smartphone size={18} />
                  <span>Apps</span>
                </div>

                <div>
                  <Megaphone size={18} />
                  <span>Marketing</span>
                </div>
              </div>
            </div>

            <motion.div
              className="dg-floating-card dg-floating-one"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <BarChart3 size={20} />
              <div>
                <strong>Performance</strong>
                <span>Optimization</span>
              </div>
            </motion.div>

            <motion.div
              className="dg-floating-card dg-floating-two"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Target size={20} />
              <div>
                <strong>Strategy</strong>
                <span>Driven Growth</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="dg-intro">
        <div className="dg-container dg-intro-grid">

          <motion.div
            className="dg-section-number"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span>01</span>
            <div>BUSINESS</div>
            <div>DIGITAL</div>
            <div>GROWTH</div>
          </motion.div>

          <motion.div
            className="dg-intro-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="dg-small-title">
              DIGITAL GROWTH
            </span>

            <h2>
              Digital Growth That Moves
              <span> Your Business Forward.</span>
            </h2>

            <p>
              Digital growth isn't simply about being online. It's
              about creating digital experiences that attract the right
              audience, improve customer engagement and support your
              business goals.
            </p>

            <p>
              At VProTech Digital, we combine technology, design and
              digital strategy to create solutions that are practical,
              scalable and built around your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="dg-services">
        <div className="dg-container">

          <div className="dg-section-heading">
            <span className="dg-small-title">
              OUR CAPABILITIES
            </span>

            <h2>
              Everything You Need to
              <span> Grow Digitally.</span>
            </h2>

            <p>
              From your first digital touchpoint to advanced growth
              systems, we create technology that supports your goals.
            </p>
          </div>

          <div className="dg-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  className="dg-service-item"
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  whileHover={{ y: -6 }}
                >
                  <div className="dg-service-icon">
                    <Icon size={24} />
                  </div>

                  <span className="dg-service-number">
                    0{index + 1}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <ArrowRight className="dg-service-arrow" size={19} />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="dg-framework">
        <div className="dg-container">

          <div className="dg-section-heading">
            <span className="dg-small-title">
              OUR APPROACH
            </span>

            <h2>
              From Digital Presence
              <span> to Business Growth.</span>
            </h2>
          </div>

          <div className="dg-framework-line">
            {growthStages.map((stage, index) => (
              <motion.div
                className="dg-stage"
                key={stage.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
              >
                <div className="dg-stage-number">
                  {stage.number}
                </div>

                <div className="dg-stage-line" />

                <h3>{stage.title}</h3>

                <p>{stage.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="dg-outcomes">
        <div className="dg-container dg-outcomes-grid">

          <div className="dg-outcomes-heading">
            <span className="dg-small-title">
              WHY DIGITAL GROWTH
            </span>

            <h2>
              Your Digital Presence
              <span> Should Do More.</span>
            </h2>

            <p>
              A successful digital presence should attract, engage,
              convert and grow with your business.
            </p>
          </div>

          <div className="dg-outcomes-list">
            {outcomes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="dg-outcome"
                  key={item.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <div className="dg-outcome-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* TECHNOLOGY + STRATEGY */}
      <section className="dg-equation">
        <div className="dg-container">

          <div className="dg-section-heading">
            <span className="dg-small-title">
              TECHNOLOGY + STRATEGY
            </span>

            <h2>
              Technology Alone Isn't Enough.
            </h2>
          </div>

          <div className="dg-equation-box">

            <div className="dg-equation-side">
              <span>01</span>
              <h3>Technology</h3>
              <p>
                Websites • Apps • Automation • Digital Platforms
              </p>
            </div>

            <div className="dg-equation-symbol">+</div>

            <div className="dg-equation-side">
              <span>02</span>
              <h3>Strategy</h3>
              <p>
                Marketing • UX • Analytics • Growth
              </p>
            </div>

            <div className="dg-equation-symbol">=</div>

            <div className="dg-equation-result">
              <TrendingUp size={30} />
              <h3>Digital Growth</h3>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dg-cta">
        <div className="dg-container">

          <motion.div
            className="dg-cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span>READY TO GROW?</span>

              <h2>
                Ready to Grow
                <br />
                <strong>Digitally?</strong>
              </h2>

              <p>
                Let's turn your business goals into a digital
                experience designed for growth.
              </p>
            </div>

            <a href="/contact" className="dg-cta-button">
              Start a Project
              <ArrowRight size={19} />
            </a>
          </motion.div>

        </div>
      </section>

    </main>
  );
}