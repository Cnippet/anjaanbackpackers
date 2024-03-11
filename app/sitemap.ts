// import { MetadataRoute } from 'next'

// const urls = [
//     'https://www.anjaanbackpackers.com/',
//     'https://www.anjaanbackpackers.com/about',
//     'https://www.anjaanbackpackers.com/contacts',
//     'https://www.anjaanbackpackers.com/blogs',


//     'https://www.anjaanbackpackers.com/blogs/kedarnath-temple',
//     'https://www.anjaanbackpackers.com/blogs/tungnath-temple',
//     'https://www.anjaanbackpackers.com/blogs/top-15-places-to-visit-in-rishikesh-in-2024',
//     'https://www.anjaanbackpackers.com/blogs/kartikswami-temple',
// ]

// export default function sitemap(): MetadataRoute.Sitemap {

//     console.log(urls.length);

//     const allUrls: MetadataRoute.Sitemap =  urls.map((url) => ({
//         url,
//         lastModified: new Date(),
//         changeFrequency: 'weekly',
//         priority: url === 'https://www.anjaanbackpackers.com/' ? 1 : 0.8,
//     }));

//     return allUrls;
// }

import { MetadataRoute } from "next";
import { getBlogs } from "@/lib/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const BASE_URL = 'https://www.anjaanbackpackers.com';

    const urls = [
        `${BASE_URL}/about`,
        `${BASE_URL}/contacts`,
        `${BASE_URL}/blogs`,
    ]
    const blogs = getBlogs();
    const entries: MetadataRoute.Sitemap = blogs.map(({ slug }) => ({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    const allUrls: MetadataRoute.Sitemap = urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...allUrls,
        ...entries,
    ]
}