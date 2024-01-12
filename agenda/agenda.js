let eventos = [];
let mesSelecionado = 0; // Janeiro é o mês inicial
let diaSelecionado = null; // Dia selecionado

// Carregar eventos do armazenamento local, se existirem
if (localStorage.getItem('eventos')) {
    eventos = JSON.parse(localStorage.getItem('eventos'));
}

function atualizarCalendario() {
    mesSelecionado = parseInt(document.getElementById('mes').value);
    exibirCalendario();
}

function exibirCalendario() {
    const calendarioContainer = document.getElementById('calendario');
    calendarioContainer.innerHTML = '';

    const totalDias = new Date(2024, mesSelecionado + 1, 0).getDate();

    for (let dia = 1; dia <= totalDias; dia++) {
        const diaElemento = document.createElement('div');
        diaElemento.className = 'dia';
        diaElemento.textContent = dia;
        diaElemento.addEventListener('click', () => mostrarTarefasDoDia(dia));
        calendarioContainer.appendChild(diaElemento);
    }

    // Limpar as tarefas do dia ao mudar de mês
    document.getElementById('tarefas-do-dia').innerHTML = '';
    diaSelecionado = null;
}

function mostrarTarefasDoDia(dia) {
    const tarefasDoDiaContainer = document.getElementById('tarefas-do-dia');
    tarefasDoDiaContainer.innerHTML = `<h3>Tarefas do dia ${dia}/${mesSelecionado + 1}</h3>`;

    const tarefasDoDia = eventos.filter(evento => {
        const data = new Date(evento.data);
        return data.getDate() === dia && data.getMonth() === mesSelecionado;
    });

    if (tarefasDoDia.length === 0) {
        tarefasDoDiaContainer.innerHTML += '<p>Nenhuma tarefa agendada para este dia.</p>';
    } else {
        tarefasDoDia.forEach(tarefa => {
            tarefasDoDiaContainer.innerHTML += `<p><strong>${tarefa.titulo}</strong> - ${tarefa.horario}</p>`;
        });
    }

    diaSelecionado = dia;
}

function adicionarTarefa() {
    const titulo = document.getElementById('titulo').value;
    const horario = document.getElementById('horario').value;

    if (titulo && horario && diaSelecionado !== null) {
        const data = new Date(2024, mesSelecionado, diaSelecionado);

        const evento = {
            titulo,
            horario,
            data
        };

        eventos.push(evento);

        // Salvar eventos no armazenamento local
        localStorage.setItem('eventos', JSON.stringify(eventos));

        // Limpar o formulário
        document.getElementById('formulario').reset();

        // Atualizar a lista de eventos
        mostrarTarefasDoDia(diaSelecionado);
    } else {
        alert('Por favor, preencha todos os campos e selecione um dia.');
    }
}

// Inicializar o calendário
exibirCalendario();
