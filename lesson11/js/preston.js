const prestonUrl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(prestonUrl)
	.then((response) => {
		return response.json();
	})
	.then((townsList) => {
		console.table(townsList);

		const tonwsInfo = townsList["towns"];

		console.log(tonwsInfo[6]);

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

		let events = tonwsInfo[6].events;
		// console.log(events);

		let counter = 0;
		for (let i = 0; i < events.length; i++) {
			const element = events[i];
			// console.log(element);
			document.querySelector(`.data${counter + 1}`).textContent = element;
			counter++;
		}
	});
