import Logos from "./Logos";

export default function LogoTicker() {
  return (
    <section className="bg-black text-white py-[72px] sm:py-24">
      <div className="container flex flex-col gap-9 ">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="flex overflow-hidden before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 after:right-0 before:left-0 before:top-0 after:top-0   relative before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <Logos />
        </div>
      </div>
    </section>
  );
}
