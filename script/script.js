/*   
    - Carne: 400gm por Adulto; + de 6 horas = 650gr
    - Cerveja: 1200ml por Pessoa; + de 6 horas = 2000ml
    - Refrigerante e Água: 1000ml por Pessoa; + de 6 horas = 1500ml

    - Crianças valem 0.5

*/

//alert("Olá, Calcule aqui o seu churrasco futuramente!")

let inputAdulto = document.getElementById("adulto");
let inputCrianca = document.getElementById("crianca");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    if(inputAdulto.value || inputDuracao.value == 0){
        alert("Por favor, Preencha os campos!")
    }
    
    let carneTotal = totaldeCarne(duracao) * inputAdulto.value + ((totaldeCarne(duracao) / 2) * inputCrianca.value);
    let CervejaTotal = totaldeCerveja(duracao) * inputAdulto.value
    let BebidasTotal = totaldeBebidas(duracao) * inputAdulto.value + ((totaldeBebidas(duracao) / 2) * inputCrianca.value);

    return resultado.innerHTML = `<p>${carneTotal / 1000}Kg de Carne</p>
                                    <p>${CervejaTotal /1000}L de Cerveja ou ${Math.ceil(CervejaTotal / 335)} latinhas</p>
                                    <p>${BebidasTotal / 1000}L de Bebida ou ${Math.ceil(BebidasTotal / 2000)} Garrafas de 2L</p>`
    
}

function totaldeCarne(elemento){
    if(elemento >= 6){
        return 650
    }else{
        return 400
    }
}

function totaldeCerveja(elemento1){
    if(elemento1 >= 6){
        return 2000
    }else{
        return 1200
    }
}

function totaldeBebidas(elemento2){
    if(elemento2 >= 6){
        return 1500
    }else{
        return 1000
    }
}

