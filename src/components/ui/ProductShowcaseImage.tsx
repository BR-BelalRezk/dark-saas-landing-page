"use client";

import Image from "next/image";
import appScreen from "@/assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function ProductShowcaseImage() {
  const ref = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  return (
    <motion.figure
      className="flex items-center justify-center"
      style={{ opacity, rotateX, transformPerspective: "800px" }}
    >
      <Image
        ref={ref}
        src={appScreen}
        alt="The product screenshot"
        className="mt-14"
      />
    </motion.figure>
  );
}
