
let button_open_menu = document.querySelectorAll('.list__img');

button_open_menu.forEach(button => {
    button.addEventListener('click', ()=>{
        let menu = document.getElementById('menu_lateral');
        if(menu.classList.contains('ocultar-menu')){
            open_menu();
        }
    })
});

let open_menu_buttons = document.querySelectorAll('.open_menu_close');

open_menu_buttons.forEach(open_menu_button => {
    open_menu_button.addEventListener('click',()=>{
        if(screen.width < 768 || window.screen.width < 768){
            let menu = document.getElementById('menu_mobile');
            menu.classList.toggle('open-menu-mobile');
        }else{
            let menu = document.getElementById('menu_lateral');
            let body = document.getElementById('container_body');
            let iconos = document.querySelectorAll('.list__img');
            let arrows = document.querySelectorAll('.list__arrow');
            let logoBig = document.getElementById('img_logo');
            let logoSmall = document.getElementById('img_logo_small');
    
            
            menu.classList.toggle('ocultar-menu');
            body.classList.toggle('agrandar-body');
            logoBig.classList.toggle('ocultar-logo');
            logoSmall.classList.toggle('aparecer-logo-small');
            iconos.forEach(icon => {
                icon.classList.toggle('static-icon');
            });
            arrows.forEach(arrow => {
                arrow.classList.toggle('delete_arrow');
            });
        }
    });
})






let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});

window.onload = function(){
    let icons = document.querySelectorAll(".icon-next");

    icons.forEach(icon => {
        var iconClass = icon.classList;
        var padre = icon.parentNode;
        switch( true ){
            case iconClass.contains('bg-red'):
                padre.style.setProperty('--icon-pulse', '#ffabab')
                break;
            case iconClass.contains('bg-blue'):
                padre.style.setProperty('--icon-pulse', '#ACE7FF')
                break;
            case iconClass.contains('bg-green'):
                padre.style.setProperty('--icon-pulse', '#AFF8DB')
                break;
            case iconClass.contains('bg-yellow'):
                padre.style.setProperty('--icon-pulse', '#FFF5BA')
                break;
            case iconClass.contains('bg-lilac'):
                padre.style.setProperty('--icon-pulse', '#F6A6FF')
                break;
            case iconClass.contains('bg-violet'):
                padre.style.setProperty('--icon-pulse', '#B28DFF')
                break;
        }
    })
}