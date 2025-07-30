import GlobalHeroSection from "@/components/GlobalHeroSection";
import TaketheFirstStep from "@/components/Homepage/TaketheFirstStep";
import NewsGrid from "@/components/NewsGrid";
import NewsSidebar from "@/components/NewsSidebar";

const page = () => {
  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      <GlobalHeroSection
        titleH1={`News`}
        titleH2={"News"}
        slug={"news"}
        image="/images/about-us/news.jpg"
      />

      {/* Two Column Layout */}
      <div className="container my-10 md:my-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - News Grid */}
          <div className="lg:col-span-2">
            <NewsGrid />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <NewsSidebar />
          </div>
        </div>
      </div>

      <TaketheFirstStep title="Take the First Step" />
    </div>
  );
};

export default page;
