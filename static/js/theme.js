(function () {
  const STORAGE_KEY = "portfolio-theme";
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  function getTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateToggle(theme);
  }

  function updateToggle(theme) {
    if (!toggle) return;
    const isLight = theme === "light";
    toggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to light mode"
    );
    toggle.setAttribute("title", isLight ? "Switch to dark mode" : "Switch to light mode");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setTheme(getTheme() === "dark" ? "light" : "dark");
    });
  }

  updateToggle(getTheme());
})();
