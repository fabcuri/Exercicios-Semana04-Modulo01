

document.addEventListener('DOMContentLoaded', () => {
    const numero1Formulario = document.getElementById('numero1');
    const numero2Formulario = document.getElementById('numero2');
    const resultadoFormulario = document.getElementById('resultado');

    document.getElementById('somar').addEventListener('click', () => {
        gerarResultado('somar');
    });

    document.getElementById('subtrair').addEventListener('click', () => {
        gerarResultado('subtrair');
    });

    document.getElementById('multiplicar').addEventListener('click', () => {
        gerarResultado('multiplicar');
    });

    document.getElementById('dividir').addEventListener('click', () => {
        gerarResultado('dividir');
    });

    function gerarResultado(operacao) {
        const numero1 = parseFloat(numero1Formulario.value);
        const numero2 = parseFloat(numero2Formulario.value);

        let resultado;
        switch (operacao) {
            case 'somar':
                resultado = numero1 + numero2;
                break;
            case 'subtrair':
                resultado = numero1 - numero2;
                break;
            case 'multiplicar':
                resultado = numero1 * numero2;
                break;
            case 'dividir':
                if (numero2 === 0) {
                    resultado = 'Não é possível dividir por zero!';
                } else {
                    resultado = numero1 / numero2;
                }
                break;
            default:
                resultado = 'Operação inválida';
                break;
        }

        resultadoFormulario.textContent = `Resultado: ${resultado}`;
    }
});

