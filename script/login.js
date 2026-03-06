document.getElementById('login-btn').addEventListener('click', function() {
    const loginUserName = document.getElementById('username');
    const userName = loginUserName.value.trim();
    
    const loginPassword = document.getElementById('password');
    const password = loginPassword.value.trim();

    if (userName === 'admin' && password === 'admin123') {
        alert('login success');
        window.location.href = './home.html'; 
    }
    else {
        alert('login failed');
    }
});