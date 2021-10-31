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

// //Lazy loadgind code

let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
	image.setAttribute("src", image.getAttribute("data-src"));
	image.onload = () => {
		image.removeAttribute("data-src");
	};
};
if ("IntersectionObserver" in window) {
	const observer = new IntersectionObserver((items, observer) => {
		items.forEach((item) => {
			if (item.isIntersecting) {
				loadImages(item.target);
				observer.unobserve(item.target);
			}
		});
	});
	imagesToLoad.forEach((img) => {
		observer.observe(img);
	});
} else {
	imagesToLoad.forEach((img) => {
		loadImages(img);
	});
}

///LocalStorage

const lastVisit = document.getElementById("lastVisit");

const today = new Date();
const time = today.getTime();

document.addEventListener("DOMContentLoaded", () => {
	infoStorage();
});

const infoStorage = () => {
	try {
		let day = localStorage.getItem("timesVisited");
		if (day != time) {
			let days = Math.round((time - day) / 86400000);
			lastVisit.textContent = `Your last visit was days ${days} ago`;
			setStyles();
		}
	} catch (er) {
		setStyles();
	}
};

const setStyles = () => {
	localStorage.setItem("timesVisited", time);
};
