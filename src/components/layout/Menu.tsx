"use client";

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

// compound component

type MenuContextType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextType | null>(null);

const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error(
      "The useMenu hook must be used inside the context wrapper Menu"
    );
  }
  return context;
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const value = { toggle, setToggle };

  useEffect(() => {
    if (window.screen.width >= 768) {
      setToggle(true);
    }
  }, []);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

const MenuParent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const { toggle } = useMenu();
  return (
    <motion.div
      initial={"close"}
      animate={toggle ? "open" : "close"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const MenuList = ({
  children,
  className,
  variants,
}: {
  children: React.ReactNode;
  className: string;
  variants: Variants;
}) => {
  const { toggle } = useMenu();
  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <motion.ul
          exit={"close"}
          initial={"close"}
          animate={"open"}
          variants={variants}
          className={className}
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

const MenuListItem = ({
  children,
  className,
  variants,
}: {
  children: React.ReactNode;
  className: string;
  variants: Variants;
}) => {
  return (
    <motion.li variants={variants} className={className}>
      {children}
    </motion.li>
  );
};

const MenuButton = ({
  children,
  className,
}: {
  children: React.ReactElement;
  className: string;
}) => {
  const { toggle, setToggle } = useMenu();
  return (
    <motion.button
      animate={
        toggle
          ? {
              translateX: -10,
              translateY: 5,
            }
          : {}
      }
      transition={{
        type: "tween",
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      }}
      className={className}
      onClick={() => setToggle((prevState) => !prevState)}
    >
      {cloneElement(children, { toggle })}
    </motion.button>
  );
};

export { Menu, MenuParent, MenuList, MenuListItem, MenuButton };
