
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
// */
// let Wert1,Summe,Wert2;
// Wert1 = prompt("Bitte ersten Wert eintragen");
// Wert2 = prompt("Bitte zweiten Wert eintragen");
// Summe = Number(Wert1 - - Wert2)


// console.log("Die Summe der Zahlen ist:" , Summe);

//Schmidtis Ansatz

// Vorteile: gute Lesbarkeit | aber viele Variablen

// Deklaration

let ziffer1, ziffer2;
let zahl1, zahl2, summe;

// Eingabe : Ziffern
ziffer1 = prompt("Bitte Zahl 1 eingeben"); // 2
ziffer2 = prompt("Bitte Zahl 2 eingeben"); // 2
console.log(typeof zahl1);
console.log(typeof zahl2);

//console.log(ziffer1 + ziffer2); da werden zahlen nebeneinander gestellt

//Typenkonvertierung | Ziffer --> Zahl (string --> number)
zahl1 = parseInt(ziffer1);
zahl2 = praseInt(ziffer2);
console.log(typeof zahl1);
console.log(typeof zahl2);

//Berechnung : Summe
summe = zahl1 + zahl2;
console.log("Die Summe ist: " + summe);