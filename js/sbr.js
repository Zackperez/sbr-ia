document.addEventListener('DOMContentLoaded', function(){
    const boton_prueba = document.getElementById("boton_prueba");
    
    boton_prueba.onclick = function(){
        mostrar_pantalla();
    }

    function mostrar_pantalla(){
        const abdominal = document.getElementById("pregunta_abdominal").value;
        const diarrea = document.getElementById("pregunta_diarrea").value;
        const estrenimiento = document.getElementById("pregunta_estrenimiento").value;
        const acidez = document.getElementById("pregunta_acidez").value;
        const vomito = document.getElementById("pregunta_vomitos").value;
        console.log(abdominal);
        console.log(diarrea);
        console.log(estrenimiento);
        console.log(acidez);
        console.log(vomito);
    }
});