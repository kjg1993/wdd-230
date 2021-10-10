window.addEventListener("load", function () {
	let sliderImgs = [];
	sliderImgs[0] = "images/img1.jpg";
	sliderImgs[1] = "images/img2.jpg";
	sliderImgs[2] = "images/img3.jpg";
	sliderImgs[3] = "images/img4.jpg";
	sliderImgs[4] = "images/img5.jpg";
	sliderImgs[5] = "images/img6.jpg";
	sliderImgs[6] = "images/img7.jpg";
	sliderImgs[7] = "images/img8.jpg";
	sliderImgs[8] = "images/img9.jpg";

	let indexImages = 0,
		time = 1500;

	function changeImages() {
		document
			.getElementById("slider")
			.setAttribute("src", sliderImgs[indexImages]);
		if (indexImages < 8) {
			indexImages++;
		} else {
			indexImages = 0;
		}
	}
	this.setInterval(changeImages, time);
});

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
