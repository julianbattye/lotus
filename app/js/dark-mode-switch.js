// based on https://coliff.github.io/dark-mode-switch/

const userPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

(function () {
  var darkSwitch = document.getElementById("darkSwitch");
  if (darkSwitch) {
    initTheme();

    darkSwitch.addEventListener("change", function () {
      resetTheme();
    });
    function initTheme() {
      var darkThemeSelected = false;
      var isAlreadyDefined = localStorage.getItem("darkSwitch") !== null;
      if (isAlreadyDefined === false) {
        if (userPrefersDark) {
          darkThemeSelected = true;
        }
      } else {
        darkThemeSelected =
          localStorage.getItem("darkSwitch") !== null &&
          localStorage.getItem("darkSwitch") === "dark";
      }
      darkSwitch.checked = darkThemeSelected;
      darkThemeSelected
        ? document.body.setAttribute("data-theme", "dark")
        : document.body.removeAttribute("data-theme");
    }
    function resetTheme() {
      if (darkSwitch.checked) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("darkSwitch", "dark");
      } else {
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch");
      }
    }
  }
})();
