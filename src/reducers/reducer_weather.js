import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {

    // console.log('Reducer - reducer_weather: action =');
    // console.log(action);

    switch (action.type) {

        case FETCH_WEATHER:
            return [ action.payload.data, ...state ]; // ES6, similar to concat, only added at top.
    }
    return state;
}
