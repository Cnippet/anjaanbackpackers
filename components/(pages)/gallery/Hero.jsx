"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import D1 from "@/public/images/D1.jpg";

import H1 from "@/public/images/HR1.jpg";
import H2 from "@/public/images/HR2.jpg";
import H3 from "@/public/images/HR3.jpg";
import H4 from "@/public/images/HR4.jpg";
import H5 from "@/public/images/HR5.jpg";

import K1 from "@/public/images/K1.jpg";
import K2 from "@/public/images/K2.jpg";
import K3 from "@/public/images/K3.jpg";

import KE1 from "@/public/images/KE1.jpg";
import KE2 from "@/public/images/KE2.jpg";
import KE3 from "@/public/images/KE3.jpg";
import KE4 from "@/public/images/KE4.jpg";
import KE5 from "@/public/images/KE5.jpeg";
import KE6 from "@/public/images/KE6.jpeg";

import L1 from "@/public/images/L1.jpg";
import L2 from "@/public/images/L2.jpg";
import L3 from "@/public/images/L3.jpg";
import L4 from "@/public/images/L4.jpg";

import R1 from "@/public/images/R1.jpg";
import R2 from "@/public/images/R2.jpg";
import R3 from "@/public/images/R3.jpg";
import R4 from "@/public/images/R4.jpg";
import R5 from "@/public/images/R5.jpg";
import R6 from "@/public/images/R6.jpg";
import R7 from "@/public/images/R7.jpg";
import R8 from "@/public/images/R8.jpg";

const images = [
    { category: "Devprayag", url: D1 },

    { category: "Hrishikesh", url: H1 },
    { category: "Hrishikesh", url: H2 },
    { category: "Hrishikesh", url: H3 },
    { category: "Hrishikesh", url: H4 },
    { category: "Hrishikesh", url: H5 },

    { category: "Kartik Swami", url: K1 },
    { category: "Kartik Swami", url: K2 },
    { category: "Kartik Swami", url: K3 },

    { category: "Kedarnath Temple", url: KE1 },
    { category: "Kedarnath Temple", url: KE2 },
    { category: "Kedarnath Temple", url: KE3 },
    { category: "Kedarnath Temple", url: KE4 },
    { category: "Kedarnath Temple", url: KE5 },
    { category: "Kedarnath Temple", url: KE6 },

    { category: "Lakhamandal Temple", url: L1 },
    { category: "Lakhamandal Temple", url: L2 },
    { category: "Lakhamandal Temple", url: L3 },
    { category: "Lakhamandal Temple", url: L4 },

    { category: "Rafting", url: R1 },
    { category: "Rafting", url: R2 },
    { category: "Rafting", url: R3 },
    { category: "Rafting", url: R4 },
    { category: "Rafting", url: R5 },
    { category: "Rafting", url: R6 },
    { category: "Rafting", url: R7 },
    { category: "Rafting", url: R8 },


]

const Hero = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [...new Set(images.map(image => image.category))];

    const filteredImages = selectedCategory
        ? images.filter(image => image.category === selectedCategory)
        : images;
    return (
        <section className="relative isolate py-16">
            <div className="max-w-[90%] mx-auto px-6 lg:px-8 ">
                <div className="flex mb-4 sm:mb-10 flex-col mx-auto justify-center items-center text-center gap-y-5 py-4 md:gap-x-10">
                    <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                        Images Gallery
                    </h2>
                    {/* <p className="my-auto max-w-xl text-base leading-8 text-gray-900 md:text-lg">
                        Explore our beautiful collection of photos featuring rafting,
                        kayaking, camping and expedition in Rishikesh.
                    </p> */}
                </div>

                <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-2  sm:space-x-2">
                    <button
                        className={`${selectedCategory === '' ? 'bg-orange-500 text-white' : 'border-2 hover:border-orange-500'
                            } px-3 py-1 rounded-xl cursor-pointer`}
                        onClick={() => setSelectedCategory('')}
                    >
                        All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`${selectedCategory === category ? 'bg-orange-500 text-white' : 'border-2 hover:border-orange-500'
                                } px-3 py-1 rounded-xl cursor-pointer`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className='w-full mt-10 h-full overflow-hidden'>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredImages.map((image, i) => (
                            <button
                                key={i} className="relative cursor-pointer">
                                <Image
                                    alt="Gallery Image"
                                    className="object-cover aspect-[3/2] w-full h-full object-center rounded-2xl"
                                    src={image.url}
                                    loading="eager"
                                    quality={100}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero