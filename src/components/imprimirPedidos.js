let monto = 0;

function imprimirPedidos(id,precio,nombre, botonPedido) {

  let mercaderiaPedidosContainer = document.getElementById("pedidos");
  let precioTotal = document.getElementById("precio");
  let botonComanda= document.getElementById("crear-comanda");

  botonPedido.addEventListener("click", () => {

    let botonEliminarMercaderia = document.createElement("button");
    botonEliminarMercaderia.innerText = "x";
    botonEliminarMercaderia.setAttribute("id", "mi-boton-eliminar");

    let precioPedido = document.createElement("p");
    precioPedido.innerText = "$ " + precio;
    precioPedido.setAttribute("id", "precio-pedido");

    let nombrePedido = document.createElement("p");
    nombrePedido.innerText = nombre
    nombrePedido.setAttribute("id","nombre-pedido");

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

    mercaderiaPedidosDiv.appendChild(nombrePedido);
    mercaderiaPedidosDiv.appendChild(precioPedido);
    mercaderiaPedidosDiv.appendChild(botonEliminarMercaderia);

    mercaderiaPedidosContainer.appendChild(mercaderiaPedidosDiv);
  });
}

export default imprimirPedidos;