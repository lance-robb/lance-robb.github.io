const weatherURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=5cfe39b9acf6d0519512d8214d2b1206";

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('current-temp').textContent = jsObject.main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);


    });