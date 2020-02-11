var checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("logo").src = "images/Logo+Name_light.png";
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("logo").src = "images/Logo+Name_blue.png";
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
