import { useEffect, useState } from 'react';
import { weatherDataFormatted } from './weatherOpen';
import bgCold from '../assets/cold-bg.jpg';
import bgWarm from '../assets/warm-bg.jpg';
import CurrentDetails from './CurrentDetails';
import Footer from './Footer';

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');
  const [bg, setBg] = useState(bgWarm);

  //Use State hook for date

  var [date, setDate] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await weatherDataFormatted('stockholm', units);
      setWeather(data);

      // Dynamic bg
      const threshold = units === 'metric' ? 22 : 60;
      if (data.temp <= threshold) setBg(bgCold);
      else setBg(bgWarm);
    };

    fetchWeatherData();
  }, [units]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === 'C';
    button.innerText = isCelsius ? '°F' : '°C';
    setUnits(isCelsius ? 'metric' : 'imperial');
  };

  return (
    // Background Image
    <div
      className='App bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Header Content */}
      {weather && (
        <div>
          <div className='max-w-full px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 relative bg-blue-100/[.2]'>
            <div className='flex justify-end'>
              <button className='button' onClick={(e) => handleUnitsClick(e)}>
                °F
              </button>
            </div>

            <section>
              <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch'>
                  <div className='grid p-6 bg-none rounded-xl place-content-center sm:p-8'>
                    <div className='max-w-md mx-auto text-center lg:text-left'>
                      <header>
                        <h2 className='text-2xl font-bold text-slate-700 primary sm:text-4xl'>
                          Current Weather
                        </h2>
                        <h2 className='text-xl font-light text-slate-600 sm:text-2xl'>
                          {`${weather.name}, ${weather.country} `}
                        </h2>

                        {/* Date and Time */}
                        <div className='time'>
                          {date.toLocaleDateString()} 🕑{' '}
                          {date.toLocaleTimeString()}
                        </div>
                      </header>
                    </div>
                  </div>

                  {/* Current Weather Status */}
                  <div className='lg:col-span-2 lg:py-4'>
                    <div className='grid grid-cols-2 gap-4'>
                      <div className='group relative rounded-xl h-48 flex justify-center items-center '>
                        <div className='transition ease-out hover:scale-105 p-8 flex flex-row'>
                          <div>
                            <img
                              alt='Weather'
                              src={weather.iconURL}
                              className='mx-auto h-32 w-32 sm:rounded-full sm:bg-blue-50/[.1] object-cover sm:shadow-xl'
                            />
                            <h3 className='flex justify-center font-light sm:mt-4 sm:text-xl tracking-normal capitalize text-white'>
                              {weather.description}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Current Temprature */}
                      <div className='group relative h-48 flex justify-center mt-2'>
                        <div className='relative p-8'>
                          <p className='flex justify-center font-bold text-6xl sm:text-8xl tracking-normal text-white mt-3'>
                            {`${weather.temp.toFixed()}°${
                              units === 'metric' ? 'C' : 'F'
                            }`}
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/*Current weather Deatails */}
          <CurrentDetails weather={weather} units={units} />
        </div>
      )}
    </div>
  );
}

export default App;
