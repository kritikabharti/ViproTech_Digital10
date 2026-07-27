import React from 'react';
import './LogoSliderSection.css'; // ✅ Import the CSS

import logo1 from '../../assets/allenagroup.png';
import logo2 from '../../assets/CBL.png';
import logo3 from '../../assets/greenlotus.png';
import logo4 from '../../assets/gulmohar.png';
import logo5 from '../../assets/IBM.png';
import logo6 from '../../assets/Infotech.png';
import logo7 from '../../assets/JLPL-Logo-white-2023.png';
import logo8 from '../../assets/MGE.png';
import logo9 from '../../assets/PJ.png';
import logo10 from '../../assets/SEWlogo.png';
import logo11 from '../../assets/shiv&sons.png';
import logo12 from '../../assets/SK files&tools.png';
import logo13 from '../../assets/tech mahindra.png';
import logo14 from '../../assets/wiproapplying.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14];

export default function LogoSliderSection() {
  return (
    <section className="logo-section">
      <h2>Recruiters We Work With</h2>
      <div className="logo-slider">
        <div className="logo-track">
          {/* Double the logos for seamless looping */}
          {[...logos, ...logos].map((logo, index) => (
            <div className="logo-item" key={index}>
              <img 
                src={logo} 
                alt={`Logo ${index + 1}`} 
                loading="lazy" 
                width="150" 
                height="80" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}