var boton = "";
var boton_subir = "";
var descripcion = "";
var referencia = "";
var cita = "";
var i = 0;

var y=0;
var y_res=0; var y_int=0; var y_conte=0; var y_conc=0;



function iniciar() {
    boton = document.getElementById("descripcionArchivos").addEventListener("click", descripcionArchivos, false);
    /* citar_Resumen=document.getElementById( "refResumen" ).addEventListener( "click", citar,resumen, false ); */
    boton_subir = document.getElementById("boton_mostrar_subir").addEventListener("click", mostrar_subir, false);
}

function mostrar_subir() {
    var subi = document.getElementsByClassName("subir");
    if (subi[0].style.display == 'none') {
        subi[0].style.display = 'table';
    } else {
        subi[0].style.display = 'none';
    }
}


function descripcionArchivos() {
    descripcion += "<input type=" + '"text"' + 'name="alt" placeholder =' + "Descripcion de archivo><br>";
    /*Si se hace click de manera iterativa, se puede invocar a varios eventos y como cadena es un acumulador, simplemente absorvera lo que tiene y aumentara lo asignado */
    document.getElementById("addDescripcionArchivos").innerHTML = descripcion;
    /* La cadena se convierte a codigo html y se inyecta hacia el id de addDescripcionArchivos*/
}

function select_citar(subir_cont, tipoTextArea, tipoInput, tipoDiv){

    if(tipoTextArea==='resumen')
         y=y_res;
    if(tipoTextArea==='introduccion')
        y=y_int;
    if(tipoTextArea==='contenido')
        y=y_conte;
    if(tipoTextArea==='conclusiones')
        y=y_conc;
    
    cita=`<hr><input type="button" value="Cita basada en el autor(Cita textual y de menos de 40 palabras)" class="boton" id="opcion1_${y}"  onclick="parrafo_citar('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Cita basada en el autor(Cita textual y de menos de 40 palabras)')">

    <input type="button" value="Cita basada en el texto(Cita textual y de menos de 40 palabras)" class="boton" id="opcion2_${y}"
    onclick = "parrafo_citar('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Cita basada en el texto(Cita textual y de menos de 40 palabras)')">

    <input type = "button" value = "Cita basada en el autor(Cita textual y de mas de 40 palabras)" class = "boton" id="opcion3_${y}"
    onclick = "parrafo_citar('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Cita basada en el autor(Cita textual y de mas de 40 palabras)')">

    <input type = "button" value = "Cita basada en el texto(Cita textual y de mas de 40 palabras)" class = "boton" id="opcion4_${y}"
    onclick = "parrafo_citar('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Cita basada en el texto(Cita textual y de mas de 40 palabras)')">

    <input type = "button" value = "Cita basada en el texto(parafraseo)" class = "boton" id="opcion5_${y}"
    onclick = "parrafo_citar('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Cita basada en el texto(parafraseo)')">

    <input type = "button" value = "Cita basada en el autor(parafraseo)" class = "boton" id="opcion6_${y}"
    onclick = "parrafo_citar('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Cita basada en el autor(parafraseo)')">

    <input type = "button" value = "Autor corporativo" class = "boton" id="opcion7_${y}"
    onclick = "parrafo_citar('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Autor corporativo')">

    <input type = "button" value = "Anonimo" class = "boton" id="opcion8_${y}"
    onclick = "parrafo_citar('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Anonimo')">

    <input type = "button" value = "Cita de una cita" class = "boton" id="opcion9_${y}"
    onclick = "parrafo_citar('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Cita de una cita')">`;

    document.getElementsByClassName(tipoDiv+'_select')[y].innerHTML = cita;
}

function select_referencia(subir_cont,tipoTextArea, tipoInput, tipoDiv){

    referencia = `<hr><input type="button" value="Libro con autor" class="boton" id="opcion1_${i}"  onclick="parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Libro con autor')">

    <input type = "button" value = "Libro con editor" class = "boton" id="opcion2_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Libro con editor')">

    <input type = "button" value = "Libro en version electronica" class = "boton" id="opcion3_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Libro en version electronica')">
    <input type = "button" value = "DOI" class = "boton" id="opcion4_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','DOI')">
    <input type = "button" value = "Capitulo de un libro" class = "boton" id="opcion5_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Capitulo de un libro')">
    <input type = "button" value = "Articulos cientificos" class = "boton" id="opcion6_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Articulos cientificos')">
    <input type = "button" value = "Articulo con DOI" class = "boton" id="opcion7_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Articulo con DOI')">
    <input type = "button" value = "Articulo online" class = "boton" id="opcion8_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Articulo online')">
    <input type = "button" value = "Periodico impreso u online" class = "boton" id="opcion9_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Periodico impreso u online')">
    <input type = "button" value = "Articulo de revista impreso u online" class = "boton" id="opcion10_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Articulo de revista impreso u online')">
    <input type = "button" value = "Informe de autor corporativo, informe gubernamental" class = "boton" id="opcion11_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Informe de autor corporativo, informe gubernamental')">
    <input type = "button" value = "Sinopsis y conferencias" class = "boton" id="opcion12_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Sinopsis y conferencias')">
    <input type = "button" value = "Tesis y trabajos de grado" class = "boton" id="opcion13_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Tesis y trabajos de grado')">
    <input type = "button" value = "Referencia de pagina web" class = "boton" id="opcion14_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Referencia de pagina web')">
    <input type = "button" value = "CD ROM" class = "boton" id="opcion15_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','CD ROM')">
    <input type = "button" value = "Enciclopedia en linea" class = "boton" id="opcion16_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Enciclopedia en linea')">
    <input type = "button" value = "Pelicula o cinta cinematografica" class = "boton" id="opcion17_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Pelicula o cinta cinematografica')">
    <input type = "button" value = "Serie de television" class = "boton" id="opcion18_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Serie de television')">
    <input type = "button" value = "Video" class = "boton" id="opcion19_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Video')">
    <input type = "button" value = "Podcast" class = "boton" id="opcion20_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Podcast')">
    <input type = "button" value = "Blogs" class = "boton" id="opcion21_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Blogs')">
    <input type = "button" value = "Grabacion de musica" class = "boton" id="opcion22_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Grabacion de musica')">
    <input type = "button" value = "Fotografias" class = "boton" id="opcion23_${i}"
    onclick = "parrafo_referencias('${subir_cont}','${tipoTextArea}','${tipoInput}','${tipoDiv}','Fotografias')">
    
    `;

    /*var referencia = `<label><input type="checkbox" id="cbox1" value="first_checkbox" onclick="referencia('${tipoTextArea}','${tipoInput}','${tipoDiv},'libro con autor')"> Libro con autor</label><br><input type="checkbox" id="cbox2" value="second_checkbox" onclick="referencia('${tipoTextArea}','${tipoInput}','${tipoDiv},'libro con editor')"><label for="cbox2">Libro con editor</label>`
    ;*/

                            
    
    document.getElementsByClassName(tipoDiv+'_select')[i].innerHTML = referencia;
}
function parrafo_citar(subir_cont, tipoTextArea, tipoInput, tipoDiv, tipoCita){

    /*  Puede ser reutilizable, pero ojo con el nombre de la funcion */
    if(tipoTextArea==='resumen')
         y=y_res;
    if(tipoTextArea==='introduccion')
        y=y_int;
    if(tipoTextArea==='contenido')
        y=y_conte;
    if(tipoTextArea==='conclusiones')
        y=y_conc;
    
    var n = 0;
    cita= "<label class=\"label\">Parrafo " +y + " de " +tipoTextArea+ " hacia referencia : "+tipoCita+" (Dejar en blanco si se ingresa manualmente)\""+"<textarea name=\"" +subir_cont+ "[" +tipoTextArea + "]"+"[" + (y) + "]"+"[" + (++n) + "]" + "[parrafo]"+ "\" id=\"" + tipoTextArea + y + "\" class =\"contenidos\" rows=\"4\" cols=\"40\" placeholder=\"parrafo " +y + " de " +tipoTextArea+ " hacia referencia : "+tipoCita+" (Dejar en blanco si se ingresa manualmente)\"></textarea></label><br>";

    alert(tipoTextArea+ ','+tipoInput + ','+tipoDiv + ','+ tipoTextArea + ',' +tipoInput + ',' + tipoDiv + ',' + " valor de y:"+y+" EL tipo de cita: "+tipoCita );

    config_cita(subir_cont,tipoTextArea, tipoInput, tipoDiv, tipoCita,n,y);

    if(tipoTextArea==='resumen')
        y_res++;
    if(tipoTextArea==='introduccion')
        y_int++;
    if(tipoTextArea==='contenido')
        y_conte++;
    if(tipoTextArea==='conclusiones')
        y_conc++;


    
}

function parrafo_referencias(subir_cont, tipoTextArea, tipoInput, tipoDiv, tipoReferencia){

    /*  Puede ser reutilizable, pero ojo con el nombre de la funcion */

    var n = 0;
    referencia= "<label class=\"label\">Parrafo " +i + " de " +tipoTextArea+ " hacia referencia : "+tipoReferencia+" (Nota: aqui puede poner la cita manualmente o un parrafo referenciado a una cita)\""+"<textarea name=\"" +subir_cont+ "[" +tipoTextArea + "]"+"[" + (i) + "]"+"[" + (++n) + "]" + "[parrafo]"+ "\" id=\"" + tipoTextArea + i + "\" class =\"contenidos\" rows=\"4\" cols=\"40\" placeholder=\"parrafo " +i + " de " +tipoTextArea+ " hacia referencia : "+tipoReferencia+"\"></textarea></label><br>";


    config_referencia(subir_cont,tipoTextArea, tipoInput, tipoDiv, tipoReferencia,n);

    alert(tipoTextArea+ ','+tipoInput + ','+tipoDiv + ','+ tipoTextArea + ',' +tipoInput + ',' + tipoDiv + ',' + tipoReferencia );

    i++;
    
}
function config_cita(subir_cont, tipoTextArea, tipoInput, tipoDiv, tipoCita, n,y){

    if(tipoCita==="Cita basada en el autor(Cita textual y de menos de 40 palabras)"||tipoCita==="Cita basada en el autor(Cita textual y de mas de 40 palabras)"||tipoCita==="Cita basada en el autor(parafraseo)"){

        cita+= "<label>Apellido-s de "+tipoCita+ " para parrafo"+y+"(Separar cada uno con coma, si son 3 a 5 autores se separan con \"comas\" si hay mas de 6 autores solo se pone el primero y \"et al.\" al final)<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+"[" + (y) + "]"+ "[" + (++n) + "]" + "[apellido]"+"\" id=\"" + tipoInput + "_apellido" + y + "\" placeholder=\"Apellido-s de autor\" class = \"contenidos\"><label><br><hr>" +

        "<label>Anio de"+tipoCita+"para parrafo"+y+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (y) + "]" + "[" + (++n) + "]" + "[anio]"+ "\" id=\"" + tipoInput + "_anio" + y + "\" placeholder=\"anio de publicacion\" class = \"contenidos\"></label><br><hr>";
    }else

    if(tipoCita==="Cita basada en el texto(Cita textual y de menos de 40 palabras)"||tipoCita==="Cita basada en el texto(Cita textual y de mas de 40 palabras)"||tipoCita==="Cita basada en el texto(parafraseo)"){
        cita+= "<label>Apellido-s de "+tipoCita+ " para parrafo"+y+"(Separar cada uno con coma, si son 3 a 5 autores se separan con \"comas\" si hay mas de 6 autores solo se pone el primero y \"et al.\" al final)<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+"[" + (y) + "]"+ "[" + (++n) + "]" + "[apellido]"+"\" id=\"" + tipoInput + "_apellido" + y + "\" placeholder=\"Apellido-s de autor\" class = \"contenidos\"></label><br><hr>" +

        "<label>Anio de"+tipoCita+"para parrafo"+y+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (y) + "]" + "[" + (++n) + "]" + "[anio]"+ "\" id=\"" + tipoInput + "_anio" + y + "\" placeholder=\"anio de publicacion\" class = \"contenidos\"></label><br><hr>"+

        "<label>Paginas de"+tipoCita+"para parrafo (Con formato: p.numero de paginas)"+y+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (y) + "]" + "[" + (++n) + "]" + "[pagina]"+ "\" id=\"" + tipoInput + "_anio" + y + "\" placeholder=\"numero de paginas\" class = \"contenidos\"></label><br><hr>"
        
        
        ;
        
    }else
    if(tipoCita==="Autor corporativo"){
        cita+= "<label>Nombre de organizacion de "+tipoCita+ " para parrafo"+y+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+"[" + (y) + "]"+ "[" + (++n) + "]" + "[Nom_organizacion]"+"\" id=\"" + tipoInput + "_apellido" + y + "\" placeholder=\"Apellido-s de autor\" class = \"contenidos\"></label><br><hr>" +
        "<label>Sigla de organizacion de "+tipoCita+ " para parrafo"+y+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+"[" + (y) + "]"+ "[" + (++n) + "]" + "[sigla]"+"\" id=\"" + tipoInput + "_apellido" + y + "\" placeholder=\"Apellido-s de autor\" class = \"contenidos\"></label><br><hr>"+

        "<label>Anio de"+tipoCita+"para parrafo"+y+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (y) + "]" + "[" + (++n) + "]" + "[anio]"+ "\" id=\"" + tipoInput + "_anio" + y + "\" placeholder=\"anio de publicacion\" class = \"contenidos\"></label><br><hr>";
    }else 
    if(tipoCita==="Anonimo"){
        cita+= "<label>El apellido ponemos como 'Anonimo' "+tipoCita+ " para parrafo"+y+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+"[" + (y) + "]"+ "[" + (++n) + "]" + "[apellido]"+"\" id=\"" + tipoInput + "_apellido" + y + "\" placeholder=\"Apellido-s de autor\" class = \"contenidos\"></label><br><hr>" +

        "<label>Anio de"+tipoCita+"para parrafo"+y+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (y) + "]" + "[" + (++n) + "]" + "[anio]"+ "\" id=\"" + tipoInput + "_anio" + y + "\" placeholder=\"anio de publicacion\" class = \"contenidos\"></label><br><hr>"+

        "<label>Paginas de"+tipoCita+"para parrafo (Con formato: p.numero de paginas)"+y+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (y) + "]" + "[" + (++n) + "]" + "[pagina]"+ "\" id=\"" + tipoInput + "_anio" + y + "\" placeholder=\"numero de paginas\" class = \"contenidos\"></label><br><hr>"
        
        
        ;
        
    }else
    if(tipoCita==="Cita de una cita"){
        cita+= "<label>Apellido-s de autor de opinion o afirmacion de"+tipoCita+ " para parrafo"+y+"(Separar cada uno con coma, si son 3 a 5 autores se separan con \"comas\" si hay mas de 6 autores solo se pone el primero y \"et al.\" al final)<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+"[" + (y) + "]"+ "[" + (++n) + "]" + "[apellido]"+"\" id=\"" + tipoInput + "_apellido" + y + "\" placeholder=\"Apellido-s de autor\" class = \"contenidos\"></label><br><hr>" +

        "<label>Apellido-s de autor de la cita "+tipoCita+ " para parrafo"+y+"(Separar cada uno con coma, si son 3 a 5 autores se separan con \"comas\" si hay mas de 6 autores solo se pone el primero y \"et al.\" al final)<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+"[" + (y) + "]"+ "[" + (++n) + "]" + "[apellido]"+"\" id=\"" + tipoInput + "_apellido" + y + "\" placeholder=\"Apellido-s de autor\" class = \"contenidos\"></label><br><hr>"+

        "<label>Anio de"+tipoCita+"para parrafo"+y+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (y) + "]" + "[" + (++n) + "]" + "[anio]"+ "\" id=\"" + tipoInput + "_anio" + y + "\" placeholder=\"anio de publicacion\" class = \"contenidos\"></label><br><hr>";
    }




    cita+= "<br><br><br><br><hr>" + "<div class=\"" + tipoDiv + "\"></div>";


    document.getElementsByClassName(tipoDiv)[y].innerHTML = cita;
}


function config_referencia(subir_cont, tipoTextArea, tipoInput, tipoDiv, tipoReferencia, n){

    if(tipoReferencia==="Libro con autor"){

        referencia+= "<label>Apellido-s de "+tipoReferencia+ " para parrafo"+i+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+"[" + (i) + "]"+ "[" + (++n) + "]" + "[apellido]"+"\" id=\"" + tipoInput + "_apellido" + i + "\" placeholder=\"Apellido-s de autor\" class = \"contenidos\"></label><br><hr>" +

        "<label>Iniciales de nombre-s "+tipoReferencia+"para parrafo"+i+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (i) + "]"+ "[" + (++n) + "]" + "[nombre]" + "\" id=\"" + tipoInput + "_nombres" + i + "\" placeholder=\"Iniciales de nombre-s ( separadas por punto )\" class = \"contenidos\"></label><br><hr>" + 

        "<label>Anio de"+tipoReferencia+"para parrafo"+i+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (i) + "]" + "[" + (++n) + "]" + "[anio]"+ "\" id=\"" + tipoInput + "_anio" + i + "\" placeholder=\"anio de publicacion\" class = \"contenidos\"></label><br><hr>"+

        "<label>Titulo de"+tipoReferencia+"para parrafo"+i+"<input type=\"text\"" + " name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (i) + "]" + "[" + (++n) + "]" + "[titulo]"+"\" id=\"" + tipoInput + "_titulo" + i + "\" placeholder=\"titulo de la publicacion\" class = \"contenidos\"></label><br><hr>" +
    
        "<label>Ciudad de"+tipoReferencia+"para parrafo"+i+"<input type=\"text\"" + " name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (i) + "]"+"[" + (++n) + "]" + "[ciudad]"+"\" id=\"" + tipoInput + "_ciudad" + i + "\" placeholder=\"Ciudad\" class = \"contenidos\"></label><br><hr>" +

        "<label>Pais de"+tipoReferencia+"para parrafo"+i+"<input type=\"text\"" + " name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (i) + "]"+"[" + (++n) + "]" + "[pais]"+"\" id=\"" + tipoInput + "_Pais" + i + "\" placeholder=\"Pais\" class = \"contenidos\"></label><br><hr>" +

        "<label>Editorial de"+tipoReferencia+"para parrafo"+i+"<input type=\"text\"" + " name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (i) + "]"+"[" + (++n) + "]" + "[editorial]"+"\" id=\"" + tipoInput + "_Editorial" + i + "\" placeholder=\"Editorial\" class = \"contenidos\"></label><br><hr>" ;
      

    }else
    if(tipoReferencia==="Libro con editor"){
        referencia+= "<label>Apellido-s de "+tipoReferencia+ " para parrafo"+i+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+"[" + (i) + "]"+ "[" + (++n) + "]" + "[apellido]"+"\" id=\"" + tipoInput + "_apellido" + i + "\" placeholder=\"Apellido de autor\" class = \"contenidos\"></label><br><hr>" +

        "<label>Iniciales de nombre-s "+tipoReferencia+"para parrafo"+i+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (i) + "]"+ "[" + (++n) + "]" + "[nombre]" + "\" id=\"" + tipoInput + "_nombres" + i + "\" placeholder=\"Iniciales de nombre-s ( separadas por punto)\" class = \"contenidos\"></label><br><hr>" + 
        "<label>(Ed) de"+tipoReferencia+"para parrafo(no necesita modificarse)"+i+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (i) + "]" + "[" + (++n) + "]" + "[anio]"+ "\" id=\"" + tipoInput + "_anio" + i + "\"  class = \"contenidos\"></label><br><hr>"+

        "<label>Anio de"+tipoReferencia+"para parrafo"+i+"<input type=\"text\"" + "name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (i) + "]" + "[" + (++n) + "]" + "[anio]"+ "\" id=\"" + tipoInput + "_anio" + i + "\" placeholder=\"anio de publicacion\" class = \"contenidos\"></label><br><hr>"+

        "<label>Titulo de"+tipoReferencia+"para parrafo"+i+"<input type=\"text\"" + " name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (i) + "]" + "[" + (++n) + "]" + "[titulo]"+"\" id=\"" + tipoInput + "_titulo" + i + "\" placeholder=\"titulo de la publicacion\" class = \"contenidos\"></label><br><hr>" +
    
        "<label>Ciudad de"+tipoReferencia+"para parrafo"+i+"<input type=\"text\"" + " name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (i) + "]"+"[" + (++n) + "]" + "[ciudad]"+"\" id=\"" + tipoInput + "_ciudad" + i + "\" placeholder=\"Ciudad\" class = \"contenidos\"></label><br><hr>" +

        "<label>Pais de"+tipoReferencia+"para parrafo"+i+"<input type=\"text\"" + " name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (i) + "]"+"[" + (++n) + "]" + "[pais]"+"\" id=\"" + tipoInput + "_Pais" + i + "\" placeholder=\"Pais\" class = \"contenidos\"></label><br><hr>" +

        "<label>Editorial de"+tipoReferencia+"para parrafo"+i+"<input type=\"text\"" + " name=\"" +subir_cont+ "[" +tipoTextArea + "]"+ "[" + (i) + "]"+"[" + (++n) + "]" + "[editorial]"+"\" id=\"" + tipoInput + "_Editorial" + i + "\" placeholder=\"Editorial\" class = \"contenidos\"></label><br><hr>" ;
    }



    referencia+= "<br><br><br><br><hr>" + "<div class=\"" + tipoDiv + "\"></div>";


    document.getElementsByClassName(tipoDiv)[i].innerHTML = referencia;

        /* Comentario:
            Si se hace click de manera iterativa, se puede invocar a varios eventos y como  (document.getElementsByClassName(tipoDiv)[i].innerHTML) que sabemos que se llama al elemento que desde un inicio esta vacio(al crearlo), simplemente absorvera lo que tiene y asignara un valor, RECORDAR que NO es una variable GLOBAL, y recordar que en tiempo de ejecucion primero se intenta llamar al  <div class=\""+tipoDiv+"\"></div> y si no existe en codigo html y dara un error pues no esta definido aun y al parecer no permite inicializar algo que aun no existe, simplemente no se prodra ejecutar, a partir del 2do elemento como ya seria un tipo DIV que seria el 2do pues los inputs de la primera ejecucion serian los primeros de su tipo, se puede invocar sin problemas este nuevo div "ya creado" pues existe, en tiempo de ejecucion siempre se crea un div que seria un grado+1 superior, desde un inicio el div cero tipoDiv solo  se sobreescribe pues ya existe  
            
            Esto se agregaria para otro boton de citar:
            +`<input type=\"button\" value= \"Citar\" class=\"boton\" onclick=\"citar('${tipoTextArea}', '${tipoInput}','${tipoDiv}')\">` + "<div class=\"" + tipoDiv + "\"></div>";

    
        */
}


window.addEventListener("load", iniciar, false);