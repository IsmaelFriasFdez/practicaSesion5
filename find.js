const libros = [
{ id: 1, titulo: 'Dune', autor: 'Frank Herbert', disponible: true },
{ id: 2, titulo: 'Solaris', autor: 'Stanisław Lem', disponible: false },
{ id: 3, titulo: 'Pedro Páramo', autor: 'Juan Rulfo', disponible: true }
];

const id = 2;
//Libro con id 2.
const encontrado = libros.find((libro) => libro.id === id)?.titulo;
//Libros disponibles.
const disponibles = libros.filter((libro) => libro.disponible).map((libro) => libro.titulo);
//Títulos de todos los libros.
const titulos = libros.map((libro) => libro.titulo);
//Etiquetas con el formato Título — Autor.
const etiquetas = libros.map((libro) => ({
    etiqueta: `${libro.titulo} - ${libro.autor}`
}));
//Booleano que indique si existe algún libro no disponible.
const noHayDisponible = libros.some((libro) => !libro.disponible);
//Booleano que indique si todos tienen autor.
const todosTienenAutor = libros.every((libro) => Boolean(libro.autor));

console.log(encontrado);
console.log(disponibles);
console.log(titulos);
console.log(etiquetas);
console.log(noHayDisponible);
console.log(todosTienenAutor);