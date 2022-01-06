const istiZnakovi = function (konac){

    let y = 0;
    let x;

    for (let number = 0; number < konac.length; number = number + 1) {

        let pom = konac[number];
      
        x = 0;
            
            for (let number = 0; number < konac.length; number = number + 1) {
    
                if (pom == konac[number]) x = x + 1;
                               
        }

        if (x > y) y = x;
        
    }

    return y;

}

console.log(istiZnakovi("baaaccd"));
console.log(istiZnakovi("ba2dll"));