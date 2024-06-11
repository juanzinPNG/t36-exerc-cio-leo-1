let resul1, resul2, pVencedor
resul1 = document.getElementById ('resul1')
resul2 = document.getElementById('resul2')
pVencedor = document.getElementById ('vencedor')

function CalcularResultado(){
    if (validarDados(resul1.value, resul2.value)) {
   
    let timeA, timeB, ganhador
    timeA = parseFloat(resul1.value)
    timeB = parseFloat(resul2.value)

    if(timeA > timeB){
        ganhador = ('TIME A')
    }
    else if(timeB > timeA) {
        ganhador = ('VITÓRIA DO TIME B')
    }
    else {
        ganhador = ('EMPATE! FIZERAM A MESMA PONTUAÇÃO')
    }

    pVencedor.textContent = ganhador
    limparCampos()

}
}

function validarDados(re1,re2){
    if (isNaN (re1) || isNaN (re2) || re1.trim()==='' || re2.trim()===''){
        exibirDados()
            alert('Insira valores válidos, com números!')
            return
        }
        return true
 }
function limparCampos(){
    resul1.value = ' '
    resul2.value = ' '
    resul1.focus()
}

function exibirDados(pGanhador=''){
    limparCampos()
    pVencedor.textContent = pGanhador
}
    