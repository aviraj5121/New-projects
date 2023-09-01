import './App.css';
import { Parallax, ParallaxLayer} from "@react-spring/parallax"
import Section1 from './Section1';
function App() {
  return (
    <div className="App">
     <Parallax pages={3}  style={{backgroundImage: "./image1.jpeg"}}>

      <ParallaxLayer offset={0} className='center'><Section1 /></ParallaxLayer>
      <ParallaxLayer  offset={1} className='center'>asda</ParallaxLayer>
      <ParallaxLayer  offset={2} className='center'>asdasda</ParallaxLayer>
     </Parallax>
    </div>
  );
}

export default App;
