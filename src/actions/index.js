import axios from 'axios';

const API_KEY = '54f3991b05cb1fb4d5384f673650a508';
const rootURL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city){
    const url = `${rootURL}&q=${city},ro`;

    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}