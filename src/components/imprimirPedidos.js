let monto = 0;

function imprimirPedidos(id, precio, nombre, botonPedido) {

  let mercaderiaPedidosContainer = document.getElementById("pedidos");
  let precioTotal = document.getElementById("precio");
  let botonComanda = document.getElementById("crear-comanda");

  const pedidoImagen = document.getElementById("pedido-vacio");
  const pedidos = document.getElementById("pedidos-informacion");
  const pedidoFondo = document.getElementById("pedidos-forma-entrega");

  let pedidoExistente = false;
  let cantidadPedido;

  botonPedido.addEventListener("click", () => {

    if (pedidoExistente) {
      let cantidad = parseInt(cantidadPedido.innerText.replace("x ", ""));
      cantidad += 1;
      cantidadPedido.innerText = "x " + cantidad;

      monto += precio;
      precioTotal.textContent = "Precio Total: " + monto;
    } else {
      pedidoExistente = true;

      let botonEliminarMercaderia = document.createElement("button");
      botonEliminarMercaderia.innerText = "✘";
      botonEliminarMercaderia.setAttribute("id", "mi-boton-eliminar");

      cantidadPedido = document.createElement("p");
      cantidadPedido.setAttribute("id", "cantidad-pedido");
      cantidadPedido.innerText = "x 1";

      let precioPedido = document.createElement("p");
      precioPedido.setAttribute("id", "precio-pedido");
      precioPedido.innerText = "$ " + precio;

      let nombrePedido = document.createElement("p");
      nombrePedido.setAttribute("id", "nombre-pedido");
      nombrePedido.innerText = limitarCaracteres(nombre, 15);

      monto += precio;
      precioTotal.textContent = "Precio Total: " + monto;

      botonEliminarMercaderia.addEventListener("click", () => {
        let cantidad = parseInt(cantidadPedido.innerText.replace("x ", ""));
        if (cantidad > 0) {
          cantidad -= 1;
          cantidadPedido.innerText = "x " + cantidad;

          monto -= precio;
          precioTotal.textContent = "Precio Total: " + monto;
        }

        if (cantidad === 0) {
          mercaderiaPedidosContainer.removeChild(mercaderiaPedidosDiv);
          pedidoExistente = false;
        }

        if(mercaderiaPedidosContainer.childElementCount === 0){
          pedidoImagen.style.display = "block";
          pedidos.style.display = "none";
          pedidoFondo.style.background = "var(--secondary-c)"
        }
      });

      botonComanda.addEventListener("click", () => {
        monto = 0;
        precioTotal.textContent = "Precio Total: " + 0;
        while (mercaderiaPedidosContainer.firstChild) {
          mercaderiaPedidosContainer.removeChild(mercaderiaPedidosContainer.firstChild);
        }
/*         mercaderiaPedidosContainer.removeChild(mercaderiaPedidosDiv); */
        pedidoExistente = false;
      });

      let mercaderiaPedidosDiv = document.createElement("div");
      mercaderiaPedidosDiv.setAttribute("id", id);

      mercaderiaPedidosDiv.appendChild(cantidadPedido);
      mercaderiaPedidosDiv.appendChild(nombrePedido);
      mercaderiaPedidosDiv.appendChild(precioPedido);
      mercaderiaPedidosDiv.appendChild(botonEliminarMercaderia);

      mercaderiaPedidosContainer.appendChild(mercaderiaPedidosDiv);
    }
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