import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./components/Global";
import Popular from "./components/popular";
import Anime from "./components/Anime";
import Homepage from "./components/homepage";
function App() {
  const test = useGlobalContext()
  console.log(test)
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/anime/:id" element={<Anime />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
