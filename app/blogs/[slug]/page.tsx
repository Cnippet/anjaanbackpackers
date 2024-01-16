import React from 'react'
import Image from 'next/image';

import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const Blog = ({ params }: { params: { slug: string } }) => {

    const id = params.slug
    console.log(id)

    const filePath = path.join(process.cwd(), 'blogs', `${id}.mdx`);
    console.log(filePath)

    const srco = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(srco);

    const value = data;
    const src = content;

    return (
        <>
            <Navbar />
            <main className='mx-auto max-w-4xl px-6 lg:px-8 py-10'>
                <div>
                    <h1 className='text-5xl font-semibold my-4'>{value.title}</h1>
                    <Image
                        src={value.image}
                        width={1080}
                        height={680}
                        alt='featured image'
                        className='rounded-2xl'
                    />
                </div>
                <article className='blog my-10'>
                    <MDXRemote source={src} />
                </article>
            </main>
            <Footer />
        </>
    )
}

export default Blog