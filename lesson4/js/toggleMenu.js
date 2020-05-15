/* Option One -- Create function seperately */

const hambutton = document.querySelector(".burger");
hambutton.addEventListener("click", toggleMenu);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}

/* Option Two -- function being created on the fly */

/*
const hambutton = document.querySelector(".burger");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")});
*/