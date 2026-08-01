import React from 'react';
import { motion } from 'framer-motion';
import custom from '../../assets/itand custom.jpg';
import expertiseBg from '../../assets/digital.jpg';
import digital from '../../assets/digi.jpg';
import fullstack from '../../assets/full.jpg';
import mechanical from '../../assets/design.jpg';
import internship from '../../assets/interior.jpg';

export default function ServicesSection({ servicesRef, navigate }) {
  const services = [
    { 
      title: "Web Development", 
      desc: "Custom web applications, E-commerce website development, Real estate websites, Hotel booking websites, Business management systems", 
      img: custom, 
      path: '/webdevelopment' 
    },
    { 
      title: "Android App Development", 
      desc: "Custom Android applications, Business apps, Mobile solutions for startups and enterprises.", 
      img: expertiseBg, 
      path: '/mobile-apps' 
    },
    { 
      title: "Digital Marketing", 
      desc: "Search Engine Optimization (SEO), Social Media Marketing (SMM), Google Ads, Online branding, Business promotion and lead generation.", 
      img: digital, 
      path: '/digital-marketing' 
    },
    { 
      title: "Logo Designing", 
      desc: "Custom logo creation, Brand identity design.", 
      img: fullstack, 
      path: '/logo-designing' 
    },
    { 
      title: "Website Design", 
      desc: "Responsive website design, UI/UX design, Business and portfolio websites, Corporate websites.", 
      img: mechanical, 
      path: '/website-design' 
    },
    { 
      title: "Interior Designing", 
      desc: "Residential and commercial interior design services.", 
      img: internship, 
      path: '/interior-designing' 
    }
  ];

  return (
    <section ref={servicesRef} className="services-section" style={{ background: '#ffffff' }}>
      <div className="services-overlay"></div>
      <div className="section-content">
        <motion.h5
          className="small-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ color: "#ebbb44" }}
        >
          WHAT WE OFFER
        </motion.h5>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
        <span style={{ color: "#FFFFFF" }}>Serv</span><span style={{ color: "#ebbb44" }}>ices</span>
        </motion.h2>

        <motion.p
          className="section-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Empowering businesses with innovative digital solutions 
        </motion.p>

        <div className="card-grid">
          {services.map((service, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 style={{ color: '#d5b156' }}>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
                <div className="flip-card-back" style={{ backgroundImage: `url(${service.img})` }}>
                  <button 
                    className="explore-btn-image"
                    onClick={() => navigate(service.path)}
                    aria-label={`Explore ${service.title}`}
                  >
                    Explore More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}