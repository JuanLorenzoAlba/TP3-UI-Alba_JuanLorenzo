function imprimirMercaderias(mercaderias) {

    let mercaderiasContainer = document.getElementById("mercaderias");

    if (mercaderias.length === 0) {
        return; // No hay mercaderías, no se imprime nada
    }
    else {
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

        let mercaderiaDiv = document.createElement("div");
        mercaderiaDiv.appendChild(nombre);
        mercaderiaDiv.appendChild(tipo);
        mercaderiaDiv.appendChild(precio);
        mercaderiaDiv.appendChild(imagen);

        mercaderiasContainer.appendChild(mercaderiaDiv);
    });
}

export default imprimirMercaderias;