import mercaderiaApi from "../services/mercaderiaApi.js";
import comandaApi from "../services/comandaApi.js";
import imprimirMercaderias from '../components/imprimirMercaderias.js';
import buscadorMercaderia from "../event/buscadorMercaderia.js";
import filtros from "../event/filtros.js";
import detallesMercaderia from "../event/detallesMercaderia.js";
import pedidoMercaderia from "../event/pedidoMercaderia.js";
import quitarMercaderiaPedido from "../event/quitarMercaderiaPedido.js";
import hacerUnaComanda from "../event/hacerUnaComanda.js";

// Muestra todas las mercaderias cuando se le da al boton "hacer un pedido"
let mercaderias = await mercaderiaApi.GetMercaderia();
imprimirMercaderias(mercaderias);

// Logica del Buscador de mercaderias
buscadorMercaderia();

// Logica de los filtros para buscar las mercaderias
filtros();

//Logica del boton para ver los detalles de las
detallesMercaderia();

//Logica para hacer un pedido de una mercaderia
pedidoMercaderia();

//Logica para quitar una mercaderia de un pedido
quitarMercaderiaPedido();

//Logica para hacer una comanda
hacerUnaComanda();

var fechaActual = new Date();
var dia = fechaActual.getDate();
var mes = fechaActual.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
var anio = fechaActual.getFullYear();

var fecha = dia + '/' + mes + '/' + anio;

let comandas = await comandaApi.GetComandaByFecha(fecha);
imprimirComandas(comandas)

function imprimirComandas(comandas) {

    console.log(comandas)

    let comandasContainer = document.getElementById("comandas");

    if (comandas.length === 0) {
        return; // No hay mercaderías, no se imprime nada
    } else {
        comandasContainer.innerHTML = "";
    }

    comandas.forEach(comanda => {

        let mercaderias = document.createElement("div");

        comanda.mercaderias.forEach(mercaderia => {

            let nombre = document.createElement("p");
            nombre.innerText = mercaderia.nombre;

            let precio = document.createElement("p");
            precio.innerText = mercaderia.precio;

            mercaderias.appendChild(nombre);
            mercaderias.appendChild(precio);
        })

        let formaEntrega = document.createElement("div");

        let descripcion = document.createElement("p");
        descripcion.innerText = comanda.formaEntrega.descripcion;

        formaEntrega.appendChild(descripcion);

        let total = document.createElement("p");
        total.innerText = comanda.total;

        let fecha = document.createElement("p");
        fecha.innerText = comanda.fecha;

        let comandaDiv = document.createElement("div");

        comandaDiv.appendChild(mercaderias);
        comandaDiv.appendChild(formaEntrega);
        comandaDiv.appendChild(total);
        comandaDiv.appendChild(fecha);

        comandasContainer.appendChild(comandaDiv);
    })
}

