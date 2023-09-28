import Home from "./prallex";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Feature from "./Header and body/Feature";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import  Footer from './footer/footer'

function App() {
  return (
    <>
      <Home />
      <Feature />
    </>
  );
}

export default App;