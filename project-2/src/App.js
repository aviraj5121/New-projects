import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Header from "./components/header.js"
import Movielist from './components/movielist';
import Home from "./Pages/home"
import Movie from './Pages/details';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:type" element={<Movielist />}/>
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
