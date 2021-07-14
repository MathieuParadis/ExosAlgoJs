// Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. 
// Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins 
// un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

// Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles 
// ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 
// puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

// Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste.

const countWest6 = (array) => {
  let count = 1;

  if (array.length == 1) {
    return count;
  } else {
    let max = array[array.length-1];

    for (let i = array.length-2; i >= 0; i--) {
      if (array[i] > max) {
        count += 1;
        max = array[i];
      }
    }
    return count;
  }
}

const list1 = [3, 7, 8, 3, 6, 1];
const list2 = [1, 4, 5, 8];

console.log(countWest6(list1));
console.log(countWest6(list2));

