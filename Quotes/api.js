const url = "https://api.adviceslip.com/advice";

/* Envoi de la requête HTTP GET pour récupérer les données de l'API via "fetch" */
fetch(url)

/* Convertir les données de la réponse en un objet JSON  */
.then(response => response.json())

/* Affichage d'un conseil aléatoir dans la page HTML */
.then(data => {

    /* Création d'une variable "adviceElement" dans laquelle je crée un élément de type "p"  */
    let adviceElement = document.createElement("p");

    /* Insertion du conseil aléatoir dans le nouvel élément de type "p" */
    adviceElement.innerHTML = `Conseil du jour : "${data.slip.advice}"`;

    /* Insertion de la variable "adviceElement qui contient un paragraphe dans le body afin d'afficher les conseils à l'écran */
    document.body.appendChild(adviceElement)
})

