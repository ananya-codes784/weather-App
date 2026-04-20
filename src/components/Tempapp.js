import react, { useState ,useEffect} from "react";
import "../css/style.css";

const Tempapp =() =>{

    const [city ,setcity]=useState(null);
    const [search , setSearch]=useState("Raipur")

    useEffect(()=>{
        const fetchApi = async () =>{
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e442628fbc2d4c0d7d530cc9f007de4f`
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson);
            setcity(resJson.main);
        }
        fetchApi();
    },[search ])
    return(
        <>
        <div className="box">
            <div className="inputData">
                <input
                type="search"
                value={search}
                className="inputFeild"
                 onChange={(event)=>{ setSearch(event.target.value) }}/>

            </div>
       
   {  !city ? (
    <p className="data-not-found"> NO DATA FOUND </p>
   ) :(
      <>
     <div className="info">
           <h2 className="location">
            <i className="fa-solid fa-street-view"></i>{search}
           </h2>
           <h1 className="temp">
            {city.temp} °C
           </h1>
           <h3 className="tempmin_max"> min  : {city.temp_min} °C | Max : {city.temp_max} °C</h3>
        </div>

       {/* Waves */}
        <div className="wave"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </>

   )}
        
         </div>
        </>
    )
}

export default Tempapp;