import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || ('ontouchstart' in window);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't add mouse events on mobile
    if (isMobile) return;

    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isMobile]);

  // smooth trailing animation
  useEffect(() => {
    if (isMobile) return;

    const follow = () => {
      setTrail((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(follow);
    };

    follow();
  }, [position, isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        style={{
          width: 35,
          height: 35,
          border: "2px solid rgba(79, 70, 229, 0.5)",
          borderRadius: "50%",
          position: "fixed",
          left: trail.x - 17,
          top: trail.y - 17,
          pointerEvents: "none",
          zIndex: 999998,
          transition: "transform 0.05s linear",
        }}
      />

      {/* Inner Dot */}
      <div
        style={{
          width: 9,
          height: 9,
          background: "#4F46E5",
          borderRadius: "50%",
          position: "fixed",
          left: position.x - 4,
          top: position.y - 4,
          pointerEvents: "none",
          zIndex: 999999,
          boxShadow: "0 0 10px rgba(79,70,229,0.8)",
        }}
      />
    </>
  );
}