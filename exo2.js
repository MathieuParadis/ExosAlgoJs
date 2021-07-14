// Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. 
// Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins 
// un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

// Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles 
// ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 
// puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

// Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément 
// entre eux à l'aide de 2 boucles imbriquées.

const countWest2 = (array) => {
  let count = 0;
  for (let i = 0; i < array.length; i++){
    let temp_count = 0;

    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp_count += 1;
      }
    }

    if (temp_count == array.length - (i+1)) {
      count += 1;
    }
  }
  return count;
}

const list1 = [3, 7, 8, 3, 6, 1];
const list2 = [1, 4, 5, 8];

console.log(countWest2(list1, 0, 0));
console.log(countWest2(list2, 0, 0));

