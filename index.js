// Write your solution here!
const cats=["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
cats.splice(cats.length,0,name);
}

function destructivelyPrependCat(name){
cats.splice(0,0,name);
}

function  destructivelyRemoveLastCat(){
    cats.splice(cats.length-1,1);
}

function destructivelyRemoveFirstCat(){
    cats.splice(0,1);
}

function appendCat(name){
    const caty=[...cats,name];
    return caty;
}
function prependCat(name){
   const caty2=[name,...cats];
   return caty2;
}

function removeLastCat(){
    const caty3=cats.slice(0,-1);
    return caty3;
}
function removeFirstCat() {
    const caty4=[...cats];
    return caty4.slice(1);
}