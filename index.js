
const app = express()

app.get('/livors', () => {

})

function f(){}  

() => {}

a => {return a * 2}
a => a * 2 

function f (a){
    return a * 2
}

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