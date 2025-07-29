"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WhoWeServe = () => {
  return (
    <div className="container mx-auto my-10 md:my-20">
      {" "}
      <section className="space-y-8">
        <motion.h2
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Is Your Organization Stuck in the Holy Trap?
        </motion.h2>

        {/* Full-width introductory paragraph */}
        <motion.p
          className="text-center max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          We&apos;ve found that businesses often find early success due to the
          founder&apos;s passion, purpose, and determination, not a structured,
          carefully crafted business plan. Revenue reaches $5-$10 million and
          their small team grows to 500-1,000 employees.
        </motion.p>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto relative">
          {/* Left column - Colored background with icon (smaller, overlapping) */}
          <motion.div
            className="flex items-center justify-center min-h-[320px]  mr-0 md:-mr-20 relative z-10 md:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about-us/we-serve.png"
              alt="Sabbir Nasir"
              width={520}
              height={520}
              className="rounded-2xl w-full h-[350px] object-cover"
            />
          </motion.div>

          {/* Right column - Card design (wider, being overlapped) */}
          <motion.div
            className="md:col-span-2 bg-secondary rounded-xl shadow-lg p-8 pl-20 "
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.p
                className=""
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Then the company hits a wall that we call the Holy Trap.{" "}
                <span className="font-semibold italic text-primary">
                  The sacred spark and positive energy that produced genuine
                  success aren&apos;t enough to scale.
                </span>{" "}
                The company tries to expand, but confusion remains. Closer
                examination typically reveals:
              </motion.p>

              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="">Cluttered vision</p>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="">Undefined values</p>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="">Fragmented data</p>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="">Reactive strategy</p>
                </motion.li>
                <motion.li
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="">Overwhelmed leadership</p>
                </motion.li>
              </motion.ul>

              <motion.p
                className="text-[15px] md:text-body text-charcoal-black font-normal font-acumin leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                viewport={{ once: true }}
              >
                These are the types of organizations that Sabbir Nasir and his
                associates can help{" "}
                <span className="font-semibold italic text-primary">
                  transform and scale to $100 million and beyond.
                </span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Transformational Leadership Section */}
      <section className="text-center space-y-8">
        <motion.h2
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          A Universal Model for Transformation
        </motion.h2>

        <motion.div
          className="space-y-6 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            We understand the work because we&apos;ve already done the work.
            Sabbir Nasir has led the transformation of a grocery chain (Shwapno)
            and a furniture manufacturer and retailer (Otobi) from the brink of
            failure and stagnancy respectively to become the largest and most
            successful organizations in Bangladesh in their respective business
            categories.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            The Sabbir Nasir Transformation Framework has produced remarkable
            growth in the retail and manufacturing sectors and is ideal for
            private equity firms seeking to buy, transform and sell companies
            for profit. However,{" "}
            <span className="font-semibold italic text-primary">
              {" "}
              this approach to transformation is industry-agnostic and can be
              applied to virtually any company in the world
            </span>{" "}
            that is stuck in the Holy Trap.
          </motion.p>
        </motion.div>
      </section>
      {/* Spiritual Journey Section */}
      <section className="text-center space-y-8">
        <motion.h2
          className="mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Break Through the Wall
        </motion.h2>

        <motion.div
          className="  space-y-6 text-gray-600 leading-relaxed text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="font-semibold italic text-primary">
              We want to hear from you if your company is stuck and needs a
              turnaround
            </span>{" "}
            . An overhaul. A fresh perspective. A clear path forward. A
            sustainable strategy. Not just a change in function, but a change in
            thinking and culture. And a transformational architect to guide you
            through the process.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Sabbir and his associates will examine every area of your business
            to identify and address issues that are holding you back. Vision,
            values, and culture. Processes, financials, and data. Value
            proposition, brand positioning, and strategic planning. Then the
            transformation begins and blossoms.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default WhoWeServe;
