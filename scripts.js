const sections = document.querySelectorAll('.section');
const statusValue = document.getElementById('dynamic-status');
const scrollContainer = document.getElementById('scroll-container');
const navLinks = document.querySelectorAll('.nav-link');

const lineStatuses = [
    "BLUE LINE ACTIVE",
    "GREEN LINE ACTIVE",
    "ORANGE LINE ACTIVE",
    "VALID ALL LINES",
    "ROUTES MAP",
    "FARE INFO",
    "RESTRICTED ITEMS"
];

const observerOptions = {
    root: scrollContainer,
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            
            const index = Array.from(sections).indexOf(entry.target);
            document.body.setAttribute('data-section', index);
            
            statusValue.textContent = lineStatuses[index];
            
            let currentId = entry.target.id;
            if(!currentId) currentId = 'home';
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        } else {
            entry.target.classList.remove('in-view');
        }
    });
}, observerOptions);

sections.forEach(sec => observer.observe(sec));

navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            if(targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

let tiltTimeout;
const metroCard = document.getElementById('metroCard');
let isDragging = false;
let startX, startY;
let rotX = 0, rotY = 0;

const resetCardRotation = () => {
    rotX = 0;
    rotY = 0;
    metroCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
};

scrollContainer.addEventListener('mousedown', (e) => {
    if (e.target.closest('nav') || e.target.closest('.text-content')) return;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    metroCard.style.transition = 'none';
    clearTimeout(tiltTimeout);
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const walkX = (e.clientX - startX) * 0.8;
        const walkY = (e.clientY - startY) * 0.8;
        
        rotX -= walkY;
        if (Math.cos(rotX * Math.PI / 180) < 0) {
            rotY -= walkX;
        } else {
            rotY += walkX;
        }
        
        metroCard.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
        
        startX = e.clientX;
        startY = e.clientY;
    } else if(window.innerWidth > 768) {
        const xAxis = (window.innerWidth / 2 - e.clientX) / 45; 
        const yAxis = (window.innerHeight / 2 - e.clientY) / 45;
        metroCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        
        clearTimeout(tiltTimeout);
        tiltTimeout = setTimeout(resetCardRotation, 500); 
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        metroCard.style.transition = 'transform 0.6s ease-out';
        tiltTimeout = setTimeout(resetCardRotation, 1500);
    }
});

scrollContainer.addEventListener('touchstart', (e) => {
    if (e.target.closest('nav') || e.target.closest('.text-content')) return;
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    metroCard.style.transition = 'none';
    clearTimeout(tiltTimeout);
});

scrollContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    
    const walkX = currentX - startX;
    const walkY = currentY - startY;

    if (Math.abs(walkX) > Math.abs(walkY)) {
        e.preventDefault(); 
    }

    rotX -= walkY * 0.8;
    if (Math.cos(rotX * Math.PI / 180) < 0) {
        rotY -= walkX * 0.8;
    } else {
        rotY += walkX * 0.8;
    }
    
    metroCard.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    
    startX = currentX;
    startY = currentY;
}, { passive: false });

scrollContainer.addEventListener('touchend', () => {
    if (isDragging) {
        isDragging = false;
        metroCard.style.transition = 'transform 0.6s ease-out';
        tiltTimeout = setTimeout(resetCardRotation, 1500);
    }
});

document.addEventListener('mouseleave', () => {
    if(window.innerWidth > 768 && !isDragging) {
        resetCardRotation();
    }
});

const themeToggleBtn = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const isLight = document.body.getAttribute('data-theme') === 'light';
        if (isLight) {
            document.body.removeAttribute('data-theme');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            document.body.setAttribute('data-theme', 'light');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    });
}

document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('copy', event => event.preventDefault());
document.addEventListener('cut', event => event.preventDefault());
document.addEventListener('selectstart', event => event.preventDefault());
