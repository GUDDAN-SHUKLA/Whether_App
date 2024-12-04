import  { useEffect } from 'react';
import { useWeather } from '../context/Weather'

import Card from './Card';

function WeatherData() {
    const weather = useWeather();
    
    useEffect(() => {
      if (weather.searchCity) {
        weather.fetchData();
        
      }else{
        weather.fetchCurrentUserLocations()
      }
    
    }, [weather.searchCity])
    
       return (

      <div className={`w-full h-screen mx-auto bg-gray-700 ${(weather?.searchData?.current?.temp_c > 15) ?
         "bg-[url('./assets/hot.jpg')]" : "bg-[url('./assets/cold.jpg')]"} 
        bg-cover bg-no-repeat bg-center opacity `}>
     
        <div className='w-full mx-auto flex justify-center items-center'>
             
        <Card />
        </div> 
      </div>
    )
}

export default WeatherData