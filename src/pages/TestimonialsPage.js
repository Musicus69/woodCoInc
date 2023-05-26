import Testimonials from "../components/Testimonials";

function TestimonialsPage({ image }) {
  return (
    <div className="m-4">
      <Testimonials />
      <div className="wrapper">
        <img className="rounded mt-4" src={image} alt="testimonial pic" />
      </div>
    </div>
  );
}

export default TestimonialsPage;
