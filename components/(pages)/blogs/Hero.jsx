import React from 'react'
import Image from 'next/image'
import posts from '@/data/posts';

const Hero = () => {
    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                        data-aos="fade-up" data-aos-duration="500">
                        Check out our most recent blog posts
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600"
                        data-aos="fade-up" data-aos-duration="500">
                        Keep yourself informed about the most recent hiking updates and advice.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start"
                            data-aos="fade-up" data-aos-duration={post.delay}>
                            <div className='relative w-full'>
                                <Image
                                    src={post.img}
                                    alt='post-img'
                                    className='aspect-video w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
                                />
                                <div className='absolute inset-0 rounded-2xl shadow-xl ring-inset ring-gray-100'></div>
                            </div>
                            <div className='mt-4 md:mt-10 max-w-xl'>
                                <div className="flex items-center gap-x-4 text-xs">
                                    <a href={post.category.href} className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-800 hover:bg-gray-200"
                                    >
                                        {post.category.title}
                                    </a>
                                    <div className="text-gray-950">
                                        {post.time}
                                    </div>
                                </div>
                                <div className="relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-2 text-[0.925rem] leading-6 text-gray-800">{post.description}</p>
                                </div>

                                <div className="mt-6 py-2 text-sm w-1/3 font-semibold rounded-lg text-orange-600 shadow-sm ring-1 ring-orange-500 hover:text-white hover:bg-orange-500">
                                    <a href={post.href} className="text-sm py-2 px-4 w-full font-semibold leading-6 my-auto">
                                        Read more <span aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero