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


    console.log ('Inicio Do Programa');

    do {

        console.clear();
        console.log ('|1| Candidato 1');
        console.log ('|2| Candidato 2');
        console.log ('|3| Candidato 3');
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
            totalVotos --;
        } else {
            return;
        }

    } while (voto !== 0);

    console.clear();
    console.log('** BOLETIM DE URNA - RESULTADOS **');
    console.log ('Total de votos do candidato1: ' + votosCandidato1 + ' votos (' + 
    (votosCandidato1 / totalVotos * 100) + '%)');
    
    console.log ('Total de votos do candidato1: ' + votosCandidato2 + ' votos (' + 
    (votosCandidato2 / totalVotos * 100) + '%)');
    
    console.log ('Total de votos do candidato1: ' + votosCandidato3 + ' voto(s) (' + 
    (votosCandidato3 / totalVotos * 100) + '%)');
    
    console.log ('Total de votos do candidato1: ' + votosBrancos + ' votos (' + 
    (votosBrancos / totalVotos * 100) + '%)');
    
    console.log ('Total de votos do candidato1: ' + votosNulos + ' votos (' + 
    (votosNulos / totalVotos * 100) + '%)');


    if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
        nomeGanhador = "Candidato 1";
        votosGanhador = votosCandidato1 + votosBrancos;
    } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
        nomeGanhador = "Candidato 2";
        votosGanhador = votosCandidato2 + votosBrancos;
    } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
        nomeGanhador = "Candidato 3";
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