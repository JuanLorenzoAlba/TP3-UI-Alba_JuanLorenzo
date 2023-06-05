import imprimirComandas from "../components/imprimirComandas.js";
import comandaApi from "../services/comandaApi.js";

var fechaActual = new Date();
var dia = fechaActual.getDate();
var mes = fechaActual.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
var anio = fechaActual.getFullYear();

var fecha = dia + '/' + mes + '/' + anio;

let comandas = await comandaApi.GetComandaByFecha(fecha);
const comandaContainer = document.getElementById("comandas-container");
if(comandas.length != 0){
    comandaContainer.style.display = "block";
}
imprimirComandas(comandas);