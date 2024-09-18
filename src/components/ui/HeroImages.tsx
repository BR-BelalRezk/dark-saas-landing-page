"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import cursor from "@/assets/images/cursor.png";
import message from "@/assets/images/message.png";

export default function HeroImages() {
  return (
    <>
      <motion.figure
        drag
        dragSnapToOrigin
        initial={{ translateY: 50 }}
        animate={{ translateY: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
          ease: "linear",
        }}
        className="absolute right-[476px] top-[108px] hidden sm:inline"
      >
        <Image
          draggable={false}
          src={cursor}
          alt="cursor"
          height={200}
          width={200}
          className="max-w-none"
        />
      </motion.figure>
      <motion.figure
        drag
        dragSnapToOrigin
        initial={{ translateY: 50 }}
        animate={{ translateY: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
          ease: "linear",
        }}
        className="absolute top-[56px] left-[498px] hidden sm:inline"
      >
        <Image
          src={message}
          alt="message"
          height={200}
          width={200}
          className="max-w-none"
          draggable={false}
        />
      </motion.figure>
    </>
  );
}
