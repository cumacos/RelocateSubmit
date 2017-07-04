/** Ejecuta un sumit a una página específica, pasando los valores suministrados bajo el método POST.
* @param page (string) Representa la ruta y el archivo de la página a donde se envía el sumit.
* @param params (array) Lista de valores que se enviarán por el método POST.*/
function relocate( page, params )
{
    var body = document.body;
    form = document.createElement( "form" );
    form.method = "POST";
    form.action = page;
    form.name = "jsform";
    for ( index in params ) {
        var input = document.createElement( "input" );
        input.type = "hidden";
        input.name = index;
        input.id = index;
        input.value = params[ index ];
        form.appendChild( input );
    }
    body.appendChild( form );
    form.submit();
}

