// Function to validate the contact form
function validateForm() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    // Simple validation: check if fields are not empty
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Additional validation (email format) can be added here if needed

    // Form is valid
    alert('Message sent successfully!');
    return true;
}
