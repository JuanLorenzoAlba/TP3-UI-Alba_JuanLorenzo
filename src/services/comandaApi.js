const getComanda = async () => {
    let result = [];
    let response = await fetch("https://localhost:7194/api/v1/Comanda");
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const getComandaById = async (id) => {
    let result = [];
    let response = await fetch(`https://localhost:7194/api/v1/Comanda/${id}`);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const getComandaByFecha = async (fecha) => {
    let result = [];
    let response = await fetch(`https://localhost:7194/api/v1/Comanda?fecha=${fecha}`);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const crearComanda = async (mercaderias, formaEntrega) => {
    let result = [];
    const response = await fetch("https://localhost:7194/api/v1/Comanda", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ mercaderias, formaEntrega })
    });

    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const comandaApi = {
    GetComanda: getComanda,
    GetComandaById: getComandaById,
    GetComandaByFecha: getComandaByFecha,
    CrearComanda: crearComanda
};

export default comandaApi;
