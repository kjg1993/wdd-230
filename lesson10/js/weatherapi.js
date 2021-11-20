"use stric";

const apiURL =
	"https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e546755d4cf76003251542416eb2747e";
// the weather "api.openweathermap.org/data/2.5/weather?q=5604473&appid=e546755d4cf76003251542416eb2747e";

fetch(apiURL)
	.then((response) => response.json())
	.then((jsObject) => {
		console.log(jsObject);

		let temp = jsObject.list[0].main.temp;
		console.log(temp);

		let icon = jsObject.list[0].weather[0].icon;
		console.log(icon);

		const imagesPath =
			"https://openweathermap.org/img/w/" +
			jsObject.list[0].weather[0].icon +
			".png";
		const description = jsObject.list[0].weather[0].description;

		//converting degrees kevil to degrees fahrenheit firs we need to convert
		//them to celcius
		let k = temp;
		let c = k - 273.15;

		//now those degrees celcius we will convert them to fahrenheit
		let f = (c * 9) / 5 + 32;

		document.getElementById("current-temp").textContent = f.toFixed(2);
		document.getElementById("imagesrc").textContent = imagesPath;
		document.getElementById("icon").setAttribute("src", imagesPath);
		document.getElementById("icon").setAttribute("alt", description);
	});
