window.onload = function() { 

let jumbo1P = document.getElementById('jumbo1P')
let jumbo2P = document.getElementById('jumbo2P')

fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
    .then(res => {
        console.log(res);

        if(res.ok){
            res.json().then(data => {
                jumbo1P.innerHTML = data.content[0]
                jumbo2P.innerHTML = data.content[2]
            })
        } else {
            console.log('ERREUR');
            document.getElementById('erreur').innerHTML = 'ERREUR :/'
        }
    })

};