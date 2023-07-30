import { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

export default function Weather() {
  const [temperature, setTemperature] = useState('');
  const [city, setCity] = useState('');
  const [clouds, setClouds] = useState('');

  const handleSubmit = (location) => {
    locationApi(location);
  };

  const locationApi = (loc) => {
    const api = '0849a36748b3101e43ba1936e387e3b5';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      loc
    )}&appid=${api}&units=metric`)
      .then((response) => {
        if (!response.ok) {
          alert('Please enter a different city');
          throw new Error('Network key for location is not ok');
        }

        return response.json();
      })
      .then((data) => {
        const roundedTemp = Math.round(data.main.temp);
        const clouds = data.clouds.all;
        const cityName = data.name;
        setTemperature(roundedTemp);
        setClouds(clouds);
        setCity(cityName);
      })
      .catch((err) => {
        console.log(`Error fetching new data:  ${err}`);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Weather Forecast</h1>
        <WeatherForm onSubmit={handleSubmit} />

        <WeatherInfo city={city} temperature={temperature} clouds={clouds} />
        </div>
      </div>
  );
}


