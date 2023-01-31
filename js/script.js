addEventListener("load", (event) => {

  let nApis = [1,2];

  nApis.forEach(function(api) {
    fetch(`https://www.tbads.eu/greta/kercode/ajax/?article=${api}`)
        .then(res => { 

            if(res.ok){
                
                res.json().then(data => {
                    updateJumbo(api, data);
                    updateModal(api, data);
                })

                } else {console.log('ERREUR D\'API');}
        })
        
        .catch(error => {console.error('ERREUR : ', error);})

  });

    // FONCTION MODIF DES JUMBOS 
    function updateJumbo(api, data) {
        let dateNews = document.getElementById(`dateNews${api}`);
        let jumboP = document.getElementById(`jumbo${api}P`);

        dateNews.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`;
        jumboP.innerHTML = data.content[0];
    }

    // FONCTION MODIF DES BOITES MODALES
    function updateModal(api, data) {
        let imgJumbo = document.getElementById(`imgJumbo${api}`);
        let auteurDate = document.getElementById(`auteurDate${api}`);
        let texteBM = document.getElementById(`texteBM${api}`);
        let modalTitle = document.getElementById(`modalTitle${api}`);

        modalTitle.innerHTML = data.title;
        imgJumbo.src = data.picture;
        auteurDate.innerHTML = `${data.author.name} ${data.author.surname} | ${data.date.day} ${data.date.month} ${data.date.year}`;
        texteBM.innerHTML = data.content[0];
    }

});