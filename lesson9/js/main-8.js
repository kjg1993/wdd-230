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

// Use Api Fetch with Js

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
