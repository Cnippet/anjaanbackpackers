import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getBlogs } from '@/lib/blogs';

const Blog = ({ params }: { params: { slug: string } }) => {

    const id = params.slug;

    const filePath = path.join(process.cwd(), 'blogs', `${id}.mdx`);

    const srco = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(srco);

    const value = data;
    const src = content;

    const posts = getBlogs();
    const relatedPosts = posts.filter((post: any) => post.href !== `/blog/${id}`);

    // Function to shuffle articles
    const sRelatedPosts = shuffleArray(relatedPosts);

    function shuffleArray(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <>
            <Navbar />

            <main className='pt-8 pb-16 antialiased lg:pt-16 lg:pb-24'>
                <div className='mx-auto flex max-w-6xl justify-between px-4 lg:px-0'>
                    <article className="relative max-w-3xl mx-auto pt-10">
                        <h1 className="text-2xl font-extrabold text-slate-900 md:text-4xl ">
                            {value.title}
                        </h1>
                        <div className="text-sm leading-6">
                            <dl>
                                <dt className="sr-only">Date</dt>
                                <dd className="absolute inset-x-0 top-0 text-slate-700">
                                    <time dateTime="2023-12-20T20:00:00.000Z">
                                        {value.date}
                                    </time>
                                </dd>
                            </dl>
                        </div>

                        <div className="blog mt-8 flex flex-col gap-y-5 text-gray-800 font-sans">
                            <p className='text-lg'>
                                {value.description}
                            </p>
                            <div className='max-w-3xl mx-auto'>
                                <Image
                                    src={value.image}
                                    width={1080}
                                    height={680}
                                    alt='featured-image'
                                    className='not-blog aspect-[16/9] object-cover object-bottom rounded-xl'
                                />
                            </div>

                            <MDXRemote source={src} />

                        </div>
                    </article>
                    <aside className='hidden lg:block lg:w-72'>
                        <div className='sticky top-6'>
                            <div className='mb-6 rounded-2xl border p-6 shadow-xl'>
                                <a href="#" className='mb-4 flex gap-4 items-center'>
                                    <Image
                                        src={value.profile}
                                        alt="id-1"
                                        width={32}
                                        height={32}
                                        className="h-8 w-8 rounded-full bg-gray-50 object-cover" />
                                    <div className="text-sm leading-4">
                                        <div className="text-slate-900 font-semibold">
                                            {value.author}
                                        </div>
                                    </div>
                                </a>
                                <p className='mb-4 text-sm text-slate-900'>
                                    {value.intro}
                                </p>

                                <div className='flex'>
                                    <h2 className='my-auto text-sm font-semibold'>Connect with me</h2>
                                    <div className='ml-auto flex gap-x-2'>
                                        <Link href="#" target='_blank'>
                                            <span className='sr-only'>Facebook</span>
                                            <svg fill="currentColor" viewBox="0 0 24 24" className='w-7 h-7 text-gray-400' aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                                        </Link>
                                        <Link href={value.insta} target='_blank'>
                                            <span className='sr-only'>Instagram</span>
                                            <svg fill="currentColor" viewBox="0 0 24 24" className='w-7 h-7 text-gray-400' aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                                        </Link>
                                        <Link href="#" target='_blank'>
                                            <span className='sr-only'>Twitter</span>
                                            <svg fill="currentColor" viewBox="0 0 24 24" className='w-7 h-7 text-gray-400' aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='rounded-2xl border p-6 shadow-xl'>
                                <h3 className='font-semibold text-lg mb-4 border-b'>Related articles</h3>

                                {sRelatedPosts.slice(0, 3).map((article: any, i) => (
                                    <Link key={i} href={article.href}>
                                        <div className="text-blue-600 text-base font-semibold">
                                            {article.title}
                                        </div>
                                        <p className='mb-4 text-sm text-slate-900 line-clamp-2'>
                                            {article.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Blog

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const id = params.slug

    const filePath = path.join(process.cwd(), 'blogs', `${id}.mdx`);

    const srco = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(srco);

    const value = data;

    return {
        title: value.title,
        description: value.description,
        metadataBase: new URL('https://www.anjaanbackpackers.com/'),
        openGraph: {
            title: value.title,
            description: value.description,
            images: [
                {
                    url: value.image,
                    width: 1080,
                    height: 680,
                    alt: "Anjaan Backpackers blogs",
                }
            ],
            url: `blog/${value.slug}`,
        },
        twitter: {
            title: value.title,
            description: value.description,
            images: [
                {
                    url: value.image,
                    width: 1080,
                    height: 680,
                    alt: "Anjaan Backpackers blogs",
                }
            ]
        }
    }
}