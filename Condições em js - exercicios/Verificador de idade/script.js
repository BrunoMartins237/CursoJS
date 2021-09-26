function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('ano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Dado incorreto')
    }else {
        var sex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(sex[0].checked){
            genero = 'Homem'

        }else if(sex[1].checked){
            genero = 'Mulher'
        }
        
        res.innerHTML = `Você é um(a) ${genero} com ${idade} anos`
        //res.appendChild(img)
    }
}