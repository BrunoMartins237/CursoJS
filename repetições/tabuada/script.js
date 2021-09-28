function tabuada() {
    let numero = window.document.getElementById('numero')
    let num = Number(numero.value)
    let seltab = window.document.getElementById('seltab')

    if (num == 0){
        window.alert('[ERRO] Insira um Número')
    
    } else {
        seltab.innerHTML = `Contando: `
        for (let c = 1; c <= 10; c++){
            let item = window.document.createElement('option') // adicionando option dinamicamente
            item.text = `${num} x ${c} = ${num*c}`
            seltab.appendChild(item)
        }
        for(let c = 1; c <= 10; c++){
            let item = window.document.createElement('option')
            item.text = `${num} / ${c} = ${num/c}`
            seltab.appendChild(item)
        }
    }
}
    