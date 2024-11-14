"use client"
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/api'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FaCalendarAlt, FaClock, FaEye, FaHeart, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const fetchedPost = await getBlogPostBySlug(params.slug)
      if (!fetchedPost) {
        notFound()
      }
      setPost(fetchedPost)
      const fetchedRelatedPosts = await getRelatedPosts(fetchedPost.slug, fetchedPost.categories)
      setRelatedPosts(fetchedRelatedPosts)
    }
    fetchData()
  }, [params.slug])

  if (!post) {
    return <div className="min-h-screen text-white flex items-center justify-center">Loading...</div>
  }

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`Check out this amazing article: ${post.title}`)
    const url = encodeURIComponent(`https://yourblog.com/blog/${post.slug}`)
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
  }

  const shareOnFacebook = () => {
    const url = encodeURIComponent(`https://yourblog.com/blog/${post.slug}`)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
  }

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(`https://yourblog.com/blog/${post.slug}`)
    const title = encodeURIComponent(post.title)
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank')
  }

  return (
    <div className="min-h-screen dark:bg-transparent text-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <article className="max-w-4xl mx-auto">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            src={post.img}
            alt={post.title}
            className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover rounded-lg mb-12 shadow-2xl"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-4xl lg:text-5xl text-black dark:text-white font-bold mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center mb-8 text-gray-300 gap-6"
          >
            <div className="flex items-center">
              <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full mr-4 border-2 border-black" />
              <div>
                <p className="font-semibold text-black dark:text-white text-lg">{post.author.name}</p>
                <p className="text-sm text-black dark:text-white">{post.author.bio}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2 text-black dark:text-white" />
              <span className="text-black dark:text-white">{post.date}</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2 text-black dark:text-white" />
              <span className='text-black dark:text-white'>{post.readingTime} min read</span>
            </div>
            <div className="flex items-center">
              <FaEye className="mr-2 text-black dark:text-white" />
              <span className='text-black dark:text-white'>{post.views} views</span>
            </div>
            <div className="flex items-center">
              <FaHeart className="mr-2 text-black dark:text-white" />
              <span className='text-black dark:text-white'>{post.likes} likes</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {post.categories.map((category) => (
              <span key={category} className="px-4 py-2 rounded-full text-sm text-black dark:text-white font-medium border border-gray-600 hover:border-black hover:text-black transition-colors duration-200 cursor-pointer"
              >
                {category}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="prose prose-lg prose-invert text-black dark:text-white max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="border-t border-black pt-8 mt-16"
          >
            <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-4 py-2 rounded-full text-sm font-medium border text-black dark:text-white border-black dark:border-white hover:border-black hover:text-black transition-colors duration-200 cursor-pointer"
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="border-t border-gray-700 pt-8 mt-16"
          >
            <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white">Share this post</h3>
            <div className="flex gap-4">
              <button onClick={shareOnTwitter} className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                <FaTwitter size={28} />
              </button>
              <button onClick={shareOnFacebook} className="text-blue-600 hover:text-blue-500 transition-colors duration-200">
                <FaFacebookF size={28} />
              </button>
              <button onClick={shareOnLinkedIn} className="text-blue-700 hover:text-blue-600 transition-colors duration-200">
                <FaLinkedinIn size={28} />
              </button>
            </div>
          </motion.div>
        </article>
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="max-w-4xl mx-auto mt-20"
          >
            <h2 className="text-3xl font-semibold mb-10">Related Posts</h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.2 }}
                >
                  <Link href={`/blog/${relatedPost.slug}`} className="block group">
                    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <img src={relatedPost.img} alt={relatedPost.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">{relatedPost.title}</h3>
                        <p className="text-gray-300 mb-4 line-clamp-2">{relatedPost.description}</p>
                        <div className="flex items-center text-sm text-gray-400">
                          <FaCalendarAlt className="mr-2" />
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}