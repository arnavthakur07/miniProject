import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
         city:"delhi",
         feelsLike:25.08,
         humidity:76,
         temp:24.58,
         tempMax:24.58,
         tempMin:24.58,
         weather:"clear sky"
    });


    let updateInfo = (newInfo) => {
     setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}