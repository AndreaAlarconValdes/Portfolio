import "./contact.css";
import { ContactForm } from "./contact-form";
import { LinkedinIcon, GithubIcon } from "../../components/icons";
export function Contact() {
  return (
      <main id="contact" className="contact-container">
        <ContactForm />
        <section className="contact-info">
          <h3>Phone number</h3>
          <p>+34 644 403 445</p>
          <h3>Email</h3>
          <p>andreaalarconvaldes@gmail.com</p>
          <div>
            <a href="">
              <LinkedinIcon color="#000" width="25" />
            </a>
            <a href="">
              <GithubIcon color="#000" width="25" />
            </a>
          </div>
        </section>
      </main>
  );
}
