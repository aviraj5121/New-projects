import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './login';
import Resgistor from './resgistor';
import Dashboard from './Dashboard';

function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registation" element={<Resgistor/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
