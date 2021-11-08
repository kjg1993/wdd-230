"use stric";

const url =
	"https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(url)
	.then((answer) => {
		return answer.json();
	})
	.then((jsonObject) => {
		// console.table(jsonObject);
		const prophets = jsonObject["prophets"];

		for (let i = 0; i < prophets.length; i++) {
			let card = document.createElement("section");
			let h2 = document.createElement("h2");
			let image = document.createElement("img");
			image.setAttribute("src", prophets[i].imageurl);
			image.setAttribute(
				"alt",
				`${prophets[i].name} ${prophets[i].lastname}-${prophets[i].order}`
			);
			let info1 = document.createElement("p");
			let info2 = document.createElement("p");

			h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
			info1.textContent = `Date of birthdate: ${prophets[i].birthdate}`;
			info2.textContent = `Place of birth: ${prophets[i].birthplace}`;

			card.appendChild(h2);
			card.appendChild(image);
			card.appendChild(info1);
			card.appendChild(info2);

			document.querySelector("div.cards").appendChild(card);
		}
	});

// last modified the file

const updateModified = () => {
	let currentDate = new Date();

	const date = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	document.getElementById("lastModify").textContent =
		currentDate.toLocaleDateString("en-Uk", date);
};
updateModified();
