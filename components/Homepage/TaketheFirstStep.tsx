"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const TaketheFirstStep = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-center py-20 md:py-28 px-4"
      style={{
        backgroundImage: "url('/images/homepage/newlatterbg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#7CA4A9]/70  z-0" />

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-white"
      >
        <h2 className="text-3xl md:text-5xl font-baskervville font-bold mb-6">
          Take the First Step
        </h2>

        <p className="text-base md:text-[20px] font-acumin text-white/90 mb-4 leading-relaxed">
          Schedule a complimentary 30-minute discovery call with Sabbir Nasir.
          You’ll begin to
          <span className="text-[#a14427] italic font-semibold">
            {" "}
            see what is holding you back, and what is possible through
            transformation.
          </span>{" "}
          Let’s start this journey together.
        </p>

        <div className="mt-6">
          <Link
            href="/sign-up"
            className="inline-block bg-[#a14427] text-white px-6 py-3 rounded-lg text-base font-semibold transition duration-300 hover:bg-[#7d301b] shadow-sm hover:shadow-md"
          >
            SCHEDULE A CALL
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default TaketheFirstStep;
