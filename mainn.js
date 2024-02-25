const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  // Toggle dark mode class on the body
  body.classList.toggle('dark-mode');

  // Save user preference in local storage
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});

// Check user preference from local storage on page load
const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
if (isDarkMode) {
  body.classList.add('dark-mode');
}

