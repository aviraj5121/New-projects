import './App.css'
import Header from './Componets/Header';
import Main from './Componets/Main';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './Componets/Login';
import Register from './Componets/Register';
function App() {
  return (

    <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path='/' element={
                    <main className="mainpart">
                    <Header />
                    <Main />
                </main>
            } />
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
    </BrowserRouter>  

    </div>
  );
}

export default App;
