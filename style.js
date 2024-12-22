
    const contactButton = document.getElementById('contactButton');
    const contactModal = document.getElementById('contactModal');
    const closeButton = document.querySelector('.close-button');

    contactButton.addEventListener('click', () => {
        contactModal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === contactModal) {
        contactModal.style.display = 'none';
    }
    });

    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    document.getElementById('profilePic').addEventListener('mouseup', function () {
        window.open('https://www.linkedin.com/in/kobe-kerkhofs-0992a9263/', '_blank');
    });

