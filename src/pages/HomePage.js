import Home from "../components/Home";

function HomePage({ image }) {
  return (
    <div className="m-4">
      <Home />
      <div className="wrapper">
        <img className="rounded" src={image} alt="home pic" />
      </div>
    </div>
  );
}

export default HomePage;
