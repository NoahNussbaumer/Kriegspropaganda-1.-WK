// JavaScript Stylesheet-Wechsler von SelfHTML e.V.
// https://wiki.selfhtml.org/wiki/JavaScript/Anwendung_und_Praxis/Stylesheets_dynamisch_wechseln

"use strict";
(function () {
	document.addEventListener("DOMContentLoaded", function () {

		var currentSheet = document.getElementById("stylesheet"),
			switcher = document.getElementById("styleswitcher");

		function loadStyle () {
			if (localStorage.getItem("style2")) {
				currentSheet.href = localStorage.getItem("style2");
			}
		}

		if (currentSheet) {

			// set previously stored stylesheet?
			loadStyle();

			// listen for clicks on buttons
			switcher.addEventListener("click", function (ev) {
				var b = ev.target; // button

				if (b && b.hasAttribute("data-stylesheet")) {

					// save value
					localStorage.setItem(
						"style2",
						b.getAttribute("data-stylesheet")
					);

					loadStyle();
				}
			});
		}
	});
}());