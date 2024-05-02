const navSlide = () => {
	const sintas = document.querySelector(".sintas");
	const navLists = document.querySelector("nav");

	sintas.addEventListener("click", () =>{
		navLists.classList.toggle("nav-active");
		sintas.classList.toggle("toggle-sintas");
	});
};
navSlide();

window.onbeforeunload = () => {
	for (const form of document.getElementsByTagName("form")) {
		form.reset();
	}
};
