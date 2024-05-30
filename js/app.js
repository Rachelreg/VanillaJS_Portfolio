const openMenu = () => {
  const menu = document.querySelector(".header-menu");
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    document.querySelector("header .material-icons").innerHTML = "close";
  } else {
    document.querySelector("header .material-icons").innerHTML = "menu";
  }
};

const menuLinks = document.querySelectorAll(".header-menu li a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".header-menu");
    menu.classList.remove("active");
    document.querySelector("header .material-icons").innerHTML = "menu";
  });
});
