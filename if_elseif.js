//Escribe obtenerEstado(unidades) mediante if, else if y else.

function obtenerEstado(unidades) {
    if (!Number.isInteger(unidades) || unidades < 0) {
        return "No valido";
    } else if (unidades === 0) {
        return "Agotado";
    } else if (unidades <= 2) {
        return "Ultimas unidades";
    } else {
        return "Disponible";
    }
};

const limites = [-1, 0, 1, 2, 2.5, 3];

limites.forEach((valor) => {
    console.log(`Cantidad del producto elegido: ${valor} = ${obtenerEstado(valor)}`);
});