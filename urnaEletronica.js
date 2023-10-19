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

    let voto;
    let votosCandidato1 = 0;
    let votosCandidato2 = 0;
    let votosCandidato3 = 0;
    let votosBrancos = 0;
    let votosNulos = 0;
    let totalVotos = 0;
    let nomeGanhador;
    let votosGanhador;
    let ganhador = true;
    let nomeCandidato1;
    let nomeCandidato2;
    let nomeCandidato3;


    console.log ('Inicio Do Programa');

    nomeCandidato1 = prompt('Digite o nome do candidato 1:');
    nomeCandidato2 = prompt('Digite o nome do candidato 2:');
    nomeCandidato3 = prompt('Digite o nome do candidato 3:');

    do {

        console.clear();
        console.log ('|1| Candidato 1 '+ nomeCandidato1);
        console.log ('|2| Candidato 2 '+ nomeCandidato2);
        console.log ('|3| Candidato 3 '+ nomeCandidato3);
        console.log ('|5| Voto em branco');
        console.log ('|8| Voto nulo');
        console.log ('|0| Encerrar a votação');

        voto = parseInt(prompt('Digite sua opção de voto:'));

        

        if (voto === 1) {
            votosCandidato1 += 1;
        } else if (voto === 2) {
            votosCandidato2 += 1
        } else if (voto === 3) {
            votosCandidato3 += 1
        } else if (voto === 5) {
            votosBrancos += 1
        } else if (voto === 8) {
            votosNulos += 1
        } else if (voto === 0) {

            encerrarVotacao = prompt('Deseja encerrar a votação?').charAt(0).toUpperCase();


            if (encerrarVotacao !== 'Sim' && encerrarVotacao !== 'Não') {
                alert('Opção inválida!')
            }
        

            totalVotos --;
        } else {
            return;
        }

    } while (encerrarVotacao !== 'Sim' && encerrarVotacao );

    console.clear();
    console.log('** BOLETIM DE URNA - RESULTADOS **');
    console.log ('Total de votos do(a) Candidato(a) : ' + nomeCandidato1 + votosCandidato1 + ' votos (' + 
    (votosCandidato1 / totalVotos * 100) + '%)');
    
    console.log ('Total de votos do(a) Candidato(a): ' + nomeCandidato2 + votosCandidato2 + ' votos (' + 
    (votosCandidato2 / totalVotos * 100) + '%)');
    
    console.log ('Total de votos do(a) Candidato(a): ' + nomeCandidato3 + votosCandidato3 + ' voto(s) (' + 
    (votosCandidato3 / totalVotos * 100) + '%)');
    
    console.log ('Total de votos do candidato1: ' + votosBrancos + ' votos (' + 
    (votosBrancos / totalVotos * 100) + '%)');
    
    console.log ('Total de votos do candidato1: ' + votosNulos + ' votos (' + 
    (votosNulos / totalVotos * 100) + '%)');


    if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
        nomeGanhador = nomeCandidato1;
        votosGanhador = votosCandidato1 + votosBrancos;
    } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
        nomeGanhador = nomeCandidato2;
        votosGanhador = votosCandidato2 + votosBrancos;
    } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
        nomeGanhador = nomeCandidato3;
        votosGanhador = votosCandidato3 + votosBrancos;
    } else {
        ganhador = false;
    }

    if (ganhador === true) {
        
        console.log ('-----')
        console.log ('O ganhador desta urna foi o candidato' + nomeGanhador + "com" + 
        votosGanhador + 'voto(s) absoluto(s) + (' + (votosGanhador / totalVotos * 100) +
        '%)');
    } else {
        console.log ('Não houve ganhador nesta urna (empate entre dois ou mais candidatos).');
    }

}