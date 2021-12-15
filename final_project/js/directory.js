"use strict";
/// Directory Api

// const showDirectory = (items) => {
// 	items.forEach((direcInfo) => {
// 		let container = document.createElement("div");
// 		container.className = "content-card";

// 		let name = document.createElement("h2");
// 		name.className = "name";
// 		name.textContent = direcInfo.name;

// 		let logo = document.createElement("img");
// 		logo.localName = "logo";
// 		logo.setAttribute("src", direcInfo.logo);
// 		logo.setAttribute("alt", direcInfo.name);

// 		let web = document.createElement("a");
// 		web.className = "web";
// 		web.setAttribute("href", direcInfo.urlSite);

// 		container.appendChild(name);
// 		container.appendChild(logo);
// 		container.appendChild(web);
// 		document.querySelector(".directory").appendChild(container);
// 	});
// };

// const urlApi =
// 	"https://kjg1993.github.io/wdd-230/bussines_info_Json/bussinesInfo.json";

// fetch(urlApi)
// 	.then((response) => response.json())
// 	.then((directoryApi) => {
// 		let info = directoryApi["businnesInfo"];
// 		console.log(info);

// 		for (let i = 0; i < info.length; i++) {
// 			const element = info[i];

// 			let container = document.createElement("div");
// 			container.className = "content-card";

// 			let name = document.createElement("h2");
// 			name.className = "name";
// 			name.textContent = element.name;

// 			let logo = document.createElement("img");
// 			logo.className = "logo";
// 			logo.setAttribute("src", element.logo);
// 			logo.setAttribute("alt", element.name);

// 			let web = document.createElement("a");
// 			web.className = "web";
// 			web.setAttribute("href", element.urlSite);

// 			container.appendChild(name);
// 			container.appendChild(logo);
// 			container.appendChild(web);
// 			document.querySelector(".directory").appendChild(container);
// 		}
// 	});
