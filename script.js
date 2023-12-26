class heroi {
    constructor(nome, idade, tipo){
       this.nome = nome
       this.idade = idade
       this.tipo = tipo
   }  

   atacar(){
       if(this.tipo === "mago"){
               console.log("O " + this.tipo + " usou MAGIA")
           } else if(this.tipo === "guerreiro") {
               console.log("O " + this.tipo + " usou ESPADA")
           } else if(this.tipo === "monge") {
               console.log("O " + this.tipo + " usou ARTES MARCIAIS")
           } else if(this.tipo === "ninja") {
           console.log("O " + this.tipo + " usou SHURIKEN")
       }
   }
}

let novoHeroi = new heroi("Harry Potter" , 18 , "guerreiro")
novoHeroi.atacar();