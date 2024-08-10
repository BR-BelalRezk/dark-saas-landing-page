"use client";
import helix2 from "@/assets/images/helix2.png";
import emojiStar from "@/assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  return (
    <section
      ref={ref}
      className=" bg-black text-white py-[72px] sm:py-24 text-center"
    >
      <div className="container max-w-xl relative">
        <motion.figure style={{ translateY }}>
          <Image
            src={helix2}
            alt="helix"
            className="hidden sm:inline absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.figure>
        <motion.figure style={{ translateY }}>
          <Image
            src={emojiStar}
            alt="emojistar"
            className="absolute hidden sm:inline -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.figure>
        <h2 className=" font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <p className=" text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="mt-10 max-w-sm mx-auto flex flex-col sm:flex-row gap-2.5">
          <input
            type="email"
            placeholder="your@email.com"
            className="sm:flex-1 h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF]"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </section>
  );
}
