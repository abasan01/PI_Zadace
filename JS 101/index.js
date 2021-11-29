const http = require('https');

const hostname = '127.0.0.1'
const port = 3000;



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World!');
    
});

server.listen(port, hostname, () => {

    let total = 0;
    let count = 1;
    var n = 1000; //1. Prvi zadatak varijabla
    console.log('Varijabla: '+n);
  
    while (n!=0) {
        total += count;
        count += 1;
        n -= 1;
    }
  
    console.log('Suma zbrajanja: '+total);

    var x = 5;

    console.log('Zbroj prvih '+x +' brojeva = ' +((x/2)*(1+x)));
    
});

