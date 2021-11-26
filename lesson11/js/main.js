"use stric";

updateModified = function () {
	let currentDate = new Date();

	const infoDate = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	document.getElementById("date").textContent = currentDate.toLocaleDateString(
		"en-Uk",
		infoDate
	);
};

updateModified();

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
	"click",
	() => {
		mainnav.classList.toggle("responsive");
	},
	false
);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
	if (window.innerWidth > 760) mainnav.classList.remove("responsive");
};

// Town Info Api

const townsUrl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townsUrl)
	.then((response) => {
		return response.json();
	})
	.then((townsList) => {
		// console.table(townsList);

		const tonwsInfo = townsList["towns"];

		//Fish Haven town data
		document.querySelector(".fishName").textContent = tonwsInfo[2].name;
		document.querySelector(".fishQuote").textContent = tonwsInfo[2].motto;
		document.querySelector(
			".fishYear"
		).textContent = `Year Founded: ${tonwsInfo[2].yearFounded}`;
		document.querySelector(
			".fishPopulation"
		).textContent = `Population: ${tonwsInfo[2].currentPopulation}`;
		document.querySelector(
			".fishAnnual"
		).textContent = `Anual Rain Fall: ${tonwsInfo[2].averageRainfall}`;

		//Soda town data
		document.querySelector(".sodaName").textContent = tonwsInfo[0].name;
		document.querySelector(".sodaQuote").textContent = tonwsInfo[0].motto;
		document.querySelector(
			".sodaYear"
		).textContent = `Year Founded: ${tonwsInfo[0].yearFounded}`;
		document.querySelector(
			".sodaPopulation"
		).textContent = `Population: ${tonwsInfo[0].currentPopulation}`;
		document.querySelector(
			".sodaAnnual"
		).textContent = `Anual Rain Fall: ${tonwsInfo[0].averageRainfall}`;

		// Preston town data
		document.querySelector(".prestonName").textContent = tonwsInfo[6].name;
		document.querySelector(".prestonQuote").textContent = tonwsInfo[6].motto;
		document.querySelector(
			".prestonYear"
		).textContent = `Year Founded: ${tonwsInfo[6].yearFounded}`;
		document.querySelector(
			".prestonPopulation"
		).textContent = `Population: ${tonwsInfo[6].currentPopulation}`;
		document.querySelector(
			".prestonAnnual"
		).textContent = `Anual Rain Fall: ${tonwsInfo[6].averageRainfall}`;
	});

//
//Preston Weather API
//

const daysWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const deg = "­°F";
const simSpd = "mhp";
const url =
	"https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e546755d4cf76003251542416eb2747e";

fetch(url)
	.then((answer) => answer.json())
	.then((weatherApi) => {
		//converting degrees kelvin to degrees fahrenheit firs we need to convert
		//them to celcius

		let deg_k = weatherApi.list[0].main.temp;
		let celc = deg_k - 273.15;

		//now those degrees celcius we will convert them to fahrenheit
		let fahren = (celc * 9) / 5 + 32;
		let speed = weatherApi.list[0].wind.speed;
		let img = `https://openweathermap.org/img/w/${weatherApi.list[0].weather[0].icon}.png`;

		document.getElementById("currentImg").setAttribute("src", img);
		document
			.getElementById("currentImg")
			.setAttribute("alt", weatherApi.list[0].weather[0].description);

		document.getElementById(
			"current"
		).textContent = `${weatherApi.list[0].weather[0].main}`;
		document.getElementById("high").textContent = `${fahren.toFixed(0)}${deg}`;

		document.getElementById("wind").textContent = `${getWC(
			speed,
			fahren
		).toFixed(0)}${deg}`;
		document.getElementById("humidity").textContent =
			weatherApi.list[0].main.humidity + "%";
		document.getElementById("speed").textContent = `${speed.toFixed(
			1
		)}${simSpd}`;

		function getWC(s, t) {
			let wc =
				35.74 +
				0.6215 * t -
				35.75 * Math.pow(s, 0.16) +
				0.4275 * t * Math.pow(s, 0.16);

			// round the answer to integer
			wc = Math.floor(wc);

			// if chill is great than temp, return the temp
			wc = wc > t ? t : wc;
			return wc;
		}

		let getHour = weatherApi.list.filter((item) =>
			item.dt_txt.includes("18:00:00")
		);

		// console.log(getHour);

		let day = 0;

		getHour.forEach((weatherInfo) => {
			let info = new Date(weatherInfo.dt_txt);
			document.querySelector(`#day${day + 1}`).textContent =
				daysWeek[info.getDay()];

			k = weatherInfo.main.temp;
			c = k - 273.15;
			f = (c * 9) / 5 + 32;

			document.querySelector(`#degree${day + 1}`).textContent = `${f.toFixed(
				0
			)}${deg}`;
			weatherInfo.main.temp;

			let icon =
				"https://openweathermap.org/img/w/" +
				weatherInfo.weather[0].icon +
				".png";

			let description = weatherInfo.weather[0].description;
			let capitilaze =
				description.charAt(0).toUpperCase() + description.slice(1);

			document.querySelector(`#img${day + 1}`).setAttribute("src", icon);
			document.querySelector(`#img${day + 1}`).setAttribute("alt", capitilaze);
			day++;
		});
	});
