import axios from "axios";

const baseURL ="https://api.weatherapi.com/v1/current.json?key=89937438aa954ee9b12174437241502";

export const getWeatherData = async (city) => {
  const response = await axios.get(`${baseURL}&q=${city}&aqi=yes`);
  return await response.data;
};

//console.log(getWeatherData);

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await axios.get(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.data;
};