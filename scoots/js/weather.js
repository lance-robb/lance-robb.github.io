// OpenWeather Summary Fetch

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=5cfe39b9acf6d0519512d8214d2b1206";
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0) + "° F";
        document.getElementById('dayhigh').textContent = jsObject.main.temp_max.toFixed(0) + "° F";       
        document.getElementById('current').textContent = "Current Conditions : " + jsObject.weather[0].description;
        document.getElementById('humid').textContent = "Humidity : " + jsObject.main.humidity + "%";
        document.getElementById('wind').textContent = "Wind Speed : " + jsObject.wind.speed.toFixed(0);
const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
const desc = jsObject.weather[0].description;
        document.getElementById(`cwicon`).setAttribute('src', imagesrc);
        document.getElementById(`cwicon`).setAttribute('alt', desc);
    });

// OpenWeather Forecast Fetch  

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&APPID=5cfe39b9acf6d0519512d8214d2b1206";
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const czforecast = jsObject.list.filter(x =>
            x.dt_txt.includes(`12:00:00`));

        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = 0;
        czforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`high${day+1}`).textContent = forecast.main.temp.toFixed(0) + "° F";
            
            const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
            const desc = forecast.weather[0].description;
            document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
            day++;
        })

    });