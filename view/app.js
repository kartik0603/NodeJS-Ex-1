document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const usersList = document.getElementById('users');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert('User registered successfully');
            loadUsers();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error registering user');
        });
    });

    function loadUsers() {
        fetch('/users/users') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            usersList.innerHTML = ''; 
            data.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.username} (${user.email})`;
                usersList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error loading users');
        });
    }

});
