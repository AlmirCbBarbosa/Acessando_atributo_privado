
import {Cliente} from "./Cliente.js" // tem que importar para para que a classe Cliente sege reconhida pela classe ContaCorrente.

export class ContaCorrente{
    agencia;
    _cliente;

    set cliente(novoValor)
    {
        if(novoValor instanceof Cliente)  //deixa atribuir um valor cliente se ele for da classe Cliente
        {
            this._cliente = novoValor;
        }       
        
    }


     // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;
    
    get saldo() // este acesso faz com que esta variável não possa sofrer atribuição direta no programa, apenas atraves de métodos da classe, mas não impede que tenha acesso de seu valor para printar.
    {
        return this._saldo; 
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}
