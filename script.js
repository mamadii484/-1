function createParticles() {
    const container = document.querySelector('.bg-particles');

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        
        const size = Math.random() * 10 + 5; 
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's'; 
        particle.style.animationDelay = Math.random() * 5 + 's';

        container.appendChild(particle);
    }
}


window.addEventListener('load', createParticles);
// JavaScript Document