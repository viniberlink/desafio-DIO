let saldoRanqueadas = calcularPartidasRanqueadas(200, 115);

function calcularPartidasRanqueadas(vitorias, derrotas) {
    let somatorio = vitorias - derrotas;
    return somatorio;
}

if(saldoRanqueadas < 10){
    console.log("O Herói tem um win rate de: " + saldoRanqueadas + " vitórias. " +  "está no nível de Ferro.")
} else if(saldoRanqueadas === 11 || saldoRanqueadas <= 20){
    console.log("O Herói tem um win rate de: " + saldoRanqueadas + " vitórias. " +  "Está no nível de Bronze.")
}else if(saldoRanqueadas === 21 || saldoRanqueadas <= 50){
    console.log("O Herói tem um win rate de: " + saldoRanqueadas + " vitórias. " +  "Está no nível de Prata.")
}else if(saldoRanqueadas === 51 || saldoRanqueadas <= 80){
    console.log("O Herói tem um win rate de: " + saldoRanqueadas + " vitórias. " +  "Está no nível de Ouro.")
}else if(saldoRanqueadas === 81 || saldoRanqueadas <= 90){
    console.log("O Herói tem um win rate de: " + saldoRanqueadas + " vitórias. " +  "Está no nível de Diamante")
}else if(saldoRanqueadas === 91 || saldoRanqueadas <= 100){
    console.log("O Herói tem um win rate de: " + saldoRanqueadas + " vitórias. " +  "Está no nível de Lendário.")
}else if(saldoRanqueadas >= 101){
    console.log("O Herói tem um win rate de: " + saldoRanqueadas + " vitórias. " +  "Está no nível de Imortal.")
}