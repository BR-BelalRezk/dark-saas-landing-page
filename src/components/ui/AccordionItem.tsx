"use client";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";
import clsx from "clsx";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AccordionItem() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">
          How does the pricing work for teams
        </span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            officiis, beatae provident nobis adipisci, sit rem vero qui laborum
            illo magni. Ut provident, nesciunt odit consequatur sed neque
            delectus consectetur!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
