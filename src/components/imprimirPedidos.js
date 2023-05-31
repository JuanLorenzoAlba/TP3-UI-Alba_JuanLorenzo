let monto = 0;

function imprimirPedidos(id, precio, nombre, botonPedido) {

  let mercaderiaPedidosContainer = document.getElementById("pedidos");
  let precioTotal = document.getElementById("precio");
  let botonComanda = document.getElementById("crear-comanda");

  botonPedido.addEventListener("click", () => {

    /*     let divsConId1 = document.querySelectorAll("div[id='" + id + "']");
        let cantidad = divsConId1.length + 1; */

    let botonEliminarMercaderia = document.createElement("button");
    botonEliminarMercaderia.innerText = "✘";
    botonEliminarMercaderia.setAttribute("id", "mi-boton-eliminar");

    /*     let cantidadPedido = document.createElement("p");
        cantidadPedido.innerText = "x " + cantidad;
        cantidadPedido.setAttribute("id", "cantidad-pedido"); */

    let precioPedido = document.createElement("p");
    precioPedido.innerText = "$ " + precio;
    precioPedido.setAttribute("id", "precio-pedido");

    let nombrePedido = document.createElement("p");
    nombrePedido.innerText = limitarCaracteres(nombre, 20);
    nombrePedido.setAttribute("id", "nombre-pedido");

    monto += precio

    precioTotal.textContent = "Precio Total: " + monto

    botonEliminarMercaderia.addEventListener("click", () => {
      monto -= precio
      precioTotal.textContent = "Precio Total: " + monto
    });

    botonComanda.addEventListener("click", () => {
      monto = 0;
      precioTotal.textContent = "Precio Total: " + 0
    });

    let mercaderiaPedidosDiv = document.createElement("div");
    mercaderiaPedidosDiv.setAttribute("id", id);

    /*     mercaderiaPedidosDiv.appendChild(cantidadPedido); */
    mercaderiaPedidosDiv.appendChild(nombrePedido);
    mercaderiaPedidosDiv.appendChild(precioPedido);
    mercaderiaPedidosDiv.appendChild(botonEliminarMercaderia);

    mercaderiaPedidosContainer.appendChild(mercaderiaPedidosDiv);
  });
}

function limitarCaracteres(texto, limite) {
  if (texto.length <= limite) {
    return texto;
  } else {
    return texto.slice(0, limite) + "...";
  }
}

export default imprimirPedidos;