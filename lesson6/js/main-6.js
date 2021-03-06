//Function that display the others paragraphs

const btn = document.getElementById("readButton");

btn.addEventListener("click", () => {
	if (document.querySelector("#paragraph").style.display == "none") {
		document.querySelector("#paragraph").style.display = "block";
		document.querySelector("#readButton").innerHTML = "Read less";
	} else {
		document.querySelector("#paragraph").style.display = "none";
		document.querySelector("#readButton").innerHTML = "Read more";
	}
});

const updateModified = function () {
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
