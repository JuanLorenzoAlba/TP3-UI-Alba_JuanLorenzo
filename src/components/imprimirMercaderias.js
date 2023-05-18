import mercaderiaApi from "../services/mercaderiaApi.js";

function imprimirMercaderias(mercaderias) {
  let mercaderiasContainer = document.getElementById("mercaderias");
  let mercaderiaDetallesContainer = document.getElementById("detalles-mercaderia");
  let mercaderiaPedidosContainer = document.getElementById("pedidos");

  if (mercaderias.length === 0) {
    return; // No hay mercaderías, no se imprime nada
  } else {
    mercaderiasContainer.innerHTML = "";
  }

  mercaderias.forEach(mercaderia => {
    let nombre = document.createElement("p");
    nombre.innerText = mercaderia.nombre;

    let tipo = document.createElement("p");
    tipo.innerText = "Categoria: " + mercaderia.tipo.descripcion;

    let precio = document.createElement("p");
    precio.innerText = "Precio: $ " + mercaderia.precio;

    let imagen = document.createElement("img");
    imagen.setAttribute("src", mercaderia.imagen);

    let botonDetalles = document.createElement("button");
    botonDetalles.innerText = "Detalles";
    botonDetalles.setAttribute("id", "mi-boton-detalles");

    botonDetalles.addEventListener("click", () => {
      mercaderiaDetallesContainer.innerHTML = "";

      let ingredientes = document.createElement("p");
      mercaderiaApi.GetMercaderiaById(mercaderia.id).then(mercaderias => {
        ingredientes.innerHTML = `Ingredientes: <br>${mercaderias.ingredientes}`;
      });

      let preparacion = document.createElement("p");
      mercaderiaApi.GetMercaderiaById(mercaderia.id).then(mercaderias => {
        preparacion.innerHTML = `Preparación: <br>${mercaderias.preparacion}`;
      });

      let mercaderiaDetallesDiv = document.createElement("div");
      mercaderiaDetallesDiv.appendChild(nombre.cloneNode(true));
      mercaderiaDetallesDiv.appendChild(tipo.cloneNode(true));
      mercaderiaDetallesDiv.appendChild(precio.cloneNode(true));
      mercaderiaDetallesDiv.appendChild(imagen.cloneNode(true));
      mercaderiaDetallesDiv.appendChild(ingredientes);
      mercaderiaDetallesDiv.appendChild(preparacion);

      mercaderiaDetallesContainer.appendChild(mercaderiaDetallesDiv);
    });

    let botonPedido = document.createElement("button");
    botonPedido.innerText = "Pedir";
    botonPedido.setAttribute("id", "mi-boton-pedido");

    botonPedido.addEventListener("click", () => {
      mercaderiaDetallesContainer.innerHTML = "";

      let ingredientes = document.createElement("p");
      mercaderiaApi.GetMercaderiaById(mercaderia.id).then(mercaderias => {
        ingredientes.innerHTML = `Ingredientes: <br>${mercaderias.ingredientes}`;
      });

      let preparacion = document.createElement("p");
      mercaderiaApi.GetMercaderiaById(mercaderia.id).then(mercaderias => {
        preparacion.innerHTML = `Preparación: <br>${mercaderias.preparacion}`;
      });

      let botonEliminarMercaderia = document.createElement("button");
      botonEliminarMercaderia.innerText = "x";
      botonEliminarMercaderia.setAttribute("id", "mi-boton-eliminar");

      let mercaderiaPedidosDiv= document.createElement("div");
      mercaderiaPedidosDiv.appendChild(imagen.cloneNode(true));
      mercaderiaPedidosDiv.appendChild(botonEliminarMercaderia);

      mercaderiaPedidosContainer.appendChild(mercaderiaPedidosDiv);
    });

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