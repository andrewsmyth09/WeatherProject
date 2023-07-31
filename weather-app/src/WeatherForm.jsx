import { useState } from 'react';
import PropTypes from 'prop-types'

const WeatherForm = ({ onSubmit }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(location);
    setLocation('');
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 flex justify-center">
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
        value="Submit"
      />
    </form>
  );

};

WeatherForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WeatherForm;
