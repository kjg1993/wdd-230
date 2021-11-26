"use strict";

//
// Soda Api Info
//

const sodaUrl =
	"https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=e546755d4cf76003251542416eb2747e";

fetch(sodaUrl)
	.then((answer) => answer.json())
	.then((sodApi) => {
		// console.log(sodApi);
		document.querySelector(".hero-name").textContent = sodApi.city.name;

		let img = `https://openweathermap.org/img/w/${sodApi.list[0].weather[0].icon}.png`;
		let des = sodApi.list[0].weather[0].description;
		document.querySelector("#SodImg").setAttribute("src", img);
		document.querySelector("#SodImg").setAttribute("alt", des);

		document.getElementById("sodaCurrent").textContent =
			sodApi.list[0].weather[0].main;

		let degrees = sodApi.list[0].main.temp;

		let kl_Cels = degrees - 273.15;
		let degFahr = (kl_Cels * 9) / 5 + 32;
		let sodaSpeed = sodApi.list[0].wind.speed;

		document.getElementById("SodaHigh").textContent = `${degFahr.toFixed(
			0
		)}${deg}`;

		document.getElementById("SodaWind").textContent = `${calcWc(
			sodaSpeed,
			degFahr
		).toFixed(0)}°F`;
		document.getElementById(
			"SodaHumidity"
		).textContent = `${sodApi.list[0].main.humidity}%`;
		document.getElementById("SodaSpeed").textContent = `${sodaSpeed.toFixed(
			0
		)}${simSpd}`;

		function calcWc(s, t) {
			let wc =
				35.74 +
				0.6215 * t -
				35.75 * Math.pow(s, 0.16) +
				0.4275 * t * Math.pow(s, 0.16);

			// wc = Math.pow(wc);

			// wc = wc > t ? t : wc;
			return wc;
		}

		const getInfo = sodApi.list.filter((items) =>
			items.dt_txt.includes("18:00:00")
		);
		// console.log(getInfo);

		let count = 0;
		getInfo.forEach((info) => {
			let data = new Date(info.dt_txt);
			document.querySelector(`#soDay${count + 1}`).textContent =
				daysWeek[data.getDay()];

			let img = `https://openweathermap.org/img/w/${info.weather[0].icon}.png`;

			let desc = info.weather[0].description;
			let capitilaze = desc.charAt(0).toUpperCase() + desc.slice(1);
			document.querySelector(`#sodaImg${count + 1}`).setAttribute("src", img);
			document
				.querySelector(`#sodaImg${count + 1}`)
				.setAttribute("alt", capitilaze);

			let tem = info.main.temp;
			let cel = tem - 273.15;
			let fah = (cel * 9) / 5 + 32;

			document.querySelector(
				`#sodaDeg${count + 1}`
			).textContent = `${fah.toFixed(0)}${deg}`;
			count++;
		});
	});

const eventUrl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(eventUrl)
	.then((answer) => answer.json())
	.then((eventInfo) => {
		console.log(eventInfo);
		let general = eventInfo["towns"];
		let eventData = general[0].events;

		let counter = 0;
		for (let i = 0; i < eventData.length; i++) {
			const elements = eventData[i];
			document.querySelector(`.data${counter + 1}`).textContent = elements;
			counter++;
			console.log(elements);
		}
	});
