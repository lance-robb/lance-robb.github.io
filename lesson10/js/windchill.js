// OpenWeather Summary Fetch
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=5cfe39b9acf6d0519512d8214d2b1206";
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('condition').textContent = jsObject.weather[0].main;
        document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('high').textContent = jsObject.main.temp_max.toFixed(0);
        document.getElementById('humid').textContent = jsObject.main.humidity;
        document.getElementById('wind').textContent = jsObject.wind.speed.toFixed(0);
    });

// OpenWeather Forecast Fetch  

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=5cfe39b9acf6d0519512d8214d2b1206";
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const peaksforecast = jsObject.list.filter(x =>
            x.dt_txt.includes(`18:00:00`));

        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = 0;
        peaksforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`weekday${day+1}`).textContent = weekdays[d.getDay()];
            day++;
        });

        for (let i = 0; i < peaksforecast.length; i++) {
            const imagesrc = 'https://openweathermap.org/img/wn/' + peaksforecast[i].weather[0].icon + '.png';
            const desc = peaksforecast[i].weather[0].description;
            document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute('alt', desc);
            document.getElementById(`day${i+1}`).innerHTML = `${Math.round(peaksforecast[i].main.temp)}&#8457`;
        }
    });

// Calculating WindChill

function calcWind() {
    let temp = parseFloat(document.getElementById("temp").textContent);
    let wind = parseFloat(document.getElementById("wind").textContent);
    let result = windChill(temp, wind);

    document.getElementById("chill").innerHTML = result;

}

function windChill(temp, speed) {
    if (temp <= 50 && speed > 3) {
        let f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        return Math.round(f * 10) / 10;
    } else {
        let f = "N/A";
        return f;
    }
}
calcWind()