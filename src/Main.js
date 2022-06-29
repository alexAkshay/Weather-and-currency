import React, { useContext } from 'react'
import Weather from './Components/Weather'
import ThemesContext from './Themes'
import Time from './Components/Time';
import './App.css';


export default function Main() {
    const theme = useContext(ThemesContext)
  return (
    <div style={theme} className="App">
      <Time/>
        <Weather/>
    </div>
  )
}
