"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoConstructOutline } from "react-icons/io5";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { MdOutlineTouchApp } from "react-icons/md";
import { PiMapTrifoldLight, PiTarget } from "react-icons/pi";

const stepData = [
  {
    title: "Vision Framing",
    icon: <PiTarget className="text-4xl text-primary" />,
  },
  {
    title: "Strategic Roadmapping",
    icon: <PiMapTrifoldLight className="text-4xl text-primary" />,
  },
  {
    title: "Cultural Redesign",
    icon: <LiaPencilRulerSolid className="text-4xl text-primary" />,
  },
  {
    title: "Structural Re-engineering",
    icon: <IoConstructOutline className="text-4xl text-primary" />,
  },
  {
    title: "Execution Systems",
    icon: <FaAssistiveListeningSystems className="text-4xl text-primary" />,
  },
  {
    title: "Expansion",
    icon: <MdOutlineTouchApp className="text-4xl text-primary" />,
  },
];

const BusinessTransformationConsulting = () => {
  return (
    <div className="">
      <div className="container mx-auto my-10 md:my-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-center"
        >
          Business Transformation Consulting
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {stepData.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center space-x-4 last:mb-0 bg-secondary px-4 py-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">{step.icon}</div>
              <p className=" text-white">{step.title}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className=" mt-12"
        >
          {`You’ve hit a wall. Your passion, talent, and energy drove your
          company’s early success, but you’re caught in what we call the Holy
          Trap – “holy” because of the positive traits that got you here, but
          “trapped” by a lack of clarity in vision, culture, structure, and
          data.`}
        </motion.p>

        <p className=" mt-3">
          The business isn’t broken. But{" "}
          <span className="text-primary italic">
            you’re stuck and can’t figure out why.
          </span>
        </p>
        <p className="mt-3">
          Let us guide you through the Sabbir Nasir Transformation Framework, a
          highly structured process designed to turn confusion into clarity,
          data into insight, and potential into performance. That’s how you
          <span className="text-primary italic">
            break through that wall, realize your vision, and scale from $10
            million to $100 million and beyond.
          </span>
        </p>

        <Link
          href={"/our-framework"}
          className="mt-12 inline-flex items-center space-x-1 text-primary hover:underline"
        >
          <p className="text-[45px] font-lumios text-primary">Our Framework</p>
          <div>
            <HiArrowNarrowRight className="text-3xl font-lumios mt-2 text-primary" />
          </div>
        </Link>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-6">
          <motion.div
            className="w-full lg:w-1/1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className=" text-left">From Stagnation to Scale</h2>
            <p className=" mt-4">
              We partner with founders, senior executives, and investors whose
              successful companies have plateaued and require
              <span className="text-primary italic">
                transformation to scale and thrive.
              </span>
              While Sabbir Nassir has significant experience transforming
              businesses in retail, manufacturing, and private equity, the
              SabbirNasir Transformation Framework can be applied to
              organizations in virtually any industry, anywhere in the world to
              <span className="text-primary italic">
                maximize performance and profitability.
              </span>
            </p>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/3 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/homepage/firstone.png"
              alt="Business Transformation"
              className="object-cover max-w-[200px] h-auto"
              width={500}
              height={300}
              priority
            />
          </motion.div>
        </div>

        <Link
          href={"/who-we-serve"}
          className="mt-12 inline-flex items-center space-x-1 text-primary hover:underline"
        >
          <p className="text-[45px] font-lumios text-primary">Who We Serve</p>
          <div>
            <HiArrowNarrowRight className="text-3xl font-lumios mt-2 text-primary" />
          </div>
        </Link>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 mt-6">
          <motion.div
            className="w-full lg:w-1/3 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/homepage/firsttwo.png"
              alt="Business Transformation"
              className="object-cover max-w-[200px] h-auto"
              width={500}
              height={300}
              priority
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-h2 font-baskervville text-[#3E3A5B] text-right">
              From Stagnation to Scale
            </h1>
            <p className=" mt-4 text-right">
              We partner with founders, senior executives, and investors whose
              successful companies have plateaued and require
              <span className="text-primary italic">
                transformation to scale and thrive.
              </span>
              While Sabbir Nassir has significant experience transforming
              businesses in retail, manufacturing, and private equity, the
              SabbirNasir Transformation Framework can be applied to
              organizations in virtually any industry, anywhere in the world to
              <span className="text-primary italic">
                maximize performance and profitability.
              </span>
            </p>
            <div className="flex justify-end">
              {" "}
              <Link
                href={"/about-us"}
                className="mt-6 inline-flex items-center justify-end space-x-1 text-primary hover:underline"
              >
                <div>
                  <HiArrowNarrowRight className="text-3xl font-lumios mt-2 rotate-180" />
                </div>
                <p className="text-[45px] font-lumios text-primary">
                  Our Story
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTransformationConsulting;
