import PropTypes from 'prop-types';

const WeatherInfo = ({ city, temperature, realFeel }) => {
  return (
    <div className="grid grid-cols-3 mt-4">
      <span>City: {city}</span>
      <span>Temperature: {temperature}°C</span>
      <span>Real Feel: {realFeel}°C</span>
    </div>
  );
};

WeatherInfo.propTypes = {
  city: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  realFeel: PropTypes.number.isRequired,
};

export default WeatherInfo;
