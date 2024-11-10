document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    // Check against predefined usernames and passwords
    var users = {
        'Ademods': { password: 'adeazil', rank: 'Rank 1', birthday: '01-01-2000', phone: '08123456789' },
        'ade_cosmic': { password: 'ade', rank: 'Rank 2', birthday: '02-02-1999', phone: '08987654321' }
    };

    if (users[username] && users[username].password === password) {
        // If credentials are correct, display user information
        document.getElementById('userName').textContent = username;
        document.getElementById('userRank').textContent = users[username].rank;
        document.getElementById('userBirthday').textContent = users[username].birthday;
        document.getElementById('userPhone').textContent = users[username].phone;
        document.getElementById('userInfo').style.display = 'block';
        document.querySelector('.login').style.display = 'none'; // Hide login form
    } else {
        alert('Invalid username or password');
    }
});
