import React from 'react'
import Image from 'next/image'
import Hero1 from '@/public/hiking/hiking1.jpg';
import Hero2 from '@/public/hiking/hiking2.jpg';
import Hero3 from '@/public/hiking/hiking3.jpg';
import Hero6 from '@/public/hiking/hiking6.jpg';

const treks = [
    {
        id: 1,
        title: 'Kedarkantha Trek',
        href: '#',
        imageUrl: Hero1,
        from: 'Delhi',
        to: 'Dehradun',
        duration: '7 Days',
        rate: 18000,
    },
    {
        id: 2,
        title: 'Bhramatal Trek',
        href: '#',
        imageUrl: Hero2,
        from: 'Delhi',
        to: 'Dehradun',
        duration: '7 Days',
        rate: 18000,
    },
    {
        id: 3,
        title: 'Dayara Bugyal Trek',
        href: '#',
        imageUrl: Hero3,
        from: 'Delhi',
        to: 'Dehradun',
        duration: '7 Days',
        rate: 18000,
    },
]

const CtaTrip = () => {
    return (
        <section className='bg-white px-6 pb-10 pt-16 lg:pb-20 lg:pt-24 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
                <p className='text-base font-semibold leading-7 text-blue-700'>
                    Upcoming Travel Destinations Await
                </p>
                <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                    Discover Your Next Adventure
                </h2>
                <p className='mt-3 text-base leading-8 text-gray-500'>
                Are you ready to embark on unforgettable journeys to captivating destinations? Get set to explore a world of wonders as we unveil our upcoming trips designed to ignite your wanderlust.
                </p>
            </div>

            <div className='mx-auto px-0 max-w-7xl lg:px-8'>
                <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 md:gap-y-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3'>
                    {treks.map((trek) => (
                        <article key={trek.id} className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 
                        aspect-[4/5]'>
                            <Image
                                src={trek.imageUrl}
                                alt='trek-img'
                                className='absolute inset-0 -z-10 w-full h-full object-cover'
                            />
                            <div className='absolute inset-0 z-[-10] bg-gradient-to-t from-black/70 to-white/10'></div>

                            <h3 className='text-xl leading-6 text-gray-100 md:text-2xl'>
                                <a href={trek.href}>
                                    <span className='absolute inset-0' />
                                    {trek.title}
                                </a>
                            </h3>
                            <div className='my-1 flex flex-wrap justify-between items-center gap-x-4 gap-y-1 overflow-hidden leading-6 text-sm text-gray-300'>
                                <div className='flex gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='my-auto'><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <div>
                                        <span>{trek.from} </span>
                                        to
                                        <span> {trek.to}</span>
                                    </div>
                                </div>
                                <div className='flex gap-x-1 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='my-auto'><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    <div>
                                        {trek.duration}
                                    </div>
                                </div>
                            </div>
                            <div className='py-3 flex flex-wrap justify-between items-center gap-x-4 overflow-hidden border-t border-gray-200 leading-6 text-sm text-gray-300'>
                                <div>
                                    ₹{trek.rate}
                                </div>
                                <a href="#" className="rounded-2xl px-2 py-1 text-sm bg-orange-500 text-white">
                                    Get details
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CtaTrip