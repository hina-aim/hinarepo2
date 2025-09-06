import Navbar from 'app/components/Navbar';
import Hero from 'app/components/Hero';
//import Planning from 'app/components/Planning';
import ProblemSolution from 'app/components/ProblemSolution';
import HowItWorks from 'app/components/HowItWorks';
import QA from 'app/components/QA'; 
import CTA from 'app/components/CTA';
import CustomFooter from 'app/components/CustomFooter';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex min-h-screen flex-col">
       
        <ProblemSolution />
        <HowItWorks />
        <QA /> 
      </main>
      <CTA />
      <CustomFooter />
    </>
  );
}