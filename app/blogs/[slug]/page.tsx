import React from 'react'
import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

const getBlog = (slug: string) => {
    const folder = 'blogs/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf-8');
    const matterResult = matter(content);
    return matterResult;
}

const Blog = (props: any) => {

    const slug = props.params.slug;
    const post = getBlog(slug);

    return (
        <>
            <Navbar />
            <main className='mx-auto max-w-3xl px-6 lg:px-8 py-10'>
                <div>
                    <h1 className='text-5xl font-semibold text-center my-4'>{post.data.title}</h1>
                    <Image 
                        src={post.data.image}
                        width={1080}
                        height={680}
                        alt='featured image'
                        className='rounded-2xl'
                    />
                </div>
                <article className='blog my-10'>
                    <Markdown>
                        {post.content}
                    </Markdown>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default Blog