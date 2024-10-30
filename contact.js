window.onload = function() {
    // Handle form submission
    document.getElementById('contactForm').onsubmit = function(event) {
        event.preventDefault(); // Prevent page refresh on form submission

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Get selected gender
        const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not specified';

        // Get selected interests from checkboxes
        const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
            .map(el => el.value);

        // Create an object to store the form data
        const formData = {
            name,
            email,
            phone,
            subject,
            gender,
            interests,
            message,
        };

        // Save form data to localStorage
        localStorage.setItem('contactData', JSON.stringify(formData));
        console.log('Form data saved successfully!');
        alert('Form data saved successfully!');
    };

    // Optional: Log the stored data to the console on page load
    const savedData = localStorage.getItem('contactData');
    if (savedData) {
        console.log('Saved Form Data:', JSON.parse(savedData));
    }
};
