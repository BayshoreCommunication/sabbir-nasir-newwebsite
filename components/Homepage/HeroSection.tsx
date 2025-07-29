"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Left: Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[55px] font-baskervville text-[#3E3A5B] leading-tight">
              Transform. Scale. <br />
              Soar.
            </h1>
            <p className=" text-[22px]text-white  mt-5 max-w-xl mx-auto lg:mx-0 text-white">
              We help founder-led companies overcome stagnation, find clarity,
              and execute strategies that spark change and fuel growth.
            </p>

            <motion.div
              className="mt-8 flex items-center justify-center lg:justify-start space-x-2 text-primary cursor-pointer hover:underline"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-3xl md:text-[54px] font-lumios  text-primary">
                Start Breaking Through
              </p>
              <HiArrowNarrowRight className="text-3xl mt-1" />
            </motion.div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/images/homepage/hero-image.png"
              alt="Hero Image"
              width={800}
              height={600}
              className="object-contain max-w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
