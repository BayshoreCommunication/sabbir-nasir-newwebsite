import GlobalHeroSection from "@/components/GlobalHeroSection";
import TaketheFirstStep from "@/components/Homepage/TaketheFirstStep";
import WhoWeServe from "@/components/WhoWeServe/WhoWeServe";

const page = () => {
  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      <GlobalHeroSection
        titleH1={`Who We Serve`}
        titleH2={"Who We Serve"}
        slug={"who-we-serve"}
        image="/images/about-us/serve.jpg"
      />
      <WhoWeServe />
      <TaketheFirstStep />
    </div>
  );
};

export default page;
