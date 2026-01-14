function mostrarAba(id) {
    document.querySelectorAll('.aba').forEach(aba => {
        aba.classList.remove('ativa');
    });
    document.getElementById(id).classList.add('ativa');
}

function salvarRegistro() {
    const dias = ['seg','ter','qua','qui','sex','sab','dom'];
    dias.forEach(dia => {
        localStorage.setItem(dia, document.getElementById(dia).value);
    });
    alert("Treinos da semana salvos 💪");
}

function carregarRegistro() {
    const dias = ['seg','ter','qua','qui','sex','sab','dom'];
    dias.forEach(dia => {
        document.getElementById(dia).value = localStorage.getItem(dia) || "";
    });
}

window.onload = carregarRegistro;