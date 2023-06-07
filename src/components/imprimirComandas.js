function imprimirComandas(comandas) {

  let contador = 1;

  let comandasContainer = document.getElementById("comandas");

  if (comandas.length === 0) {
    return;
  } else {
    comandasContainer.innerHTML = "";
  }

  comandas.forEach(comanda => {

    let mercaderias = document.createElement("div");
    mercaderias.setAttribute("id", "mercaderia-comanda");

    let mercaderiasConteo = {};

    comanda.mercaderias.forEach(mercaderia => {
      if (mercaderiasConteo[mercaderia.nombre]) {
        mercaderiasConteo[mercaderia.nombre]++;
      } else {
        mercaderiasConteo[mercaderia.nombre] = 1;
      }
    });

    Object.keys(mercaderiasConteo).forEach(nombreMercaderia => {
      let mercaderiasInfo = document.createElement("div");
      mercaderiasInfo.setAttribute("id", "mercaderiaInfo-comanda");

      let nombre = document.createElement("p");
      nombre.innerText = limitarCaracteresNombres(nombreMercaderia, 20);

      let precio = document.createElement("p");
      precio.innerText = "$ " + comanda.mercaderias.find(mercaderia => mercaderia.nombre === nombreMercaderia).precio;
      precio.setAttribute("id", "mercaderiaComanda-precio");

      let repeticiones = document.createElement("p");
      repeticiones.innerText = mercaderiasConteo[nombreMercaderia] + " x";

      mercaderiasInfo.appendChild(repeticiones);
      mercaderiasInfo.appendChild(nombre);
      mercaderiasInfo.appendChild(precio);

      mercaderias.appendChild(mercaderiasInfo);
    });

    let titulo = document.createElement("h2");
    titulo.innerText = "Comanda " + contador;

    contador++;

    let nombreMercaderia = document.createElement("p");
    nombreMercaderia.innerText = "Mercaderias Pedidas: ";

    let fecha = document.createElement("p");
    fecha.innerText = "Fecha: " + limitarCaracteres(comanda.fecha, 10);

    let descripcion = document.createElement("p");
    descripcion.innerText = "Forma de Entrega: " + comanda.formaEntrega.descripcion;

    let total = document.createElement("p");
    total.innerText = "Precio Total: $ " + comanda.total;

    let infoComanda = document.createElement("div");
    infoComanda.setAttribute("id", "infoComanda");

    infoComanda.appendChild(fecha);
    infoComanda.appendChild(descripcion);
    infoComanda.appendChild(total);

    let comandaDiv = document.createElement("div");
    comandaDiv.setAttribute("id", "comandaDiv");

    comandaDiv.appendChild(titulo);
    comandaDiv.appendChild(infoComanda);
    comandaDiv.appendChild(nombreMercaderia);
    comandaDiv.appendChild(mercaderias);

    comandasContainer.appendChild(comandaDiv);
  })
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

export default imprimirComandas;