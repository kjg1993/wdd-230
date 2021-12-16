"use strict";
/// Directory Api

const urlApi =
	"https://kjg1993.github.io/wdd-230/bussines_info_Json/bussinesInfo.json";

fetch(urlApi)
	.then((response) => response.json())
	.then((directoryApi) => {
		let info = directoryApi["businnesInfo"];
		console.log(info);

		for (let i = 0; i < info.length; i++) {
			const element = info[i];

			let container = document.createElement("div");
			container.className = "content-card";

			let name = document.createElement("h2");
			name.className = "name";
			name.textContent = element.name;

			let logo = document.createElement("img");
			logo.className = "logo";
			logo.setAttribute("src", element.logo);
			logo.setAttribute("alt", element.name);

			let web = document.createElement("a");
			web.textContent = element.name;
			web.className = "anchor";
			web.setAttribute("href", element.urlSite);
			web.setAttribute("target", "_blank");

			container.appendChild(name);
			container.appendChild(logo);
			container.appendChild(web);
			document.querySelector(".directory").appendChild(container);
		}
	});

/// grid view and list view

const grid = document.querySelector(".grid");
const list = document.querySelector(".list");
const direc = document.querySelector(".directory");

grid.addEventListener(
	"click",
	() => {
		direc.classList.toggle(".directory");
	},
	false
);

list.addEventListener(
	"click",
	() => {
		direc.classList.toggle("block");
	},
	false
);
