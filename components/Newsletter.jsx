import React from 'react'

const Newsletter = () => {
    return (
        <>
            {/* <section className='py-1 lg:py-24 bg-black'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='relative isolate overflow-hidden shadow-xl sm:rounded-3xl sm:px-24'>
                        <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-wide text-gray-100 sm:text-4xl'>Get notified when we&apos;re launching</h2>
                        <p className='mt-4 mx-auto max-w-xl text-center text-3xl text-gray-200 sm:text-base'>
                            Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
                        </p>
                        <form action='' className='mt-6 mx-auto max-w-md col-span-5 lg:py-2'>
                            <div className='flex gap-x-3'>
                                <label htmlFor='email-address' className='sr-only'>Email address</label>
                                <input id='email-address' name='email' type='email' autoComplete='email' required className='min-w-0 flex-auto rounded-lg border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/70 sm:text-sm sm:leading-6' placeholder='Enter your email' />
                                <button type='submit' className='flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600'>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section> */}

            {/*Newsletter with backgroud image*/}
            <section className='relative isolate overflow-hidden'
                style={{
                    backgroundImage: "url('/hiking/hikingnl.jpg ')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    // backgroundAttachment: 'fixed',
                }}
            >
                <div className='absolute w-full h-full z-[-10] bg-gradient-to-b from-black/10 via-black/30 to-black/90'></div>
                <div className='mx-auto max-w-7xl px-6 py-16 lg:py-24 lg:px-8'>
                    <div className='relative isolate overflow-hidden sm:px-24'>
                        <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-wide text-black sm:text-4xl'>
                            Get the Latest Hiking Updates
                        </h2>
                        <p className='mt-4 mx-auto max-w-xl text-center text-sm text-gray-950 sm:text-base'>
                        Subscribe to our newsletter today and be the first to receive expert hiking tips, exciting outdoor adventures, and exclusive offers that you won&apos;t find anywhere else!
                        </p>
                        <form action='' className='mt-6 mx-auto max-w-md col-span-5 lg:py-2'>
                            <div className='flex gap-x-3'>
                                <label htmlFor='email-address' className='sr-only'>Email address</label>
                                <input id='email-address' name='email' type='email' autoComplete='email' required className='min-w-0 flex-auto rounded-lg border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/70 sm:text-sm sm:leading-6' placeholder='Enter your email' />
                                <button type='submit' className='flex-none rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600'>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Newsletter