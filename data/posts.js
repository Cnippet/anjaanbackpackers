import Hero1 from '@/public/blogs/t00.jpg'
import Hero2 from '@/public/blogs/r00.jpg'
import Hero3 from '@/public/blogs/k00.jpg'
import Hero4 from '@/public/blogs/t01.jpeg'
import Author1 from '@/public/profile/Profile1.jpg'
import Author2 from '@/public/profile/Profile2.jpg'

const posts = [
    {
        id: 1,
        title: 'Kedarnath Temple',
        href: '/blogs/kedarnath-temple',
        img: Hero3,
        description: 'Dedicated to Lord Shiva, Kedarnath temple is one of the twelve Jyotirlingas and a Dham among the Chardhaams, standing at an altitude of 3580 m above sea level. Pandavaas established Kedarnath temple in the 8th century at the banks of the Mandakini River',
        date: 'Jan 15, 2024',
        datetime: '2020-03-16',
        category: { title: 'Travel', href: '#' },
        author: {
            name: 'Ananya Krishali',
            href: '#',
            imageUrl: Author2,
        },
    },
    {
        id: 2,
        title: 'Tungnath Temple',
        href: '/blogs/tungnath-temple',
        img: Hero1,
        description: 'Tungnath temple is the highest Shiva temple which is situated at an elevation of 12,106 feet from the sea level.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Travel', href: '#' },
        author: {
            name: 'Ananya Krishali',
            href: '#',
            imageUrl: Author2,
        },
    },
    {
        id: 3,
        title: 'Top 15 places to visit in Rishikesh in 2024',
        href: 'blogs/top-15-places-to-visit-in-rishikesh-in-2024',
        img: Hero2,
        description: 'Rishikesh is renowned for its adventure activities and its reputation as the "Yoga capital of the world," making it an ideal destination for both thrill-seekers and those seeking inner peace.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Travel', href: '#' },
        author: {
            name: 'Cathy Mueller',
            href: '#',
            imageUrl: Author1,
        },
    },
    {
        id: 4,
        title: 'Kartikswami Temple',
        href: 'blogs/kartikswami-temple',
        img: Hero4,
        description: 'Kartikeya temple is a type of Hindu temple where the main deity is Lord Kartikeya, one of the sons of prime Hindu deities Lord Shiva and Goddess Parvati. ',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Travel', href: '#' },
        author: {
            name: 'Cathy Mueller',
            href: '#',
            imageUrl: Author1,
        },
    },
]

export default posts