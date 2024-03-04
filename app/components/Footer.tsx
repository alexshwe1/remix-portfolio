import { useInView, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef);

  return (
    <footer className="bg-white">
      <div className="py-6 flex flex-col items-center">
        <div
          ref={footerRef}
          style={{
            opacity: isFooterInView ? 1 : 0,
            transition: "all 2s",
            whiteSpace: "pre-wrap"
          }}
          className="flex items-center font-semibold text-base"
        >
          Built with 🧡 in
          <motion.a 
            href="https://www.google.com/search?q=chicago+weather" 
            target="_blank"
            whileHover={{
              scale: 1.05,
              color: "#f97316"
            }}
          > 
            {" "}Chicago, IL
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
