import imprimirComandas from "../components/imprimirComandas.js";
import comandaApi from "../services/comandaApi.js";

let fechaActual = new Date();
let dia = fechaActual.getDate();
let mes = fechaActual.getMonth() + 1;
let anio = fechaActual.getFullYear();

let fecha = dia + '/' + mes + '/' + anio;

let comandas = await comandaApi.GetComandaByFecha(fecha);
let comandaDia = document.getElementById("comanda-dia");

if (comandas.length === 0) {
    comandaDia.innerText = "Hoy no se han realizado comandas"
}

if(comandas.length > 0){
    comandaDia.innerText = "Comandas del dia"
    imprimirComandas(comandas);
}
