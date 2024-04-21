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


function checkForm() {
  const formElements = document.querySelectorAll('form > input, form > textarea');

  formElements.forEach(element => {
    if (element.value == '')
    {
      const labelElement = document.querySelector(`label[for=${element.id}]`)

      labelElement.innerHTML = "ce champ est obligatoir"
      labelElement.style.color = "#CC0000";

      element.classList.add('error')
    }
  });
}