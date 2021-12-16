///here the slider code will go

const time = 3000;
let slideIndex = 1;
let n = 1;
showSlyder(slideIndex);

function currentSlider(n) {
	showSlyder((slideIndex = n));
}

function showSlyder(n) {
	let i;
	let slides = document.getElementsByClassName("mySlider");
	let indic = document.getElementsByClassName("indicator");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (let i = 0; i < indic.length; i++) {
		indic[i].className = indic[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	indic[slideIndex - 1].className += " active";
}

setInterval(() => {
	showSlyder((slideIndex += 1));
}, time);

// menu section code

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

// Api Wethaer
const daysWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let url =
	"https://api.openweathermap.org/data/2.5/forecast?id=3657509&appid=e546755d4cf76003251542416eb2747e";

fetch(url)
	.then((answer) => answer.json())
	.then((apiObject) => {
		console.log(apiObject);

		let deg_k = apiObject.list[0].main.temp;
		let celc = deg_k - 273.15;
		let fahren = (celc * 9) / 5 + 32;
		console.log(fahren.toFixed(0));

		let img = `https://openweathermap.org/img/w/${apiObject.list[0].weather[0].icon}.png`;

		document.querySelector(".cityName").textContent = `${apiObject.city.name},`;
		document.querySelector(".countryName").textContent = apiObject.city.country;
		//current temperature
		document.querySelector(".current").textContent = `${fahren.toFixed(0)}°F`;
		document.querySelector(".icon").setAttribute("src", img);
		//days Forecast

		let array = apiObject.list.filter((info) =>
			info.dt_txt.includes("18:00:00")
		);

		let day = 0;

		array.forEach((data) => {
			let date = new Date(data.dt_txt);
			document.querySelector(`#day${day + 1}`).textContent =
				daysWeek[date.getDay()];

			k = data.main.temp;
			c = k - 273.15;
			f = (c * 9) / 5 + 32;

			document.querySelector(`.current${day + 1}`).textContent = `${f.toFixed(
				0
			)}°F`;

			day++;
		});
	});

/// Last modify section code
let lastModi = function () {
	/*convert document.lastModified to an object and I put into variable
    /* called lastModified*/
	let last = new Date(document.lastModified);
	/*get the day, month, and etc, from my lastModified object*/
	let day = last.getDay();
	let month = last.getMonth();
	let year = last.getFullYear();
	let hour = last.getHours();

	monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	document.getElementById(
		"day"
	).textContent = `Last modified: ${daysWeek[day]}- `;
	document.getElementById("month").textContent = `${monthNames[month]}- `;
	document.getElementById("year").textContent = ` ${year}- `;
	document.getElementById("hour").textContent = `${hour}-hours`;
};

//here I run my function
lastModi();
