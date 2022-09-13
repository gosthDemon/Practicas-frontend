window.addEventListener("scroll", function () {
    let screenWidth = screen.width;
    let widthScreen = window.innerWidth;
    if (screenWidth > "992" && widthScreen > "992") {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
        var logo = document.getElementById('logo-img');
        logo.classList.toggle('changeImage',window.scrollY > 0);
    }
});

tippy('#facebook-icon', {
    content: "<span style='font-size: 12px;'>Facebook</span>",
    theme: 'light',
    allowHTML:true
});
tippy('#instagram-icon', {
    content: "<span style='font-size: 12px;'>Instagram</span>",
    theme: 'light',
    allowHTML: true
});
tippy('#twitter-icon', {
    content: "<span style='font-size: 12px;'>Twitter</span>",
    theme: 'light',
    allowHTML: true
});

const hover = document.querySelectorAll('.hoverBox');
    
hover.forEach((element) => {
        element.addEventListener("mouseover",function (event) {
            let image = element.parentNode;
            image.style.backgroundSize = "105% 105%";
            image.style.transition = "all 0.8s";
            image.style.backgroundPosition = "center";
            image.style.objectFit = "cover";
    })
    element.addEventListener("mouseout",function (event) {
        let image = element.parentNode;
        image.style.backgroundSize = "100% 100%";
    })
})



//CARUSEL
let contenedor = document.getElementById('carrousel_grid');
carrousel(contenedor);
var imagenes = ["../../../public/img/carousel/aguarague.jpg","../../../public/img/carousel/moutains_home.jpg","../../../public/img/carousel/home_background-min.jpg"];
        var cont = 0;

        function carrousel(contenedor){
                let atras = document.getElementById('atras');
                let adelante = document.getElementById('adelante');
                
                atras.addEventListener('click',function(){
                    if(cont>0){
                        contenedor.style.backgroundImage ="url("+ imagenes[cont - 1]+")";
                        cont--;
                    }else{
                        contenedor.style.backgroundImage = "url("+imagenes[imagenes.length - 1]+")";
                        cont = imagenes.length -1;
                    }
                });
                    
                adelante.addEventListener('click',function(){
                    if(cont < imagenes.length-1){
                        contenedor.style.backgroundImage ="url("+imagenes[cont + 1]+")";
                        cont++;
                    }else{
                        contenedor.style.backgroundImage = "url("+imagenes[0]+")";
                        cont = 0;
                    }
                }); 
        }

        
        