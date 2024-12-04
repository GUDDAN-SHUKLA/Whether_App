import React from 'react'
import { FaLocationDot  } from 'react-icons/fa6'
import Input from './Input'
import { useWeather } from '../context/Weather'

const Card = () => {

  const weather = useWeather();
  //const temp = weather?.searchData?.current?.temp_c;
  //console.log((temp > 15) ? "Hello" : "world");

  const dateBulider = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[d.getDay()]; 
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    //console.log(day);
    return `${day} ${date} ${month} ${year}`
  }    
  
  
  return (
    <div className='max-w-md flex flex-col sm:items-center mt-8 justify-center '> 
      
      <h3 className='text-4xl text-black font-bold pb-4'>Weather App</h3>
      <div className={`w-full h-auto shadow-[0_0_10px_black] text-white
           rounded-2xl text-center py-2 px-6  `}>
             <Input />
             <span className='text-xl text-black font-bold py-16'>
               {dateBulider(new Date())}
             </span>
             
             <div className='w-full flex flex-col justify-center my-4 items-center '>
               <div className='w-full h-auto relative rounded-lg py-4 
                 bg-gradient-to-r from-indigo-500 to-cyan-500/50'>
                 <FaLocationDot className='text-xl absolute top-6 left-[18%]' />
                 <span className='text-lg absolute top-4 left-[22%] capitalize font-bold px-2' >{weather?.searchData?.location?.name} , 
                     {weather?.searchData?.location?.country}, {weather?.searchData?.location?.region}
                 </span>
                 <div className='w-full flex flex-wrap justify-evenly items-center mx-auto mt-4 '>
                   <img src={weather?.searchData?.current?.condition?.icon} width={150} height={150} />
 
                     <div className='flex flex-col pt-8'>
                       <span className='text-3xl font-bold'>{weather?.searchData?.current?.temp_c}&deg;C</span>
                       <span className='text-2xl font-bold'>{weather?.searchData?.current?.condition?.text} </span>
                       <button className='px-3 py-1 text-sm bg-white mx-2 mt-3 text-black 
                       font-bold tracking-wider rounded-2xl'>{weather?.searchData?.location?.tz_id}</button>
                     </div>
                 </div>
              
               </div>
 
               <div className='w-full mx-auto mt-6 flex flex-wrap justify-center items-center py-4 
               rounded-lg bg-black/50'>    
                 <div className='flex flex-col my-2'>
                   <button className='px-2 py-1 text-md bg-white mx-2 text-black font-bold rounded-2xl'>
                     Feels likes
                   </button>
                   <span className='text-xl font-semibold'> {weather?.searchData?.current?.feelslike_c} &#176;</span>
                 </div>
                 
                 <div className='flex flex-col my-2'>
                   <button className='px-2 py-1 text-md bg-white mx-2 text-black font-bold rounded-2xl'>
                     Min Temp
                   </button>
                   <span className='text-xl font-semibold'> {weather?.searchData?.current?.temp_c}&#176;</span>
                 </div>
 
                 <div className='flex flex-col my-2'>
                   <button className='px-2 py-1 text-md bg-white mx-2 text-black font-bold rounded-2xl'>
                     Humidity
                   </button>
                   <span className='text-xl font-semibold'> {weather?.searchData?.current?.humidity}%</span>
                 </div>
 
                 <div className='flex flex-col my-2'>
                   <button className='px-2 py-1 text-md bg-white mx-2 text-black font-bold rounded-2xl'>
                     Wind Speed
                   </button>
                   <span className='text-xl font-semibold'> {weather?.searchData?.current?.wind_kph}Km/H</span>
                 </div>
 
                 <div className='flex flex-col my-2'>
                   <button className='px-3 py-1 text-md bg-white mx-2 text-black font-bold rounded-2xl'>
                     Temp_F
                   </button>
                   <span className='text-xl font-semibold'> {weather?.searchData?.current?.temp_f}&#176;</span>
                 </div>
                 
                 <div className='flex flex-col my-2'>
                   <button className='px-2 py-1 text-md bg-white mx-2 text-black font-bold rounded-2xl'>
                     Pressure
                   </button>
                   <span className='text-xl font-semibold'> {weather?.searchData?.current?.pressure_mb}mbar</span>
                 </div>
               </div> 
             </div>
 
            
      </div>

        
    </div>
  )
}

export default Card
