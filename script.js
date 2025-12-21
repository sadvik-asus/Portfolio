// --- 1. TYPEWRITER EFFECT ---
const textElement = document.querySelector('.typing-text');
const texts = ['AIML Engineer', 'Python Developer', 'Data Analyst', 'Tech Enthusiast'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    textElement.textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait 2 seconds before deleting
    } else {
        setTimeout(type, 100); // Typing speed
    }
}());


// --- 2. ACTIVE NAVIGATION HIGHLIGHTER ---
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // 60 is a small offset to trigger the highlight slightly before the section hits the exact top
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});
// --- 3. THEME TOGGLE LOGIC ---
const themeBtn = document.querySelector('.theme-btn');
const themeIcon = document.querySelector('.theme-btn i');
const body = document.body;

// Check if user already visited and chose a theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Swap Icons
    if (body.classList.contains('light-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light'); // Save preference
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark'); // Save preference
    }
});

