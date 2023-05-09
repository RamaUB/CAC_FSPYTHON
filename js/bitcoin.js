function agregarSeparadorMiles(numero) {
    let parteEntera = numero.toString().split('.');
    parteEntera[0] = parteEntera[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parteEntera.join('.');
}

const requestURLBitcoin = 'https://criptoya.com/api/bitso/btc/usd/1';
const requestURLDolar = 'https://criptoya.com/api/dolar';
const requestBitcoin = new XMLHttpRequest();
requestBitcoin.open('GET', requestURLBitcoin);
requestBitcoin.responseType = 'json';
requestBitcoin.send();

const requestDolar = new XMLHttpRequest();
requestDolar.open('GET', requestURLDolar);
requestDolar.responseType = 'json';
requestDolar.send();

var bitcoin;

requestBitcoin.onload = function() {
    bitcoin = requestBitcoin.response.ask;
    console.log("Precio Bitcoin: ",bitcoin);
    let cotBitcoin = document.querySelector("#cotBitcoin");
    cotBitcoin.textContent = "$" + bitcoin;
  }

requestDolar.onload = function() {
    const dolar = requestDolar.response;
    console.log("Precio Dolar: ");
    console.log("     - Oficial  : ", dolar.oficial);
    console.log("     - Solidario: ", dolar.solidario);
    console.log("     - Blue     : ", dolar.blue);
    let cotDolarOf = document.querySelector("#cotDolarOf");
    cotDolarOf.textContent = "$" + dolar.oficial;
    let cotDolarSol = document.querySelector("#cotDolarSol");
    cotDolarSol.textContent = "$" + dolar.solidario;
    let cotDolarBlue = document.querySelector("#cotDolarBlue");
    cotDolarBlue.textContent = "$" + dolar.blue;

    let precioPizzaBitcoin = document.querySelector("#precioPizzaBitcoin");
    precioPizzaBitcoin.textContent = "$" + agregarSeparadorMiles(bitcoin*10000*dolar.blue);
}

  
