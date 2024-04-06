"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import D1 from "@/public/images/D1.jpg";
import D2 from "@/public/images/D2.jpg";
import D3 from "@/public/images/D3.jpg";

import L1 from "@/public/images/L1.png";
import L2 from "@/public/images/L2.png";
import L3 from "@/public/images/L3.png";
import L4 from "@/public/images/L4.jpg";
import L5 from "@/public/images/L5.jpg";
import L6 from "@/public/images/L6.jpg";

import R1 from "@/public/images/R1.jpg";
import R2 from "@/public/images/R2.jpg";
import R3 from "@/public/images/R3.jpg";

const images = [
    { category: "Dhari Devi Temple", url: D1 },
    { category: "Dhari Devi Temple", url: D2 },
    { category: "Dhari Devi Temple", url: D3 },

    { category: "Lakhamandal Temple", url: L1 },
    { category: "Lakhamandal Temple", url: L2 },
    { category: "Lakhamandal Temple", url: L3 },
    { category: "Lakhamandal Temple", url: L4 },
    { category: "Lakhamandal Temple", url: L5 },
    { category: "Lakhamandal Temple", url: L6 },

    { category: "Rafting", url: R1 },
    { category: "Rafting", url: R2 },
    { category: "Rafting", url: R3 },

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
                        className={`${selectedCategory === '' ? 'bg-orange-600 text-white' : 'border-2 hover:border-orange-500'
                            } px-3 py-1 rounded-xl cursor-pointer`}
                        onClick={() => setSelectedCategory('')}
                    >
                        All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`${selectedCategory === category ? 'bg-orange-600 text-white' : 'border-2 hover:border-orange-500'
                                } px-3 py-1 rounded-xl cursor-pointer`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className='w-full mt-10 h-full overflow-hidden'>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {filteredImages.map((image, i) => (
                            <button
                                key={i} className="relative cursor-pointer">
                                <Image
                                    alt="Gallery Image"
                                    className="object-cover aspect-[3/2] w-full h-full object-center rounded-lg"
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