const moonIcon = document.getElementById('moon-icon')!;
const sunIcon = document.getElementById('sun-icon')!;

const darkMode = () => {
  document.body.classList.toggle('dark-theme');
    sunIcon.style.display = 'block'
    moonIcon.style.display = 'none'
    const isDarkMode = document.body.classList.contains('dark-theme');
    localStorage.setItem("dark", (<any>isDarkMode));
}

const lightMode = () => {
  document.body.classList.toggle('dark-theme');
    sunIcon.style.display = 'none'
    moonIcon.style.display = 'block'
    const isLightMode = document.body.classList.contains('dark-theme');
    localStorage.setItem("dark", (<any>isLightMode));
}

const darkmode = localStorage.getItem("dark");
if(darkmode === 'true'){
  document.body.classList.add('dark-theme');
}

const lighmode = localStorage.getItem("mode");
if(lighmode === 'true'){
  document.body.classList.add('dark-theme');
}

sunIcon?.addEventListener("click", lightMode);
moonIcon?.addEventListener("click", darkMode);

