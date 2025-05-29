import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const birdCount = 12;
const radius = 80;
const duration = 1;

export default function Loader() {
  const [fly, setFly] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setFly((prev) => !prev),
      duration * 1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-100">
      <div className="relative">
        {Array.from({ length: birdCount }).map((_, i) => {
          const angle = (i / birdCount) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-black rounded-full"
              animate={
                fly
                  ? {
                      x: x * 2,
                      y: y * 2,
                      opacity: 0,
                    }
                  : {
                      rotate: 360,
                      x,
                      y,
                      opacity: 1,
                    }
              }
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          );
        })}
      </div>
    </div>
  );
}
