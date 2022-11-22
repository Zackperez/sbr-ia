document.addEventListener('DOMContentLoaded', function () {
    //Botones
    const boton_prueba = document.getElementById("boton_prueba");
    const boton_limpiar = document.getElementById("boton_limpiar");
    const boton_resultados = document.getElementById("boton_resultados");

    //Campos del formulario
    const Id_usuario = document.getElementById("id_usuario");
    const Respuesta_nombre = document.getElementById("respuesta_nombre");
    const Respuesta_apellido = document.getElementById("respuesta_apellido");
    const Respuesta_abdominal = document.getElementById("respuesta_abdominal");
    const Respuesta_diarrea = document.getElementById("respuesta_diarrea");
    const Respuesta_estrenimiento = document.getElementById("respuesta_estrenimiento");
    const Respuesta_acidez = document.getElementById("respuesta_acidez");
    const Respuesta_vomitos = document.getElementById("respuesta_vomitos");

    function borrar_campos() {

        Id_usuario.value = "";
        Respuesta_nombre.value = "";
        Respuesta_apellido.value = "";
        Id_usuario.classList.remove("is-invalid");
        Respuesta_nombre.classList.remove("is-invalid");
        Respuesta_apellido.classList.remove("is-invalid");
        Respuesta_abdominal.classList.remove("is-invalid");
        Respuesta_diarrea.classList.remove("is-invalid");
        Respuesta_estrenimiento.classList.remove("is-invalid");
        Respuesta_acidez.classList.remove("is-invalid");
        Respuesta_vomitos.classList.remove("is-invalid");

        Id_usuario.classList.remove("is-valid");
        Respuesta_nombre.classList.remove("is-valid");
        Respuesta_apellido.classList.remove("is-valid");
        Respuesta_abdominal.classList.remove("is-valid");
        Respuesta_diarrea.classList.remove("is-valid");
        Respuesta_estrenimiento.classList.remove("is-valid");
        Respuesta_acidez.classList.remove("is-valid");
        Respuesta_vomitos.classList.remove("is-valid");

    }

    boton_limpiar.onclick = function () {
        borrar_campos();
    }

    function new_user() {

        !Id_usuario.value.match(/^[0-9]+$/) ? Id_usuario.classList.add("is-invalid") : Id_usuario.classList.remove("is-invalid"); Id_usuario.classList.add("is-valid");
        !Respuesta_nombre.value.match(/^[a-zA-Z]+$/) ? Respuesta_nombre.classList.add("is-invalid") : Respuesta_nombre.classList.remove("is-invalid"); Respuesta_nombre.classList.add("is-valid");
        !Respuesta_apellido.value.match(/^[a-zA-Z]+$/) ? Respuesta_apellido.classList.add("is-invalid") : Respuesta_apellido.classList.remove("is-invalid"); Respuesta_apellido.classList.add("is-valid");
        Respuesta_abdominal.value == "" ? Respuesta_abdominal.classList.add("is-invalid") : Respuesta_abdominal.classList.remove("is-invalid"); Respuesta_abdominal.classList.add("is-valid");
        Respuesta_diarrea.value == "" ? Respuesta_diarrea.classList.add("is-invalid") : Respuesta_diarrea.classList.remove("is-invalid"); Respuesta_diarrea.classList.add("is-valid");
        Respuesta_estrenimiento.value == "" ? Respuesta_estrenimiento.classList.add("is-invalid") : Respuesta_estrenimiento.classList.remove("is-invalid"); Respuesta_estrenimiento.classList.add("is-valid");
        Respuesta_acidez.value == "" ? Respuesta_acidez.classList.add("is-invalid") : Respuesta_acidez.classList.remove("is-invalid"); Respuesta_acidez.classList.add("is-valid");
        Respuesta_vomitos.value == "" ? Respuesta_vomitos.classList.add("is-invalid") : Respuesta_vomitos.classList.remove("is-invalid"); Respuesta_vomitos.classList.add("is-valid");


/* 
        if () {
            
        }else{
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
                .then(res =>
                    console.log(res))
                .catch(err => console.log('Error:', err))
        }

        }*/
    }

    function mostrar_respuesta() {
        id_usuario = document.getElementById("id_usuario").value;
        let resultados = document.getElementById("resultados_finales");
        let parrafo_resultados = document.createElement('p');
        axios.get('http://localhost:4000/respuesta_sbr/' + id_usuario)
            .then(function (response) {
                console.log(response);
                parrafo_resultados.innerHTML = response.data[0].Diagnostico_final;
                resultados.appendChild(parrafo_resultados);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    boton_prueba.onclick = function () {
        new_user();
    }

    boton_resultados.onclick = function () {
        mostrar_respuesta();
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