function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert ('[ERRO] Por favor, verifique os dados e tente novamente.')
    }else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada ${idade}`
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
             genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //criança

                img.setAttribute('src', 'foto-menino.png')
               

            }else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'foto-hj.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-ha.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-hi.png')
            }

        }else if (fsex[1].checked){

            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança

                img.setAttribute('src', 'foto-menina.png')

            }else if (idade >= 10 && idade < 21){
                //jovem

                img.setAttribute('src', 'foto-mjovem.png')
            }else if (idade < 50){
                //adulto

                img.setAttribute('src', 'foto-ma.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-mi.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}        