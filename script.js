document.getElementById('dynamicForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const namePattern = /^[A-Za-z]+$/;
    const name = document.getElementById('name').value;
    if (!namePattern.test(name)) {
        alert('Name should only contain letters A-Z and a-z.');
        return;
    }

    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    const phone = document.getElementById('phone').value;
    if (!/^[0-9]{10}$/.test(phone)) {
        alert('Phone number must be exactly 10 digits.');
        return;
    }

    const message = document.getElementById('message').value;
    const wordCount = message.trim().split(/\s+/).length;
    if (wordCount > 200) {
        alert('Message should not exceed 200 words.');
        return;
    }

    alert('Form submitted successfully!');
    this.reset();
});