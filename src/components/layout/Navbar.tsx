import { navbar } from "@/constants";
import { Menu, MenuButton, MenuList, MenuListItem, MenuParent } from "./Menu";
import HamburgerIcon from "./HamburgerIcon";
import NavbarItems from "./NavbarItems";

export default function Navbar() {
  return (
    <Menu>
      <MenuParent className="relative">
        <MenuButton className="z-50 flex flex-col items-center justify-center gap-1 size-10 relative bg-white rounded-full md:hidden">
          <HamburgerIcon />
        </MenuButton>
        <MenuList
          className="absolute md:hidden z-40 bg-zinc-50 right-0 top-0 flex items-start gap-2.5 p-5 justify-center flex-col"
          variants={{
            open: {
              width: 200,
              height: 250,
              borderRadius: 25,
              transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
                delayChildren: 0.75,
                staggerChildren: 0.05,
              },
            },
            close: {
              width: 40,
              height: 40,
              borderRadius: 25,
              transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            },
          }}
        >
          <NavbarItems />
        </MenuList>
        <MenuList
          variants={{
            open: {
              transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
                delayChildren: 0.75,
                staggerChildren: 0.05,
              },
            },
          }}
          className="hidden md:flex items-center justify-center gap-5 text-white text-opacity-50"
        >
          <NavbarItems />
        </MenuList>
      </MenuParent>
    </Menu>
  );
}
