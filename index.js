const menuToggle = document.getElementById("menu-toggle")
const expandedMenu = document.getElementById("expanded-menu")

menuToggle.addEventListener("click", () => {
  expandedMenu.classList.toggle("hidden")
})
