window.onload = function() {

// nAPIS à itérer
  let nAPIS = [1,2];

    // Faire autant de fois de fetch qu'il a d'APIS (retourne API) et modifie le dernier caractère de l'adresse => appeler les fonctions si res.ok sinon gestion des erreurs.
  nAPIS.forEach(function(API) {
    fetch(`https://www.tbads.eu/greta/kercode/ajax/?article=${API}`)
        .then(res => {

            if(res.ok){
                res.json().then(data => {
                    console.log(data);
                    updateJumbo(API, data);
                    updateModal(API, data);
                })

            } else {
                console.log('ERREUR D\'API');
            }
        })
        
        .catch(error => {
        });
  });
  
                // ! Utiliser des variables génériques terminant par un chiffre itérable !

                // FONCTION MODIF DES JUMBOS 
function updateJumbo(API, data) {
    // décla des variables relativement aux IDs des Jumbos
    let dateNews = document.getElementById(`dateNews${API}`);
    let jumboP = document.getElementById(`jumbo${API}P`);

    // modifs de l'HTML
    dateNews.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`;
    jumboP.innerHTML = data.content[0];
}

                // FONCTION MODIF DES BOITES MODALES
function updateModal(API, data) {
    // décla des variables relativement aux IDs des boîtes modales
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