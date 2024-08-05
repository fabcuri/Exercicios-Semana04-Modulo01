
function calcular (numero1,numero2){
    var soma = (numero1+numero2) ;
    return soma
}

function executarFormulario(event){
    event.preventDefault() //previne que a tela de um refresh
    var numero1 = parseFloat(document.getElementById('numero1').value)
    var numero2 = parseFloat(document.getElementById('numero2').value)
  
    var resultado=(calcular(numero1,numero2))
    document.getElementById('resultado').innerText = "O resultado é " + resultado
   console.log(resultado)
   
}

document //pegue o documento que recebe o script
.getElementById("calculadora") //pegue o elemento com id calculadora
.addEventListener('submit', executarFormulario) //quando acontencer a submissão, execute a funcao executarFormulario