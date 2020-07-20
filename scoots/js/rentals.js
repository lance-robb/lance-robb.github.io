const datagrabURL = "/data/rentals.json";
fetch(datagrabURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        const rentals = jsonObject['rentals'];


        for (let i = 0; i < rentals.length; i++) {

            let row = document.createElement('tr');
            let name = document.createElement('td');

            let people = document.createElement('td');
            let reserveH = document.createElement('td');
            let reserveF = document.createElement('td');
            let walkH = document.createElement('td');
            let walkF = document.createElement('td');

            name.textContent = rentals[i].name;
            people.textContent = rentals[i].maxperson;
            reserveH.textContent = rentals[i].reservedhalfday;
            reserveF.textContent = rentals[i].reservedfullday;
            walkH.textContent = rentals[i].walkinhalfday;
            walkF.textContent = rentals[i].walkinfullday;

            row.appendChild(name);
            row.appendChild(people);
            row.appendChild(reserveH);
            row.appendChild(reserveF);
            row.appendChild(walkH);
            row.appendChild(walkF);

            document.getElementById('pricetable').appendChild(row);

        }

    })