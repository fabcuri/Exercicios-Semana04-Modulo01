document.addEventListener('DOMContentLoaded', () => {
    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const resultadoElement = document.getElementById('resultado');

    document.getElementById('somar').addEventListener('click', () => {
        realizarCalculo('somar');
    });

    document.getElementById('subtrair').addEventListener('click', () => {
        realizarCalculo('subtrair');
    });

    document.getElementById('multiplicar').addEventListener('click', () => {
        realizarCalculo('multiplicar');
    });

    document.getElementById('dividir').addEventListener('click', () => {
        realizarCalculo('dividir');
    });

    function realizarCalculo(operacao) {
        const numero1 = parseFloat(numero1Input.value);
        const numero2 = parseFloat(numero2Input.value);

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

        resultadoElement.textContent = `Resultado: ${resultado}`;
    }
});

