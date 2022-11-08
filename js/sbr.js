document.addEventListener('DOMContentLoaded', function(){
    const boton_prueba = document.getElementById("boton_prueba");

    /*function add_question(){
        const abdominal = document.getElementById("pregunta_abdominal").value;
        const diarrea = document.getElementById("pregunta_diarrea").value;
        const estrenimiento = document.getElementById("pregunta_estrenimiento").value;
        const acidez = document.getElementById("pregunta_acidez").value;
        const vomito = document.getElementById("pregunta_vomitos").value;
        
        const respuestas_preguntas = {
            respuesta_1: abdominal,
            respuesta_2: diarrea,
            respuesta_3: estrenimiento,
            respuesta_4: acidez,
            respuesta_5: vomito
        }
    }*/

    function getAll(){
        axios.get('http://localhost:4000/get_user_info')
        .then (function (response){
            console.log(response.data[0]);
        })
        .catch(function(error) {
            console.log(error);
        });

    }


    
    boton_prueba.onclick = function(){
        getAll();
    }


/*
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
            console.log(abdominal.value);
        }

        if (diarrea.value == ""){
            diarrea.classList.remove('is-valid');
            diarrea.classList.add('is-invalid');
        }else{
            diarrea.classList.remove('is-invalid');
            diarrea.classList.add('is-valid');
            console.log(diarrea.value);
        }

        if (estrenimiento.value == ""){
            estrenimiento.classList.remove('is-valid');
            estrenimiento.classList.add('is-invalid');
        }else{
            estrenimiento.classList.remove('is-invalid');
            estrenimiento.classList.add('is-valid');
            console.log(estrenimiento.value);
        }

        if (acidez.value == ""){
            acidez.classList.remove('is-valid');
            acidez.classList.add('is-invalid');
        }else{
            acidez.classList.remove('is-invalid');
            acidez.classList.add('is-valid');
            console.log(acidez.value);
        }

        if (vomito.value == ""){
            vomito.classList.remove('is-valid');
            vomito.classList.add('is-invalid');
        }else{
            vomito.classList.remove('is-invalid');
            vomito.classList.add('is-valid');
            console.log(vomito.value);
        }
    }*/
});