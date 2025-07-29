"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { IoArrowForward } from "react-icons/io5";

const HeroSection = () => {
  const titleArray = ["TRANSFORM. SCALE.", "SOAR."];

  return (
    <section className="bg-gray-50">
      <div className="main-container mx-auto px-4 py-12 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left lg:col-span-2">
            <div className="mb-8">
              {titleArray.map((title, index) => (
                <Fragment key={index}>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                    className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 tracking-tight"
                    style={{ fontFamily: "Petrona, serif", fontSize: "68px" }}
                  >
                    {title}
                  </motion.span>
                </Fragment>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut",
              }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We help founder-led companies overcome stagnation, find clarity,
              and execute strategies that spark change and fuel growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: "easeOut",
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact-us">
                <button className="inline-flex items-center font-normal italic text-2xl transition-colors duration-300 group font-lumios-marker text-[#19ACC9]">
                  Start Breaking Through
                  <IoArrowForward className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Banner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: "easeOut",
            }}
            className="hidden lg:flex justify-end items-center"
          >
            <div className="relative w-full max-w-lg h-80 lg:h-96 xl:h-[449px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/homepage/banner-content.png"
                alt="Banner Content"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
