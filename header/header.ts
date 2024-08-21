const moonIcon = document.getElementById('moon-icon')!;
const sunIcon = document.getElementById('sun-icon')!;

const darkMode = () => {
  document.body.classList.toggle('dark-theme');
    sunIcon.style.display = 'block'
    moonIcon.style.display = 'none'
}

const lightMode = () => {
  document.body.classList.toggle('dark-theme');
    sunIcon.style.display = 'none'
    moonIcon.style.display = 'block'
}

sunIcon?.addEventListener("click", lightMode);
moonIcon?.addEventListener("click", darkMode);