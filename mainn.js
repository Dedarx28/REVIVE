const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {

  body.classList.toggle('dark-mode');


  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});


const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
if (isDarkMode) {
  body.classList.add('dark-mode');
}

