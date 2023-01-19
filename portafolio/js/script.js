let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //ocultar el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("wordpress");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("python");
        habilidades[6].classList.add("sqlserver");
        habilidades[7].classList.add("office360");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajo");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("conviccion");
    }
}
// deceto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}