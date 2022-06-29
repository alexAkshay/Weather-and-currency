import React from "react";

export const themes = {
dayTime:{
    color : "rrgb(64, 5, 5)",
    backgroundImage: "url('https://wallpapercave.com/wp/40Rj9rB.jpg')"


},
nightTime: {
    color: "rgb(230, 222, 222)",
    backgroundImage : "url('https://wallpapercave.com/wp/wp1993642.jpg')"
},
eveningTime: {
    color: "rgb(230, 222, 222)",
    backgroundImage: "url('https://wallpapercave.com/wp/U62oqgB.jpg')"
},
morningTime: {
color: "rgb(230, 222, 222)" ,
backgroundImage: "url('https://wallpapercave.com/wp/wp1993634.jpg')"
}
}
const ThemesContext = React.createContext(themes.dayTime);
export default ThemesContext;