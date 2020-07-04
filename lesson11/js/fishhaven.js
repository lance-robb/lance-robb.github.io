// OpenWeather Summary Fetch
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=5cfe39b9acf6d0519512d8214d2b1206";
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

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=5cfe39b9acf6d0519512d8214d2b1206";
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
            const imagesrc = 'https://openweathermap.org/img/w/' + peaksforecast[i].weather[0].icon + '.png';
            const desc = peaksforecast[i].weather[0].description;
            document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute('alt', desc);
            document.getElementById(`day${i+1}`).innerHTML = `${Math.round(peaksforecast[i].main.temp)}&#8457`;
        }

        const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

        fetch(requestURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonObject) {


                const towndata = jsonObject['towns'];
                const idahoTown = towndata.filter(towndata => (towndata.name == 'Fish Haven'));
                idahoTown.forEach(towndata => {
                    let place = document.createElement('section');
                    let title = document.createElement('h4');

                    title.textContent = "Upcoming Events";
                    
                    place.appendChild(title);
                   
                    document.querySelector('div.place').appendChild(place);

                    let eventList = document.createElement('ul');
                    towndata.events.forEach(event => {
                        let listItem = document.createElement('li');
                        listItem.textContent = event;
                        eventList.appendChild(listItem);
                    });
                    place.appendChild(eventList);
                });
            });
    });