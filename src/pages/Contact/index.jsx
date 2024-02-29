import "./index.css";
import { ContactForm } from "./ContactForm";
import { ContactInformation } from "./ContactInformation";
import { Blob, WaveFooter } from "../../components/Blobs";

export function Contact() {
  return (
    <>
    <main className="contact-container">
      <ContactForm />
      <ContactInformation />
    </main>
      <WaveFooter color="#5f5fdb"/>
      </>
  );
}
