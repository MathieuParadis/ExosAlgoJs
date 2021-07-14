// Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. 
// Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins 
// un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

// Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles 
// ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 
// puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

// Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme 
// pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

const countWest4 = (array, start, count) => {
  let max = array[start];

  if (start == array.length-1) {
    count += 1;
    return count
  } else {
    for (let i = start+1; i < array.length; i++) {
      if (array[i] > max) {
        start = i;
        return countWest4(array, start, count)
      }
    }
    count += 1;
    start += 1;
    return countWest4(array, start, count)
  }
}


const list1 = [3, 7, 8, 3, 6, 1];
const list2 = [1, 4, 5, 8];

console.log(countWest4(list1, 0, 0));
console.log(countWest4(list2, 0, 0));


