import React from 'react'
import './Weather.css'
import {Card, Container,CardGroup,Row, Col } from 'react-bootstrap';
import {useState, useEffect} from 'react'
import axios from 'axios'

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


function Weather() {

    const [cityName, setCityName] = useState('Kraków');

    const [temp1, setTemp1] = useState('')
    const [temp2, setTemp2] = useState('')
    const [temp3, setTemp3] = useState('')
    const [temp4, setTemp4] = useState('')
    const [temp5, setTemp5] = useState('')
    const [temp6, setTemp6] = useState('')
    const [temp7, setTemp7] = useState('')

    const [type1, setType1] = useState('')
    const [type2, setType2] = useState('')
    const [type3, setType3] = useState('')
    const [type4, setType4] = useState('')
    const [type5, setType5] = useState('')
    const [type6, setType6] = useState('')
    const [type7, setType7] = useState('')


    let today = new Date();
    let tomorrow = new Date();
    let dayaftertomorrow = new Date();
    let dayaftertomorrow2 = new Date();
    let dayaftertomorrow3 = new Date();
    let dayaftertomorrow4 = new Date();
    let dayaftertomorrow5 = new Date();

    tomorrow.setDate(today.getDate() + 1)
    dayaftertomorrow.setDate(tomorrow.getDate() + 1)
    dayaftertomorrow2.setDate(tomorrow.getDate() + 2)
    dayaftertomorrow3.setDate(tomorrow.getDate() + 3)
    dayaftertomorrow4.setDate(tomorrow.getDate() + 4)
    dayaftertomorrow5.setDate(tomorrow.getDate() + 5)

    const [date, setDate] = useState(new Date());

    const dateBuilder = (d) => {
        let days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
        
        let day = days[d.getDay()]

        return `${day}`
      }


    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+`${cityName}`+'&units=metric&APPID=af8caf69fddab502ce9c5b842dd05b56')
  
        .then(function (response) {

        console.log(response.data.list[0])

        setTemp1(response.data.list[0].main.temp)
        setTemp2(response.data.list[1].main.temp)
        setTemp3(response.data.list[2].main.temp)
        setTemp4(response.data.list[3].main.temp)
        setTemp5(response.data.list[4].main.temp)
        setTemp6(response.data.list[5].main.temp)
        setTemp7(response.data.list[6].main.temp)


        setType1(response.data.list[0].weather[0].main)
        setType2(response.data.list[1].weather[0].main)
        setType3(response.data.list[2].weather[0].main)
        setType4(response.data.list[3].weather[0].main)
        setType5(response.data.list[4].weather[0].main)
        setType6(response.data.list[5].weather[0].main)
        setType7(response.data.list[6].weather[0].main)
      

      })
      .catch(function (error) {
        console.log(error);
      });


        
    },[]);

    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
          };
       });
      
         function tick() {
          setDate(new Date());
    }
  

    const handleSubmit = () => {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+`${cityName}`+'&units=metric&APPID=af8caf69fddab502ce9c5b842dd05b56')
  
        .then(function (response) {

        console.log(response.data.list[0])

        setTemp1(response.data.list[0].main.temp)
        setTemp2(response.data.list[1].main.temp)
        setTemp3(response.data.list[2].main.temp)
        setTemp4(response.data.list[3].main.temp)
        setTemp5(response.data.list[4].main.temp)
        setTemp6(response.data.list[5].main.temp)
        setTemp7(response.data.list[6].main.temp)


        setType1(response.data.list[0].weather[0].main)
        setType2(response.data.list[1].weather[0].main)
        setType3(response.data.list[2].weather[0].main)
        setType4(response.data.list[3].weather[0].main)
        setType5(response.data.list[4].weather[0].main)
        setType6(response.data.list[5].weather[0].main)
        setType7(response.data.list[6].weather[0].main)
      

      })
      .catch(function (error) {
        console.log(error);
      });

    }



    





    return (
        <div className="weather-head">
        <div className="weather-body">


        <div className="elements">
            <div className="time">
        
                <h2 className="time-clock">{date.toLocaleTimeString()}</h2>
                <p>{cityName}</p>

            </div>
            <div className="search">
            <input 
                className="input-search-name"
                value={cityName}
                onChange={e => setCityName(e.target.value)}
                placeholder="Enter City.." 
            />
            <button onClick={handleSubmit} className="button-search">SEARCH</button>
            </div>
        </div>













        <div className="elements-days">
            <div className="today">

            {(() => {
                if (type1 === "Thunderstorm"){
                return <img src={thunderImg} alt="" />
            } else if (type1 === "Drizzle"){
                return <img src={drizzleImg} alt="" />
            } else if (type1 === "Rain"){
                return <img src={rainImg} alt="" />
            } else if (type1 === "Snow"){
                return <img src={snowImg} alt="" />
            } else if (type1 === "Mist"){
                return <img src={mistImg} alt="" />
            } else if (type1 === "Smoke"){
                return <img src={overcastImg} alt="" />
            } else if (type1 === "Haze"){
                return <img src={mistImg} alt="" />
            } else if (type1 === "Clear"){
                return <img src={clearImg} alt="" />
            } else if (type1 === "Clouds"){
                return <img src={cloudsImg} alt="" />
            } else if (type1 === "Dust"){
                return <img src={mistImg} alt="" />
            } else if (type1 === "Fog"){
                return <img src={fogImg} alt="" />
            } else if (type1 === "Sand"){
                return <img src={mistImg} alt="" />
            } else if (type1 === "Ash"){
                return <img src={mistImg} alt="" />
            } else if (type1 === "Squall"){
                return <img src={overcastImg} alt="" />
            } else if (type1 === "Tornado"){
                return <img src={tornadoImg} alt="" />
            } 
            })()}

                <div className="today-content">
                    <p className="name-of-day">TODAY</p>
                    <p className="temp-of-day">{Math.round(temp1)} °C</p>
                </div>
            </div>
            <div className="element-day">
                <p className="name-of-day">{dateBuilder(tomorrow)}</p>
                       {(() => {
                if (type1 === "Thunderstorm"){
                return <img src={thunderImg} alt="" />
            } else if (type2 === "Drizzle"){
                return <img src={drizzleImg} alt="" />
            } else if (type2 === "Rain"){
                return <img src={rainImg} alt="" />
            } else if (type2 === "Snow"){
                return <img src={snowImg} alt="" />
            } else if (type2 === "Mist"){
                return <img src={mistImg} alt="" />
            } else if (type2 === "Smoke"){
                return <img src={overcastImg} alt="" />
            } else if (type2 === "Haze"){
                return <img src={mistImg} alt="" />
            } else if (type2 === "Clear"){
                return <img src={clearImg} alt="" />
            } else if (type2 === "Clouds"){
                return <img src={cloudsImg} alt="" />
            } else if (type2 === "Dust"){
                return <img src={mistImg} alt="" />
            } else if (type2 === "Fog"){
                return <img src={fogImg} alt="" />
            } else if (type2 === "Sand"){
                return <img src={mistImg} alt="" />
            } else if (type2 === "Ash"){
                return <img src={mistImg} alt="" />
            } else if (type2 === "Squall"){
                return <img src={overcastImg} alt="" />
            } else if (type2 === "Tornado"){
                return <img src={tornadoImg} alt="" />
            } 
            })()}
                <p className="temp-of-day">{Math.round(temp2)} °C</p>
            </div>
            <div className="element-day">
                <p className="name-of-day">{dateBuilder(dayaftertomorrow)}</p>
                {(() => {
                if (type1 === "Thunderstorm"){
                return <img src={thunderImg} alt="" />
            } else if (type3 === "Drizzle"){
                return <img src={drizzleImg} alt="" />
            } else if (type3 === "Rain"){
                return <img src={rainImg} alt="" />
            } else if (type3 === "Snow"){
                return <img src={snowImg} alt="" />
            } else if (type3 === "Mist"){
                return <img src={mistImg} alt="" />
            } else if (type3 === "Smoke"){
                return <img src={overcastImg} alt="" />
            } else if (type3 === "Haze"){
                return <img src={mistImg} alt="" />
            } else if (type3 === "Clear"){
                return <img src={clearImg} alt="" />
            } else if (type3 === "Clouds"){
                return <img src={cloudsImg} alt="" />
            } else if (type3 === "Dust"){
                return <img src={mistImg} alt="" />
            } else if (type3 === "Fog"){
                return <img src={fogImg} alt="" />
            } else if (type3 === "Sand"){
                return <img src={mistImg} alt="" />
            } else if (type3 === "Ash"){
                return <img src={mistImg} alt="" />
            } else if (type3 === "Squall"){
                return <img src={overcastImg} alt="" />
            } else if (type3 === "Tornado"){
                return <img src={tornadoImg} alt="" />
            } 
            })()}
                <p className="temp-of-day">{Math.round(temp3)} °C</p>
            </div>
            <div className="element-day">
                <p className="name-of-day">{dateBuilder(dayaftertomorrow2)}</p>
                {(() => {
                if (type1 === "Thunderstorm"){
                return <img src={thunderImg} alt="" />
            } else if (type4 === "Drizzle"){
                return <img src={drizzleImg} alt="" />
            } else if (type4 === "Rain"){
                return <img src={rainImg} alt="" />
            } else if (type4 === "Snow"){
                return <img src={snowImg} alt="" />
            } else if (type4 === "Mist"){
                return <img src={mistImg} alt="" />
            } else if (type4 === "Smoke"){
                return <img src={overcastImg} alt="" />
            } else if (type4 === "Haze"){
                return <img src={mistImg} alt="" />
            } else if (type4 === "Clear"){
                return <img src={clearImg} alt="" />
            } else if (type4 === "Clouds"){
                return <img src={cloudsImg} alt="" />
            } else if (type4 === "Dust"){
                return <img src={mistImg} alt="" />
            } else if (type4 === "Fog"){
                return <img src={fogImg} alt="" />
            } else if (type4 === "Sand"){
                return <img src={mistImg} alt="" />
            } else if (type4 === "Ash"){
                return <img src={mistImg} alt="" />
            } else if (type4 === "Squall"){
                return <img src={overcastImg} alt="" />
            } else if (type4 === "Tornado"){
                return <img src={tornadoImg} alt="" />
            } 
            })()}
                <p className="temp-of-day">{Math.round(temp4)} °C</p>
            </div>
            <div className="element-day">
                <p className="name-of-day">{dateBuilder(dayaftertomorrow3)}</p>
                {(() => {
                if (type1 === "Thunderstorm"){
                return <img src={thunderImg} alt="" />
            } else if (type5 === "Drizzle"){
                return <img src={drizzleImg} alt="" />
            } else if (type5 === "Rain"){
                return <img src={rainImg} alt="" />
            } else if (type5 === "Snow"){
                return <img src={snowImg} alt="" />
            } else if (type5 === "Mist"){
                return <img src={mistImg} alt="" />
            } else if (type5 === "Smoke"){
                return <img src={overcastImg} alt="" />
            } else if (type5 === "Haze"){
                return <img src={mistImg} alt="" />
            } else if (type5 === "Clear"){
                return <img src={clearImg} alt="" />
            } else if (type5 === "Clouds"){
                return <img src={cloudsImg} alt="" />
            } else if (type5 === "Dust"){
                return <img src={mistImg} alt="" />
            } else if (type5 === "Fog"){
                return <img src={fogImg} alt="" />
            } else if (type5 === "Sand"){
                return <img src={mistImg} alt="" />
            } else if (type5 === "Ash"){
                return <img src={mistImg} alt="" />
            } else if (type5 === "Squall"){
                return <img src={overcastImg} alt="" />
            } else if (type5 === "Tornado"){
                return <img src={tornadoImg} alt="" />
            } 
            })()}
                <p className="temp-of-day">{Math.round(temp5)} °C</p>
            </div>
            <div className="element-day">
                <p className="name-of-day">{dateBuilder(dayaftertomorrow4)}</p>
                {(() => {
                if (type1 === "Thunderstorm"){
                return <img src={thunderImg} alt="" />
            } else if (type6 === "Drizzle"){
                return <img src={drizzleImg} alt="" />
            } else if (type6 === "Rain"){
                return <img src={rainImg} alt="" />
            } else if (type6 === "Snow"){
                return <img src={snowImg} alt="" />
            } else if (type6 === "Mist"){
                return <img src={mistImg} alt="" />
            } else if (type6 === "Smoke"){
                return <img src={overcastImg} alt="" />
            } else if (type6 === "Haze"){
                return <img src={mistImg} alt="" />
            } else if (type6 === "Clear"){
                return <img src={clearImg} alt="" />
            } else if (type6 === "Clouds"){
                return <img src={cloudsImg} alt="" />
            } else if (type6 === "Dust"){
                return <img src={mistImg} alt="" />
            } else if (type6 === "Fog"){
                return <img src={fogImg} alt="" />
            } else if (type6 === "Sand"){
                return <img src={mistImg} alt="" />
            } else if (type6 === "Ash"){
                return <img src={mistImg} alt="" />
            } else if (type6 === "Squall"){
                return <img src={overcastImg} alt="" />
            } else if (type6 === "Tornado"){
                return <img src={tornadoImg} alt="" />
            } 
            })()}
                <p className="temp-of-day">{Math.round(temp6)} °C</p>
            </div>
            <div className="element-day">
                <p className="name-of-day">{dateBuilder(dayaftertomorrow5)}</p>
                {(() => {
                if (type1 === "Thunderstorm"){
                return <img src={thunderImg} alt="" />
            } else if (type7 === "Drizzle"){
                return <img src={drizzleImg} alt="" />
            } else if (type7 === "Rain"){
                return <img src={rainImg} alt="" />
            } else if (type7 === "Snow"){
                return <img src={snowImg} alt="" />
            } else if (type7 === "Mist"){
                return <img src={mistImg} alt="" />
            } else if (type7 === "Smoke"){
                return <img src={overcastImg} alt="" />
            } else if (type7 === "Haze"){
                return <img src={mistImg} alt="" />
            } else if (type7 === "Clear"){
                return <img src={clearImg} alt="" />
            } else if (type7 === "Clouds"){
                return <img src={cloudsImg} alt="" />
            } else if (type7 === "Dust"){
                return <img src={mistImg} alt="" />
            } else if (type7 === "Fog"){
                return <img src={fogImg} alt="" />
            } else if (type7 === "Sand"){
                return <img src={mistImg} alt="" />
            } else if (type7 === "Ash"){
                return <img src={mistImg} alt="" />
            } else if (type7 === "Squall"){
                return <img src={overcastImg} alt="" />
            } else if (type7 === "Tornado"){
                return <img src={tornadoImg} alt="" />
            } 
            })()}
                <p className="temp-of-day">{Math.round(temp7)} °C</p>
            </div>
        </div>

        </div>
        </div>
    )
}

export default Weather
