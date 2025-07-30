"use client";

import { newsData } from "@/config/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const NewsSidebar = () => {
  const recentArticles = [
    "Strategic Business Transformation: A Complete Guide",
    "Scaling Your Business Effectively: Key Principles",
    "Leadership in the Digital Age: Modern Strategies",
    "Innovation in Retail: The Shwapno Success Story",
    "Building Sustainable Business Models",
  ];

  return (
    <div className="space-y-8">
      {/* Author Section */}
      <motion.div
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-4">
          <motion.div
            className="relative w-24 h-24 mx-auto mb-4 border-2 border-gray-200 rounded-full image-contain image-top"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about-us/sabbir-nasir.png"
              alt="Sabbir Hasan Nasir"
              fill
              className="object-cover rounded-full image-right"
            />
          </motion.div>
          <motion.h3
            className=" mb-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Sabbir Hasan Nasir
          </motion.h3>
          <motion.p
            className="text-base"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Author & Business Leader
          </motion.p>
        </div>

        <motion.p
          className="mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {` Sabbir Hasan Nasir has transformed multiple businesses and now mentors
          others to achieve the same success. As the Executive Director of ACI
          Logistics and the visionary behind Shwapno's retail revolution, he
          exemplifies how empathy, design thinking, and relentless pursuit of
          excellence can reshape industries.`}
        </motion.p>

        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/about" className="">
            <p className="text-primary hover:text-primary/80 hover:underline">
              More About Me
            </p>
          </Link>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className=" flex gap-4 mt-4 justify-center md:justify-start">
            {[
              {
                href: "https://www.facebook.com/teamsabbirnasir",
                icon: <FaFacebook className="text-[20px]" />,
              },
              {
                href: "https://www.linkedin.com/sabbir-nasir-associates",
                icon: <FaLinkedin className="text-[20px]" />,
              },
              {
                href: "https://www.instagram.com/teamsabbirnasir",
                icon: <PiInstagramLogoFill className="text-[20px]" />,
              },
              {
                href: "https://www.youtube.com/@TeamSabbir_Nasir",
                icon: <FaYoutube className="text-[20px]" />,
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target="_blank"
                className="group inline-block p-3 bg-[#F4F6F6] border border-primary rounded-full duration-300 hover:bg-primary"
              >
                <div className="text-primary group-hover:text-white size-5">
                  {item.icon}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Recent Articles Section */}
      <motion.div
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="border-b-2 border-primary pb-1 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Recent Articles
        </motion.h3>

        <div className="divide-y-1">
          {newsData?.map((article, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer py-4 px-4  hover:bg-foreground/50"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <Link href={article.url} target="_blank">
                <p className="">{article.title}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NewsSidebar;
