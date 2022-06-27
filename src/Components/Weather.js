import React,{useState} from 'react'
import axios  from 'axios';


export default function Weather() {
    const [data,setCityData] =useState([]);
    const [cityname, setCityname] = useState('');
    const [morebutton, setmorebutton] = useState(false)
    const [seedetails, setSeedetails] = useState(false)
    const [moreinfo, setmoreInfo] = useState(false)
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=f3e6a40e7d873f042984b1405049f14e&units=metric`

   const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setSeedetails(true)
        setCityData(response.data)
        console.log(response.data)
      })
      .catch((err)=>{
        window.alert("Wrong City name")
      })
      
      setCityname('')
      setmorebutton(true)
    }
  }
  const handlemoreInfo= (event)=>{
event.preventDefault();
setmoreInfo(true);

  }
  const handleClear=(event)=>{
    event.preventDefault()
setSeedetails(false)
  }
  return (
    
    <div className='tempdata'>
     
        <input type='text' onChange={(event)=>setCityname(event.target.value)} value={cityname} placeholder="Enter City Name" onKeyPress={searchLocation} className="input"/>
     {seedetails? <div>
     <lable className='cname'>City Name : {data.name}</lable>
     <button className='clr' onClick={handleClear}> Clear</button>
     
      {data.main?<div className='data'> Average Tempreature: {data.main.temp.toFixed()}C</div> :null }
     
     {data.weather ? <div className='data'>Feels like: {data.main.feels_like}</div> : null}
     {morebutton? <button onClick={handlemoreInfo} >More Info</button>:null }
      
    
    {
 moreinfo ? <div className='moreinfo'>
   <div className='data'>Longititude: {data.coord.lon} Latitude: {data.coord.lat}</div> 
   <div className='data'>Weather: {data.weather.main} Description: {data.weather.description} </div>
<div className='data'> Feels Like: {data.main.feels_like.toFixed()}C</div> 
 <div className='data' > Min Tempreature: {data.main.temp_min.toFixed()}C</div> 
 <div className='data'> Max Tempreature: {data.main.temp_max.toFixed()}C</div> 
 <div className='data'> Visibility: {data.visibility}</div>
 <div className='data'> Wind Speed :  {data.wind.speed} , Degree: {data.wind.deg}</div>
 <div className='data'>Sunrise : {data.sys.sunrise} unix, UTC</div>
 <div className='data'>Sunset: {data.sys.sunset} unix, UTC</div>
 <div className='data'>TimeZone : {data.timezone} Shift in seconds from UTC</div>
<button onClick={()=>setmoreInfo(false)}>Close</button>
 </div>  : null
    }  </div>
: null} 
            </div>

  )
}
