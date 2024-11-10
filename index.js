document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated user data
    const userData = {
        username: 'user123',
        password: 'pass123',
        name: 'John Doe',
        rank: 'Admin',
        status: 'Active',
        date: '2023-10-18',
        phone: '08123456789'
    };

    if (username === userData.username && password === userData.password) {
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('userInfo').style.display = 'block';
        document.getElementById('userName').innerText = userData.name;
        document.getElementById('userRank').innerText = userData.rank;
        document.getElementById('userStatus').innerText = userData.status;
        document.getElementById('userDate').innerText = userData.date;
        document.getElementById('userPhone').innerText = userData.phone;
    } else {
        alert('Username or password is incorrect');
    }
});
