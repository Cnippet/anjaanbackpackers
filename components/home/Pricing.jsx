import React from 'react'

const packages = [
    {
        name: "Basic Plan",
        para: "Offering: Professional hiking guides, group hiking excursions, and access to exclusive trails.",
        rate: 1500,
        link: "www.example.com",
        features: [
            'Simple and Cheap Prices',
            'Access to Exclusive Trails',
            'Expert Hiking Guides',
            'Group Hiking Events',
            '24/7 Customer Support'
        ]
    },
    {
        name: "Plus Plan",
        para: "Services: High-quality gear rental, custom hiking trips, fancy places to stay, delicious trail food",
        rate: 2000,
        link: "www.example.com",
        features: [
            'Premium Gear Rental',
            'Luxury Accommodations',
            'Private Hiking Guides',
            'Flexible and Affordable Pricing',
            'Access to Exclusive Trails',
            'Customized Hiking Experiences',
            'Exclusive Trail Access',
            '24/7 Customer Support'
        ]
    },
]

const Pricing = () => {
    return (
        <section className='bg-white py-24 sm:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto max-w-4xl text-center'>
                    <h2 className='text-base font-semibold leading-7 text-blue-600'>
                        Discover
                    </h2>
                    <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        Different Pricing Plans Available for Everyone
                    </p>
                </div>
                <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600'>
                    Choose the perfect hiking plan to fit your needs, whether you seek adventure or a leisurely stroll in nature.
                </p>

                <div className='isolate mx-auto mt-10 grid max-w-md gap-8 lg:mx-auto lg:max-w-4xl lg:grid-cols-2'>
                    {packages.map((pack, index) => (
                        <div key={index} className='rounded-3xl p-8 shadow-md ring-1 ring-gray-200 lg:p-10'>
                            <h3 className='text-lg font-semibold leading-8 text-gray-900'>
                                {pack.name}
                            </h3>
                            <p className='mt-4 text-sm leading-6 text-gray-600 md:h-12'>
                                {pack.para}
                            </p>
                            <p className='mt-6 flex items-baseline gap-x-1'>
                                <span className='text-4xl font-bold tracking-tight text-gray-900'>
                                    {`₹${pack.rate}`}
                                </span>
                                <span className='text-sm font-semibold'>
                                    /person
                                </span>
                            </p>
                            <a href="" className='mt-6 block rounded-md bg-orange-400 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-xl hover:bg-orange-500'>
                                Buy plan
                            </a>
                            <ul className='mt-8 text-sm leading-6 space-y-4 xl:mt-10'>
                                {pack.features.map((feature, i) => (
                                    <li key={i} className='flex gap-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path></svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing