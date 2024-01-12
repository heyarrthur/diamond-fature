// Atualize a função submitTransaction() no script.js
function submitTransaction() {
    var transactionType = document.getElementById('transactionType').value;
    var reason = document.getElementById('reason').value;
    var amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount)) {
        alert('Por favor, insira um valor numérico válido.');
        return;
    }

    var extratoContainer = document.getElementById('extratoContainer');
    var transactionElement = document.createElement('div');
    
    transactionElement.textContent = `${transactionType} - Motivo: ${reason} - Valor: ${amount.toFixed(2)}`;

    if (transactionType === 'Entrada') {
        transactionElement.classList.add('entry');
    } else if (transactionType === 'Saída') {
        transactionElement.classList.add('exit');
    }

    extratoContainer.appendChild(transactionElement);

    // Salvar as transações no localStorage
    var existingTransactions = localStorage.getItem('transactions') || '';
    localStorage.setItem('transactions', existingTransactions + transactionElement.outerHTML);

    // Limpar os campos do formulário após enviar
    document.getElementById('transactionForm').reset();
}

// Função para carregar transações do localStorage ao carregar a página
window.onload = function () {
    var extratoContainer = document.getElementById('extratoContainer');

    // Carregar transações
    var transactions = localStorage.getItem('transactions');
    if (transactions) {
        extratoContainer.innerHTML = transactions;
    }
};
