// Code for toggling resonsive menu

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }

  // Code for page update date

  let date = new Date(document.lastModified);
  let time = date.toLocaleString('en-US');
 
  document.getElementById("upDate").textContent = time;