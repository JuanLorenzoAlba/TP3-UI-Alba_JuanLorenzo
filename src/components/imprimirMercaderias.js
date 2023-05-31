import imprimirDetalles from "./imprimirDetalles.js";
import imprimirPedidos from "./imprimirPedidos.js";

function imprimirMercaderias(mercaderias) {

  let mercaderiasContainer = document.getElementById("mercaderias");

  if (mercaderias.length === 0) {
    return; // No hay mercaderías, no se imprime nada
  } else {
    mercaderiasContainer.innerHTML = "";
  }

  mercaderias.forEach(mercaderia => {

    let nombre = document.createElement("p");
    nombre.innerText = mercaderia.nombre;
    nombre.setAttribute("id", "nombre-mercaderia");

    let tipo = document.createElement("p");
    tipo.innerText = "Categoria: " + mercaderia.tipo.descripcion;

    let precio = document.createElement("p");
    precio.innerText = "Precio: $ " + mercaderia.precio;

    let imagen = document.createElement("img");
    imagen.setAttribute("src", mercaderia.imagen);

    let botonDetalles = document.createElement("button");
    botonDetalles.innerText = "Detalles";
    botonDetalles.setAttribute("id", "mi-boton-detalles");

    imprimirDetalles(mercaderia, tipo, precio, imagen, botonDetalles)

    let botonPedido = document.createElement("button");
    botonPedido.innerText = "Pedir";
    botonPedido.setAttribute("id", "mi-boton-pedido");

    imprimirPedidos(mercaderia.id, mercaderia.precio, mercaderia.nombre, botonPedido)

    let mercaderiaDiv = document.createElement("div");
    mercaderiaDiv.appendChild(nombre);
    mercaderiaDiv.appendChild(tipo);
    mercaderiaDiv.appendChild(precio);
    mercaderiaDiv.appendChild(imagen);
    mercaderiaDiv.appendChild(botonDetalles);
    mercaderiaDiv.appendChild(botonPedido);

    mercaderiasContainer.appendChild(mercaderiaDiv);

    mercaderiaDiv.classList.add("fade-in");
  });
}

export default imprimirMercaderias;