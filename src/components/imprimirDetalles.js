import mercaderiaApi from "../services/mercaderiaApi.js";

function imprimirDetalles(mercaderia, tipo, precio, imagen, botonDetalles) {

  let mercaderiaDetallesContainer = document.getElementById("detalles-mercaderia");

  botonDetalles.addEventListener("click", () => {
    mercaderiaDetallesContainer.innerHTML = "";

    let nombreTitulo = document.createElement("p");
    mercaderiaApi.GetMercaderiaById(mercaderia.id).then(mercaderias => {
      nombreTitulo.innerText = mercaderias.nombre;
    });
    nombreTitulo.setAttribute("id", "nombre-titulo");

    let ingredientesTitulo = document.createElement("p");
    ingredientesTitulo.innerText = "Ingredientes: "
    ingredientesTitulo.setAttribute("id", "ingredientes-titulo");

    let ingredientes = document.createElement("p");
    mercaderiaApi.GetMercaderiaById(mercaderia.id).then(mercaderias => {
      ingredientes.innerText = mercaderias.ingredientes;
    });

    let preparacionTitulo = document.createElement("p");
    preparacionTitulo.innerText = "Preparacion: "
    preparacionTitulo.setAttribute("id", "preparacion-titulo");

    let preparacion = document.createElement("p");
    mercaderiaApi.GetMercaderiaById(mercaderia.id).then(mercaderias => {
      preparacion.innerHTML = mercaderias.preparacion;
    });

    let botonVolver = document.createElement("button");
    botonVolver.innerText = "Volver";
    botonVolver.setAttribute("id", "mi-boton-volver");

    let mercaderiaDetallesDiv = document.createElement("div");

    mercaderiaDetallesDiv.appendChild(nombreTitulo);
    mercaderiaDetallesDiv.appendChild(tipo.cloneNode(true));
    mercaderiaDetallesDiv.appendChild(precio.cloneNode(true));
    mercaderiaDetallesDiv.appendChild(imagen.cloneNode(true));
    mercaderiaDetallesDiv.appendChild(ingredientesTitulo);
    mercaderiaDetallesDiv.appendChild(ingredientes);
    mercaderiaDetallesDiv.appendChild(preparacionTitulo);
    mercaderiaDetallesDiv.appendChild(preparacion);
    mercaderiaDetallesDiv.appendChild(botonVolver);

    mercaderiaDetallesContainer.appendChild(mercaderiaDetallesDiv);
  });
}

export default imprimirDetalles;