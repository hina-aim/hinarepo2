import Navbar from 'app/components/Navbar';
import CustomFooter from 'app/components/CustomFooter';
import ContactForm from 'app/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactForm />
      </main>
      <CustomFooter />
    </>
  );
}