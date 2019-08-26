function funcao(){
    var i
    var vet = []
    var salario = []
    var idade = []
    var sexo =[]
    var nfilho = []

    for (var i=0;i<20;i++){
        var objeto = {}
        //coloca dados no objeto
        objeto.salario = Number(prompt("Salario"))
        objeto.sexo = (prompt("Sexo"))
        objeto.idade = Number(prompt("Idade"))
        objeto.nfilho = Number(prompt("Número de Filhos"))
        //coloca objeto no vetor
        vet.push(objeto)
    }
    //calcula média de salário
    var somaSalario = 0
    var somaFilhos = 0
    var maiorSalario = vet[0].salario
    var qtde = 0
   for (var i=0;i<vet.length;i++) {
    somaSalario = somaSalario + vet[i].salario
    somaFilhos = somaFilhos + vet[i].nfilho
    if (vet[i].salario > maiorSalario){
        maiorSalario = vet[i].salario
    }
    if ((vet[i].sexo == 'F') && (vet[i].salario > 1000)){
        qtde++;
    }
   }
   alert("Média salarial" + somaSalario/vet.length)
   alert("Média de filhos" + somaFilhos/vet.length)
   alert("Maior salarial" + maiorSalario)
   alert("Percentual" + qtde/3*100);
}
