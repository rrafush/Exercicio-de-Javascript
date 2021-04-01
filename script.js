var data = new Date().getFullYear()
var ano = Number(data)
var txtano = document.getElementById('txtano')


function verificar() {
  var nasc = Number(txtano.value)
  var idade = ano - nasc
  var res = document.getElementById('res')
  console.log(idade)
  if ( nasc < 0 || nasc > ano) {
  window.alert(`[ERRO] Preencha os dados corretamente!`)
  } else {
    var sex = window.document.getElementsByName('sexo')
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sex[0].checked) {
      genero = 'mulher'
      if (idade < 10){
        //criança
        img.setAttribute('src', 'crianca-m.png')
      } else if (idade < 21){
        //jovem
        img.setAttribute('src', 'jovem-m.png')
      } else if (idade < 60){
        //adulto
        img.setAttribute('src', 'adulto-m.png')
      } else if (idade >= 60){
        //idoso
        img.setAttribute('src', 'idoso-m.png')
      }

    } else if (sex[1].checked) {
      genero = 'homem'
      if (idade < 10){
        //criança
        img.setAttribute('src', 'crianca-h.png')
      } else if (idade < 21){
        //jovem
        img.setAttribute('src', 'jovem-h.png')
      } else if (idade < 60){
        //adulto
        img.setAttribute('src', 'adulto-h.png')
      } else if (idade >= 60){
        //idoso
        img.setAttribute('src', 'idoso-h.png')
      }
    }
    img.style.display ='block'
    img.style.margin = '20px auto'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}