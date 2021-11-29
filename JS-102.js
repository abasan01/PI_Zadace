let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka = "Čestitam!";

if (bodovi<50) ocjena = 1;
if (bodovi>49 && bodovi <61) ocjena = 2;
if (bodovi>60 && bodovi <71) ocjena = 3;
if (bodovi>70 && bodovi <86) ocjena = 4;
if (bodovi>85) ocjena = 5;


if (ocjena > 1) console.log(poruka +'\nOcjena: ' +ocjena);