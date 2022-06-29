
import React, {useState, useEffect } from 'react';
import Main from './Main';
import ThemesContext, {themes} from './Themes';

function App() {
  const [theme, setTheme] = useState(themes.nightTime)
  
  let currentHour = new Date().getHours();
  // let currentHour = 23
  
  
  useEffect(()=>{
   

    if(0 <= currentHour && currentHour <= 6){
      setTheme(themes.nightTime)
    }else{
      if(13<= currentHour && currentHour <= 17){
        setTheme(themes.dayTime)
      }else{
        if(18 <= currentHour && currentHour<= 21){
          setTheme(themes.eveningTime)
        }else{
          if(7<= currentHour && currentHour <= 12){
            setTheme(themes.morningTime)
          }else{
            setTheme(themes.nightTime)
          }
        }
      }
    }

    
    
    
   

   
  }, [currentHour])

  return (
    <ThemesContext.Provider value={theme}>
      <Main/>
    </ThemesContext.Provider>
  );
}

export default App;
