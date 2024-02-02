function clicarToggleMenu() {
    // var icone_toggle_menu = document.getElementById('navbar-hidden-menu');
    // if (icone_toggle_menu.style.display == 'none') {
    //     icone_toggle_menu.style.display = 'block';
    // }
    // else {
    //     icone_toggle_menu.style.display = 'none';
    // }
    // var checkbox_toggle_menu = document.getElementById('checkbox-dropdown-navbar-menu');
    // if (checkbox_toggle_menu.checked === false) {
    //     checkbox_toggle_menu.checked = true;
    // }
    // else {
    //     checkbox_toggle_menu.checked = false;
    // }
    // alert('aaa!!!')
    var hidden_links = document.querySelectorAll('.navbar-hidden-link');
    hidden_links.forEach(function(elemento) {
        elemento.style.display = 'absolute';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // const div_map = document.getElementById('content-map-area');
    // const menu_alerta = document.getElementById('menu-alerta');

    // div_map.addEventListener('contextmenu', function (event) {
    //     event.preventDefault(); // Impede o menu de contexto padrão

    //     // Define a posição do menu personalizado
    //     menu_alerta.style.left = event.pageX + 'px';
    //     menu_alerta.style.top = event.pageY + 'px';

    //     // Exibe o menu personalizado
    //     menu_alerta.style.display = 'block';
    // });

    // document.addEventListener('click', function () {
    //     // Oculta o menu personalizado ao clicar fora dele
    //     menu_alerta.style.display = 'none';
    // });

    const opcaoFuncao = document.getElementById('navbar-right-toggle-menu');
    opcaoFuncao.addEventListener('click', function (event) {
        // event.preventDefault();
        clicarToggleMenu();
    });
});