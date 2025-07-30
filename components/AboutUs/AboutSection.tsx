"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div>
      {" "}
      <div className="container mx-auto px-4 py-12 ">
        {/* <HeroSectionTop title="WHO WE ARE" breadcrumbs={breadcrumbs} /> */}
        <div className="main-container mx-auto px-4 ">
          {/* About Section */}
          <section className="space-y-8">
            <motion.h2
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Sabbir Nasir & Associates
            </motion.h2>

            {/* Full-width introductory paragraph */}
            <motion.p
              className="text-center max-w-6xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Sabbir Nassir & Associates is a global business transformation
              consultancy created to help people and organizations scale to
              their full potential with clarity and purpose. We partner with
              founders, senior executives, and investors, working together to
              apply the Sabbir Nasir Transformation Framework, which combines
              proven business transformation principles with human presence,
              responsibility, and soul.
            </motion.p>

            {/* Two-column layout */}
            <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto relative">
              {/* Left column - Image only with rounded corners */}
              <motion.div
                className="flex items-center justify-center min-h-[320px] -mt-8 mr-0 md:-mr-20 relative z-10 md:col-span-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/about-us/sabbir-nasir.jpg"
                  alt="Sabbir Nasir"
                  width={520}
                  height={520}
                  className="rounded-2xl object-cover"
                />
              </motion.div>

              {/* Right column - Card design (wider, being overlapped) */}
              <motion.div
                className="md:col-span-2 bg-secondary rounded-xl shadow-lg p-4 md:p-8 pl-2 md:pl-20 border border-secondary"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <motion.p
                    className=""
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Sabbir Nasir launched his own consultancy because he
                    observed that stagnating companies need more than templated
                    advice, PowerPoint decks, and periodic check-ins with a
                    traditional advisor. Sabbir is{" "}
                    <span className="font-semibold italic text-primary">
                      a true partner and transformational architect who walks
                      the journey with you
                    </span>{" "}
                    – physically, mentally, emotionally, and spiritually. And
                    he&apos;ll stay with you until you can sustain your
                    transformational strategies without him.
                  </motion.p>

                  <motion.p
                    className=""
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Sabbir offers not only practical business experience and
                    insights, but also his full presence and a genuine desire to
                    see people and organizations thrive. He&apos;ll help you{" "}
                    <span className="font-semibold italic text-primary">
                      see clearly, think strategically, and act decisively
                    </span>
                    , and act decisively. You&apos;ll learn what your business
                    needs, what your soul wants, and how to honor both in a
                    unified vision for business and individual growth.
                  </motion.p>

                  <motion.div
                    className="pt-1 xl:pt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="">Sabbir Nasir</h3>
                    <p className="">Owner and Founder</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Transformational Leadership Section */}
          <section className="text-center space-y-8">
            <motion.h2
              className=" text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Transformational Leadership
            </motion.h2>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                As Managing Director of ACI Logistics, Sabbir led the
                transformation of Shwapno from a struggling retailer with low
                brand equity to the{" "}
                <span className="font-semibold italic text-primary">
                  largest, fastest-growing supermarket chain
                </span>{" "}
                in Bangladesh. Shwapno achieved record sales, record store-level
                profitability, and record operating profits across more than 600
                stores in 2024.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Prior to joining ACI Logistics, Sabbir founded Roadmap Limited,
                a retail consultancy firm specializing in the retail and
                fast-moving consumer goods (FMCG) sectors. He also served as CEO
                of Otobi, transforming the medium-sized enterprise into the{" "}
                <span className="font-semibold italic text-primary">
                  largest furniture manufacturer and retailer
                </span>{" "}
                in Bangladesh – and one of the country&apos;s most admired
                brands.
              </motion.p>
            </div>
          </section>

          {/* Spiritual Journey Section */}
          <section className="text-center space-y-8">
            <motion.h2
              className=" text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              A Spiritual Journey
            </motion.h2>

            <div className="  space-y-6 text-gray-600 leading-relaxed text-left font-acumin">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Soon after taking the reigns as CEO of Otobi, Sabbir felt the
                full weight of his new role. He was entrusted with the
                livelihoods and dreams of more than 1,000 employees and their
                families. When a friend gave Sabbir a book on Sufism, something
                metaphysical stirred inside him and sparked a profound spiritual
                transformation.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Sabbir met <span className="italic">yogis</span> of the
                Himalayan Shaivite tradition. He traveled to Kenya, Turkey, the
                land of Shams-e-Tabriz, Rumi, and whirling dervishes. He
                encountered the Kabbalists in Europe. Returning to Bangladesh,
                Sabbir met a humble vegetable trader who brought clarity to the
                Quran, Torah, and Vedas through his embodiment of their
                teachings.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                These experiences led to an awakening of the soul and spirit
                that forms the foundation of Sabbir&apos;s approach to business
                transformation. Clarity before action. Stillness before calling.
                Alignment before growth.
              </motion.p>

              <motion.p
                className="italic font-medium text-primary border-l-4 border-primary pl-3 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                People, culture, structure, data, systems, strategy, and process
                are all parts of the equation. But real transformation begins
                within.
              </motion.p>
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-8">
            <motion.h2
              className=" text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.h2>

            {/* MIT Sloan */}
            <motion.div
              className="bg-secondary rounded-xl shadow-lg p-6 flex items-start space-x-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  MIT Sloan School of Management
                </h3>
                <p className="">
                  Advanced Certificate for Executives in Management, Innovation
                  and Technology, Business Administration
                  <br /> and Management, General
                </p>
              </div>
            </motion.div>

            {/* 2-column grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* UC Berkeley */}
              <motion.div
                className="bg-secondary rounded-xl shadow-lg p-6 flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Certificate of Excellence, Data Science and Analytics
                  </h3>
                  <p className="">
                    University of California, Berkeley, Haas School of Business
                  </p>
                </div>
              </motion.div>

              {/* Harvard Business School */}
              <motion.div
                className="bg-secondary rounded-xl shadow-lg p-6 flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Harvard Business School
                  </h3>
                  <p className="">
                    Certificate, Retail Forum for Senior Leaders
                  </p>
                </div>
              </motion.div>

              {/* B.Sc Engineering */}
              <motion.div
                className="bg-secondary rounded-xl shadow-lg p-6 flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    B.Sc Engineer, Mechanical Engineering
                  </h3>
                  <p className="">
                    Bangladesh University of Engineering and Technology
                  </p>
                </div>
              </motion.div>

              {/* MBA */}
              <motion.div
                className="bg-secondary rounded-xl shadow-lg p-6 flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    MBA, Marketing
                  </h3>
                  <p className="">
                    Institute of Business Administration, University of Dhaka
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
        {/* <HeroSection title="Speak with Sabbir Nasir and his team" /> */}
      </div>
    </div>
  );
};

export default AboutSection;
