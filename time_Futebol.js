const prompt = require("prompt-sync")()

const nomeJogador = []
const idades = []
const valores = []

function incluir() {

    console.log("\nInclusão de Jogadores")

    console.log("-".repeat(40))



    const x = prompt("Nome do jogaor.............: ")

    const y = Number(prompt("Idade do jogador..........: "))

    const z = Number(prompt("Valor de mercado R$: "))


    nomeJogador.push(x)

    idades.push(y)

    valores.push(z)



    console.log("Ok! Jogador Inserido no elenco...")

}

function listar() {

    console.log("\nListagem do Elenco de Jogadores")

    console.log("-".repeat(40))



    console.log("\nNº Nome.........: Idade........: Valor de mercado:")

    console.log("----------------------------------------------------")



    for (let i = 0; i < nomeJogador.length; i++) {

        console.log(` ${i + 1} ${nomeJogador[i].padEnd(14)} ${idades[i].toString().padEnd(13)} R$: ${valores[i]}`)

    }

}



function vender() {

    listar()



    console.log("\nVenda de Jogadores")

    console.log("-".repeat(40))



    const numExcluir = Number(prompt("Nº do Jogador a ser vendido (ou 0 para retornar): "))



    if (numExcluir == 0) {

        return

    }



    if (numExcluir > nomeJogador.length) {

        console.log("Erro... número inválido")

        return

    }



    const excluido = nomeJogador.splice(numExcluir - 1, 1)

    idades.splice(numExcluir - 1, 1)

    valores.splice(numExcluir - 1, 1)



    console.log(`Ok! Jogador "${excluido.toString()}" vendido com sucesso...`)

}


function stats() {

    console.log("\nEstatística do Clube")

    console.log("-".repeat(40))



    let soma = 0
    let soma2 = 0

    for (const valor of valores) {

        soma = soma + valor

    }

    for (const idade of idades) {

        soma2 = soma2 + idade

    }


    let num = nomeJogador.length

    const media = soma2 / num

    

    console.log(`Nº de Jogadores Cadastrados..: ${num}`)

    console.log(`Valor total do clube.........: ${soma.toFixed(2)}`)

    console.log(`Média de idade dos jogadores.: ${media.toFixed(1)}`)


}

function pesquisa() {

    console.log("\nPesquisa por Nome do jogador")

    console.log("-".repeat(40))


    const pesq = prompt("Informe o Nome: ").toLowerCase()



    console.log("\nNº Nome.........: Idade........: Valor de mercado:")

    console.log("----------------------------------------------------")



    let existe = 0



    for (let i = 0; i < nomeJogador.length; i++) {

        if (nomeJogador[i].toLowerCase() == pesq) {

            console.log(` ${i + 1} ${nomeJogador[i].padEnd(14)} ${idades[i].toString().padEnd(13)} R$: ${valores[i]}`)

            existe = 1

        }

    }



    if (existe == 0) {

        console.log(`* Obs.: Não há jogadores com esse nome "${pesq}"`)

    }

}

do {

    console.log("\nÁrea de controle do Sport Clube Internacional")

    console.log("-".repeat(40))

    console.log("1. Incluir Jogadores")

    console.log("2. Listar Jogadores")

    console.log("3. Vender jogaores")

    console.log("4. Estatísticas do clube")

    console.log("5. Pesquisar por Jogador")


    const opcao = Number(prompt("Opção: "))

    if (opcao == 1) {

        incluir()

    } else if (opcao == 2) {

        listar()

    } else if (opcao == 3) {

        vender()

    } else if (opcao == 4) {

        stats()

    } 
    else if (opcao == 5) {

        pesquisa()

    }  else if (opcao == 0) {

        break

    } else {

        console.log("Opção Inválida...")

    }

} while (true)