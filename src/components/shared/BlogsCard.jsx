import React from 'react';
import { Link } from 'react-router-dom';

const BlogsCard = ({ blog, bgColor, textColor, id }) => {
    return (
        <Link to={`/blogs/${blog._id}`} state={{ blog }} className="block">
            <div className={`${bgColor} ${textColor} rounded-2xl  cursor-pointer transform transition-transform duration-300 mb-10  px-2`}>
                {/* Image Section */}
                <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center overflow-hidden border-2">
                    <img src={blog.image} alt="Image description" className="w-full h-full object-cover" />
                </div>

                {/* Tags and Date Section */}
                <div className="mt-4 flex gap-3 items-center">
                    <span className="text-xs  border-l-2 border-r-2 text-center rounded-full   shadow-lg bg-primary p-2 ">{blog.category}</span>
                    <span className="text-xs  border-l-2 border-r-2 text-center rounded-full   shadow-lg bg-primary p-2">{blog.date}</span>
                </div>

                {/* Title Section */}
                <h2 className="text-xl font-semibold mt-4">{blog.title}</h2>

                {/* Description Section */}
                <p className="text-sm mt-2">{blog.description}</p>

                {/* Read More Section */}
                <div className="text-primary mt-4 block font-bold my-5">Read More</div>
            </div>
        </Link>
    );
};

export default BlogsCard;