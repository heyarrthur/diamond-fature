function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Verifica o primeiro conjunto de credenciais
    if (username === 'dm.marquesferreira@gmail.com' && password === '0201davi') {
        alert('Login bem-sucedido!');
        window.location.href = 'faturament/faturament.html'; // Redireciona para a página após o login bem-sucedido
    } 
    // Verifica o segundo conjunto de credenciais
    else if (username === 'admin' && password === 'admin') {
        alert('Login bem-sucedido!');
        window.location.href = 'faturament/faturament.html'; // Redireciona para a página após o login bem-sucedido
    } 
    // Caso nenhum conjunto corresponda, exibe uma mensagem de erro
    else {
        alert('Login falhou. Verifique seu nome de usuário e senha.');
    }
}
