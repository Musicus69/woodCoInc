import Testimonials from "../components/Testimonials";

function TestimonialsPage({ image }) {
  return (
    <div className="m-4">
      <Testimonials />
      <div className="wrapper">
        <img className="rounded" src={image} alt="testimonial pic" />
      </div>
    </div>
  );
}

export default TestimonialsPage;
