"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import insight1 from "../../public/images/homepage/blog1.png";
import insight2 from "../../public/images/homepage/blog2.png";
import insight3 from "../../public/images/homepage/blog3.png";

const insightsData = [
  {
    id: 1,
    date: "30",
    month: "Nov",
    year: "2021",
    image: insight1.src,
    title: "New technology awarness.",
    description:
      "Delightful remarkably mr on announcing themselves entreaties favourable.",
    link: "#",
  },
  {
    id: 2,
    date: "01",
    month: "Dec",
    year: "2021",
    image: insight2.src,
    title: "Client meeting discussion.",
    description:
      "About to in so terms voice at. Equal an would is found seems of. The particular f...",
    link: "#",
  },
  {
    id: 3,
    date: "04",
    month: "Dec",
    year: "2021",
    image: insight3.src,
    title: "Fast growth for business",
    description:
      "At more shed went up is roof if loud case. Delay music in lived noise an. Beyond ge...",
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Insights() {
  return (
    <section className="container my-10 md:my-20 mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-h2 font-baskervville text-[#3E3A5B]">Blogs</h1>
        <p className="mt-5 max-w-[700px] mx-auto ">
          Insights You’ve hit a wall. Your passion, talent, and energy drove
          your company’s early success, but you’re caught in what we call the
          Holy Trap
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {insightsData.map((insight, i) => (
          <motion.div
            key={insight.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer rounded-lg overflow-hidden "
          >
            <div>
              <Image
                src={insight.image as any}
                alt={insight.title}
                width={400}
                height={192}
                className="w-full h-64 object-cover"
              />
              <div className="flex items-center justify-between p-4 border-t border-gray-200 text-sm">
                <span className="text-gray-600">Blog</span>
                <span className="text-gray-600">
                  {insight.date} {insight.month} {insight.year}
                </span>
              </div>
              <div className="p-4">
                <h3 className=" mb-2 line-clamp-2">{insight.title}</h3>
                <p className=" line-clamp-3">{insight.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
