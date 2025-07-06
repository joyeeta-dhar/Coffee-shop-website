document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle (Keep this section)
    const darkModeToggle = document.querySelector('.dark-mode-toggle button');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    }

    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }


/// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Switch menu categories
document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".menu-categories button");
    const menuSections = document.querySelectorAll(".menu-items");

    // Show only coffee by default
    menuSections.forEach(section => {
        if (section.dataset.category !== "coffee") {
            section.classList.add("hidden");
        } else {
            section.classList.remove("hidden");
        }
    });

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedCategory = button.dataset.category;

            menuSections.forEach(section => {
                if (section.dataset.category === selectedCategory) {
                    section.classList.remove("hidden");
                } else {
                    section.classList.add("hidden");
                }
            });
        });
    });
});


    // Newsletter and Contact form functions should be in the same DOM content loaded

     //Newsletter Submit Function

     const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            const emailInput = newsletterForm.querySelector('input[type="email"]');

            if (emailInput.value) {
                alert('Thank you for subscribing!'); // Replace with actual submission logic
                emailInput.value = ''; // Clear the input field
            } else {
                alert('Please enter your email address.');
            }
        });
    }
    // Contact Form Validation (Contact Page)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const nameInput = contactForm.querySelector('input[name="name"]');
            const emailInput = contactForm.querySelector('input[name="email"]');
            const messageTextarea = contactForm.querySelector('textarea[name="message"]');

            if (!nameInput.value || !emailInput.value || !messageTextarea.value) {
                alert('Please fill out all fields in the contact form.');
                event.preventDefault(); // Prevent form submission
            } else {
                alert('Message sent!'); // Replace with actual form submission logic
                // You would typically use AJAX to send the form data to a server
                event.preventDefault(); //Prevent actual submission for this example.
            }
        });
    }
});



