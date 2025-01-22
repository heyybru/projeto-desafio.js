//1️⃣ Desafio Classificador de nível de Herói

// Definição de variaveis (inputs)
let herois = [
    {nome: "Batman", xp: 1000},
    {nome: "Mulher Maravilha", xp: 9001},
    {nome: "Superman", xp: 10001},
    {nome: "Lanterna Verde", xp: 5000},
    {nome: "Aquaman", xp: 8000},
    {nome: "Mulher Gavião", xp: 7000},
    {nome: "Flash", xp: 8001},
    {nome: "Marciano", xp: 9001}
];

for (let i = 0; i < herois.length; i++) {
     let heroi = herois[i];
    
    // Condição para classificar o nível dos heróis (process)
    if (heroi.xp <= 1000) {
        console.log("O Herói " + heroi.nome + " está no nível de Ferro");
    } else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
        console.log("O Herói " + heroi.nome + " está no nível de Bronze");
    } else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
        console.log("O Herói " + heroi.nome + " está no nível de Prata");
    } else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
        console.log("O Herói " + heroi.nome + " está no nível de Ouro");
    } else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
        console.log("O Herói " + heroi.nome + " está no nível de Platina");
    } else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
        console.log("O Herói " + heroi.nome + " está no nível de Ascendente");
    } else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
        console.log("O Herói " + heroi.nome + " está no nível de Imortal");
    } else if (heroi.xp >= 10001) {
        console.log("O Herói " + heroi.nome + " está no nível de Radiante");
    } else {
        console.log("O Herói " + heroi.nome + " não tem nível definido");
    }
    
    // Output
    console.log("XP do herói: " + heroi.xp);
}

