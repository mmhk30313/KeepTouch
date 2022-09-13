import React from 'react';
import { BellIcon, GiftIcon, ThumbUpIcon, EyeIcon } from '@heroicons/react/outline';
import Link from 'next/link';
const Blogs = ({blogs}: any) => {
    return (
        <React.Fragment>
            <main className='grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3 md:justify-center items-center'>
                {
                    blogs?.map((blog: any, index: number) => {
                        return (
                            <div key={index} className="shadow-lg rounded w-full m-5 p-3 h-full flex flex-col justify-center">
                                <img className='rounded-lg w-100 h-40' height={80} src={blog?.previewURL} alt="blog-image" />

                                <h2 className="text-xl my-3 text-center sm:text-left uppercase font-bold">
                                    {blog?.title?.length > 15 ? blog?.title?.substring(0, 15) + '...' : blog?.title}
                                </h2>

                                <p className="text-center md:text-left">
                                    {blog?.body?.length > 30 ? blog.body?.substring(0, 60) + '...' : blog.body}
                                </p>

                                <div className="flex flex-row justify-between mt-5">
                                    <div className='flex gap-2 items-center'><span className='w-5 text-red-500'><ThumbUpIcon/></span><span className='text-amber-500'>{blog?.likes}</span></div>
                                    <div className='flex gap-2 items-center'><span className='w-5 text-indigo-500'><EyeIcon /></span><span className='text-amber-500'>{blog?.views}</span></div>
                                    <div className='flex gap-2 items-center'><span className='w-5 text-green-500'><GiftIcon /></span><span className='text-amber-500'>{blog?.comments}</span></div>
                                </div>

                                <div className="flex justify-center md:justify-end mt-5">
                                    <Link href={`/blog/${blog?.id}`}>
                                        <a className="text-2xl uppercase font-medium text-indigo-600 hover:text-green-500">
                                            Read More
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        );
                    })
                }
            </main>
        </React.Fragment>
    );
};

export default Blogs;