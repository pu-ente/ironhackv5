console.log("¡Estoy listo!");

// Iteration 1: Names and Input

let hacker1;
hacker1 = "Josh"
console.log(hacker1);
console.log("El nombre del conductor es", hacker1);

let hacker2;
hacker2 = "Kevin"
console.log(hacker2);
console.log("El nombre del navegante es", hacker2);



// Iteration 2: Conditionals


if(hacker1.length > hacker2.length){
console.log("El conductor tiene el nombre más largo, tiene " + hacker1.length + " caracteres");
}
if(hacker1.length < hacker2.length){
console.log("Parece que el navegante tiene el nombre más largo, tiene " + hacker2.length + " caracteres");
}
if(hacker1.length == hacker2.length){
    console.log("¡Vaya, ambos tienen nombre igual de largos, " + hacker1.length + " caracteres");
}



// Iteration 3: Loops

var name = "John";
name = name.toUpperCase();
var name2 = "";
for(var i = 0; i < name.length; i++){
    if(i === name.length -1){
       name2 += name[i]; 
       continue;
    }
    
    name2 += name[i] + " ";
}
console.log(name2);

var navegante = "Kevin";
var naveganteVerse = "";

for(var i = navegante.length -1; i >= 0; i--){
    naveganteVerse += navegante[i];

}
console.log(naveganteVerse);



if (hacker1 > hacker2){
    console.log("El nombre del conductor va primero");
}

if (hacker1 < hacker2){
    console.log("Yo, el navegador va primero definitivamente");
}

if (hacker1 === hacker2){
    console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}

// Bono 1

let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed metus placerat, blandit turpis pellentesque, dignissim ipsum. Donec a interdum nulla, id ultricies arcu. Fusce congue, sem sed convallis pretium, ante metus efficitur lorem, vitae efficitur nibh ligula id est. Donec semper leo ut velit bibendum, sed convallis nibh luctus. Suspendisse sollicitudin efficitur porttitor. Sed non arcu sit amet est rutrum viverra non eu dolor. Aliquam in nibh interdum, vehicula erat a, dignissim nunc. Nullam efficitur rutrum ante, at blandit nunc ultricies eget. Nunc tempor tellus eget risus finibus, et blandit tellus vulputate. Fusce tempus imperdiet massa ac blandit.In sed convallis sem, ut fermentum erat. Donec sit amet ligula cursus urna tempus dignissim. Suspendisse eu placerat ante. Praesent nec nunc dui. Ut sollicitudin sed risus eget tincidunt. Proin tempor urna turpis, tempor facilisis est tempus nec. Fusce molestie ex a fermentum posuere. Donec diam enim, pretium quis condimentum sit amet, pharetra id justo. Duis sed porttitor lectus. Duis porta porta placerat. Nullam in fermentum dolor. Integer rutrum at velit non venenatis. Aenean sed turpis vitae eros placerat rutrum sed ac nibh. Duis euismod nibh quam. Phasellus at ipsum purus. Nullam eu sodales dui, ullamcorper ornare metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ac ante ut tellus dictum finibus. Sed et justo mollis justo placerat suscipit vitae quis lorem. Maecenas mattis, nunc in fringilla auctor, ipsum mauris congue sapien, non varius massa eros quis neque."

console.log(string.length);

let contador = string.split(' ').length;
console.log("La cadena consta de " + contador + " palabras")



function countRepeatedWords(sentence) {
  let string = sentence.split(" ");
  let wordMap = {};

  for (let i = 0; i < string.length; i++) {
    let currentWordCount = wordMap[string[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[string[i]] = count + 1;
  }
  return wordMap;
}

console.log(countRepeatedWords(string));

