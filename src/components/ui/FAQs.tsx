import AccordionItem from "./AccordionItem";
export default function FAQs() {
  return (
    <section className="bg-gradient-to-b from-[#5D2CAB] to-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className=" text-center text-5xl sm:text-6xl max-w-[648px] mx-auto font-bold tracking-tighter">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {Array.from({ length: 5 }, (_, index) => index).map((index) => (
            <AccordionItem key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
