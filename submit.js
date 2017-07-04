function submitInsert()
{
    relocate( "index.php", {} );
}

function submitEdit( val1, val2, val3 )
{
    relocate( "index.php", { "id" : val1, "reg" : val2, "des" : val3 } );
}

function submitDelete( val )
{
    if ( confirm( "¿Desea Eliminar Este Registro?" ) )
        relocate( "index.php", { "id" : val } );
}

