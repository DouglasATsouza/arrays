const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
];

//01.
const pessoasTotal = data.filter((nome) => 
   nome = true
)
console.log(pessoasTotal.length);

//02.
const pessoasFemininas = data.filter((genero) => 
   genero.sexo == 'F'
)
console.log(pessoasFemininas.length);

//03
const somaSalario = data.reduce((salarioA, salarioB) =>{
    return salarioA + salarioB.salario
},0)
console.log(somaSalario.toFixed(2))

//04
let somaSalarioFeminino = pessoasFemininas.reduce((salarioA, salarioB) =>{
    return salarioA + salarioB.salario
},0)
console.log(somaSalarioFeminino.toFixed(2))

//05
const salarioEncontrado = data.find((a)=>{
    return a.salario > 7000;
})
function some(){
    salarioEncontrado == 0 ? console.log("Falso") : console.log("Verdadeiro")
}
some();
//06
const localizaEva = data.findIndex(eva => eva.nome == "Eva Trindade");
console.log(localizaEva)

//07
console.log(data.filter((pessoa, index) => {
    return pessoa.nome.indexOf('Silva') !== -1
}));

//08

const todosNomes = data.map(name => name.nome)
console.log(todosNomes);