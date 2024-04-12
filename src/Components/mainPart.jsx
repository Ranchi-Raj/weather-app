import React,{useState} from "react";

export default function Main() {

    const api = {
        key:"5d4ac61b2ca39fd52e2ce197db15cf83",
        base:"https://api.openweathermap.org/data/2.5/",
    };

    const [city,setCity] = useState("");
    const [weather,setWeather] = useState({});

    const clicked = () => {
        fetch(`${api.base}weather?q=${city}&appid=${api.key}&units=metric`)
        .then((res) => res.json())
        .then((result) => {
            setWeather(result);
            console.log(result);
        });
        console.log("Clicked");

        // console.log(weather);
    }

    return (
        <div className="justify-center input">
            <div>
                <input 
                    className="mt-8 p-2 rounded-md border-2 hover:border-blue-300 focus:outline-none focus:border-blue-700"
                    type="text"
                    placeholder="Enter city/town..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="m-5 p-2 bg-slate-200 rounded-lg hover:bg-blue-500 after" onClick={clicked}>Search</button>
            </div>

            <div></div>

            {/* Mentioning the body with weather details */}
            { weather.main !== undefined
                &&  weather.wind !== undefined
            ?
             <div className="bg-blue-300 w-64 p-4 rounded-2xl glass">
                <div>Place : {weather.name}</div>
                <div>Temp : {weather.main.temp}°C</div>
                <div>Max Temp : {weather.main.temp_max}°C</div>
                <div>Min Temp : {weather.main.temp_min}°C</div>

                <div>Wind speed :{weather.wind.speed} m/s</div>
                <div>Wind direction :{weather.wind.deg} deg</div>

            </div>
            :
            undefined
            }
        </div>
    );
}
