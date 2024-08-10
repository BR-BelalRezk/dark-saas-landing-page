import ArrowRightIcon from "@/assets/icons/arrow-w.svg";
import HeroImages from "./HeroImages";

export default function Hero() {
  return (
    <section className=" relative overflow-clip bg-black text-white py-[72px] sm:py-24 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]">
      <div className="lg:w-[2400px] lg:h-[1200px]  sm:w-[1536px] sm:h-[768px] sm:top-[calc(100%-120px)] top-[calc(100%-96px)] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] absolute bg-black h-[375px] w-[750px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE]" />
      <div className="container relative">
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="border py-1 px-2 rounded-lg border-white/30 inline-flex items-center justify-center gap-3"
            >
              <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
                Version 2.0 is here
              </span>
              <span className="inline-flex items-center justify-center gap-1">
                <span className=" capitalize">read more</span>
                <ArrowRightIcon />
              </span>
            </a>
          </div>
          <div className=" relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter">
              One Task <br /> at a Time
            </h1>
            <HeroImages />
          </div>
          <p className="text-center text-xl max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <button className=" bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </section>
  );
}
