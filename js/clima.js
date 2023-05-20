function climaAhora(clima){
    let ubicacion = document.createElement("h2");
    let tiempo = document.createElement("img");
    let temperatura = document.createElement("p");
    let p = document.createElement("p");

    ubicacion.textContent = "Hoy en " + clima.city_name;
    tiempo.src = "https://cdn.weatherbit.io/static/img/icons/"+clima.weather.icon+".png"
    temperatura.textContent = `${clima.weather.description} y ${clima.app_temp}°C`;
    p.textContent = "UN DIA ESPECIAL PARA UNA PIZZA"

    let cajaClima = document.querySelector("#clima");
    cajaClima.appendChild(ubicacion);
    cajaClima.appendChild(tiempo);
    cajaClima.appendChild(temperatura);
    cajaClima.appendChild(p);
}

const requestURLUbi = 'https://ipgeolocation.abstractapi.com/v1/?api_key=b6aa20c0c5434dfcac09c82e91a9207c';
const requestUbicacion = new XMLHttpRequest();
requestUbicacion.open('GET', requestURLUbi);
requestUbicacion.responseType = 'json';
requestUbicacion.send();

requestUbicacion.onload = function() {
    const ubicacion = requestUbicacion.response;
    let latitud = ubicacion.latitude;
    let longitud = ubicacion.longitude;
    
    const requestURLClima = `https://api.weatherbit.io/v2.0/current?lat=${latitud}&lon=${longitud}&lang=es&key=d71ef4a704e8411db65e86cfbf5d796f`;
    const requestClima = new XMLHttpRequest();
    requestClima.open('GET', requestURLClima);
    requestClima.responseType = 'json';
    requestClima.send();

    requestClima.onload = function() {
        const clima = requestClima.response;
        climaAhora(clima.data[0]);
    }
}


