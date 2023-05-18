function imprimirDetalles(boton){
    boton.addEventListener("click", () => {
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
}