"use client";
import Link from "next/link";
import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const BlogSection = () => {
  const [showMore, setShowMore] = useState(false);

  const blogs = [
    {
      id: 1,
      img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-01.png",
      title: "Revolution in Content Creation and Communication",
      description:
        "AI is transforming content creation, enabling faster and more accurate communication strategies for businesses.",
      categories: ["Design", "Engineering"],
      author: "Alex Demo",
      date: "25 Mar, 2025",
    },
    {
      id: 2,
      img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-02.png",
      title: "How AI Writing Tools Empower Writers to Speed up their Writing",
      description:
        "Discover how AI writing tools are helping content creators accelerate their work while maintaining quality.",
      categories: ["Development", "Security"],
      author: "Hendary Jonson",
      date: "12 Feb, 2025",
    },
    {
      id: 3,
      img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-03.png",
      title: "Innovative Solutions in AI for Developers",
      description:
        "Learn about the latest AI-driven tools that are revolutionizing software development practices.",
      categories: ["AI", "Technology"],
      author: "Jane Doe",
      date: "5 Jan, 2025",
    },
    {
      id: 4,
      img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-04.png",
      title: "The Future of AI in Business Automation",
      description:
        "AI is reshaping business automation, from streamlining operations to optimizing customer experiences.",
      categories: ["Business", "Automation"],
      author: "John Smith",
      date: "18 Apr, 2025",
    },
    {
      id: 5,
      img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-05.png",
      title: "Enhancing Cybersecurity with AI-Powered Solutions",
      description:
        "Explore how AI is strengthening cybersecurity measures by predicting and preventing threats.",
      categories: ["Cybersecurity", "AI"],
      author: "Sarah Johnson",
      date: "9 May, 2025",
    },
    {
      id: 6,
      img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-06.png",
      title: "Cross-Platform Development: Future Trends",
      description:
        "The future of software lies in cross-platform development, and AI is at the forefront of this evolution.",
      categories: ["Development", "Trends"],
      author: "Mark Lee",
      date: "2 Jun, 2025",
    },
    {
      id: 7,
      img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-07.png",
      title: "AI for UX/UI Design: Enhancing User Experience",
      description:
        "AI is revolutionizing UX/UI design, making the process more intuitive and user-focused.",
      categories: ["Design", "AI"],
      author: "Emily Brown",
      date: "20 Jul, 2025",
    },
  ];

  const displayedBlogs = showMore ? blogs : blogs.slice(0, 3);

  return (
    <section className="py-10 lg:py-15">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center mb-10">
          <h2 className="text-white mb-6 text-3xl font-extrabold sm:text-4xl xl:text-heading-2 transition duration-500 ease-in-out hover:text-indigo-400">
            Latest Blogs &amp; News
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 md:text-lg font-medium text-gray-300">
            Stay updated on AI, technology, and software development trends that
            are shaping the future of the industry.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group bg-white bg-opacity-5 rounded-xl shadow-lg p-6 transform transition-all duration-500 ease-out hover:scale-105 hover:bg-opacity-20"
            >
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full ease-linear duration-700 scale-100 group-hover:scale-110 transition-all"
                />
              </div>
              <div className="flex flex-wrap gap-3 items-center mb-6">
                {blog.categories.map((category) => (
                  <span
                    key={category}
                    className="font-medium text-xs cursor-pointer py-1 px-3 rounded-full bg-white/[0.1] border border-white/15 hover:border-white/30 hover:text-white transition-all duration-300"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h4 className="mb-4">
                <Link
                  href="/"
                  className="text-white font-semibold text-xl ease-in duration-300 hover:text-blue-400"
                >
                  {blog.title}
                </Link>
              </h4>
              <p className="font-medium text-gray-400">{blog.description}</p>
              <div className="flex items-center gap-4 flex-wrap mt-6">
                <div className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-blue-400">
                  <FaUserCircle className="text-blue-300 group-hover:text-white transition-all duration-300" />
                  <span className="text-sm font-medium">{blog.author}</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-blue-400">
                  <FaCalendarAlt className="text-blue-300 group-hover:text-white transition-all duration-300" />
                  <span className="text-sm font-medium">{blog.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          {!showMore && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMore(true)}
              className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
            >
              Show More
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
