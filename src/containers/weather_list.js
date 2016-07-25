import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

export default class WeatherList extends Component {

    constructor(props) {
        super(props);
    }

    renderWeather(cityData) {

        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pres = cityData.list.map(weather => weather.main.pressure);
        const hums = cityData.list.map(weather => weather.main.humidity);
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="orange" units="C"/></td>
                <td><Chart data={pres} color="blue" units="hPa"/></td>
                <td><Chart data={hums} color="red" units="%"/></td>
            </tr>
        );
    }

    render() {

        return (

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state) {
//
//     /*
//     state.weather comes from the line:
//         weather: WeatherReducer
//      in reducers/index.js.
//      */
//     return { weather: state.weather };
// }

// refactored from above to use ES6 syntax
function mapStateToProps({ weather }) { // { weather } === { weather: weather }

    /*
     state.weather comes from the line:
     weather: WeatherReducer
     in reducers/index.js.
     */
    return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
