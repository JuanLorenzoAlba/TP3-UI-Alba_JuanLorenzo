const getMercaderia = async () => {
    let result = [];
    let response = await fetch("https://localhost:7194/api/v1/Mercaderia");
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const getMercaderiaById = async (id) => {
    let result = [];
    let response = await fetch(`https://localhost:7194/api/v1/Mercaderia/${id}`);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const getMercaderiaByTipo = async (posicion) => {
    let result = [];
    let response = await fetch(`https://localhost:7194/api/v1/Mercaderia?tipo=${posicion}`);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const getMercaderiaByNombre = async (nombreMercaderia) => {
    let result = [];
    let response = await fetch(`https://localhost:7194/api/v1/Mercaderia?nombre=${nombreMercaderia}`);
    if (response.ok) {
        result = await response.json();
    }
    return result;
};

const mercaderiaApi = {
    GetMercaderia: getMercaderia,
    GetMercaderiaById: getMercaderiaById,
    GetMercaderiaByTipo: getMercaderiaByTipo,
    GetMercaderiaByNombre: getMercaderiaByNombre
};

export default mercaderiaApi;
