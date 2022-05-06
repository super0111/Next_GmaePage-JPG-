import { Header } from "./pages/header";
import { Footer } from "./components/footer/index.jsx";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Accessories } from "./components/accessories";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div className="background">
      <Header />
      <Accessories/>
      <Footer />
    </div>
  );
};

export default App;
