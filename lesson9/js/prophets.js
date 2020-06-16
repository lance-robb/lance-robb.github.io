const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
   

const prophets = jsonObject['prophets'];
for (let i = 0; i < prophets.length; i++) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let bDay = document.createElement('p');
    let bPlace = document.createElement('p');
    let image = document.createElement('img');
    let alt = document.createElement('alt');

    alt.setAttribute('alt', prophets[i].name + prophets[i].lastname + ' - ' + prophets[i].order);
    image.setAttribute('src', prophets[i].imageurl);
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    bDay.textContent = 'Birthdate: ' + prophets[i].birthdate;
    bPlace.textContent = 'Birthplace: ' + prophets[i].birthplace;

    card.appendChild(h2);
    card.appendChild(alt);
    card.appendChild(bDay);
    card.appendChild(bPlace);
    card.appendChild(image);
    document.querySelector('div.cards').appendChild(card);
} 

});