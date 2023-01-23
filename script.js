// window.onload = function() { 

//     // JUMBO / BOITE MODALE 1
    
//     let dateNews1 = document.getElementById('dateNews1')
//     let jumbo1P = document.getElementById('jumbo1P')

//     let imgJumbo1 = document.getElementById('imgJumbo1')
//     let auteur1 = document.getElementById('auteur1')
//     let date1 = document.getElementById('date1')
//     let texteBM1 = document.getElementById('texteBM1')
//     let modalTitle = document.getElementById('modalTitle')

//     fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
//         .then(res => {
//             console.log(res);

//             if(res.ok){
//                 res.json().then(data => {
//                     // contenu des jombotrons "dernières news"
//                     dateNews1.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
//                     jumbo1P.innerHTML = data.content[0]
//                     console.log(data)
//                     // contenu de la boîte modale
//                     modalTitle.innerHTML = data.title
//                     imgJumbo1.src = data.picture 
//                     auteur1.innerHTML = `${data.author.name} ${data.author.surname}` 
//                     date1.innerHTML =  `${data.date.day} ${data.date.month} ${data.date.year}`
//                     texteBM1.innerHTML = data.content[0]
//                 })
//             } else {
//                 console.log('ERREUR D\'API');
//                 res.json().then(data => console.log(data))
//             }
//         })

//     // JUMBO / BOITE MODALE 2

//     let dateNews2 = document.getElementById('dateNews2')
//     let jumbo2P = document.getElementById('jumbo2P')

//     let imgJumbo2 = document.getElementById('imgJumbo2')
//     let auteur2 = document.getElementById('auteur2')
//     let date2 = document.getElementById('date2')
//     let texteBM2 = document.getElementById('texteBM2')
//     let modalTitle2 = document.getElementById('modalTitle2')

//     fetch('https://www.tbads.eu/greta/kercode/ajax/?article=2')
//         .then(res => {
//             console.log(res);

//             if(res.ok){
//                 res.json().then(data => {
//                     // contenu des jombotrons "dernières news"
//                     dateNews2.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
//                     jumbo2P.innerHTML = data.content[0]

//                     // contenu de la boîte modale 2
//                     modalTitle2.innerHTML = data.title
//                     imgJumbo2.src = data.picture 
//                     auteur2.innerHTML = `${data.author.name} ${data.author.surname}` 
//                     date2.innerHTML =  `${data.date.day} ${data.date.month} ${data.date.year}`
//                     texteBM2.innerHTML = data.content[0]
//                 })
//             } else {
//                 console.log('ERREUR D\'API');
//             }
//         })

// };

window.onload = function() {

    // nAPIS à itérer
  let nAPIS = [1,2];

    // Faire autant de fois de fetch qu'il a d'APIS (retourne API) et modifie le dernier caractère de l'adresse (2) => appeler les fonctions si resok sinon gestion de l'erreur.
  nAPIS.forEach(function(API) {
    fetch(`https://www.tbads.eu/greta/kercode/ajax/?article=${API}`)
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    updateJumbo(API, data);
                    updateModal(API, data);
                })
            } else {
                console.log('ERREUR D\'API');
            }
        })
  });
  
                // ! Utiliser des variables génériques terminant par un chiffre itérable !

                // FONCTION MODIF DES JUMBOS 
function updateJumbo(API, data) {
    // décla des variables relativement aux ID
    let dateNews = document.getElementById(`dateNews${API}`);
    let jumboP = document.getElementById(`jumbo${API}P`);
    // modifs de l'HTML
    dateNews.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`;
    jumboP.innerHTML = data.content[0];
}

                // FONCTION MODIF DES BOITES MODALES
function updateModal(API, data) {
    // décla des variables relativement aux ID
    let imgJumbo = document.getElementById(`imgJumbo${API}`);
    let auteurDate = document.getElementById(`auteurDate${API}`);
    let texteBM = document.getElementById(`texteBM${API}`);
    let modalTitle = document.getElementById(`modalTitle${API}`);

    // modifs de l'HTML
    modalTitle.innerHTML = data.title;
    imgJumbo.src = data.picture;
    auteurDate.innerHTML = `${data.author.name} ${data.author.surname} | ${data.date.day} ${data.date.month} ${data.date.year}`;
    texteBM.innerHTML = data.content[0];
}

};