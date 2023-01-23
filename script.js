window.onload = function() { 

    // JUMBO / BOITE MODALE 1
    
    let dateNews1 = document.getElementById('dateNews1')
    let jumbo1P = document.getElementById('jumbo1P')

    let imgJumbo1 = document.getElementById('imgJumbo1')
    let auteur1 = document.getElementById('auteur1')
    let date1 = document.getElementById('date1')
    let texteBM1 = document.getElementById('texteBM1')
    let modalTitle = document.getElementById('modalTitle')

    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
        .then(res => {
            console.log(res);

            if(res.ok){
                res.json().then(data => {
                    // contenu des jombotrons "dernières news"
                    dateNews1.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    jumbo1P.innerHTML = data.content[0]
                    console.log(data)
                    // contenu de la boîte modale
                    modalTitle.innerHTML = data.title
                    imgJumbo1.src = data.picture 
                    auteur1.innerHTML = `${data.author.name} ${data.author.surname}` 
                    date1.innerHTML =  `${data.date.day} ${data.date.month} ${data.date.year}`
                    texteBM1.innerHTML = data.content[0]
                })
            } else {
                console.log('ERREUR D\'API');
                res.json().then(data => console.log(data))
            }
        })

    // JUMBO / BOITE MODALE 2

    let dateNews2 = document.getElementById('dateNews2')
    let jumbo2P = document.getElementById('jumbo2P')

    let imgJumbo2 = document.getElementById('imgJumbo2')
    let auteur2 = document.getElementById('auteur2')
    let date2 = document.getElementById('date2')
    let texteBM2 = document.getElementById('texteBM2')
    let modalTitle2 = document.getElementById('modalTitle2')

    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=2')
        .then(res => {
            console.log(res);

            if(res.ok){
                res.json().then(data => {
                    // contenu des jombotrons "dernières news"
                    dateNews2.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    jumbo2P.innerHTML = data.content[0]

                    // contenu de la boîte modale 2
                    modalTitle2.innerHTML = data.title
                    imgJumbo2.src = data.picture 
                    auteur2.innerHTML = `${data.author.name} ${data.author.surname}` 
                    date2.innerHTML =  `${data.date.day} ${data.date.month} ${data.date.year}`
                    texteBM2.innerHTML = data.content[0]
                })
            } else {
                console.log('ERREUR D\'API');
            }
        })

};

// window.onload = function() { 

//     function fetchAndUpdate(articleNum, dateNews, jumboP, imgJumbo, auteur, date, texteBM, modalTitle) {
//         fetch(`https://www.tbads.eu/greta/kercode/ajax/?article=${articleNum}`)
//             .then(res => {
//                 if(res.ok){
//                     res.json().then(data => {
//                         dateNews.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
//                         jumboP.innerHTML = data.content[0]
//                         modalTitle.innerHTML = data.title
//                         imgJumbo.src = data.picture 
//                         auteur.innerHTML = `${data.author.name} ${data.author.surname}` 
//                         date.innerHTML =  `${data.date.day} ${data.date.month} ${data.date.year}`
//                         texteBM.innerHTML = data.content[0]
//                     })
//                 } else {
//                     console.log('ERREUR D\'API');
//                 }
//             })
//     }

//     fetchAndUpdate(1, 
//         document.getElementById('dateNews1'), 
//         document.getElementById('jumbo1P'), 
//         document.getElementById('imgJumbo1'), 
//         document.getElementById('auteur1'), 
//         document.getElementById('date1'), 
//         document.getElementById('texteBM1'), 
//         document.getElementById('modalTitle')
//     );

//     fetchAndUpdate(2, 
//         document.getElementById('dateNews2'), 
//         document.getElementById('jumbo2P'), 
//         document.getElementById('imgJumbo2'), 
//         document.getElementById('auteur2'), 
//         document.getElementById('date2'), 
//         document.getElementById('texteBM2'), 
//         document.getElementById('modalTitle2')
//     );
// };

// Voici une explication étape par étape du code refactorisé:

//     Le code est enveloppé dans une fonction anonyme qui est exécutée lorsque la page est entièrement chargée.
//     À l'intérieur de la fonction, une nouvelle fonction nommée fetchAndUpdate est définie. Cette fonction prend en compte plusieurs paramètres:
//         articleNum: le numéro de l'article à récupérer à partir de l'API.
//         dateNews, jumboP, imgJumbo, auteur, date, texteBM, modalTitle: ce sont les éléments du DOM qui seront mis à jour avec les données de l'API.
//     La fonction fetchAndUpdate utilise la méthode fetch pour effectuer une demande GET à l'API avec le articleNum passé en tant que paramètre de requête.
//     Une fois la demande fetch terminée, l'objet res est vérifié pour voir si la demande a réussi (code de statut 200) avec res.ok.
//     Si la demande est réussie, la méthode json() de l'objet res est appelée pour analyser les données de la réponse en tant qu'objet JSON. Ensuite, data est passé à une fonction interne où les éléments DOM passés dans les paramètres de la fonction sont mis à jour avec les données.
//     Si la demande n'est pas réussie, un message 'ERREUR D'API' s'affiche dans la console.
//     Après la définition de la fonction fetchAndUpdate, elle est appelée deux fois, une fois avec le paramètre 1 pour le premier article et une fois avec le paramètre 2 pour le deuxième article.
//     À chaque fois que la fonction est appelée, les éléments DOM qui seront mis à jour avec les données de l'API sont passés en tant qu'arguments.

// Le code effectue deux requêtes GET à l'API, une avec le paramètre 'article=1' et une autre avec 'article=2'
// Il met ensuite à jour le contenu des éléments DOM avec les données retournées par les requêtes API.

// Dans la version originale du code, cette logique était dupliquée pour chaque article, ce qui rendait difficile à maintenir et à évoluer. En extrayant la logique commune dans une fonction séparée, il est maintenant beaucoup plus facile d'ajouter ou de supprimer des articles de la page sans avoir à dupliquer la même logique encore et encore.
