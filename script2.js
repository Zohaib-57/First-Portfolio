 // JavaScript to prevent default link behavior and open in call tab
 document.addEventListener('DOMContentLoaded', function() {
    var contactButton = document.querySelector('.contact-button');
    contactButton.addEventListener('click', function(event) {
        event.preventDefault();
        var phoneNumber = contactButton.getAttribute('href');
        window.location.href = phoneNumber;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var submitButton = document.getElementById('submitButton');

    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Validate form fields
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields');
            return;
        }

        // If all fields are filled out, submit the form
        form.submit();
    });
});
