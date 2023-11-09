/* Sélection de l'input et ajout d'un évenement ".addEventListener" à chaque caractère saisi dans l'input   */
document.querySelector('#cp').addEventListener('input', function () {
    
    /* Contacter le serveur dès que l'utilisateur saisi au moins 5 caractères */
    if (this.value.length == 5){
        
        /* Chargement de la valeur de l'input dans la variable URL avec ${this.value} */    
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,population&format=json&geometry=centre`;
        
        /* Contact du serveur via fetch et formatage de la réponse en JSON */    
        fetch(url)
        .then((response) => response.json()
    
        /* Récupération des données envoyés par le serveur et affichage des données dans la console du navigateur */    
        .then((data) => {
            console.log(data);
        
            /* Affichage des villes sous forme de liste en gras + nombre d'habitants dans la page HTML */
            let affichage = '<ul>';
            for(let ville of data) {
                affichage += `<li><strong>${ville.nom}</strong> - ${ville.population} habitants</li>`
            }
            affichage += '</ul>';
            document.querySelector("#villes").innerHTML = affichage;
        })
        )
        /* Attraper les erreurs éventuelles */
        .catch(err => console.log('Erreur : ' + err));
    }
    
});