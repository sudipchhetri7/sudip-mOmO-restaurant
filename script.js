document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    document.getElementById('thank-you-message').style.display = 'block';
});


// Initialize EmailJS
(function() {
    emailjs.init('UpI4O9eTXdw01Ld65');
})();

// Function to send email
function sendEmail(e) {
    e.preventDefault(); // Prevent default form submission
    emailjs.sendForm('service_js5xmh9', 'template_oqiupf5', e.target)
        .then((result) => {
            alert('Thank you for reaching out!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message. Please try again.');
        });
}

// Attach event listener to form on window load
// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', sendEmail);
    }
});
