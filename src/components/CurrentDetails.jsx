import React from 'react';

import { FaWind } from 'react-icons/fa';
import { ImArrowUp, ImArrowDown, ImCool } from 'react-icons/im';
import { WiHumidity, WiBarometer } from 'react-icons/wi';

const CurrentDetails = ({ weather, units }) => {
  const tempUnit = units === 'metric' ? '°C' : '°F';
  const windUnit = units === 'metric' ? 'm/s' : 'm/h';
  const cards = [
    {
      id: 1,
      icon: <ImArrowDown />,
      title: 'Min. Temp',
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <ImArrowUp />,
      title: 'Max. Temp',
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <ImCool />,
      title: 'Feels Like',
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <WiBarometer size={70} />,
      title: 'SL Pressure',
      data: weather.pressure,
      unit: 'hPa',
    },
    {
      id: 5,
      icon: <WiHumidity size={70} />,
      title: 'Humidity',
      data: weather.humidity,
      unit: '%',
    },
    {
      id: 6,
      icon: <FaWind />,
      title: 'Wind Speed',
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ];
  return (
    <>
      <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 sm:mx-20 mx-4 pb-6'>
        {cards.map(({ id, icon, title, data, unit }) => (
          <div key={id} className='card'>
            <div className='flex justify-left gap-5  bg-sky-200/[.2] p-8 shadow-xl transition  hover:shadow-sky-500/10'>
              <div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-sky-100 text-sky-300 text-4xl flex-shrink-0 transition ease-out hover:scale-105 p-3'>
                <div className=''>{icon}</div>
              </div>
              <div className='flex flex-col mt-2'>
                <h2 className='text-lg font-light text-white items-center'>
                  {title}
                </h2>
                <h2 className='text-3xl font-bold text-white items-center'>
                  {`${data}${unit}`}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CurrentDetails;
