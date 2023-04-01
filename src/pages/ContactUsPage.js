import ContactUs from "../components/ContactUs";
import './page.css';

function ContactUsPage({ image }) {
  return (
    <div className="m-4">
      <ContactUs />
      <div className="wrapper">
        <img className="rounded" src={image} alt="contact up pic" />
      </div>
    </div>
  );
}

export default ContactUsPage;
