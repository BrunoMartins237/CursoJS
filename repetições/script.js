function contador(){
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let res = window.document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('Insira os dados corretamente!')
    } else {
        res.innerHTML = `Contando:`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Comando Inválido')
            p = 1
        }
        if (i < f){
        for (let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += ` \u{1F3C1} `
        } else {
            for (let c = i ; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            } 
            res.innerHTML += `\u{1F3C1}`
        }
    }   
}

    