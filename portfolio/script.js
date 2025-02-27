document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 60; // Account for header offset

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Dark mode toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const root = document.documentElement;
    let isDark = localStorage.getItem('theme') === 'dark';

    // Initialize theme
    updateTheme();

    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateTheme();
    });

    function updateTheme() {
        if (isDark) {
            root.style.setProperty('--bg-color', '#0f172a');
            root.style.setProperty('--text-color', '#f8fafc');
            root.style.setProperty('--card-bg', '#1e293b');
            root.style.setProperty('--hero-bg', 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)');
            root.style.setProperty('--primary-color', '#38bdf8');
            root.style.setProperty('--secondary-color', '#0ea5e9');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            root.style.setProperty('--bg-color', '#ffffff');
            root.style.setProperty('--text-color', '#1f2937');
            root.style.setProperty('--card-bg', '#f3f4f6');
            root.style.setProperty('--hero-bg', 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 50%, #dbeafe 100%)');
            root.style.setProperty('--primary-color', '#2563eb');
            root.style.setProperty('--secondary-color', '#3b82f6');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    submitBtn.textContent = 'Message Sent!';
                    contactForm.reset();
                    setTimeout(() => {
                        submitBtn.textContent = 'Send Message';
                        submitBtn.disabled = false;
                    }, 2000);
                }, 1500);
            }
        });
    }

    // Skill progress animation
    const skillCards = document.querySelectorAll('.skill-card');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.querySelector('.skill-progress');
                if (progress && progress.dataset.width) {
                    progress.style.width = progress.dataset.width;
                    skillObserver.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    skillCards.forEach(card => {
        const progress = card.querySelector('.skill-progress');
        if (progress) {
            // Store the target width in a data attribute
            progress.style.width = '0%';
            progress.dataset.width = progress.getAttribute('data-progress') || '0%';
            skillObserver.observe(card);
        }
    });
});