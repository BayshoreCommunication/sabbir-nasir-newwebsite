import GlobalHeroSection from "@/components/GlobalHeroSection";
import TaketheFirstStep from "@/components/Homepage/TaketheFirstStep";

const page = () => {
  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      <GlobalHeroSection
        titleH1={`News`}
        titleH2={"News"}
        slug={"news"}
        image="/images/about-us/Frame 69.jpg"
      />
      <div className="py-96"></div>
      <TaketheFirstStep />
    </div>
  );
};

export default page;
