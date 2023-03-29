let querCoxinha = prompt("Quer mais coxinha? Insira S ou sim caso queira")
let conta = 2.5

while(querCoxinha === "sim" || querCoxinha === "S") {
    querCoxinha = prompt("Quer mais coxinha? Insira S ou sim caso queira")
    
    conta += 2.50
}

console.log(`Está satisfeito? Sua conta deu R$: ${conta.toFixed(2)}`)

