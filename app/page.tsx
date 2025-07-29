import BusinessTransformationConsulting from "@/components/HeroSection/BusinessTransformationConsulting";
import HeroSection from "@/components/Homepage/HeroSection";
import Insights from "@/components/Homepage/insights";
import TaketheFirstStep from "@/components/Homepage/TaketheFirstStep";

export default function Home() {
  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      {/* <h1 className="text-h1 font-baskervville">Heading 1</h1>
      <h2 className="text-h2 font-baskervville">Heading 2</h2>

      <p className="text-body font-acumin">
        This is body text with Acumin font.
      </p>

      <small className="text-caption font-acumin">
        This is caption or footnote.
      </small>

      <p className="text-xl font-lumios">
        This is a special handwritten style text
      </p> */}
      <HeroSection />
      <BusinessTransformationConsulting />
      <Insights />
      <TaketheFirstStep />
    </div>
  );
}
