document.querySelector('#cp').addEventListener('input', function () {
    if (this.value.length == 5){
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPostaux,codeDepartement,population&format=json&geometry=centre`;
        fetch(url).then((response) => response.json().then((data) => console.log(data)));
    }
    
});