import Navbar from 'app/components/Navbar';
import CustomFooter from 'app/components/CustomFooter';
import Pricing from 'app/components/pricing'; // <-- Add this line

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800">CONTAPP Features</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover how CONTAPP helps you manage and grow your professional network.
          </p>
        </div>
        <Pricing /> {/* <-- Add our Pricing component here */}
      </main>
      <CustomFooter />
    </>
  );
}