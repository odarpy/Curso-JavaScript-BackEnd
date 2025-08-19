function soma(){
const a = 10;
let b = 20;
return b = a + b;
}

function calculoSalario(salarioBase,adicionalSalario,auxilioAlimentacao){

let salarioFinal = salarioBase + salarioBase*adicionalSalario + auxilioAlimentacao;

return salarioFinal;
}

function imprimaSalario(){
texto = calculoSalario(1000,0.1,500);
document.write(texto);
}

function imprimaSoma(){
texto2 = soma();
document.write(texto2);
}