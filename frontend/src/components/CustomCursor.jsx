import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
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
        }}
      />
    </>
  );
}