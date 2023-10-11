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
function urnaEletronica() {

    let opcao;
    let nome1;
    let nome2;
    let nome3;

    let contador = 0;
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let votobranco = 0;
    let votonulo = 0;
    

    do {
        
        voto = parseInt(prompt(
            '\n 1 Candidato 1' +
            '\n 2 Candidato 2' +
            '\n 3 Candidato 3' +
            '\n 5 Voto em Branco' +
            '\n 8 Voto Nulo '+
            '\n 0 Encerrar votação' +
            '\n Digite a sua escolha:'));

        contador++;
       
        
        if (voto === 1){
    
            console.log('Voto computado para:', nome1)
            candidato1++;
            
        }else if (voto === 2){
    
            console.log('Voto computado para:', nome2)
            candidato2++;
    
        }else if (voto === 3){
    
            console.log('Voto computado para:', nome3)
            candidato3++;
    
        }else if (voto === 5){
    
            console.log('Voto em Branco computado')
            votobranco++;
    
        }else if (voto === 8){
    
            console.log('Voto Nulo computado')
            votonulo++;
    
        }

    } while (voto !== 0);
    
    contador--;
    

    console.log('Contagem', contador );
    console.log('Voto computado para Candidato1 ', candidato1);
    console.log('Voto computado para Candidato2 ', candidato2);
    console.log('Voto computado para Candidato3 ', candidato3);
    console.log('Voto em Branco computado', votobranco);
    console.log('Voto Nulo computado', votonulo);


}