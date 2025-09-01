import Navbar from 'app/components/Navbar';
import CustomFooter from 'app/components/CustomFooter';
import Planning from 'app/components/Planning';

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Planning /> {/* Pricing component now starts right after Navbar */}
      </main>
      <CustomFooter />
    </>
  );
}