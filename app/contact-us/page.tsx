import CalendlyInfoShow from "@/components/Contact/CalendlyInfoShow";
import ContactForm from "@/components/Contact/ContactForm";
import GlobalHeroSection from "@/components/GlobalHeroSection";

const page = () => {
  return (
    <div className="overflow-hidden mt-[62px] md:mt-[100px]">
      <GlobalHeroSection
        titleH1={`Contact Us`}
        titleH2={"Contact Us"}
        slug={"contact-us"}
        image="/images/about-us/Frame 72.jpg"
      />
      <div className="container mx-auto mt-14">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-between items-start">
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
          <div className="w-full md:w-1/2">
            <CalendlyInfoShow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
