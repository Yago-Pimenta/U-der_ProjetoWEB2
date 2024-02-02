function abrirFormulario() {
    var formulario = document.getElementById('alert-form-container');
    formulario.style.display = 'flex'; // Torna o formulário visível
    // var fundo_formulario = document.getElementById('alert-form-area');
    // fundo_formulario.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
}

function fecharFormulario() {
    var formulario = document.getElementById('alert-form-container');
    formulario.style.display = 'none'; // Torna o formulário visível
    // var fundo_formulario = document.getElementById('alert-form-area');
    // fundo_formulario.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    // fundo_escuro.style.backgroundColor = 'rgba(206, 197, 197, 1)';
}

document.addEventListener('DOMContentLoaded', function () {
    const div_form_alerta = document.getElementById('alert-form-area');
    const menu_alerta = document.getElementById('menu-alerta');

    div_form_alerta.addEventListener('contextmenu', function (event) {
        event.preventDefault(); // Impede o menu de contexto padrão

        // Define a posição do menu personalizado
        menu_alerta.style.left = event.pageX + 'px';
        menu_alerta.style.top = event.pageY + 'px';

        // Exibe o menu personalizado
        menu_alerta.style.display = 'block';
    });

    document.addEventListener('click', function () {
        // Oculta o menu personalizado ao clicar fora dele
        menu_alerta.style.display = 'none';
    });

    const opcaoFuncao = document.getElementById('option-alert');
    opcaoFuncao.addEventListener('click', function () {
        abrirFormulario();
    });
});