function carregar(){

    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')

    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    //let ano = data.getFullYear()
  
   

    if(hora >= 0 && hora < 12){
        msg.innerHTML = `Bom dia, Agora são ${hora}:${minuto} Horas`
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML = `Boa tarde, Agora são ${hora}:${minuto} Horas`
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        msg.innerHTML = `Boa noite, Agora são ${hora}:${minuto} Horas`
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#515154'
    }
}
