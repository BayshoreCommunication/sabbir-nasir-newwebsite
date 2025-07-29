"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { insightsData } from "../config/data";

const InsightsGrid = () => {
  return (
    <div className="container my-10 md:my-20">
      {" "}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {insightsData.map((insight, index) => (
          <motion.div
            key={insight.id}
            className="bg-secondary rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            {/* Image Container */}
            <motion.div
              className="relative h-64 overflow-hidden"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 0.2,
              }}
              viewport={{ once: true }}
            >
              <Image
                src={insight.image}
                alt={insight.title}
                fill
                className="object-cover"
              />
              {/* Date Overlay */}
              <motion.div
                className="absolute top-4 left-4  bg-opacity-90 rounded-md px-3 py-1 bg-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.4,
                }}
                viewport={{ once: true }}
              >
                <div className="text-xs font-medium text-gray-800 leading-tight">
                  {insight.date.split(" ").map((part, index) => (
                    <div key={index}>{part}</div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.3,
              }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-[24px] font-bold text-gray-800 mb-3 leading-tight"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.4,
                }}
                viewport={{ once: true }}
              >
                {insight.title}
              </motion.h3>
              <motion.p
                className=""
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.5,
                }}
                viewport={{ once: true }}
              >
                {insight.description}
              </motion.p>
              <motion.div
                className="mt-12 flex items-center space-x-1 text-primary cursor-pointer"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.6,
                }}
                viewport={{ once: true }}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <p className="text-primary">Our Framework</p>
                <div>
                  <HiArrowNarrowRight className="text-2xl text-primary" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InsightsGrid;
