const updateModified = function () {
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

/// button resposive menu

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

//----- Adjust the rating

function adjustRating(rating) {
	document.getElementById("ratingvalue").innerHTML = rating;
}
