import mercaderiaApi from "../services/mercaderiaApi.js";
import imprimirMercaderias from '../components/imprimirMercaderias.js';
import filtros from "../event/filtros.js";
import detallesMercaderia from "../event/detallesMercaderia.js";
import pedidoMercaderia from "../event/pedidoMercaderia.js";
import hacerUnaComanda from "../event/hacerUnaComanda.js";

let mercaderias = await mercaderiaApi.GetMercaderia();
imprimirMercaderias(mercaderias);

filtros();

detallesMercaderia();

pedidoMercaderia();

hacerUnaComanda();