let darkModeState = false;

function load() {

    const button = document.querySelector(".checkbox");
  
    // MediaQueryList object
    const useDark = window.matchMedia("(prefers-color-scheme: dark)");
  
    // Toggles the "dark-mode" class based on if the media query matches
    function toggleDarkMode(state) {
      // Older browser don't support the second parameter in the
      // classList.toggle method so you'd need to handle this manually
      // if you need to support older browsers.
      document.documentElement.classList.toggle("dark-mode", state);

      darkModeState = state;
      
      // já deixa o input marcado como ativo
      button.checked = state;
    }

    // Sets localStorage state
    function setDarkModeLocalStorage(state) {
      localStorage.setItem("dark-mode", state);
    }
  
    // Initial setting
    toggleDarkMode(localStorage.getItem("dark-mode") == "true");

    // Listen for changes in the OS settings
    useDark.addEventListener("change", (evt) => {
      toggleDarkMode(evt.matches);
    });
  
    // Toggles the "dark-mode" class on click
    button.addEventListener("click", () => {
  
      darkModeState = !darkModeState;
     
      toggleDarkMode(darkModeState);
      setDarkModeLocalStorage(darkModeState);
    });
  }
  
  window.addEventListener("DOMContentLoaded", load);
  