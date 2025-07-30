"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="bg-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Left: Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="uppercase">
              Transform. Scale. <br />
              Soar.
            </h1>
            <p className=" text-[22px]  mt-5 max-w-xl mx-auto lg:mx-0 ">
              We help founder-led companies overcome stagnation, find clarity,
              and execute strategies that spark change and fuel growth.
            </p>

            <Link href={"/contact-us"}>
              <motion.div
                className="mt-8 inline-flex items-center justify-center lg:justify-start space-x-2 text-primary cursor-pointer group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  mass: 0.5,
                }}
              >
                <p className="text-3xl md:text-[54px] font-lumios text-primary transition-colors duration-300 ">
                  Start Breaking Through
                </p>
                <motion.div
                  className="text-3xl mt-1 transition-colors duration-300 "
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiArrowNarrowRight className="text-4xl mt-2" />
                </motion.div>
              </motion.div>
            </Link>
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
