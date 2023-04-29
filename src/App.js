import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import CullenImage from "./images/cullen.jpg";
import JoelImage from "./images/joel.jpg";
import WoodImage from "./images/woodbrokers.jpg";
import "./App.css";

function App() {
  return (
    <div className="back textc pb-2">
      <div className="sm:block md:flex justify-between mx-4 pt-4 items-center">
        <header className="font-bold text-4xl">Wood Brokers Co. Inc.</header>
        <Sidebar />
      </div>
      <Route path="/contactUs">
        <ContactUsPage image={JoelImage} />
      </Route>
      <Route path="/">
        <HomePage image={WoodImage} />
      </Route>
      <Route path="/testimonials">
        <TestimonialsPage image={CullenImage} />
      </Route>
    </div>
  );
}

export default App;
