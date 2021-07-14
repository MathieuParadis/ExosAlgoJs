// Avec une liste de nombres entiers relatifs et un nombre k, 
// crée une méthode retournant un booléen qui affiche si deux nombres de 
// cette liste ont k comme résultat de leur somme.

// Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, 
// la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, 
// la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

// Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer 
// chaque élément entre eux à l'aide de 2 boucles imbriquées.

const compareSum1 = (array, k) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if ((array[i] + array[j]) == k) {
        return true
      }
    }
    return false
  }
}

const list = [10, 15, 3, 7];
const k = 17;
const l = 19;

console.log(compareSum1(list, k));
console.log(compareSum1(list, l));

