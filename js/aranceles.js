let NaftaSuper = 1020;
let partidosTot = [];
let guardarPartidos = (key, value) =>{localStorage.setItem(key,value)};
let carritoViejo =JSON.parse(localStorage.getItem("partidosTotal")) || [];
let cardsDivision = [];
let URLDIVISIONES = './divisiones.json';
const division = document.getElementById("division");
const tablaTot =document.getElementById('carrito');
const terminar = document.getElementById("terminar");
let botonSeleccion= [];
let totalAPagar = 0;

//este if sirve para consultar si hay datos en localStorage de una sesion previa
if(localStorage.getItem("partidosTotal")){
    for(objeto of carritoViejo){
        partidosTot.push(objeto);
    }
    if(totalAPagar==0){
        totalAPagar=partidosTot.reduce((acum,actual)=> acum + (actual.precio)*NaftaSuper,0);
        document.getElementById("suma").innerText = `Total a pagar: $${totalAPagar}`;
    }
}
//Leo todas las divisiones de hockey desde una API local - INICIO DE ASINCRONIA
fetch(URLDIVISIONES)
    .then((respuesta)=>respuesta.json())
    .then((datos)=>{
        cardsDivision= datos.division;
        renderizarDivisiones();
        for(const boton of botonSeleccion){
            boton.addEventListener('click',()=>{
                const aTotalPartidos = cardsDivision.find(divi =>divi.id == boton.id);
                Swal.fire({
                    title: "Partido agregado",
                    text: "Se agregado un partido de "+ aTotalPartidos.div,
                    imageUrl: "https://pbs.twimg.com/profile_images/999412529448140801/rhCWsRqL_400x400.jpg",
                    confirmButtonColor: "#4ebd4e",
                    imageHeight: "100px", 
                });
                totalPartidos(aTotalPartidos);
            })
        }
        armarCarrito();
    })
    .catch((error)=>{
        Swal.fire({
            title: "Datos borrados",
            text: error,
            icon: "warning",
        });
    })//FIN DE ASINCRONIA


//Funcion para renderizar todas las opciones que el usuario puede elegir
function renderizarDivisiones(){
    for (const cards of cardsDivision) {
        division.innerHTML += `
        <div class="card cajaDescarga m-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${cards.div}</h5>
                <p class="card-text">Agregar un partido de ${cards.div} Precio: $${cards.precio*NaftaSuper}</p>
                <button class="btn boton btn-primary seleccion" id=${cards.id}>Agregar</button>
            </div>
        </div> `;
    }
    botonSeleccion = document.getElementsByClassName('seleccion');
}

//Funcion para agregar al totalizador el partido seleccionado y calcular el valor final del arancel
function totalPartidos(partidoAgregado){
    partidosTot.push(partidoAgregado);
    tablaTot.innerHTML += `
        <tr>
            <td>${partidoAgregado.id}</td>
            <td>${partidoAgregado.div}</td>
            <td>${partidoAgregado.precio*NaftaSuper}</td>
        </tr>`
    guardarPartidos("partidosTotal",JSON.stringify(partidosTot));
    totalAPagar=partidosTot.reduce((acum,actual)=> acum + (actual.precio)*NaftaSuper,0);
    document.getElementById("suma").innerText = `Total a pagar: $${totalAPagar}`;
}

//Funcion para mostrar al usuario en pantalla el total de partidos seleccionados
function armarCarrito(){
    for(partido of partidosTot){
        tablaTot.innerHTML += `
        <tr>
            <td>${partido.id}</td>
            <td>${partido.div}</td>
            <td>${partido.precio*NaftaSuper}</td>
        </tr>`
    }
}

//Funcion para vaciar y resetear el calculo a cero. Tambien borra la key en localstorage
function vaciarCarrito(){
    tablaTot.innerHTML = ``
    partidosTot = [];
    totalAPagar = 0;
    document.getElementById("suma").innerText = `Total a pagar: $`;
    localStorage.removeItem("partidosTotal");
}

//Evento para el boton de resetear calculo
terminar.onclick = ()=>{
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "warning",
        title: "Carrito borrado!"
    });
    vaciarCarrito();
}