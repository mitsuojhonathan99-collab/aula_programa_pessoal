const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

function perguntar(rl, texto) {
    return new Promise(resolve => {
        rl.question(texto, resolve);
    });
}

async function main() {
    const rl = readline.createInterface({ input, output });

    let acumulador = 0;

    for (let i = 0; i < 5; i++) {
        const resposta = await perguntar(rl, 'Digite um número: ');
        const numero = Number(resposta);

        acumulador += numero;
    }

    const media = acumulador / 5;

    console.log(`A média dos números digitados é: ${media}`);

    rl.close();
}

main();

