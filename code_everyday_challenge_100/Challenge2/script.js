const points = document.querySelectorAll('.point');
 // console.log(points[0]) ;

// points.forEach(point =>{
//     point.addEventListener('click', ()=>{
//         point.classList.add('active');
//     });
// })

const contents = document.querySelectorAll('.content div');
// console.log(contents) ;
let compteurClicn = 0; // Variable pour suivre le nombre de clics
let compteurClicp = 0;
//contents.forEach(content => {
    
    contents[1].addEventListener('click', () =>{
        compteurClicn++;
        if (compteurClicn === 1) {
            // Exécuter l'action souhaitée ici
            for(let i = 0 ; i<2 ; i++){
                points[i+1].classList.add('active');
                console.log(compteurClicn);
            }
          }
        else if(compteurClicn === 2){
            for(let i = 2 ; i<4 ; i++){
                points[i+1].classList.add('active');
                console.log(compteurClicn);
            }
        }
        else if(compteurClicn === 3){
            for(let i = 4 ; i<6 ; i++){
                points[i+1].classList.add('active');
                //compteurClicn = 0; // Réinitialiser le compteur après l'exécution
            }
        }
        else{
            
        }
        
    })
//})
contents[0].addEventListener('click', () =>{
    compteurClicp++;
    if (compteurClicn === 1 && compteurClicp === 1 ) {
        // Exécuter l'action souhaitée ici
        for(let i = 0 ; i<2 ; i++){
            points[i+1].classList.remove('active');
            compteurClicn--;
            
        }
      }
    else if(compteurClicn === 2 && compteurClicp === 2){
        for(let i = 2 ; i<4 ; i++){
            points[i+1].classList.remove('active');
        }
    }
    else if(compteurClicn === 3 && compteurClicp === 3){
        for(let i = 4 ; i<6 ; i++){
            points[i+1].classList.remove('active');
            //compteurClic = 0; // Réinitialiser le compteur après l'exécution
        }
    }
    else{
        
    }
    
})



// const element = document.getElementById('monElement'); // Remplacer par l'ID de votre élément

// element.addEventListener('click', function() {
//   compteurClic++;

//   if (compteurClic === 2) {
//     // Exécuter l'action souhaitée ici
//     alert('Deuxième clic détecté !');
//     compteurClic = 0; // Réinitialiser le compteur après l'exécution
//   }
// });
