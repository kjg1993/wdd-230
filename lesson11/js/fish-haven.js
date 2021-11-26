"use stric";

//
// Fish Haven Api Info
//

const fishUrl =
	"https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=e546755d4cf76003251542416eb2747e";

fetch(fishUrl)
	.then((answer) => answer.json())
	.then((fishApi) => {
		console.log(fishApi);

		let image = `https://openweathermap.org/img/w/${fishApi.list[0].weather[0].icon}.png`;

		document.querySelector("#fishIcon").setAttribute("src", image);
		document.getElementById("fishcurrent").textContent =
			fishApi.list[0].weather[0].main;

		let kelv = fishApi.list[0].main.temp;
		let cel = kelv - 273.15;
		let fahr = (cel * 9) / 5 + 32;
		const fishSpd = fishApi.list[0].wind.speed;
		let humi = fishApi.list[0].main.humidity;

		// console.log(fahr);
		document.querySelector("#fisHigh").textContent = `${fahr.toFixed(0)}°F`;
		document.querySelector("#fisHumidity").textContent = `${humi}%`;
		document.querySelector("#fishWind").textContent = `${getWinCh(
			fishSpd,
			fahr
		).toFixed(0)}${deg}`;
		document.querySelector("#fishSpeed").textContent = `${fishSpd.toFixed(
			1
		)}${simSpd}`;

		function getWinCh(s, t) {
			let wc =
				35.74 +
				0.6215 * t -
				35.75 * Math.pow(s, 0.16) +
				0.4275 * t * Math.pow(s, 0.16);

			wc = Math.pow(wc);

			wc = wc > t ? t : wc;
			return wc;
		}

		let fishInfo = fishApi.list.filter((data) =>
			data.dt_txt.includes("18:00:00")
		);

		let count = 0;

		fishInfo.forEach((items) => {
			let info = new Date(items.dt_txt);
			document.querySelector(`#fishday${count + 1}`).textContent =
				daysWeek[info.getDay()];

			let icons = `https://openweathermap.org/img/w/${items.weather[0].icon}.png`;
			let desc = items.weather[0].description;
			let cap = desc.charAt(0).toUpperCase() + desc.slice(1);

			document.querySelector(`#fishImg${count + 1}`).setAttribute("src", icons);
			document.querySelector(`#fishImg${count + 1}`).setAttribute("alt", cap);

			let temp = items.main.temp;
			let celc = temp - 273.15;
			let fahr = (celc * 9) / 5 + 32;
			// console.log(fahr);
			document.querySelector(
				`#fishDeg${count + 1}`
			).textContent = `${fahr.toFixed(0)}${deg}`;
			count++;
		});
	});

const eventUrl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(eventUrl)
	.then((answer) => answer.json())
	.then((fishInfo) => {
		console.log(fishInfo);
		let general = fishInfo["towns"];
		let eventData = general[2].events;
		console.log(eventData);

		let counter = 0;
		for (let i = 0; i < eventData.length; i++) {
			const elements = eventData[i];
			document.querySelector(`.data${counter + 1}`).textContent = elements;
			counter++;
		}
	});
