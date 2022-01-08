// Selector de ejercicio

let cuadradoNavItem = document.getElementById("cuadrado");
let circuloNavItem = document.getElementById("circulo");
let trianguloNavItem = document.getElementById("triangulo");

let ejercicioCuadrado = document.getElementById("ejercicio-cuadrado")
let ejercicioCirculo = document.getElementById("ejercicio-circulo")
let ejercicioTriangulo = document.getElementById("ejercicio-triangulo")

function selectedEjercicio (e) {
    cuadradoNavItem.classList.remove("figure-active");
    circuloNavItem.classList.remove("figure-active");
    trianguloNavItem.classList.remove("figure-active");

    ejercicioCuadrado.classList.remove("ejercicio-active");
    ejercicioCirculo.classList.remove("ejercicio-active");
    ejercicioTriangulo.classList.remove("ejercicio-active");

    ejercicioSeleccionado = e.srcElement.id;

   if(ejercicioSeleccionado == cuadradoNavItem.id) 
   {
        cuadradoNavItem.classList.add("figure-active");
        ejercicioCuadrado.classList.add("ejercicio-active")
   } else if (ejercicioSeleccionado == circuloNavItem.id) 
   {
        circuloNavItem.classList.add("figure-active");
        ejercicioCirculo.classList.add("ejercicio-active")
   } else if (ejercicioSeleccionado == trianguloNavItem.id) 
   {
        trianguloNavItem.classList.add("figure-active");
        ejercicioTriangulo.classList.add("ejercicio-active")
   }
}

cuadradoNavItem.addEventListener("click", selectedEjercicio);
circuloNavItem.addEventListener("click", selectedEjercicio);
trianguloNavItem.addEventListener("click", selectedEjercicio);

// Calculos

// Calcular Cuadrado

let ladoCuadradoInput = document.getElementById("lado-cuadrado");
let botonCalcularCuadrado = document.getElementById("calcular-ciadrado");
let resultadoAreaCuadrado = document.getElementById("areaCuadradoIs");
let resultadoPerimetroCuadrado = document.getElementById("perimetroCuadradoIs");

let areaCuadrado;
let perimetroCuadrado;

function calcularCuadrado() {
    areaCuadrado = ladoCuadradoInput.value * ladoCuadradoInput.value;
    perimetroCuadrado = ladoCuadradoInput.value * 4;
    resultadoAreaCuadrado.innerText = areaCuadrado;
    resultadoPerimetroCuadrado.innerHTML = perimetroCuadrado;
}

// Calcular Circulo

let radioCirculo = document.getElementById("radio-circulo");
let resultadoAreaCirculo = document.getElementById("areaCirculoIs");
let resultadoPerimetroCirculo = document.getElementById("perimetroCirculoIs");

let areaCirculo;
let perimetroCirculo;

function calcularCirculo() {
     areaCirculo = Math.PI * (radioCirculo.value * radioCirculo.value);
     resultadoAreaCirculo.innerText = areaCirculo.toFixed(2)
     perimetroCirculo = Math.PI * (radioCirculo.value * 2);
     resultadoPerimetroCirculo.innerHTML = perimetroCirculo.toFixed(2);
}    

// Calcular Triangulo

let trianguloAltura = document.getElementById("triangulo_altura");
let trianguloLadoA = document.getElementById("triangulo_ladoA");
let trianguloLadoB = document.getElementById("triangulo_ladoB")
let trianguloBase = document.getElementById("triangulo_base");
let resultadoAreaTriangulo = document.getElementById("areaTrianguloIs")
let resultadoPerimetroTriangulo = document.getElementById("perimetroTrianguloIs");

function calcularTriangulo () {
     if (trianguloAltura.value === "" || trianguloBase.value === "") {
          resultadoAreaTriangulo.innerText = "Necesito la base y la altura";
     } else {
          let areaTriangulo = (trianguloBase.value * trianguloAltura.value) / 2;
          resultadoAreaTriangulo.innerText = areaTriangulo;
     }
     if (trianguloBase.value === "" || trianguloLadoA.value === "" || trianguloLadoB.value === "") {
          resultadoPerimetroTriangulo.innerText = "Necesito los lados y la base";
     } else {
          let perimetroTriangulo = trianguloLadoB.value + trianguloLadoA.value + trianguloBase.value;
          resultadoPerimetroTriangulo.innerText = perimetroTriangulo;
     }
}