let numero = window.document.getElementById('num')
let selnumero = window.document.getElementById('selnumero')
let res = window.document.getElementById('res')
let alerta = window.document.getElementById('alerta')
let valores = []
function eNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function naLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar (){
    if (eNumero(numero.value) && !naLista(numero.value, valores)){
        let num = Number(numero.value)
        valores.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        selnumero.appendChild(item)
        res.innerHTML = ``
    } else {
        window.alert('[ERRO] Valor inválido ou já encontrado na lista')
    }
    numero.value = ''
    numero.focus()
    
}

function finalizar (){
    if (valores.length == 0){
        window.alert('[ERRO] Adicione valores')
    }else {
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }else{
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML += `<p>Foram adicionados o Total de ${total} números</p>`
        res.innerHTML += `<p>O maior número adicionado: ${maior}</p>`
        res.innerHTML += `<p>O menor número adicionado: ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores: ${soma}</p>`
        res.innerHTML += `<p>Média: ${media}</p>`
    }
}
