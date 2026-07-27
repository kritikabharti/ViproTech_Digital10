import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpeg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import sectionBg from '../../assets/imagee.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 1,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 1,
  }),
};

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section 
      className="sliding-gallery"
      style={{
        backgroundImage: `url(${sectionBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="gallery-overlay"></div>
      
      <div className="gallery-container">
        <motion.h2
          className="gallery-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Journey
        </motion.h2>

        <div className="slider-wrapper">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'tween', duration: 0.6, ease: 'easeInOut' },
                opacity: { duration: 0.4 },
              }}
              className="slide-container"
            >
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slide-image"
                loading="lazy"
                width="1200"
                height="600"
              />
              <div className="slide-counter">
                {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            className="slide-btn prev" 
            onClick={goToPrevious} 
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            className="slide-btn next" 
            onClick={goToNext} 
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>

          <div className="slider-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}