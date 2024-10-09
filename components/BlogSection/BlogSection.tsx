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
          <AnimatePresence>
            {displayedBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
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
                    href={`/blog/${blog.slug}`}
                    className="text-white font-semibold text-xl ease-in duration-300 hover:text-blue-400"
                  >
                    {blog.title}
                  </Link>
                </h4>
                <p className="font-medium text-gray-400">{blog.description}</p>
                <div className="flex items-center gap-4 flex-wrap mt-6">
                  <div className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-blue-400">
                    <FaUserCircle className="text-blue-300 group-hover:text-white transition-all duration-300" />
                    <span className="text-sm font-medium">{blog.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-blue-400">
                    <FaCalendarAlt className="text-blue-300 group-hover:text-white transition-all duration-300" />
                    <span className="text-sm font-medium">{blog.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="text-center mt-10">
          {!showMore && initialPosts.length > 3 && (
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