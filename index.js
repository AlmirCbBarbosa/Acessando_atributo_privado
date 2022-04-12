import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//iniciando e colocando valores na classe Clientes
const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

//iniciando e atribuindo valores à clase ContaCorrente
const conta2 = new ContaCorrente();

//conta2.cliente = 0; //como o valor colocado não é a classe cliente, no console o valor de conta.cliente será "undefined"

conta2.cliente = cliente2; // como o valor colocado é a classe cliente aparecera o valores da classe

conta2.agencia = 102;

conta2.depositar(100);// depositando 100 reais na conta2.

conta2.saldo = 1000; // não aceitara a atribuição direta pois é o nome de um "getter";

console.log(conta2.saldo);




