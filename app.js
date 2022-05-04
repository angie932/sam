const nota1 = document.getElementById ("nota1");
const nota2 = document.getElementById ("nota2");
const btnganar = document.getElementById ("ganar");
const btnrecuperar = document.getElementById ("recuperar");
const btncuadro = document.getElementById ("cuadro");
const text = document.getElementById ("texto");

btnganar.addEventListener("click",ganar);
btnrecuperar.addEventListener("click", recuperar);
btncuadro.addEventListener("click", cuadro);

function ganar() {
    let n1 = Number(nota1.value * 0.3);
    let n2 = Number(nota2.value * 0.3); 
    let n3 = n1 + n2;
    let n4 =  ((3.5 - n3) / 0.4).toFixed(1);
    
    if (nota1.value < 1 || nota2.value < 1) {
        text.textContent = ("Numeros menores a 1 no son validos")

    } else if (nota1.value > 5 || nota2.value > 5) {
        text.textContent = ("Numeros mayores a 5 no son validos")

    } else if (n4 <= 5) {
        text.textContent = (`lA NOTA NECESARIA PARA GANAR LA MATERIA ES:\n${n4} `)

    } else if (nota1.value === null || nota2.value === null)  {
    text.textContent = ("Los campos estan vacios, por favor ingrese un numero")

    }else {
        text.textContent = `la nota restante es:${n4}\n¡ESFUERZATE MAS LA PROXIMA VEZ!`
    }
}


function recuperar(){
    let n1 = Number(nota1.value );
    let n2 = Number(nota2.value ); 

    //let Nfinal = n1 + n2 / 2;
    let n3 =((3.0 * 3) - n1 - n2); 
    let nalga = n1 + n2 + n3 / 3;
    
    if (n3 <= 5.0){
        text.textContent = ("Su nota faltante para recuperar es: " + n3 + "para asi tener: " + nalga)
    } else if (n3 < 3.0 ){
        
        text.textContent = ("Usted perdio, no puede recuperar, chupelo! Su nota faltante para recuperar es: " + n3)
    }else if (n3 > 5.0){
        text.textContent = ("Usted perdio, no puede recuperar, chupelo! Su nota faltante para recuperar es: " + n3)
    }
}

function cuadro() {
    let n1 = Number(nota1.value * 0.3);
    let n2 = Number(nota2.value * 0.3);
    let n3 = n1 + n2;
    let n4 =  ((3.5 - n3) / 0.4).toFixed(1);
    
    
    if (nota1.value < 1 || nota2.value < 1) {
        text.textContent = ("Numeros menores a 1 no son validos")
    } else if (nota1.value >= 3.5 || nota2.value >= 3.5) {
        text.textContent = ("Numeros mayores a 5 no son validos")

    } else if (n4 >= 4) {
        text.textContent = `Usted esta seleccionado para ser cuadro de honor \n${n4} `
    } else if (nota1.value >=4 || nota2.value >=4)  {
    text.textContent = ("Los campos estan vacios, por favor ingrese un numero")
    }
     else {
        text.textContent = `la nota restante es:${n4}\nusted fue seleccionado para cuadro de honor`
    }


}