// Estrutura: switch-case

//const opcao =1

//switch (opcao) {

//    case 1:
//        console.log('Opção é 1');
//        break;
//    case 2:
//        console.log('Opção é 2');
//        break;
//   default:
//        console.log('Nenhuma das opções')
//        break;
// }

//if (opcao 1 ===) {
//    console.log('Opção é 1') 
//} else if (opcao 2 ===) {
//    console.log('Opção é 2')
//} else {
//    console.log('Nenhuma das opções')
//}

// Estrutura de repetição: do-while

// const contador = 1;

// do {
//     console.log('Instrução 1');
//     console.log('Instrução 2');
//     console.log('Instrução 3');
//     console.log('Instrução 4');
//     console.log('Instrução 5');
//     console.log('Instrução 6');
// } while (contador === 1);

// Estrutura de repetição: while (enquanto)

//const opcao = 0;

//while (opcao !== 0) {
    
//    console.log('Instrução 1');
//    console.log('Instrução 2');
//    console.log('Instrução 3');
//    console.log('Instrução 4');
//    console.log('Instrução 5');
//    console.log('Instrução 6');
//}

// Estrutura de repetição: while (enquanto)

// const contador = 0;
// do {
//     console.log('Instrução');
//     contador += 1;
// } while (contador <= 10)

function urnaEletronica(){
    let 
    candidato1 = "",
    candidato2 = "",
    candidato3 = "",
    fim = "",
    ganhador = "";

    let 
    votoC1 = 0,
    votoC2 = 0,
    votoC3 = 0,
    votoBranco = 0,
    votoGanhador = 0,
    porcentagem = 0,
    porcentagemC1 = 0,
    porcentagemC2 = 0,
    porcentagemC3 = 0,
    porcentagemBranco = 0,
    porcentagemNulo = 0,
    votoNulo = 0;

    let condicao = true

    candidato1 = prompt("Digite o nome do Primeiro candidato: ");
    candidato2 = prompt("Digite o nome do Segundo candidato: ");
    candidato3 = prompt("Digite o nome do Terceiro candidato: ");

    do {
        operacao = parseInt(prompt(`Digite o número correspondente ao seu voto:\n\n[1] ${candidato1}\n[2] ${candidato2}\n[3] ${candidato3}\n[5] Branco\n[8] Nulo`));
        if(operacao === 1){
            votoC1 += 1;
            alert(`Candidato ${candidato1} votado com sucesso!`)
        } else if(operacao === 2){
            votoC2 += 1;
            alert(`Candidato ${candidato2} votado com sucesso!`)
        } else if(operacao === 3){
            votoC3 += 1;
            alert(`Candidato ${candidato3} votado com sucesso!`)
        } else if(operacao === 5){
            votoBranco += 1;
            alert('Voto em branco registrado com sucesso!')
        } else if(operacao === 8){
            votoNulo += 1;
            alert('Voto nulo registrado com sucesso!')
        } else if(operacao === 150714) {
            fim = prompt("Você tem certeza que deseja encerrar a operação? [S/N]")
                if (fim === "S" || fim === "s") {
                    alert("Encerrando a operação!");
                    condicao = false;
                }
        } else {
            alert("Operação inválida");
        }
    } while(condicao);

    if(votoC1 > votoC2 && votoC1 > votoC3){
        ganhador = candidato1;
        votoGanhador = votoC1 + votoBranco;
    } else if(votoC2 > votoC1 && votoC2 > votoC3){
        ganhador = candidato2;
        votoGanhador = votoC2 + votoBranco;
    } else if(votoC3 > votoC1 && votoC3 > votoC2){
        ganhador = candidato3;
        votoGanhador = votoC3 + votoBranco;
    } else {
        alert(`Empate! Sem ganhadores.\nA quantidade de votos brancos e nulos foram de: ${porcentagemBranco.toFixed(2)}% e ${votoBranco} votos brancos no total e ${porcentagemNulo.toFixed(2)}% e ${votoNulo} votos nulos no total.`);
    }

    porcentagemC1 = (votoC1 / (votoC1 + votoC2 + votoC3 + votoNulo + votoBranco)) * 100;
    porcentagemC2 = (votoC2 / (votoC1 + votoC2 + votoC3 + votoNulo + votoBranco)) * 100;
    porcentagemC3 = (votoC3 / (votoC1 + votoC2 + votoC3 + votoNulo + votoBranco)) * 100;
    porcentagem = (votoGanhador / (votoC1 + votoC2 + votoC3 + votoNulo + votoBranco)) * 100;
    porcentagemBranco = (votoBranco / (votoC1 + votoC2 + votoC3 + votoNulo + votoBranco)) * 100;
    porcentagemNulo = (votoNulo / (votoC1 + votoC2 + votoC3 + votoNulo + votoBranco)) * 100;

    if(ganhador !== ""){
        alert(`O total de voto de todos os candidatos e seus percentuais foram:\n${candidato1}, ${votoC1} e ${porcentagemC1.toFixed(2)}%\n${candidato2}, ${votoC2} e ${porcentagemC2.toFixed(2)}%\n${candidato3}, ${votoC3} e ${porcentagemC3.toFixed(2)}%`);
        alert(`A quantidade de votos brancos e nulos foram de:\n${porcentagemBranco.toFixed(2)}% e ${votoBranco} de votos brancos no total\n${porcentagemNulo.toFixed(2)}% e ${votoNulo} de votos nulos no total.`)
        alert(`O ganhador foi ${ganhador} com ${porcentagem.toFixed(2)}% dos votos e ${votoGanhador} votos no total após acréscimo de votos brancos.`);
    }
    
}