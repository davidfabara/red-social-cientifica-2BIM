var deletreo = "";

responsiveVoice.setDefaultVoice("Spanish Latin American Female");


function ejecutar_ayuda_login() {

    /*Detecta si otro sistema TTS nativo o a su vez un TTS de audio siesta funcionando para en ese caso pausar el sistema */

    if (responsiveVoice.voiceSupport()) { 
        /* 
            Si esta disponible el sistema de responsiveVoiceJS para no incurrir en pausar el sistetizador de voz e incurrir en respuestas que puedan  involucrar llamadas innecesarias 
        */
        annyang.pause(); /* Si  queremos que se pause el sintetizador de voz de comandos*/
        
        
        responsiveVoice.speak(
            "formulario de acceso, se tiene 2 campos de entrada, el primero es usuario, el segundo es la clave de acceso, si eres nuevo, di soy nuevo, y puedes registrarte"
        );

        var tiempoEspera = 10000;
        annyang.abort();
        setTimeout("reanudarAnnyang()", tiempoEspera);
        /*

         Nos aseguramos que se renueva el sintetizado de voz tan pronto ha pasado una cantidad X de tiempo en milisegundos*/

    }
    /* TODO: Aqui pudiesemos agregar otra herramienta que pueda ejecutarse en el escenario que responsiveVoice no funcione por n motivos, alguna herramienta como la que ofrece google */
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
            $("#login-sms-oculto").click();
        },
        //introducimos el email
        'email *value': (value) => {
            $("#email").val(
                value
                .toLowerCase()
                .replace('arroba', '@')
                .replace(/ /g, '')
            );
            annyang.start();
        },
        'usuario *value': (value) => {
            $("#login-usuario").val(
                value
                .toLowerCase()
                .replace('arroba', '@')
                .replace(/ /g, '')
            );
            annyang.start();
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
            $("#password-input").val(value.toLowerCase());
        },
        //mostramos los valores del formulario
        'acceder': () => {
            $("#submit-input").click();

        },
        'eres nuevo': () => {
         $("#link_a_registro").click();
         
         responsiveVoice.speak("Accediendo");

        },
        'soy nuevo': () => {
         $("#link_a_registro").click();

        },
        'donde estoy': () => {
           responsiveVoice.speak("Estas en el formulario login de acceso");

        },

    };

    // Añadimos los comandos


    annyang.addCommands(commands);

    // Empezamos la escucha
    annyang.start();
    }
