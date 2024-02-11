import React from 'react'

const Newsletter = () => {
    return (
        <section className='px-6 py-6 lg:px-8 lg:py-20'>
            <div className='relative isolate overflow-hidden shadow-xl shadow-gray-400 bg-white rounded-2xl'
                style={{
                    backgroundImage: "url('/hiking/hiking4.WEBP')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}>

                <div className='absolute w-full h-full z-[-9] bg-gradient-to-b from-black/20 to-black/60'></div>

                <div className='relative isolate overflow-hidden sm:px-24 py-12'>
                    <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-wide text-black sm:text-4xl' data-aos="fade-up" data-aos-duration="500">
                        Get the Latest Hiking Updates
                    </h2>
                    <p className='mt-4 mx-auto max-w-xl text-center text-sm text-gray-950 sm:text-base'
                        data-aos="fade-up" data-aos-duration="500">
                        Subscribe to our newsletter today and be the first to receive expert hiking tips, exciting outdoor adventures, and exclusive offers that you won&apos;t find anywhere else!
                    </p>
                    <form action='' className='mt-6 mx-auto max-w-lg col-span-5 lg:py-2' data-aos="fade-down" data-aos-duration="500">
                        <div className='flex gap-x-3'>
                            <label htmlFor='email-address' className='sr-only'>
                                Email address
                            </label>
                            <input
                                id='email-address'
                                name='email'
                                type='email'
                                autoComplete='email'
                                required
                                className='min-w-0 flex-auto rounded-lg border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/70 sm:text-sm sm:leading-6' placeholder='Enter your email' />
                            <button
                                type='submit'
                                className='flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600'>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter