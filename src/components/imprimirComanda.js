function imprimirComanda(comanda) {

    let comandasContainer = document.getElementById("comandas");

    let mercaderias = document.createElement("div");
    mercaderias.setAttribute("id", "mercaderia-comanda");

    comanda.mercaderias.forEach(mercaderia => {

        let mercaderiasInfo = document.createElement("div");
        mercaderiasInfo.setAttribute("id", "mercaderiaInfo-comanda");

        let nombre = document.createElement("p");
        nombre.innerText = "✓ " + limitarCaracteresNombres(mercaderia.nombre,15);

        let precio = document.createElement("p");
        precio.innerText = "$ " +  mercaderia.precio;
        precio.setAttribute("id", "precio-comanda");

        mercaderiasInfo.appendChild(nombre);
        mercaderiasInfo.appendChild(precio);
        mercaderias.appendChild(mercaderiasInfo);
    })

    let titulo = document.createElement("h2");
    titulo.innerText = "Nueva Comanda ";

    let nombreMercaderia = document.createElement("p");
    nombreMercaderia.innerText = "Mercaderias Pedidas";

    let infoComanda = document.createElement("div");
    infoComanda.setAttribute("id", "infoComanda");

    let descripcion = document.createElement("p");
    descripcion.innerText = "Forma de Entrega: " + comanda.formaEntrega.descripcion;

    let total = document.createElement("p");
    total.innerText = "Precio Total: " + comanda.total;

    let fecha = document.createElement("p");
    fecha.innerText = "Fecha: " + limitarCaracteres(comanda.fecha,10);

    let comandaDiv = document.createElement("div");
    comandaDiv.setAttribute("id", "comandaDiv");

    infoComanda.appendChild(fecha);
    infoComanda.appendChild(descripcion);
    infoComanda.appendChild(total);

    comandaDiv.appendChild(titulo);
    comandaDiv.appendChild(infoComanda);
    comandaDiv.appendChild(nombreMercaderia);
    comandaDiv.appendChild(mercaderias);

    comandasContainer.appendChild(comandaDiv);
}

function limitarCaracteres(texto, limite) {
    if (texto.length <= limite) {
      return texto;
    } else {
      return texto.slice(0, limite);
    }
  }

  function limitarCaracteresNombres(texto, limite) {
    if (texto.length <= limite) {
      return texto;
    } else {
      return texto.slice(0, limite) + "...";
    }
  }

  export default imprimirComanda;