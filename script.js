// Implemented heavily through the use of Gemini

const toggleButton = document.getElementById('dark-mode-toggle');
const htmlElement = document.documentElement;

// Check for saved user preference in localStorage or system settings
const currentTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

htmlElement.setAttribute('data-theme', currentTheme);
updateButtonText(currentTheme);

toggleButton.addEventListener('click', () => {
    let theme = htmlElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
});

function updateButtonText(theme) {
    toggleButton.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}