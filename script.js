var sidenav = document.getElementById("sidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  document.getElementById("openBtn").style.display = 'none';
  sidenav.classList.add("active");
}

function closeNav() {
  document.getElementById("openBtn").style.display = 'block'
  sidenav.classList.remove("active");
}
