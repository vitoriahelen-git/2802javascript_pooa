//verificar o valor de n se for negativo, chamar reject passando texto "somente positivos" como parametro para ela 
//caso contrário, continuar fazendo oq ja faz
function calculoDemorado(n){
    let p = new Promise(function(resolve, reject){
        if(n < 0){
            reject ('Somente positivos')
        }
        else{
            let res = 0 
            for(let i = 1; i<=n; i++) res += i
            resolve(res)
        }
        return p
    })
}

calculoDemorado(-5)
.then(res=>{
    console.log(res)
    calculoDemorado(6)
    .then(res =>{
        console.log(res)
        calculoDemorado(7)
        .then(res => console.log(res))
    })
})
.catch(erro => console.log('Erro: ' + erro))


// function calculoRapidinho(n){
//     return Promise.resolve((n/2) * (n+1))
// }

// //calculoRapidinho(n: any): Promise<number>
// calculoRapidinho(100).then(resultado => console.log(resultado))


// function calculoDemorado(n){
//     let p = new Promise(function(resolve, reject){
//         let res = 0 
//         for(let i = 1; i<=n; i++) res += i
//         resolve(res)
//     })
//     return p
// }

// let minhaPromise = calculoDemorado(100)
// minhaPromise.then((resultado) => console.log(resultado))

// function calculoDemorado(n){
//     let res = 0
//     for(let i = 0; i<=n; i++) res += i
//     return res
// }

// const resultado = calculoDemorado(100)
// console.log(resultado)
// console.log('outra coisa qualquer')


//1 + 2 + 3 + ....... + n - 2 + n - 1 + n
// const soma = (a,b) => {
//     let p = new Promise((resolve, reject) => {
//         //se a e b forem positivos
//         //chamar resolve passando a + b como parametro 
//         //caso contario chamar reject passando texto "nao use negativos" como parametros
//         if(a > 0 && b > 0)
//             resolve(a + b)
//         else
//             reject('Nao use negativo')
//     })
//     return p
// }


// soma(2,7).then(res => {
//     console.log(`Resultado: ${res}`)
// })
// .catch(erro => console.log(`Erro: ${erro}`))

// soma(-2,7)
// .then(res => console.log(`Resultado: ${res}`))
// .catch(erro => console.log(`Erro: ${erro}`))
 
// const calculoDemorado = (n) => {
//     let p = new Promise((resolve, reject) => {
//         let res = 0
//         for(let i = 1; i <= n; i++)
//             res += i
//         resolve(res)
//     })
//     return p 
// }

// const aux = calculoDemorado(3)
// aux.then((resultado) => {
//     console.log(resultado)
// })


// const fs = require('fs')
// const abrirArquivo = (nomeArquivo) => {
//     const exibirConteudo = (erro, conteudo) =>{
//         if(erro){
//             console.log(`Erro: ${erro}`)
//         }
//         else{
//             console.log(conteudo.toString())
//             const resultado = conteudo.toString() * 10
//             const finalizar = (erro) => {
//                 if(!erro){
//                     console.log('Conteudo escrito com sucesso')
//                 }
//                 else{
//                     console.log('Escrita falhou')
//                 }
//             }
//             fs.writeFile('resultado.txt', resultado.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo('arquivo.txt')


// function demorada(){
//     //pegar o horario atual do sistema , e decolar ele de 2 segundos no futuro
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos); 
//     const d = 8 + 4
//     return d 
// } 

// const a = 2  + 5
// const b = 5 + 9
// setTimeout(function(){
//     const d = demorada()
//     console.log(d)
// }, 500)

// const e = 2 + a + b
// console.log('e: ' + e)  


// function demorada(){
//     //pegar o horario atual do sistema , e decolar ele de 2 segundos no futuro
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos); 
//     const d = 8 + 4
//     return d 
// }
// const a = 2 + 7
// const b = 5
// console.log(a+ b)


// console.log('Eu primeiro')
// console.log('Agora eu')
// console.log('Sempre vou ser a ultima...:(')


//CALCULADORA QUE FAZ SOMA E SUB CADA OPERACAO ENVOLVE DOIS OPERANDOS
// let calculadora = {
//     soma: (a, b) => a+b, //arrowfuncion
//     subtacao: function(a,b){ //funcicion
//         return(a-b)
//     }
// }



// let concessionaria = {
//     CNPJ: '123456789101',
//     endereco: {
//         logradouro: 'Rua J', 
//         numero: '22',
//     }, 
//     carros: [
//         {
//             marca: 'Ford',
//             modelo: 'Fiesta',
//             ano: '2015'
//         }, 
//         {
//             marca: 'VW',
//             modelo: 'Fusca',
//             ano: '1975'
//         }, 
//     ]   
// }

// console.log(concessionaria.carros[1].marca)

// for(let carro of concessionaria.carros){
//     console.log(`Marca: ${carro.marca}. Modelo:${carro.modelo}`)
// }

// let pessoa = {
//     nome: 'Maria', 
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 14
//     }
// }
// console.log(pessoa.nome, pessoa.idade, pessoa.endereco.logradouro)


// let pessoa = {
//     nome: 'Joao',
//     idade: 17
// }
// //. e [] para acessar membros
// console.log(pessoa.nome, pessoa.idade)
// console.log(pessoa['idade'])



// const app = express()

// app.get('/livors', () => {

// })

// function f(){}  

// () => {}

// a => {return a * 2}
// a => a * 2 

// function f (a){
//     return a * 2
// }

// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//         cont++
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     return {f1, f2}
// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()
// eAgoraResult.f1()


// function saudacoes(saudacoes, nome){
//     return function(){
//         console.log(`${saudacoes}, ${nome}`)
//     }
// }

// let olaJoao = saudacoesFactory('Ola', 'Joao')
// let tchauJoao = saudacoesFactory('Tchau', 'Joao')
// olaJoao()
// tchauJoao()


// function ola(){
//     let nome = 'Joao'
//     return function(){
//         console.log(`Olá, ${nome}`)
//     }
// }

// let olaResult = ola()
// olaResult()


// function f(){
//     let nome = 'Joao'
//     function g(){
//         console.log(nome) 
//     }
//     g()
// }
// f()

// let UmaFuncao = function (){
//     console.log ("Fui armazenada em uma variavel")
// }
// UmaFuncao()

// function f(funcao){
//     funcao(f)
// }

// function g(){
//     function outraFuncao(){
//         console,log("Fui definida por g")
//     }
//     return outraFuncao
// }

// function f(funcao){
//     return funcao() //g
// }

// function g(){
//     function outraFuncao(){
//         console.log ("Fui definida g")
//         return () => {2} 
//     }
//     return outraFuncao()
// }

//f(g())
//console.log(f(g)()) + (f(g)())

// f(function(){
//     console.log("Estoy sendo passada para f...")
// })

// const resultadoDaG = g()
// resultadoDaG()
// g()()   




// function produzUmaFuncao(a, b, operador){
//     if(operador === '+')
//         return function(a, b){
//             a + b
//         }
//     if(operador === '-')
//         return (a, b) => a - b
// }
    
    
//comentario 



// function executa(f){
//     f()
// }
// executa(function(a, b){return a + b})



// public class Teste{
//     public void m(){

//     }
//     public void testando(){
//         var meuMetodo = m;
//     }
// }


//funções 
// function f3(){

// }
// console.log(f3())

// const hello = () => console.log("Hello")
// hello()
// const dobro = (valor) => valor * 2

// let triplo = (valor) => {
//     return valor * 3
// }

// const ehPar = n=> {n%2 === 0}
// console.log(ehPar(10))

// const ehPar2 = n=> n%2 === 0
// console.log(ehPar2(10))

// const f = () => {}
// const umArgumento = n => {
//     console.log(n)
// }

// const soUmaLinha = () => console.log("Oi")

// const teste1 = (a, b) => {
//     return a + b; 
// }

//const teste2 = (a, b) => a + b
// const dobro = function(n){
//     return 2 * n
// }

// const result =  dobro(6)
// console.log(result)

// const triplo = function(n=5){
//     return 3 * n
// }

// console.log(triplo())
// console.log(triplo(10))

//funcao 
// function hello(){
//     console.log('oi')
// }
// hello('oi')
// function hello(nome){
//     console.log('oi, ' + nome)
// }
// hello('Rodrigo')
    

// v1 = []
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = 2 
// console.log(v1.length)
// v1[2] = 'abc'
// console.log(v1.length)
// for(let i = 0; i < v1.length; i++){
//     console.log(v1[i])
// }


// console.log([] == [])
// console.log([] == false)
// console.log(null == undefined)
// console.log(null == null)
// console.log(21 == [2, 1])
// console.log(1 == [21])
// console.log(1 == [2, 1])
// console.log(1 == [1, 2])
// console.log(1 == [2])
// console.log(1 == [1])
// console.log(1 == true)
// console.log(1 === '1')
// console.log(1 == 1)
// console.log(1 == '1')
// console.log(1 === 1)


// const n1 = 2 
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)
// // coerção explicita
// const n4 = n1 + Number(n2)
// console.log(n4)

// var idade = 18  
// console.log(`Oi, ${nome}`)
// if(idade>=18){
//     var nome = 'João'  
//     console.log(`Parabéns, ${nome}. Voce pode dirigir`) 
// }
// console.log(`Até mais, ${nome}`)


// var linguagem = "JavaScript"
// console.log(`Aprendendo ${linguagem}`)
// var linguagem = "Java"
// console.log(`Aprendendo ${linguagem}`)


// let nome = "Vitoria"
// console.log(nome)
// nome = "Pedro"
// console.log(nome)

// let a = 2 
// console.log(typeof(a))
// a = "abc"
// console.log(typeof(a))
// a = true 
// console.log(typeof(a))


// const nome = "José"
// console.log(nome)
// //nome = "Pedro"
// const endereco =  'Rua B, 21'
// console.log(endereco)
// const sobrenome = `Veloso`
// console.log(sobrenome)
// //Me chamo Vitoria. Meu sobrenome 
// console.log('Me chamo' + nome + '. Meu sobrenome é' + sobrenome)
// console.log(`Me chamo ${nome}. Meu sobrenome é ${sobrenome}.`)
// const idade = 22 
// const passei