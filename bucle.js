//Dado un array de libros, resuelve cada apartado con el bucle indicado.
const libros = [
{ id: 1, titulo: 'Dune', autor: 'Frank Herbert', disponible: true },
{ id: 2, titulo: 'Solaris', autor: 'Stanisław Lem', disponible: false },
{ id: 3, titulo: 'Pedro Páramo', autor: 'Juan Rulfo', disponible: true }
];

//Con for of, muestra título y autor.
function mostrar1() {
    for(const libro of libros) {
        console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
    }
}

//Con for, muestra también la posición empezando por 1.
function mostrar2() {
    for(let i = 0; i < libros.length; i++) {
        const libro = libros[i];
        console.log(`${i + 1}, Título: ${libro.titulo}, Autor: ${libro.autor}`);
    }
}

//Con while, cuenta cuántos están disponibles.
function contarDisponibles(lista) {
    let i = 0;
    let disponibles = 0;
    while(i < lista.length) {
        if (lista[i].disponible) {
            disponibles++;
        }
        i++;
    }
    return disponibles;
}
mostrar1();
mostrar2();
console.log(`Libros disponibles: ${contarDisponibles(libros)}`);

//Usa continue para omitir los libros no disponibles.
for (const libro of libros) {
    if (!libro.disponible) {
        continue;
    }
    console.log(`Disponible: ${libro.titulo}`)
}

//Usa break para detener la búsqueda al encontrar un id concreto.
const idBuscado = 2;
let libroEncontrado = null;

for (const libro of libros) {
    if (libro.id === idBuscado) {
        libroEncontrado = libro;
        break;
    }
}
console.log('Encontrado: ', libroEncontrado);