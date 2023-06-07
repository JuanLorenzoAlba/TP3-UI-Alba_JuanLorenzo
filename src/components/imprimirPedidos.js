let monto = 0;

function imprimirPedidos(id, precio, nombre, botonPedido) {

  let pedidosContainer = document.getElementById("pedidos");
  let precioTotal = document.getElementById("precio");
  let botonComanda = document.getElementById("crear-comanda");

  let pedidoImagen = document.getElementById("pedido-vacio");
  let pedidosInformacion = document.getElementById("pedidos-informacion");
  let pedidoFondo = document.getElementById("pedidos-forma-entrega");

  let pedidoExistente = false;
  let cantidadPedido;

  botonPedido.addEventListener("click", () => {

    if (pedidoExistente) {
      let cantidad = parseInt(cantidadPedido.innerText.replace("x ", ""));
      cantidad += 1;
      cantidadPedido.innerText = "x " + cantidad;

      monto += precio;
      precioTotal.textContent = "Precio Total: $ " + monto;
    }

    else {
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
      precioTotal.textContent = "Precio Total: $ " + monto;

      botonEliminarMercaderia.addEventListener("click", () => {
        let cantidad = parseInt(cantidadPedido.innerText.replace("x ", ""));
        if (cantidad > 0) {
          cantidad -= 1;
          cantidadPedido.innerText = "x " + cantidad;

          monto -= precio;
          precioTotal.textContent = "Precio Total: $ " + monto;
        }

        if (cantidad === 0) {
          pedidosContainer.removeChild(pedidosDiv);
          pedidoExistente = false;
        }

        if (pedidosContainer.childElementCount === 0) {
          pedidoImagen.style.display = "block";
          pedidosInformacion.style.display = "none";
          pedidoFondo.style.background = "var(--secondary-c)"
        }
      });

      botonComanda.addEventListener("click", () => {
        monto = 0;
        precioTotal.textContent = "Precio Total: $ " + 0;
        while (pedidosContainer.firstChild) {
          pedidosContainer.removeChild(pedidosContainer.firstChild);
        }
        pedidoExistente = false;
      });

      let pedidosDiv = document.createElement("div");
      pedidosDiv.setAttribute("id", id);

      pedidosDiv.appendChild(cantidadPedido);
      pedidosDiv.appendChild(nombrePedido);
      pedidosDiv.appendChild(precioPedido);
      pedidosDiv.appendChild(botonEliminarMercaderia);

      pedidosContainer.appendChild(pedidosDiv);
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