import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Feature from '../components/home/Feature';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Feature />
      </main>
      <Footer />
    </>
  )
}
