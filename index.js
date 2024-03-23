const cats = ["Milo", "Otis", "Garfield" ]

function destructivelyAppendCat (name) {
    cats.push("Ralph");
    
}

function destructivelyRemoveLastCat(){
    cats.pop();
}


function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  
  function appendCat(name) {
    return cats.concat(["Broom"]);
  }
  
  function prependCat(name) {
    return [name, ...cats];
  }
  
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  
  function removeFirstCat() {
    return cats.slice(1);
  }
  
  