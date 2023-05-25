import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href={"/"}
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          scale: 1.1,
          backgroundColor: [
            "#121212",
            "#f50707",
            "#0713f5",
            "#7607f5",
            "#cc9304",
            "#c20404",
            "#121212",
          ],
          transition: { duration: 2, repeat: Infinity },
        }}
      >
        AH
      </MotionLink>
    </div>
  );
};

export default Logo;
