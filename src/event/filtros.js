import mercaderiaApi from "../services/mercaderiaApi.js";
import imprimirMercaderias from '../components/imprimirMercaderias.js';

function filtros() {

    let tipo;
    let nombre;
    let orden;

    let botones = document.querySelectorAll(".nav-botones button");
    botones.forEach((boton, index) => {
        boton.addEventListener("click", async function () {
            botones.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");
            let mercaderias;
            tipo = index;
            mercaderias = await mercaderiaApi.GetMercaderiaFiltros(tipo, nombre, orden);
            if (mercaderias.length === 0) {
                let mercaderiasContainer = document.getElementById("mercaderias");
                let mercaderiaDiv = document.createElement("div");
                mercaderiasContainer.innerHTML = "";
                let nombre = document.createElement("p");
                nombre.innerText = `Ups, no hay mercaderias de ese tipo`;
                nombre.setAttribute("id", "nombre-mercaderia");
                mercaderiaDiv.appendChild(nombre);
                mercaderiasContainer.appendChild(mercaderiaDiv);
                mercaderiaDiv.classList.add("fade-in");
            }
            else {
                imprimirMercaderias(mercaderias);
            }
        });
    });

    let buscador = document.getElementById("search");
    buscador.addEventListener("input", async function () {
        nombre = buscador.value.trim();
        if (nombre.length > 0) {
            let mercaderias = await mercaderiaApi.GetMercaderiaFiltros(tipo, nombre, orden)
            imprimirMercaderias(mercaderias);
        }
        else {
            let mercaderias = await mercaderiaApi.GetMercaderiaFiltros(tipo, nombre, orden)
            imprimirMercaderias(mercaderias);
        }
    });

    let botonASC = document.getElementById("boton1");;
    let botonDESC = document.getElementById("boton2");
    botonASC.addEventListener("click", async function () {
        orden = "asc"
        let mercaderias = await mercaderiaApi.GetMercaderiaFiltros(tipo, nombre, orden)
        imprimirMercaderias(mercaderias);
    })

    botonDESC.addEventListener("click", async function () {
        orden = "desc"
        let mercaderias = await mercaderiaApi.GetMercaderiaFiltros(tipo, nombre, orden)
        imprimirMercaderias(mercaderias);
    })
}

export default filtros;