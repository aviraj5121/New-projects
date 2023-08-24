import './App.css';
import react from 'react'
import Search from './componets/search';
import CurrentWeather from './componets/current-weather';
import Forecast from './componets/forecast';
function App() {
  const [currentweather , setCurrentWeather] = react.useState(null);
  const [currentforecast , setForecast] = react.useState(null);
  const handleSearchChange = async(searchdata) =>{
    const [lat , long ] = searchdata.value.split(" ")
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=859fd67724f106c0baef20f9d219e540&units=metric`)
    const response1 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=859fd67724f106c0baef20f9d219e540&units=metric`)
    const data1 = await response1.json()
    const data = await response.json()
    console.log(data1)
    setCurrentWeather(data)
    setForecast(data1)
  }
  return (
    <div className="App">
      <Search onSearchChange={handleSearchChange}/>
      {currentweather && <CurrentWeather data={currentweather} />}
      {currentforecast && <Forecast data={currentforecast}/>}
    </div>
  );
}

export default App;
