function describirOrden(orden) {
  let resultado;

  switch (orden) {
    case "titulo":
      resultado = "Ordenado por Título";
      break;
    case "autor":
      resultado = "Ordenado por Autor";
      break;
    case "anio":
      resultado = "Ordenado por Año";
      break;
    default:
      resultado = "Orden no reconocido";
      break;
  }

  return resultado;
}

const ordenes = ["titulo", "autor", "anio", "editorial"];
ordenes.forEach((orden) => {
  console.log(describirOrden(orden));
});
