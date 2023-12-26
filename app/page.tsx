import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Feature from '@/components/home/Feature';
import CtaTrip from '@/components/home/CtaTrip';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Feature />
        <CtaTrip />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
