let salariosCMB = colombia.map(
    function (persona) {
        return persona.salary;
    }
)

salariosCMB.sort((a, b) => a - b);


// Sacamos mediana

// Confirmar si la cantidad de unidades en la lista es par o impar
function esPar (arrayLength) {
    return (arrayLength % 2 === 0)
}

//sacamos la mediana tanto para como impar
function medianaGeneral(salarios){
    let mitad = parseInt(salarios.length / 2)
    if (esPar(salarios.length)){
        let mediana = (salarios[mitad] + salarios[mitad - 1]) / 2;
        return mediana
    } else {
       let mediana = salarios[mitad]
       return mediana;
    }
}

let medianaColombia = medianaGeneral(salariosCMB);

// Sacamos al to 10%


let spliceStart = (salariosCMB.length * 90) / 100; // Donde empezamos el corte
let spliceCount = salariosCMB.length - spliceStart; // Cuantas posiciones sacamos del array original

let salariosTop10 = salariosCMB.splice(spliceStart, spliceCount); // Conseguimos los salarios de los TOP 10%

let medianaTop10 = medianaGeneral(salariosTop10);