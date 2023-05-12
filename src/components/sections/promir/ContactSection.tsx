import ContactBlock from './ContactBlock';
import ContactFormPromir from './ContactFormPromir';

const ContactSection: React.FC = () => (
  <section className="mt-10">
    <div className="flex flex-col lg:flex-row">
      <ContactBlock />
      <ContactFormPromir />
    </div>
  </section>
);
export default ContactSection;
