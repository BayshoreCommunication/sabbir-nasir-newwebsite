import GlobalHeroSection from "@/components/GlobalHeroSection";
import TaketheFirstStep from "@/components/Homepage/TaketheFirstStep";
import InsightsGrid from "@/components/InsightsGrid";

const page = () => {
  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      <GlobalHeroSection
        titleH1={`Blogs`}
        titleH2={"Blog"}
        slug={"blogs"}
        image="/images/about-us/blog.jpg"
      />
      <InsightsGrid />
      <TaketheFirstStep title="Take the First Step" />
    </div>
  );
};

export default page;
