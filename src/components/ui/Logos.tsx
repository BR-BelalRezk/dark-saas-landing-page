"use client";

import { logos } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Logos() {
  return (
    <motion.figure
      initial={{ translateX: 0 }}
      whileInView={{ translateX: "-50%" }}
      transition={{ duration: 15, ease: "linear", repeat: Infinity }}
      className="flex gap-16 flex-none pr-16"
    >
      {logos.map((image, index) => (
        <Image
          className="flex-none h-8 w-auto"
          src={image.src}
          alt={image.alt}
          key={index}
        />
      ))}
      {logos.map((image, index) => (
        <Image
          className="flex-none h-8 w-auto"
          src={image.src}
          alt={image.alt}
          key={index}
        />
      ))}
    </motion.figure>
  );
}
