var deletreo = "";

responsiveVoice.setDefaultVoice("Spanish Latin American Female");




function ejecutar_ayuda_registro() {

    /*Detecta si otro sistema TTS nativo o a su vez un TTS de audio siesta funcionando para en ese caso pausar el sistema */
    if (responsiveVoice.voiceSupport()) { /* Si esta disponible el sistema de responsiveVoiceJS para no incurrir en pausar el sistetizador de voz e incurrir en respuestas que puedan  involucrar llamadas innecesarias */
        annyang.pause(); /* Si escuchamos queremos que se pause el sintetizador de voz de comandos*/


        responsiveVoice.speak(
            "formulario de acceso, se tiene 6 campos de entrada, el primero es el tipo de discapacidada, los siguientes son nombre, usuario, password, pais, profesion, los cuales nombrandolos seguido del valor de entrada y podras regustrarte, si tienes cuenta solo dilo"
        );

        var tiempoEspera = 10000;
        annyang.abort();
        setTimeout("reanudarAnnyang()", tiempoEspera);
        /*

         Nos aseguramos que se renueva el sintetizado de voz tan pronto ha pasado una cantidad X de tiempo en milisegundos*/

    }
}



/* TODO: */

function reanudarAnnyang() {

    annyang.start(); /* Una vez terminado de reproducir mensaje, se renueva la sintesis de comandos de voz*/
}

function pausar() {

    responsiveVoice.pause();
    annyang.start();
}

function continuar() {
    responsiveVoice.resume();

}

function cancelar() {
    responsiveVoice.cancel();

}

if (annyang) {
annyang.setLanguage('es-ES');
    var commands = {
        'ayuda': () => {
            $("#registro-sms-oculto").click();
        },
           'discapacidad *value': (value) => {
               $("#discapacidad-registro").val(
                   value
               );

 
           },
        //introducimos el email
        'email *value': (value) => {
            $("#email").val(
                value
                .toLowerCase()
                .replace('arroba', '@')
                .replace(/ /g, '')
            );

        },
            'nombre *value': (value) => {
                $("#nombre-registro").val(
                     value
                );
                console.log($("#nombre-registro").val(value));
                },
                
        'usuario *value': (value) => {
            $("#usuario-registro").val(
                value
                .toLowerCase()
            );

        },
        'correo': () => {
            $("#email").val(
                deletreo
                .toLowerCase()
                .replace('arroba', '@')
                .replace(/ /g, '')

            );
            deletreo = "";

        },
        'deletrear *value': (value) => {
            deletreo += value + ' ';
            /* deletreo
            .toLowerCase()
            .replace('m', 'eme')
            .replace('d', 'de')
            .replace('v', 'uve')
            .replace('i', 'y');*/

            /*if(deletreo.indexOF("terminar")===-1){
                                
                            }else{
                                alert('sintetizador recargado');
    
                            }
                            */
            console.log(deletreo);

        },
        'borrar deletrear': () => {
            deletreo = '';
            console.log('deletreo esta:' + deletreo);
        },

        //introducimos el password
        'password *value': (value) => {
            $("#registro-password").val(value.toLowerCase());

        },
        //mostramos los valores del formulario
        'pais *value': (value) => {
            $("#registro-pais").val(value);


        },
        'origen *value': (value) => {
                 $("#registro-pais").val(value);


        },
        'registrar': () => {
            $("#registro-submit").click();

        },
        'profesion *value': (value) => {
            $("#registro-profesion").val(value);

        },
        'registrar': () => {
            $("#registro-submit").click();

        },
   
        'eres nuevo': () => {
            $("#link_a_registro").click();

            responsiveVoice.speak("Has accedido");

        },
        'soy nuevo': () => {
            $("#link_a_registro").click();

        },
        'donde estoy': () => {
            responsiveVoice.speak("Estas en el formulario registro de acceso");

        },/* TODO: */
        'tengo cuenta': () => {
        $("a").click();

        },

    };

    // Añadimos los comandos


    annyang.addCommands(commands);

    // Empezamos la escucha
    annyang.start();
}
