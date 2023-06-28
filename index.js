const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
];

const checkLogin = (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        window.location.href = 'entrou.html';
    } else {
        alert('Usuário ou senha incorretos');
    }
};

const form = document.querySelector('form');
form.addEventListener('submit', checkLogin);