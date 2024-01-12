function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Adicione aqui a lógica de autenticação. Por exemplo, você pode comparar o username e password com dados no servidor.

    // Exemplo básico de verificação
    if (username === 'usuario' && password === 'senha') {
        alert('Login bem-sucedido!');
        window.location.href = 'faturament/faturament.html'; // Redireciona para a página após o login bem-sucedido
    } else {
        alert('Login falhou. Verifique seu nome de usuário e senha.');
    }
}
