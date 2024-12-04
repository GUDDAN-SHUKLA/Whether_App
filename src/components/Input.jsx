import React from 'react'
import { useWeather } from '../context/Weather'
import { FaMagnifyingGlass} from 'react-icons/fa6'

function Input() {

    const weather = useWeather();
    //console.log(weather);


  return (
    <div className='flex flex-col relative justify-center items-center my-2'>
            <FaMagnifyingGlass className='absolute top-[27%] left-4 text-xl 
            cursor-pointer ' />
            <input 
              type='text'
              className='w-full h-auto rounded-3xl text-center py-3
              capitalize text-2xl text-gray-800 font-bold placeholder:text-white placeholder:font-semibold 
              outline-none bg-black/20 shadow-[0_0_10px_black]'
              value={weather.searchCity} 
              onChange= {(e) => {weather.setSearchCity(e.target.value)}}
              placeholder='Enter city name...'

            />
           
    </div>
  )
}

export default Input