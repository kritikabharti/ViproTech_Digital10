import React, { useEffect, useRef, useState } from "react";
import "./AboutSection.css";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      /*
        The video starts small when the section enters
        the viewport and grows as the user scrolls.
      */

      const start = windowHeight;
      const end = windowHeight * 0.05;

      let calculatedProgress =
        (start - rect.top) / (start - end);

      calculatedProgress = Math.max(
        0,
        Math.min(1, calculatedProgress)
      );

      setProgress(calculatedProgress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
    Small → Full Screen

    Width:
    55% → 100%

    Height:
    45vh → 100vh

    Border radius:
    28px → 0px
  */

  const width = 55 + progress * 45;

  const height = 45 + progress * 55;

  const borderRadius = 28 - progress * 28;

  const scale = 0.92 + progress * 0.08;

  return (
    <section
      ref={sectionRef}
      className="video-scroll-section"
    >

      <div
        ref={videoWrapperRef}
        className="video-scroll-sticky"
      >

        <div
          className="video-scroll-container"
          style={{
            width: `${width}%`,
            height: `${height}vh`,
            borderRadius: `${borderRadius}px`,
            transform: `scale(${scale})`,
          }}
        >

          {/* 
            Replace this iframe with the direct MP4 URL
            if your AI Studio project provides one.
          */}

          <iframe
            className="promo-video"
            src="https://vprotech-digital-promotional-video.ai.studio"
            title="VProTech Digital Promotional Video"
            allow="autoplay; fullscreen"
            allowFullScreen
          />

          <div className="video-overlay" />

        </div>

      </div>

    </section>
  );
}