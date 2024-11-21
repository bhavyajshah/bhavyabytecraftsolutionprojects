"use client";
import Link from "next/link";
import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BlogPost } from "@/lib/api";

interface BlogSectionProps {
  initialPosts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ initialPosts }) => {
  const [showMore, setShowMore] = useState(false);
  const displayedBlogs = showMore ? initialPosts : initialPosts.slice(0, 3);

  return (
    <section className="py-10 lg:py-15 bg-white dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center mb-10">
          <h2 className="text-black dark:text-white mb-6 text-3xl font-extrabold sm:text-4xl xl:text-heading-2 transition duration-500 ease-in-out dark:hover:text-indigo-400">
            Latest Blogs &amp; News
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 md:text-lg font-medium text-black dark:text-gray-300">
            Stay updated on AI, technology, and software development trends that
            are shaping the future of the industry.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <AnimatePresence>
            {displayedBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group bg-white dark:bg-white/5 rounded-xl shadow-2xl hover:shadow-xl p-4 md:p-6 transform transition-all duration-500 ease-out hover:scale-105 dark:hover:bg-opacity-20"
              >
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-48 object-cover ease-linear duration-700 scale-100 group-hover:scale-110 transition-all"
                  />
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3 items-center mb-4 md:mb-6">
                  {blog.categories.map((category) => (
                    <span
                      key={category}
                      className="font-medium text-xs cursor-pointer py-1 px-3 rounded-full bg-black/100 dark:bg-white/10 text-white dark:text-white border border-blue-200 dark:border-white/15 dark:hover:border-white/30 dark:hover:text-white transition-all duration-300"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h4 className="mb-3 md:mb-4">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-black dark:text-white font-semibold text-lg md:text-xl ease-in duration-300 dark:hover:text-blue-400"
                  >
                    {blog.title}
                  </Link>
                </h4>
                <p className="font-medium text-black dark:text-gray-400 text-sm md:text-base">
                  {blog.description}
                </p>
                <div className="flex items-center gap-4 flex-wrap mt-4 md:mt-6">
                  <div className="flex items-center gap-2 cursor-pointer text-black dark:text-gray-300 transition-all duration-300 dark:hover:text-blue-400">
                    <FaUserCircle className="text-black dark:text-blue-300  dark:group-hover:text-white transition-all duration-300" />
                    <span className="text-sm font-medium">{blog.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer text-black dark:text-gray-300 transition-all duration-300 dark:hover:text-blue-400">
                    <FaCalendarAlt className="text-black dark:text-blue-300 dark:group-hover:text-white transition-all duration-300" />
                    <span className="text-sm font-medium">{blog.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="text-center mt-8 md:mt-10">
          {!showMore && initialPosts.length > 3 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMore(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition  transform hover:scale-105  inline-flex px-7 ease-in duration-300 hover:shadow-lg"
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