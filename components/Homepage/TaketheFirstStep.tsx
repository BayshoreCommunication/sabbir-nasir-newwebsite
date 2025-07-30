"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const TaketheFirstStep = ({ title }: { title: string }) => {
  return (
    <section
      className="relative bg-cover bg-bottom bg-no-repeat text-center py-20 xl:py-28 px-4"
      style={{
        backgroundImage: "url('/images/homepage/newlatterbg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/70  z-0" />

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-white"
      >
        <h2 className="text-3xl md:text-5xl font-baskervville font-bold mb-6">
          {title}
        </h2>

        <p className="text-base md:text-[20px]  mb-4 leading-relaxed">
          Schedule a complimentary 30-minute discovery call with Sabbir Nasir.
          You’ll begin to
          <span className="text-primary italic font-semibold">
            {" "}
            see what is holding you back, and what is possible through
            transformation.
          </span>{" "}
          Let’s start this journey together.
        </p>

        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-[10px] text-base font-semibold transition duration-300 hover:bg-primary/80 shadow-sm hover:shadow-md"
          >
            SCHEDULE A CALL
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TaketheFirstStep;
