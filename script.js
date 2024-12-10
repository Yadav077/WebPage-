function submitForm() {
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;

    // Sending data to the server
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userID, password })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}
function submitForm() {
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userID, password })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);  // Displays "Login data saved!"
        if (data === 'Login data saved!') {
            window.location.href = 'diwali.html';  // Redirect to the Diwali page
        }
    })
    .catch(error => console.error('Error:', error));
}
function submitForm() {
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userID, password })
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Login data saved!') {
            document.body.classList.add('foldOut');  // Add fold-out animation class
            setTimeout(() => {
                window.location.href = 'diwali.html';
            }, 1200);  // Adjust delay to match animation duration
        }
    })
    .catch(error => console.error('Error:', error));
}

