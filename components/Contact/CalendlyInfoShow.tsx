"use client";
import { InlineWidget } from "react-calendly";

const CalendlyInfoShow = () => {
  return (
    <div className="">
      <div className=" md:hidden">
        <InlineWidget
          url="https://calendly.com/kaitlin-age/introductory-call"
          styles={{
            height: "800px",
          }}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "#0b7788",
            textColor: "4d5055",
          }}
        />
      </div>
      <div className="hidden md:block">
        <InlineWidget
          url="https://calendly.com/kaitlin-age/introductory-call"
          styles={{
            height: "930px",
          }}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "#0b7788",
            textColor: "4d5055",
          }}
        />
      </div>
    </div>
  );
};

export default CalendlyInfoShow;
