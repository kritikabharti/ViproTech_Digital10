import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CareerHero from "../components/career/CareerHero";
import Benefits from "../components/career/Benefits";
import HiringProcess from "../components/career/HiringProcess";
import JobCards from "../components/career/JobCards";
import InternshipSection from "../components/career/InternshipSection";
import FAQ from "../components/career/FAQ";
import CareerCTA from "../components/career/CareerCTA";

export default function Careers() {
  return (
    <>
      <Navbar />

      <CareerHero />

      <Benefits />

      <HiringProcess />

      <InternshipSection />

      <FAQ />

      <CareerCTA />

      <Footer />
    </>
  );
}