// script.js

// Elementos do DOM
const monthYearDisplay = document.getElementById('month-year');
const dateGrid = document.getElementById('date-grid');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

// Variáveis para controlar o mês e ano
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Função para gerar o calendário
function generateCalendar(month, year) {
    // Limpa os dias anteriores
    dateGrid.innerHTML = '';

    // Atualiza o cabeçalho com o mês e ano
    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    
    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

    // Descobre o primeiro dia do mês e quantos dias ele tem
    const firstDay = new Date(year, month, 1).getDay(); // Dia da semana (0-6)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total de dias no mês

    // Adiciona células vazias antes do primeiro dia do mês
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        dateGrid.appendChild(emptyCell);
    }

    // Adiciona os dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = day;

        // Destaque para fins de semana (domingo e sábado)
        const isWeekend =
            (firstDay + day - 1) % 7 === 0 || (firstDay + day - 1) % 7 === 6;

        if (isWeekend) {
            dayCell.style.color = '#e74c3c';
        }

        dateGrid.appendChild(dayCell);
    }
}

// Funções para navegar entre meses
function goToPreviousMonth() {
    currentMonth--;
    
    if (currentMonth < 0) {
        currentMonth = 11; // Volta para dezembro
        currentYear--;
    }
    
    generateCalendar(currentMonth, currentYear);
}

function goToNextMonth() {
    currentMonth++;
    
    if (currentMonth > 11) {
        currentMonth = 0; // Avança para janeiro
        currentYear++;
    }
    
    generateCalendar(currentMonth, currentYear);
}

// Adiciona eventos aos botões de navegação
prevMonthButton.addEventListener('click', goToPreviousMonth);
nextMonthButton.addEventListener('click', goToNextMonth);

// Gera o calendário inicial com o mês atual
generateCalendar(currentMonth, currentYear);


document.getElementById("home").addEventListener("click", () => {
    window.location.href = "../html/feed.html";
});