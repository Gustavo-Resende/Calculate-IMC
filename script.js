function calcular() {
    let pesoValue = document.getElementById('peso').value;
    let alturaValue = document.getElementById('altura').value;
    const nomeValue = document.getElementById('name').value;
    let textArea = document.querySelector('.text-result')
    const calculo = pesoValue/alturaValue**2
    
    if(pesoValue, alturaValue == 0){
        textArea.textContent = `Informações inválidas, por favor verifique os valores.`
    } if(calculo < 18.5 ){
        textArea.textContent = `Olá ${nomeValue}, tudo bem? Seu IMC atual é ${calculo.toFixed(2)}. Está abaixo da classificação recomendada.`
    } if(calculo >= 18.5 ){
        textArea.textContent = `Olá ${nomeValue}, tudo bem? Seu IMC atual é ${calculo.toFixed(2)}. Está na classificação recomendada.`
    } if(calculo > 25){
        textArea.textContent = `Olá ${nomeValue}, tudo bem? Seu IMC atual é ${calculo.toFixed(2)}. Está acima da classificação recomendada.`
    } if(calculo > 30){
        textArea.textContent = `ALERTA SEU IMC ATUAL É ${calculo.toFixed(2)} OBESIDADE GRAU 1!`
    } if(calculo > 35){
        textArea.textContent = `ALERTA SEU IMC ATUAL É ${calculo.toFixed(2)} OBESIDADE GRAU 2!!`
    } if(calculo > 40){
        textArea.textContent = `ALERTA SEU IMC ATUAL É ${calculo.toFixed(2)} OBESIDADE GRAU 3!!!`
    } 
}