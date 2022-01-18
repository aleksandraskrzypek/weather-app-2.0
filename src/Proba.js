import React,{useState} from 'react'
import clearImg from './weather_icons_dovora_interactive/SVG/day_clear.svg'
import cloudsImg from './weather_icons_dovora_interactive/SVG/cloudy.svg'
import thunderImg from './weather_icons_dovora_interactive/SVG/thunder.svg'
import rainImg from './weather_icons_dovora_interactive/SVG/rain.svg'
import drizzleImg from './weather_icons_dovora_interactive/SVG/day_rain.svg'
import snowImg from './weather_icons_dovora_interactive/SVG/snow.svg'
import mistImg from './weather_icons_dovora_interactive/SVG/mist.svg'
import overcastImg from './weather_icons_dovora_interactive/SVG/overcast.svg'
import fogImg from './weather_icons_dovora_interactive/SVG/fog.svg'
import tornadoImg from './weather_icons_dovora_interactive/SVG/tornado.svg'

function Proba() {
    const [type, setType] = useState('Rain');

 



    return (
        <div>
            
            <h1>{type}</h1>

            {(() => {
                if (type === "Thunderstorm"){
                return <img src={thunderImg} alt="" />
            } else if (type === "Drizzle"){
                return <img src={drizzleImg} alt="" />
            } else if (type === "Rain"){
                return <img src={rainImg} alt="" />
            } else if (type === "Snow"){
                return <img src={snowImg} alt="" />
            } else if (type === "Mist"){
                return <img src={mistImg} alt="" />
            } else if (type === "Smoke"){
                return <img src={overcastImg} alt="" />
            } else if (type === "Haze"){
                return <img src={mistImg} alt="" />
            } else if (type === "Clear"){
                return <img src={clearImg} alt="" />
            } else if (type === "Clouds"){
                return <img src={cloudsImg} alt="" />
            } else if (type === "Dust"){
                return <img src={mistImg} alt="" />
            } else if (type === "Fog"){
                return <img src={fogImg} alt="" />
            } else if (type === "Sand"){
                return <img src={mistImg} alt="" />
            } else if (type === "Ash"){
                return <img src={mistImg} alt="" />
            } else if (type === "Squall"){
                return <img src={overcastImg} alt="" />
            } else if (type === "Tornado"){
                return <img src={tornadoImg} alt="" />
            } 

            })()}
        </div>
    )
}

export default Proba
