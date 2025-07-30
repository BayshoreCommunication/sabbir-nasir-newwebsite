"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const GlobalHeroSection = ({ image, titleH1, titleH2, slug }: any) => {
  return (
    <>
      <div className="relative w-full bg-black bg-opacity-85 min-h-[380px] md:min-h-[550px]">
        <Image
          src={image}
          alt={titleH1}
          fill
          className="z-0 object-cover object-right md:object-center xl:object-top"
        />

        <div className="absolute inset-0 z-20  xl:bg-transparent">
          <div className="flex flex-col justify-end md:justify-center items-center h-full -ml-0 md:-ml-[30%] pb-8 md:pb-0">
            <div className="text-center md:text-left lg:text-left w-full px-4 md:px-0">
              {/* Mobile Background Blur Container */}
              <div className="md:hidden relative">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-md rounded-lg -m-4"></div>
                <div className="relative z-10 p-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[28px] md:text-h1 text-deep-indigo font-bold font-baskervville uppercase text-center"
                  >
                    {titleH1}
                  </motion.h1>
                  <motion.div
                    className="flex items-center space-x-2 justify-center mt-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Link href={"/"}>
                      <motion.p
                        className="text-[15px] md:text-body text-charcoal-black font-normal hover:underline"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        Home
                      </motion.p>
                    </Link>
                    <motion.svg
                      className="w-3 h-3 mx-1 text-black rtl:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                      aria-hidden="true"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </motion.svg>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-[15px] md:text-[16] text-charcoal-black font-bold tracking-wide">
                        {titleH2}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Desktop Version */}
              <div className="hidden md:block">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-[28px] md:text-h1 text-deep-indigo font-bold font-baskervville uppercase text-center"
                >
                  {titleH1}
                </motion.h1>
                <motion.div
                  className="flex items-center space-x-2 justify-center mt-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link href={"/"}>
                    <motion.p
                      className="text-[15px] md:text-body text-charcoal-black font-normal hover:underline"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Home
                    </motion.p>
                  </Link>
                  <motion.svg
                    className="w-3 h-3 mx-1 text-black rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </motion.svg>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-[15px] md:text-[16] text-charcoal-black font-bold tracking-wide">
                      {titleH2}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalHeroSection;
