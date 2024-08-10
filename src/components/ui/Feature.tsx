"use client";
import EcosystemIcon from "@/assets/icons/ecosystem.svg";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
export default function Feature({
  feature,
}: {
  feature: { title: string; desc: string };
}) {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)
`;
  const refBorder = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosistion = (e: MouseEvent) => {
      if (!refBorder.current) return;
      const borderRect = refBorder.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect?.x);
      offsetY.set(e.y - borderRect?.y);
    };
    window.addEventListener("mousemove", updateMousePosistion);
    return () => window.removeEventListener("mousemove", updateMousePosistion);
  }, []);
  return (
    <div className=" relative border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1">
      <motion.div
        ref={refBorder}
        className="absolute inset-0 border-purple-400 border-2 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
      <figure className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon />
      </figure>
      <h3 className=" mt-6 font-bold">{feature.title}</h3>
      <p className="mt-2 text-white/70">{feature.desc}</p>
    </div>
  );
}
