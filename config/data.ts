export interface Insight {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export const insightsData: Insight[] = [
  {
    id: 1,
    title: "Strategic Business Transformation",
    description:
      "Learn how to transform your business with proven strategies that drive growth and innovation.",
    image: "/images/homepage/blog1.png",
    date: "Dec 15 2024",
  },
  {
    id: 2,
    title: "Scaling Your Business Effectively",
    description:
      "Discover the key principles for scaling your business while maintaining quality and culture.",
    image: "/images/homepage/blog2.png",
    date: "Dec 10 2024",
  },
  {
    id: 3,
    title: "Leadership in the Digital Age",
    description:
      "Explore modern leadership strategies that work in today's fast-paced digital environment.",
    image: "/images/homepage/blog3.png",
    date: "Dec 05 2024",
  },
];
