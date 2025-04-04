document.addEventListener('DOMContentLoaded', function() {
    // Wait for hero video to load
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.addEventListener('loadeddata', function() {
            // Function to create typing effect
            const typeText = (element, text, speed) => {
                element.textContent = '';
                let i = 0;
                const type = () => {
                    if (i < text.length) {
                        element.textContent += text.charAt(i++);
                        setTimeout(type, speed);
                    }
                };
                setTimeout(type, 1000);
            };

            // Typing effect to title and hero text
            const elementsToType = [
                { element: document.querySelector('title'), text: "Erick Gitaranga", speed: 200 },
                { element: document.querySelector('.hero-content h1'), text: document.querySelector('.hero-content h1').textContent, speed: 100 }
            ];

            elementsToType.forEach(({ element, text, speed }) => {
                if (element) typeText(element, text, speed);
            });
        });
    }

    // Form Validation
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert('Thanks for your message! I will respond soon.');
            setTimeout(() => {
                // Clear input fields explicitly
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            }, 1000); // Delay clearing fields by 1 second
        });
    }
});
