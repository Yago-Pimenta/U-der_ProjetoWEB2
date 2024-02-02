function abrirFormulario() {
    var fundo_formulario = document.getElementById('content-map-area');
    fundo_formulario.style.display = 'none';

    var formulario = document.getElementById('alert-form-area');
    formulario.style.display = 'flex';
}

function fecharFormulario() {
    var fundo_formulario = document.getElementById('content-map-area');
    fundo_formulario.style.display = 'flex';

    var formulario = document.getElementById('alert-form-area');
    formulario.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const div_map = document.getElementById('content-map-area');
    const menu_alerta = document.getElementById('menu-alerta');

    div_map.addEventListener('contextmenu', function (event) {
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