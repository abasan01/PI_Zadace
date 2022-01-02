let velicina;
velicina = prompt("Upišite veličinu šahovnice: ");
let lojtre = "";
let pomocna = 0;

for (let number = 0; number <= velicina; number = number + 1) {
    
    for (let number = 0; number <= velicina; number = number + 1) {
    
        if((number + pomocna%2)%2==0) lojtre = lojtre + "#";
    
        else lojtre = lojtre + " ";
    }
    
    lojtre = lojtre + "\n"
    pomocna = pomocna + 1;
}

console.log(lojtre)