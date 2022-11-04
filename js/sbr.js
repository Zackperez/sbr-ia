document.addEventListener('DOMContentLoaded', function(){
    const boton_prueba = document.getElementById("boton_prueba");
    
    boton_prueba.onclick = function(){
        mostrar_pantalla();
    }

    function mostrar_pantalla(){
        const abdominal = document.getElementById("pregunta_abdominal");
        const diarrea = document.getElementById("pregunta_diarrea");
        const estrenimiento = document.getElementById("pregunta_estrenimiento");
        const acidez = document.getElementById("pregunta_acidez");
        const vomito = document.getElementById("pregunta_vomitos");


        if (abdominal.value == ""){
            abdominal.classList.remove('is-valid');
            abdominal.classList.add('is-invalid');
        }else{
            abdominal.classList.remove('is-invalid');
            abdominal.classList.add('is-valid');
        }

        if (diarrea.value == ""){
            diarrea.classList.remove('is-valid');
            diarrea.classList.add('is-invalid');
        }else{
            diarrea.classList.remove('is-invalid');
            diarrea.classList.add('is-valid');
        }

        if (estrenimiento.value == ""){
            estrenimiento.classList.remove('is-valid');
            estrenimiento.classList.add('is-invalid');
        }else{
            estrenimiento.classList.remove('is-invalid');
            estrenimiento.classList.add('is-valid');
        }

        if (acidez.value == ""){
            acidez.classList.remove('is-valid');
            acidez.classList.add('is-invalid');
        }else{
            acidez.classList.remove('is-invalid');
            acidez.classList.add('is-valid');
        }

        if (vomito.value == ""){
            vomito.classList.remove('is-valid');
            vomito.classList.add('is-invalid');
        }else{
            vomito.classList.remove('is-invalid');
            vomito.classList.add('is-valid');
        }
    }
});