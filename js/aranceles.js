let opcionDiv= parseInt(prompt('Consultar aranceles en cancha:\n1- Primera División\n2- Sexta División(Sub-16)\n3- Séptima División\n4- Segunda División\n5-Caballeros Primera\n0-Salir'));
let total=0;

while(opcionDiv!=0){
    switch(opcionDiv){
        case 1:
            calcularArancel(12194,'Primera');
            break;
        case 2:
            calcularArancel(10452,'Sexta');
            break;
        case 3:
            calcularArancel(8710,'Séptima');
            break;
        case 4:
            calcularArancel(12194,'Segunda');
            break;
        case 5:
            calcularArancel(13065,'Caballeros');
            break;
        default:
            alert('Código Inválido');
    }
    opcionDiv= parseInt(prompt('Consultar aranceles en cancha:\n1- Primera División\n2- Sexta División(Sub-16)\n3- Séptima División\n4- Segunda División\n5-Caballeros Primera\n0-Salir'));
}
if(total==0){
    alert('¡Hasta luego!');
}else if(opcionDiv==0){
        alert('Cobrarás en total $'+total+' este fin de semana');
    }



function calcularArancel(valor,division){
    let cant=prompt("¿Cuántos partidos de "+division+" estás designado?");
    total+=cant*valor;
}
    