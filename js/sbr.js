document.addEventListener('DOMContentLoaded', function(){
    const boton_prueba = document.getElementById("boton_prueba");
    const boton_buscar_usuario = document.getElementById("buscar_id");

    function new_question(){
        const abdominal = document.getElementById("pregunta_abdominal").value;
        const diarrea = document.getElementById("pregunta_diarrea").value;
        const estrenimiento = document.getElementById("pregunta_estrenimiento").value;
        const acidez = document.getElementById("pregunta_acidez").value;
        const vomito = document.getElementById("pregunta_vomitos").value;
        
        const respuestas_preguntas = {
            Respuesta_1: abdominal,
            Respuesta_2: diarrea,
            Respuesta_3: estrenimiento,
            Respuesta_4: acidez,
            Respuesta_5: vomito
        }
        axios({
            method: "POST",
            url: "http://localhost:4000/add_contact",
            data: respuestas_preguntas,
        })
        .then(res => console.log(res))
        .catch(err => console.log('Error:',err))
    }

    function new_user(){
        const Id_usuario = document.getElementById("id_usuario").value;
        const Respuesta_usuario = document.getElementById("respuesta_usuario").value;
        const Respuesta_apellido = document.getElementById("respuesta_apellido").value;
        const Respuesta_abdominal = document.getElementById("respuesta_abdominal").value;
        const Respuesta_diarrea = document.getElementById("respuesta_diarrea").value;
        const Respuesta_estrenimiento = document.getElementById("respuesta_estrenimiento").value;
        const Respuesta_acidez = document.getElementById("respuesta_acidez").value;
        const Respuesta_vomitos = document.getElementById("respuesta_vomitos").value;


        const respuestas_preguntas = {
            Id_usuario: Id_usuario,
            Nombre: Respuesta_usuario,
            Apellido: Respuesta_apellido,
            Respuesta_abdominal: Respuesta_abdominal,
            Respuesta_diarrea: Respuesta_diarrea,
            Respuesta_estrenimiento: Respuesta_estrenimiento,
            Respuesta_acidez: Respuesta_acidez,
            Respuesta_vomitos: Respuesta_vomitos
        }
        axios({
            method: "POST",
            url: "http://localhost:4000/agregar_usuario_temporal",
            data: respuestas_preguntas,
        })
        .then(res => console.log(res))
        .catch(err => console.log('Error:',err))
    }



    function getAll(){
        axios.get('http://localhost:4000/get_user_info')
        .then (function (response){
            console.log(response.data[0]);
        })
        .catch(function(error) {
            console.log(error);
        });
    }


    function mostrar_respuesta(){
        buscar_id =  document.getElementById("buscar_id").value;
        let resultados = document.getElementById("resultados_finales");
        let parrafo_resultados = document.createElement('p');
        axios.get('http://localhost:4000/respuesta_sbr/'+buscar_id)
        .then (function (response){
            
            console.log(response.data[0]);
            parrafo_resultados.innerHTML = response.data[0];
            resultados.appendChild(parrafo_resultados);
        })
        .catch(function(error) {
            console.log(error);
        });        
    }

    boton_resultados.onclick = function(){
        mostrar_respuesta()
    }

    
    boton_prueba.onclick = function(){
        new_user();
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