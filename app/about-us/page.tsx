import AboutSection from "@/components/AboutUs/AboutSection";
import GlobalHeroSection from "@/components/GlobalHeroSection";
import TaketheFirstStep from "@/components/Homepage/TaketheFirstStep";

const page = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "About Us" }];
  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      <GlobalHeroSection
        titleH1="About Us"
        titleH2={"About Us"}
        slug={"aboutus"}
        image="/images/about-us/about-us.jpg"
      />
      <AboutSection />
      <TaketheFirstStep />
    </div>
  );
};

export default page;
