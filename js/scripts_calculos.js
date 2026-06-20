/**
 * <p>São isentos as pessoas: Menores de idade e com renda até R$1700,00</p>
        <p>De R$1701,00 até R$5000,00 -> 5%</p>
        <p>De R$5001,00 até R$8000,00 -> 8%</p>
        <p>De R$8001,00 até R$10000,00 -> 10%</p>
        <p>De R$10001,00 em diante -> 3%</p>
 */

const calculoDesconto = (objPessoa) => {
    let resposta = ''

    if((objPessoa) < 18 || (objPessoa.renda <= 1700)){
        resposta = 'Isento de Desconto'
    }else if(objPessoa.renda <= 5000){
        resposta = `R$ ${parseFloat(objPessoa.renda * 0.005).toFixed(2).replace('.',',')} reais de desconto.`
    }else if(objPessoa.renda <= 8000){
        resposta = `R$ ${parseFloat(objPessoa.renda * 0.008).toFixed(2).replace('.',',')} reais de desconto.`
    }else if(objPessoa.renda <= 10000){
        resposta = `R$ ${parseFloat(objPessoa.renda * 0.010).toFixed(2).replace('.',',')} reais de desconto.`
    }else{
        `R$ ${parseFloat(objPessoa.renda * 0.003).toFixed(2).replace('.',',')}`
    }

    return resposta
}

export {calculoDesconto}