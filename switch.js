//Crea describirOrden(orden) con switch para los valores titulo, autor y anio. Devuelve un mensaje para cualquier otro value.

function describirOrden(orden) {
    switch (orden) {
        case "titulo":
            return "Ordenado por Título.";
        case "autor":
            return "Ordenado por Autor.";
        case "anio":
            return "Ordenado por Año.";
        default:
            return "Orden no reconocido.";
    }
};

const ordenes = ["titulo", "autor", "anio", "editorial"];
ordenes.forEach((orden) => {
    console.log(describirOrden(orden));
});
