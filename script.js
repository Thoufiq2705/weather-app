// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=db4ae6c18224e37a131e498905e194fe

const apiKey = "db4ae6c18224e37a131e498905e194fe";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const inputValue = document.getElementById("input");
const button = document.querySelector("button");
const mainImg = document.getElementById("main-img");       
const degreeText = document.getElementById("degree-text");    
const degreeCity = document.getElementById("degree-city");
const humidityPercentage = document.getElementById("humidity-per");
const humiditySpeed = document.getElementById("humidity-speed");


async function weatherReports(city) {
   
    const weatherData = await fetch(apiUrl + city +`&APPID=db4ae6c18224e37a131e498905e194fe`);
    const data = await weatherData.json();
    console.log(data);
            if(data.cod == '404'){
                document.getElementById("parent").style.display = "none";
                return document.getElementById("invalid").style.display = "block";
                
            }else{

                document.getElementById("parent").style.display = "block";
                document.getElementById("invalid").style.display = "none";

                const weatherImg = data.weather[0].main;

                degreeText.textContent = Math.floor(data.main.temp) + "°C";
                degreeCity.textContent = data.name + " , " + data.sys.country;

                humidityPercentage.textContent = data.main.humidity + "%";
                humiditySpeed.textContent = data.wind.speed + " km/h";

                    if (weatherImg === "Clouds"){
                        mainImg.src = "images/clouds.png";
                    }else if(weatherImg === "Clear") {
                        mainImg.src = "images/clear.png";
                    }else if(weatherImg === "Mist") {
                        mainImg.src = "images/mist.png";
                    }else if(weatherImg === "Rain"){
                        mainImg.src = "images/rain.png";
                    }else if(weatherImg === "snow") {
                        mainImg.src = "images/snow.png";
                    }else {
                        mainImg.src = "images/drizzle.png";
                    }
                }
}
button.addEventListener("click", function(){
    weatherReports(inputValue.value);

    inputValue.value = "";
});
document.addEventListener('keydown', function(e){
    if (e.code === 'Enter' && inputValue.value){
        weatherReports(inputValue.value)
    }
})


