"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { newsData } from "../config/data";

const NewsGrid = () => {
  const handleReadMore = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {newsData?.map((insight, index) => (
          <motion.div
            key={insight.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
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
                className="absolute top-4 left-4 bg-opacity-90 rounded-md px-3 py-1 bg-white"
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
              className="p-5 flex flex-col flex-grow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.3,
              }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="line-clamp-2"
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
                className="line-clamp-3 mt-2"
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
                className="flex items-center space-x-1 text-primary cursor-pointer group mt-3"
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
                onClick={() => handleReadMore(insight.url)}
              >
                <h3 className="text-primary group-hover:text-primary/80 transition-colors duration-300 font-lumios">
                  Read More
                </h3>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <HiArrowNarrowRight className="text-xl text-primary group-hover:text-primary/80" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsGrid;
