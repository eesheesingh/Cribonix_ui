import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../constants/data';
import styles from '../../style';
import BlogNavbar from './BlogNavbar';

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className={`flex flex-col ${styles.boxWidth} md:px-[7rem] px-1 hero-bg`}>
      <BlogNavbar />
      <div key={blog.id} className={`md:mt-[6rem] md:mb-[3rem] mt-[6rem] mb-[10rem] ${styles.paddingX} flex flex-col items-center`}>
        <div className="md:max-w-4xl w-full bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <img src={blog.blogImg} alt={blog.title} className="w-full h-40 md:h-64 object-cover rounded-md mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{blog.title}</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
