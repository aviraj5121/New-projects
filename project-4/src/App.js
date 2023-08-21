import { useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import User from './pages/user';
import Createuser from './pages/create';
import Update from './pages/update';
function App() {
  const [count, setCount] = useState(0)
  return (

    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />}/>
          <Route path='/create' element={<Createuser />}/>
          <Route path='/update/:_id' element={<Update />}>
          
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
