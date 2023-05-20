import mercaderiaApi from "../services/mercaderiaApi.js";
import imprimirMercaderias from '../components/imprimirMercaderias.js';
import hacerUnPedido from "../event/hacerUnPedido.js";
import buscadorMercaderia from "../event/bucadorMercaderia.js";
import filtros from "../event/filtros.js";
import detallesMercaderia from "../event/detallesMercaderia.js";
import pedidoMercaderia from "../event/pedidoMercaderia.js";
import quitarMercaderiaPedido from "../event/quitarMercaderiaPedido.js";
import hacerUnaComanda from "../event/hacerUnaComanda.js";

// Logica del boton de "hacer un pedido"
hacerUnPedido();

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

