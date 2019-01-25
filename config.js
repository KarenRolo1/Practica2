//Inicializa los elementos una vez que se ha cargado el código
document.addEventListener("DOMContentLoaded", function(event) {
    const $numberCircle = document.getElementById("numberCircle");
    const $colorCircle = document.getElementById("colorCircle");
    const $circleAnimation = document.getElementById("circleAnimation");
    const $circlesConteiner = document.getElementById("circlesConteiner");
    let arratConfig = [];
    document.getElementById("addCircle").addEventListener("click", renderConfiguracionCircles);
    $numberCircle.value = 8;
    $colorCircle.value = '#ff6141';
    if(localStorage.getItem("circles") != null){
        arratConfig = JSON.parse(localStorage.getItem("circles"));
        setColor(arratConfig.color);
        renderCircles(arratConfig.number)
    }

    //Guarda en Local Storage cada que una configuracion es aplicada
    function saveInStorage(){
        localStorage.clear();
        localStorage.setItem("circles", 
            JSON.stringify({
                color : $colorCircle.value, 
                number : $numberCircle.value
            })
        );
    }

    //Se encarga de pintar la configuracion final
    function renderConfiguracionCircles(){
        if($numberCircle.value){
            $circlesConteiner.innerHTML = " ";
            saveInStorage();
            setColor($colorCircle.value);
            renderCircles($numberCircle.value);
        }
    }

    //Se encarga de asignar el color elegido
    function setColor(color){
        $circleAnimation.setAttribute("style", "background-color: " + color);
    }

    //Se encarga de pintar solo el numero de circulos
    function renderCircles(number){
        var item = document.createElement('div');
        for(var i=0; i<number; i++){
            item = document.createElement('div');
            item.setAttribute("class","divtransparent");       
            $circlesConteiner.appendChild(item);
        }
    }
})