import { MdVisibility } from "react-icons/md";
import { WiRaindrop, WiStrongWind, WiThermometer } from "react-icons/wi";
import './weather.scss'

export const WeatherCard = ({ data }) => {
    
    const{city:{name}}=data

    const { main, weather,visibility, wind } = data.list[0] || {};
   

    return (
        <div className="weather" >
            <h2>{name || 'N/A'}</h2>
            <p>{weather && weather[0] ? weather[0].description : 'N/A'}</p>
            <div >
                <div>
                    <WiThermometer size={50} />
                    <p>{main ? `${Math.round(main.temp)}°C` : 'N/A'}</p>
                </div>
                <div>
                    <WiStrongWind size={50} />
                    <p>{wind ? `${wind.speed} m/s` : 'N/A'}</p>
                </div>
                <div>
                    <WiRaindrop size={50} />
                    <p>{main ? `${main.humidity}%` : 'N/A'}</p>
                </div>
                <div>
                    <MdVisibility size={50} />
                    <p>{visibility ? `${visibility / 1000} km` : 'N/A'}</p>
                </div>
            </div>
        </div>
    );
};
