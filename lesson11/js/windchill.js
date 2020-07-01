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