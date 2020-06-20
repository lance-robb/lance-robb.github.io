const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {


        const towndata = jsonObject['towns'];
        const idahoTown = towndata.filter(towndata => (towndata.name == 'Preston' || towndata.name == 'Fish Haven' || towndata.name == 'Soda Springs'));
        idahoTown.forEach(towndata => {
            let place = document.createElement('section');
            let city = document.createElement('h3');
            let motto = document.createElement('h4');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');
            let alt = document.createElement('alt');

            city.textContent = towndata.name;
            alt.setAttribute('alt', towndata.name);
            image.setAttribute('src', `images/${towndata.photo}`);
            motto.innerHTML = towndata.motto;
            year.innerHTML = "Founded: " + towndata.yearFounded;
            population.textContent = "Population: " + towndata.currentPopulation;
            rainfall.innerHTML = "Average Annual Rainfall: " + towndata.averageRainfall;
            place.setAttribute('class', "city");

            place.appendChild(city);
            place.appendChild(motto);
            place.appendChild(year);
            place.appendChild(population);
            place.appendChild(rainfall);
            place.appendChild(alt);
            place.appendChild(image);
            
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

    