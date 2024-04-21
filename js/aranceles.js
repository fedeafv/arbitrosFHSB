let NaftaSuper = 971;
let partidosTot = [];
let guardarPartidos = (key, value) =>{localStorage.setItem(key,value)};
let carritoViejo =JSON.parse(localStorage.getItem("partidosTotal"));
console.log(carritoViejo);

if(localStorage.getItem("partidosTotal")){
    for(objeto of carritoViejo){
        partidosTot.push(objeto);
    }
}
const cardsDivision = [
  { id: 1, div: "Primera División", precio: 14*NaftaSuper},
  { id: 2, div: "Sexta División", precio: 12*NaftaSuper},
  { id: 3, div: "Septima División", precio: 10*NaftaSuper},
  { id: 4, div: "Segunda División", precio: 14*NaftaSuper},
  { id: 5, div: "División Caballeros", precio: 15*NaftaSuper},
];

const division = document.getElementById("division");
const tablaTot =document.getElementById('carrito');

for (const cards of cardsDivision) {
    division.innerHTML += `
    <div class="card cajaDescarga m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${cards.div}</h5>
            <p class="card-text">Agregar un partido de ${cards.div} Precio: $${cards.precio}</p>
            <button class="btn boton btn-primary seleccion" id=${cards.id}>Agregar</button>
        </div>
    </div> `;
}
const botonSeleccion = document.getElementsByClassName('seleccion');
for(const boton of botonSeleccion){
    boton.addEventListener('click',()=>{
        console.log('Hiciste click en:'+boton.id);
        const aTotalPartidos = cardsDivision.find(divi =>divi.id == boton.id);
        console.log(aTotalPartidos);
        totalPartidos(aTotalPartidos);
    })
}
armarCarrito();

function totalPartidos(partidoAgregado){
    partidosTot.push(partidoAgregado);
    console.table(partidosTot);
    tablaTot.innerHTML += `
        <tr>
            <td>${partidoAgregado.id}</td>
            <td>${partidoAgregado.div}</td>
            <td>${partidoAgregado.precio}</td>
        </tr>`
    guardarPartidos("partidosTotal",JSON.stringify(partidosTot));
}

function armarCarrito(){
    for(partido of partidosTot){
        tablaTot.innerHTML += `
        <tr>
            <td>${partido.id}</td>
            <td>${partido.div}</td>
            <td>${partido.precio}</td>
        </tr>`
    }
}