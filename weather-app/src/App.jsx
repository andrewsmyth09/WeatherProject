import {useState} from 'react';

export default function App() {
  const [location, setLocation] = useState('')
  const [temperature, setTemperature] = useState('')
  const [city, setCity] = useState('')
  const [realFeel, setRealFeel] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    locationApi(location)
  }

  const handleChange = (e) => {
    setLocation(e.target.value)
  }

  const locationApi = (loc) => {
    const api = '0849a36748b3101e43ba1936e387e3b5'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      loc
    )}&appid=${api}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network key for location is not ok')
        }

        return response.json()
      })
      .then(data => {
        const roundedTemp = Math.round(data.main.temp)
        const feelTemp = Math.round(data.main.feels_like)
        const cityName = data.name
        setTemperature(roundedTemp)
        setRealFeel(feelTemp)
        setCity(cityName)
      })
      .catch(err => {
        console.log(`Error fetching new data:  ${err}`)
      })

      setLocation('')
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Weather Forecast</h1>
        <form onSubmit={handleSubmit} className='flex space-x-2'>
          <input
            type="textbox"
            className="form-input px-4 py-3 border border-black"
            placeholder="Enter your location..."
            onChange={handleChange}
            value={location}
            required
          />
          <input
            type="submit"
            className="form-input px-4 py-3 bg-slate-300 border border-black hover:bg-white"

          />
        </form>
        <p>City: {city}</p>
      <p>Temperature: {temperature}</p>
      <p>Real Feel: {realFeel}</p>
      </div>
    </div>
  );
}


