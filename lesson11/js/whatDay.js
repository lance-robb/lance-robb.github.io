/* Current Date Code */

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
 document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);

/* Displaying on Friday only */

let day = new Date();
const banner = document.getElementById('banner');
if(day.getDay() == 5) {
    banner.style.display = "block";
}
else {
    banner.style.display = "none";
}

/* Adding link to footer for weather data credit */

let datadiv = document.createElement('div');
let datalink = document.createElement('a');

datadiv.setAttribute('class', "weatherdata")
datalink.setAttribute('href', `https://openweathermap.org/`);
datalink.innerHTML = "Weather Data Provided by Open Weather Map";

datadiv.appendChild(datalink);

document.querySelector('footer').appendChild(datadiv);