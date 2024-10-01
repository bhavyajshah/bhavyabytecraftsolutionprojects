import Link from "next/link";
import { FaUserCircle, FaCalendarAlt } from "react-icons/fa";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-01.png",
      title: "Revolution in Content Creation and Communication",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...",
      categories: ["Design", "Engineering"],
      author: "Alex Demo",
      date: "25 Mar, 2025",
    },
    {
      id: 2,
      img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-02.png",
      title: "How AI Writing Tools Empower Writers to Speed up their Writing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...",
      categories: ["Development", "Security"],
      author: "Hendary Jonson",
      date: "12 Feb, 2025",
    },
    {
      id: 3,
      img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-03.png",
      title: "Revolution in Content Creation and Communication",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...",
      categories: ["Products", "Blog and articles"],
      author: "Jane Doe",
      date: "5 Jan, 2025",
    },
  ];

  return (
    <section className="py-20 lg:py-25">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="text-center mb-10">
          <h2 className="text-white mb-6 text-3xl font-extrabold sm:text-4xl xl:text-heading-2 transition duration-500 ease-in-out hover:text-indigo-400">
            Latest Blogs &amp; News
          </h2>
          <p className="max-w-[714px] mx-auto mb-5 md:text-lg font-medium text-gray-300">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            accurate, and enjoyable.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
