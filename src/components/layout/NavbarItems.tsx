import { navbar } from "@/constants";
import { MenuListItem } from "./Menu";

export default function NavbarItems() {
  return (
    <>
      {navbar.map((item, index) => (
        <MenuListItem
          key={index}
          className={"capitalize text-black sm:text-white text-opacity-50"}
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 250, damping: 25 },
            },
            close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
          }}
        >
          {item}
        </MenuListItem>
      ))}
      <MenuListItem
        className="capitalize self-center bg-zinc-950 py-2 px-4 rounded-lg text-white cursor-pointer"
        variants={{
          open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 250, damping: 25 },
          },
          close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
        }}
      >
        get for free
      </MenuListItem>
    </>
  );
}
