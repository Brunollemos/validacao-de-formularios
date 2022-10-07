export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido');
    } else {
        input.parentElement.classList.add('input-container--invalido');
    }
}

const validadores = {
    dataNascimento:input => validacaoDataNascimento(input)
}

function validacaoDataNascimento(input) {
    const dataRecebida = new Date(input.value);
    let mensagem = '';

    if(!maiorque18(dataRecebida)){
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }
    
    input.setCustomValidity(mensagem);
}

function maiorque18 (data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataMais18 <= dataAtual
}