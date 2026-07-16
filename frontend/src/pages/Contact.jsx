import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";

export default function Contact() {
  return (
    <>
      <Navbar />

      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
{/* 
      <Footer /> */}
    </>
  );
}