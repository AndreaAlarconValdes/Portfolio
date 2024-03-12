import "./index.css";
import { ContactForm } from "./ContactForm";
import { ContactInformation } from "./ContactInformation";

export function Contact() {
  return (
    <>
    <main className="contact-container">
      <ContactForm />
      <ContactInformation />
    </main>
      </>
  );
}
