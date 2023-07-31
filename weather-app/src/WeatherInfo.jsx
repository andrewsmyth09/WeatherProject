import PropTypes from 'prop-types';

const WeatherInfo = ({ city, temperature, clouds, display }) => {
  return (
    <div id='weatherDisplay' style={{ display: display ? 'grid' : 'none' }} className="grid grid-cols-6 mt-4 space-x-9">
      <span className="material-symbols-outlined">location_city</span>
      <span>{city}</span>
      <span className="material-symbols-outlined">thermostat</span>
      <span>{temperature}°C</span>
      <span className="material-symbols-outlined">cloud</span>
      <span>{clouds}%</span>
    </div>
  );
};

WeatherInfo.propTypes = {
  city: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  clouds: PropTypes.number.isRequired,
  display: PropTypes.bool.isRequired
};

export default WeatherInfo;
