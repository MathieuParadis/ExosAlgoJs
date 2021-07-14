// Avec une liste de nombres entiers relatifs et un nombre k, 
// crée une méthode retournant un booléen qui affiche si deux nombres de 
// cette liste ont k comme résultat de leur somme.

// Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, 
// la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, 
// la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

// Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste.

const compareSum5 = (array, k) => {

  array = array.sort();
  let i = 0;
  let j = array.length - 1;
    
  while(i < array.length && j >= 0) {
    if (array[i] + array[j] == k) {
      return true
    } else if (array[i] + array[j] > k) {
      j--;
    } else {
      i++;
    }
  }
  return false  
}

const list = [10, 15, 3, 7];
const k = 17;
const l = 19;

console.log(compareSum5(list, k));
console.log(compareSum5(list, l));

