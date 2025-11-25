// === 3.1 Sistema de Cadastros ===
console.log("--- 3.1 Herança ---");
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    exibirInfo() {
        console.log(`User: ${this.nome} (${this.email})`);
    }
}

class Administrador extends Usuario {
    constructor(nome, email, nivel) {
        super(nome, email);
        this.nivel = nivel;
    }
    exibirInfo() {
        super.exibirInfo();
        console.log(`Nível: ${this.nivel}`);
    }
}

const admin = new Administrador("Ana", "ana@adm.com", "Chefe");
admin.exibirInfo();


// === 3.2 Conta Bancária (Private Fields) ===
console.log("\n--- 3.2 Encapsulamento (#) ---");
class ContaBancaria {
    #saldo = 0; // Campo privado

    depositar(valor) {
        this.#saldo += valor;
    }
    consultarSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria();
conta.depositar(100);
console.log("Saldo:", conta.consultarSaldo());

try {
    // Isso vai dar erro de sintaxe se descomentado, pois é privado
    // conta.#saldo = 5000; 
    console.log("Acesso direto bloqueado com sucesso.");
} catch (e) {
    console.log("Erro capturado.");
}