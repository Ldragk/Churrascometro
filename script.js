// Carne: 600g por pessoa + de 6 horas - 650g
// Cerveja: 1200ml por pessoa + de 6 horas 2000 ml
// Refrigetante / Agua: 1000 ml por pessoa + de 6 horas 1500ml
// Criança vale por 0.5

let inputAdultos = document.querySelector("#adultos")
let inputCrianças = document.querySelector("#criancas")
let inputDuração = document.querySelector("#duracao")
let resultado = document.querySelector("#resultado")



function calcular() {

    console.log('Calculando...')

    let adultos = inputAdultos.value
    let crianças = inputCrianças.value
    let duração = inputDuração.value

    let qntCarne = carnePP(duração) * adultos + (carnePP(duração) / 2) * crianças
    let qntCerveja = cervejaPP(duração) * adultos
    let qntBebida = bebidaPP(duração) * adultos + (bebidaPP(duração) / 2) * crianças
    let qntCaH = (qntCarne / 1000) / duração
    let qntCeH = (qntCerveja / 1000) / duração
    let qntBeH = (qntBebida / 2000) / duração

    
    // O += é para que todos os resultados apareçam, caso contrário so aparecia o ultimo
    resultado.innerHTML = `<p>${qntCarne / 1000}kg de Carne.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntCerveja / 1000)} Garrafas de Cerveja.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntBebida / 2000)} Pet's 2L de Refrigerante ou Água.</p>`

    resultado.innerHTML += `<hr id="hr"><p>${parseFloat(qntCaH)}kg por hora.`
    resultado.innerHTML += `<p>${qntCeH} Garrafas de Cerveja por hora.`
    resultado.innerHTML += `<p>${qntBeH} Pet's 2L por hora.`

    // Serve para o css só aparecer após o click.
    resultado.classList.add('resultado')

}

console.memory(calcular())

function carnePP(dur) {
    
    return dur >= 6 ? 650 : 400;
}

function cervejaPP(dur) {
    return dur >= 6 ? 650 : 400;
}

function bebidaPP(dur) {
    return dur >= 6 ? 650 : 400;
}



document.querySelector("#form").addEventListener("reset", (a) => {

    resultado.innerHTML = null;
    resultado.classList.remove("resultado");
});



// CLICAR COM BOTÃO ENTER

document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {

        let btn = document.querySelector(".enviar");

        btn.onclick();
    }
});


// EVITAR O ERRO DE ATUALIZAR PÁGINA AO CLICK COM MOUSE OU ENTER

document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
});

