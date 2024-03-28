const ltsNafta = 871;
let j = 0;
const tablaVerdad = ['carhuepuan','carhuepigue','cnel pringlespigue','cnel pringlescnel suarez','cnel suarezcnel pringles','cnel suarezpigue','cnel suarezhuanguelen','huanguelenpuan','huanguelencnel suarez','piguecarhue','piguepuan','piguecnel pringles','piguecnel suarez','puancarhue','puanhuanguelen','puanpigue','puancnel suarez','cnel suarezpuan','piguehuanguelen','carhuecnel suarez','cnel suarezcarhue','puancnel pringles','cnel pringlestornquist','tornquistcnel pringles','piguetornquist','tornquistpigue','puantornquist','tornquistpuan','huanguelencnel pringles','cnel pringleshuanguelen','carhuetornquist','tornquistcarhue'];
const tablaVerdadlts=[16,10,26,16,16,8,16,24,16,10,6,26,8,16,24,6,14,14,20,20,20,32,24,24,12,12,18,18,32,32,22,22];

class Arbitro {
    constructor(nombre,origen,destino,auto){
        this.nombre=nombre;
        this.origen=origen;
        this.destino=destino;
        this.auto=auto;
        this.OK=-1;
    }
    chequeo(){
        let i=parseInt(prompt("Hola "+this.nombre+", vamos a calcular tus viaticos.\nOriden: "+this.origen+"\tDestino: "+this.destino+"\t Usas auto: "+this.auto+"\n¿Es correcto?\n1- Si\n2- No"));
        while(i>2 ||i<1){
            i=parseInt(prompt("Hola "+this.nombre+", vamos a calcular tus viaticos.\nOriden: "+this.origen+"\tDestino: "+this.destino+"\t Usas auto: "+this.auto+"\n¿Es correcto?\n1- Si\n2- No"));
        }
        this.OK=i;
    }
}
let flag=-1;
let nombre;
let origen;
let destino;
let auto;
let i=2;

while(flag!= 0){
    flag=parseInt(prompt("Hola, bienvenido. En esta parte podrás calcular tus viaticos del viaje del fin de semana. Vas a viajar este finde?\n1-SI\n2-NO"));
    switch(flag){
        case 1:
        while(i==2){
            nombre=prompt("Ingrese su nombre:");
            origen=prompt("Ingrese ciudad de origen:");
            destino=prompt("Ingrese ciudad de destino:");
            auto=prompt("¿Vas a utilizar tu auto?(SI/NO)");
            auto=auto.toUpperCase();
            origen=origen.toLowerCase();
            destino=destino.toLowerCase();
            if(origen=="suarez" || origen=="pringles"){
                origen="cnel "+origen;
            }
            if(destino=="suarez" || destino=="pringles"){
                destino="cnel "+destino;
            }
            const persona = new Arbitro (nombre,origen,destino,auto);
            persona.chequeo();
            i=persona.OK;
            if(i==2){
                alert("Por favor, ingrese los datos nuevamente.");
            }
            if(i==1){
                alert("A continuación, vamos a calcular tus viaticos segun datos ingresados.");
            }
        }
        let concat = origen+destino;
        console.log(concat);
        j= tablaVerdad.indexOf(concat);

        //calculo en ARS
        let totalViaticos=0;

        if(auto == 'SI'){
            totalViaticos=1600*tablaVerdadlts[j]+ltsNafta*5;
        }else {
            totalViaticos=ltsNafta*5;
        }
        alert("Te transferirán $"+totalViaticos+" en concepto de viaticos");
        flag=0;
        break;
    case 2:
        alert("Que tengas un gran fin de semana de arbitraje");
        flag=0;
        break;
    default:
        alert("Opcion incorrecta");
    }
}