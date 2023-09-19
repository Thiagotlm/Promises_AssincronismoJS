/*
const promessaDeUmNumeroQualquer = new Promisse ((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
})

promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('finalizou')
    })
*/

//lendo o arquivo csv

//const fs = require('fs')
//const path = require('path')

//const filePath = path.resolve(__dirname, 'tarefas.csv')

//const promessaDaLeituraDoArquivo = fs.promises.readfile('tarefas.csv')

//promessaDaLeituraDoArquivo
//    .then((arquivo) => arquivo.toString('utf8'))
//    .then((texto) => console.log(texto.split('\n').slice(1)))
//    .catch((error) => console.log('Deu ruim', error))

//Async e Await

const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('finalizou!')
    }
}
buscarArquivo()