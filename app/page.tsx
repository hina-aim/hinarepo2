import Navbar from 'app/components/Navbar';
import Hero from 'app/components/Hero';
import Features from 'app/components/Features';
import CTA from 'app/components/CTA'; // <-- Add this line
import CustomFooter from 'app/components/CustomFooter';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Features />
        {/* We'll remove the <h1>Hello CONTAPP!</h1> from here eventually, but let's keep it for now */}
      </main>
      <CTA /> {/* <-- Add our CTA component here */}
      <CustomFooter />
    </>
  );
}