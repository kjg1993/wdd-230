function windChill(t, s) {
	let f =
		35.74 +
		0.6215 * t -
		35.75 * Math.pow(s, 0.16) +
		0.4275 * t * Math.pow(s, 0.16);
	f = Math.round(f);
	return f;
}

let temperature = parseFloat(document.getElementById("hight").innerHTML);

const windSpeed = parseFloat(document.getElementById("WindSpeed").innerHTML);
if (temperature <= 50 && windSpeed > 3.0) {
	windChill = windChill(temperature, windSpeed);
} else {
	windChill = "N/A";
}

document.getElementById("WindChill").innerHTML = windChill;
