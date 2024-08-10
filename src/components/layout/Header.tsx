import Image from "next/image";
import logo from "@/assets/images/logosaas.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-black w-full">
      <nav className="py-5 md:pt-10 container mx-auto px-5">
        <div className="flex  items-center justify-between w-full">
          <figure className="relative">
            <div className=" absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md" />
            <Image src={logo} alt="sass image" className="size-12 relative" />
          </figure>
          <Navbar />
        </div>
      </nav>
    </header>
  );
}
