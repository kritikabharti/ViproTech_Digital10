import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import TestimonialButton from '../components/TestimonialButton';
// import '../components/Testimonial.css';

import CareerHero from "../components/career/CareerHero";
import Benefits from "../components/career/Benefits";
import HiringProcess from "../components/career/HiringProcess";
import JobCards from "../components/career/JobCards";
import InternshipSection from "../components/career/InternshipSection";
import FAQ from "../components/career/FAQ";
import CareerCTA from "../components/career/CareerCTA";

import Reviews from "../components/Reviews";
import "../components/Reviews.css";

export default function Careers() {
  return (
    <>
      <Navbar />

      <CareerHero />

      <Benefits />

      <HiringProcess />

      <InternshipSection />

  {/* Reviews Section - Added before Footer */}
      <section className="reviews-section-wrapper">
        <div className="container">
          <Reviews />
        </div>
      </section>
 
      <FAQ />

      <CareerCTA />



      {/* <Footer /> */}
    </>
  );
}