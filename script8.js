// 1
// suma de 2 numeros 
//ingresar los numeros en los inputs
//cuando haga click en el button que se sumen los dos numeros y que automaticamente se pueda hacer
//  otra operacion

const contedor = document.getElementById("content-suma");
const botonn = document.getElementById("button-suma")
const resultado1 = document.getElementById("resultado-suma")
const reiniciar = document.getElementById("reiniciar");


botonn.addEventListener("click" , ()=>{
 
    const num1_suma = parseInt( document.getElementById("numero-1-suma").value);
    const num2_suma = parseInt(document.getElementById("numero-2-suma").value);
    
   function sumar(){
    return num1_suma + num2_suma;
   }
   resultado1.textContent = sumar();
})

reiniciar.addEventListener("click" , ()=>{
    
    document.getElementById("numero-1-suma").value = "";
    document.getElementById("numero-2-suma").value = "";
    resultado1.textContent = "0";
       

})



// 2
//Número par o impar 
// Pedí un número y 
// mostrale al usuario si es par o impar.

// AGARRO DEL HTML EL BOTON Y EL RESULTADO
const boton2 = document.getElementById("btn-par");
const resultado2 = document.getElementById("resultado-par");


// FUNCION CUANDO HAGO CLICK EN EL BOTON HAGA UN IF SI ES PAR O IMPAR
boton2.addEventListener("click", ()=>{

    const num_par = document.getElementById("num-par").value;

    if(num_par === ""){
        alert("Por favor, ingrese un numero")
    }else if (num_par % 2 === 0){
        resultado2.textContent=`PAR`
    } else{
        resultado2.textContent = `IMPAR`
    }
})


// 3
// Pedí la edad del usuario y decile si puede o no sacar la licencia.
const form = document.querySelector("form");
const enviar = document.getElementById("enviar");
enviar.addEventListener("click" , (e)=> {
    e.preventDefault()
    const edad = parseInt(document.getElementById("edad").value);

    if(isNaN(edad)){
        alert("Por favor , ingrese los datos del formualrio")
    }else if(edad < 18 ){
        alert("No puedes sacar la licencia de conducir. ")
    }else{
        alert("Ya puedes sacar la licencia de conducir!!")
    }
})


// 4

// Elige un numero y lo multiplica hasta el 10
const btn4 = document.getElementById("btn-multiplicar");
const resultado4 = document.getElementById("resultado-multiplicar");

btn4.addEventListener("click", ()=>{
    const num_multiplicar = parseInt(document.getElementById("numero-multiplicar").value);
    let tabla = "";


    if(isNaN(num_multiplicar)){
        alert("Por favor, ingrese un numero para poder multiplicar ")
        return;
    }

    for(let i= 0; i<=10; i++){
        tabla += `${num_multiplicar} x ${i} = ${num_multiplicar * i} <br>`
  
    }
   
    resultado4.innerHTML = tabla;
})



// 5
//PROMEDIO DE NOTAS 
// PEDIR AL USUARIO 3 NOTAS
// CUANDO OPRIMA EL BOTON PUEDE VER SU PROMEDIO 

const boton5 = document.getElementById("btn-promedio");
const resultado5 = document.getElementById("resultado-promedio");


boton5.addEventListener("click", ()=>{
    const nota1_prmedio = parseFloat(document.getElementById("nota1-promedio").value);
    const nota2_prmedio = parseFloat(document.getElementById("nota2-promedio").value);
    const nota3_prmedio = parseFloat(document.getElementById("nota3-promedio").value);

    if( isNaN(nota1_prmedio)  || isNaN(nota2_prmedio)  || isNaN(nota3_prmedio)  ){
        alert("Por favor, ingrese sus notas para ver el promedio.")
    }

    const promedio = (nota1_prmedio + nota2_prmedio + nota3_prmedio) / 2;

    if(promedio >= 6){
        resultado5.innerHTML = `Promedio: ${promedio.toFixed(2)} - APROBADO`
    } else{
        resultado5.innerHTML= `Promedio: ${promedio.toFixed(2)} - DESAPROBO`
    }
})

// 6
// contar cuantas vocales tiene una palabra
const boton6 = document.getElementById("btn-vocal");
const resultado6 = document.getElementById("Resultado-vocal");

boton6.addEventListener("click" , ()=>{

    const palabra = document.getElementById("palabra-vocal").value;
    let contador = 0;

    for(let i = 0; i < palabra.length; i++ ){

        let letra = palabra[i];
        if(letra === "a" ||letra === "e" ||letra === "i" ||letra === "o" ||letra === "u"){    
            contador++;
            resultado6.innerHTML = `Vocales: ${contador}`
        }
    }
})


// 7
// Pedí tres números y mostrá cuál es el más grande.
const btn7 = document.getElementById("btn-grande");
const resultado = document.getElementById("resultado-grande");

btn7.addEventListener("click", ()=>{
    const num1_grande = parseInt(document.getElementById("num1-grande").value);
    const num2_grande = parseInt(document.getElementById("num2-grande").value);
    const num3_grande = parseInt(document.getElementById("num3-grande").value);

    if(isNaN(num1_grande) || isNaN(num2_grande) || isNaN(num3_grande)){
        alert("Por favor, complete el formulario")
        return;
    }
    const mayor = Math.max(num1_grande, num2_grande,num3_grande);
    resultado.textContent = `El numero mas grande es: ${mayor}`

    
})