// Avec une liste de nombres entiers relatifs et un nombre k, 
// crée une méthode retournant un booléen qui affiche si deux nombres de 
// cette liste ont k comme résultat de leur somme.

// Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, 
// la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, 
// la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

// Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir 
// plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

const compareSum31 = (array, k) => {
  let i = 0;
  let j = i + 1;

  while(i < array.length && j < array.length) {
    if (array[i] + array[j] == k) {
      return true
    } else if (j == array.length - 1) {
      i += 1;
      j = i + 1;
    } else {
      j += 1;
    }
  }
  return false
}


const compareSum32 = (array, k, count) => {
  let current = array[count];
  count = count + 1;

  if (count >= array.length) {
    return false 
  } else {
    for (let i = count; i < array.length; i++) {
      if ((current + array[i]) == k ) {
        return true
      }
    }
    return compareSum32(array, k, count);
  }
}


const list = [10, 15, 3, 7];
const k = 17;
const l = 19;

console.log(compareSum31(list, k));
console.log(compareSum31(list, l));

console.log(compareSum32(list, k, 0));
console.log(compareSum32(list, l, 0));
