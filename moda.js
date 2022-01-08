//  M E D I A N A
// El numero de en medio

// ordenar sort((a,b) => a - b)

let listaNumeros = [1, 2, 3, 4, 5]

if (listaNumeros.length % 2 == 0) {
    let mitadLista = parseInt(listaNumeros.length / 2);
    let mediana = (listaNumeros[mitadLista] + listaNumeros[mitadLista -1]) / 2
    console.log(mediana);

} else {
    let mitadLista = parseInt(listaNumeros.length / 2);
    let medianaImpar = listaNumeros[mitadLista];
    console.log(medianaImpar);
}

// M O D A 
// Cual es el numero que más aparece?

let miLista = [ 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 7, 7, 7, 9];

let cuantoDeCada = {};
// Cuantos numeros hay de cada?
miLista.map(
    function(numero) {
        if (cuantoDeCada[numero]){
            cuantoDeCada[numero] += 1;
        } else {
            cuantoDeCada[numero] = 1;
        }
    }
)

// Ordenoamos según cuanto han aparecido de menos a más
let nuevaLista = Object.entries(cuantoDeCada).sort((a, b) => a[1] - b[1]);
// Obtenemos el ultimo elemento del array
let moda = nuevaLista[nuevaLista.length - 1];