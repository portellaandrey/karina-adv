const revealElements = document.querySelectorAll(
    '.service-card, .stat-item, .about-text, .logo-perfil, .title-text'
);


const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease-out";
});

window.addEventListener('scroll', revealOnScroll);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    btn.innerHTML = "Solicitação Enviada <i class='fas fa-check'></i>";
    btn.style.background = "#28a745";
    this.reset();
});