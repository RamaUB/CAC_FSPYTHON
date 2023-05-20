function armarCajas(pizza){
    li = document.createElement("li");
    li.innerHTML = `
        <div>
            <div>
                <img class="imagenComida" src="${pizza.imagen}" alt="">
            </div>
            <div>
                <h2>${pizza.nombre}</h2>
                <p>${pizza.descripcion}</p>
                <p>${pizza.precio}</p>
            </div>
        </div>`
    return li;
}
    
function crearListaDePizzas(pizzas){
    
    let  caja = document.querySelector("#opcionComidas");
    let uLista = document.createElement("ul");
    let i;
    for (i=0; i<pizzas.length; i++){
        uLista.appendChild(armarCajas(pizzas[i]));
    }
    caja.appendChild(uLista);
}

const requestURL = './js/articulos.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const menu = request.response;
    console.log(menu);
    console.log(menu.pizzas.length);
    crearListaDePizzas(menu.pizzas)
  }
