function searchChar() {

    let $inputName = document.getElementById('charName')

    axios.get('https://rickandmortyapi.com/api/character/?name=' + $inputName.value)
        .then(response => showData(response.data))
        .catch()

    event.preventDefault();
}

function showData(name) {
    let $sectionName = document.querySelector('.resultsSection');
    let $listUl = document.querySelector('.charList');

    $listUl.innerHTML = ''

    for (var i = 0; i < name.results.length; i++) {
        let $charElement = document.createElement('li');
        $charElement.className = 'results'

        $charElement.innerHTML = `
            <p><b>Name</b>: ${name.results[i].name}</p>
            <p><b>Status</b>: ${name.results[i].status}</p>
            <p><b>Origin</b>: ${name.results[i].origin.name}</p>
            <p><b>Species</b>: ${name.results[i].species}</p>           
            <img src="${name.results[i].image}">

        `

        $listUl.appendChild($charElement)
    }

    $sectionName.appendChild($listUl)

}
