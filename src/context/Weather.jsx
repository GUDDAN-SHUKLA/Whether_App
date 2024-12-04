import React, { createContext, useContext, useState} from 'react';
import { getWeatherData, getWeatherDataForLocation } from '../api/index'

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
    const [searchData, setSearchData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async () => {
              const response = await getWeatherData(searchCity);
               setSearchData(response)
        };

      const fetchCurrentUserLocations = () => {
          navigator.geolocation.getCurrentPosition((position) => {
              getWeatherDataForLocation(
                position.coords.latitude,
                position.coords.longitude
              ).then((data) => setSearchData(data));
          });
        };

        return(
            <WeatherContext.Provider value={{
                searchCity,
                searchData,
                setSearchCity,
                fetchData,
                setSearchData,
                fetchCurrentUserLocations,
            }}>
                {props.children}
            </WeatherContext.Provider>
        );
};
