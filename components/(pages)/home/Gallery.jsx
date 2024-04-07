import React from "react";
import Image from "next/image";

import G1 from "@/public/images/KE1.jpg";
import G2 from "@/public/images/L1.jpg";
import G3 from "@/public/images/L4.jpg";
import G4 from "@/public/images/K2.jpg";
import G5 from "@/public/images/HR2.jpg";
import G6 from "@/public/images/R1.jpg";

const Gallery = () => {
    return (
        <section id="gallery" className="relative isolate py-8 lg:py-16">
            <div className="md:max-w-[90%] min-h-[50vh] mx-auto px-8">
                <div className="flex mb-10 flex-col justify-between gap-y-5 py-4 md:gap-x-10 lg:flex-row">
                    <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                        Image Gallery
                    </h2>
                    <p className="my-auto max-w-xl text-base leading-8 text-gray-900 md:text-lg">
                        Explore our beautiful collection of photos featuring beauty of
                        Uttarakhand.
                    </p>
                </div>

                <div className="relative p-0 overflow-visible flex justify-start gap-4 flex-nowrap flex-1">
                    <div className="md:block hidden w-[18%] relative overflow-hidden flex-none">
                        <div className=" h-full rounded-2xl overflow-hidden">
                            <Image
                                src={G2}
                                alt="aa"
                                className=" rounded-3xl block w-full h-full object-cover  object-right hover:scale-[1.04] transition-all ease-in duration-200"
                            />
                        </div>
                    </div>

                    <div className="w-full relative p-0 flex-col">
                        <div className="md:flex md:flex-row gap-4">
                            <div className="md:block hidden rounded-2xl overflow-hidden">
                                <Image
                                    src={G3}
                                    alt="aa"
                                    className="block w-full h-60 object-cover origin-center hover:scale-[1.04] transition-all ease-in duration-200"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden">
                                <Image
                                    src={G6}
                                    alt="aa"
                                    className="block w-full h-60 object-cover origin-center hover:scale-[1.04] transition-all ease-in duration-200"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex flex-row gap-4">
                            <div className="md:block hidden rounded-2xl overflow-hidden w-[40%]">
                                <Image
                                    src={G4}
                                    alt="aa"
                                    className="block h-40 object-cover object-left  hover:scale-[1.04] transition-all ease-in duration-200"
                                />
                            </div>
                            <div className="rounded-2xl w-full overflow-hidden md:w-[60%] ">
                                <Image
                                    src={G5}
                                    alt="aa"
                                    className="block h-40 object-cover object-center hover:scale-[1.04] transition-all ease-in duration-200"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-[40%] relative overflow-hidden flex-none rounded-3xl">
                        <div className=" absolute top-0 right-0 bottom-0 left-0">
                            <Image
                                src={G1}
                                alt="aa"
                                className="block w-full h-full object-cover object-bottom hover:scale-[1.04] transition-all ease-in duration-200"
                            />
                        </div>
                    </div>
                </div>

                <div className="pointer-events-none relative z-50 mt-5 flex justify-center">
                    <a
                        href="/gallery"
                        className="pointer-events-auto inline-flex justify-center rounded-lg px-4 py-3 text-sm font-semibold text-black "
                    >
                        <span>Show more...</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
