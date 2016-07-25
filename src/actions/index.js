import axios from 'axios';

const API_KEY = 'c7e59ee73661e1367538fa098a955d47'; // API key named: Test
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&mode=json`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log('Action - fetchWeather: request =');
    // console.log(request);

    return {

        type: FETCH_WEATHER,
        payload: request
    };
}
