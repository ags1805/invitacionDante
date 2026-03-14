// 1. Generar estrellas aleatorias en el fondo
function createStars() {
    const container = document.getElementById('stars-container');
    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.setProperty('--t', Math.random() * 3 + 2 + 's');
        container.appendChild(star);
    }
}

// 2. Contador Regresivo
const targetDate = new Date("August 16, 2026 16:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

    if (gap > 0) {
        document.getElementById('days').innerText = Math.floor(gap / day);
        document.getElementById('hours').innerText = Math.floor((gap % day) / hour);
        document.getElementById('minutes').innerText = Math.floor((gap % hour) / minute);
        document.getElementById('seconds').innerText = Math.floor((gap % minute) / second);
    }
}

// 3. Animación al hacer Scroll (Intersection Observer)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    setInterval(updateCountdown, 1000);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Manejo del formulario de WhatsApp
    document.getElementById('rsvp-form').addEventListener('submit', (e) => {
        e.preventDefault();

        // Capturamos los datos
        const name = document.getElementById('guest-name').value;
        const count = document.getElementById('guest-count').value;
        const phone = "5491156386925";

        // Armamos el texto 
        const mensaje = `Hola Dante 🚀 confirmo asistencia. ${name} x${count} 🎂`;

        // Creamos la URL de WhatsApp
        const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`;

        // Redirigimos al invitado
        window.open(whatsappUrl, '_blank');

        // Limpiamos los campos para que quede como nuevo
        form.reset();
    });
});