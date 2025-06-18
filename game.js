(()=>{

  let array = ['A','B','C','D','E','F','G','H','A','B','C','D','E','F','G','H'];
  let currentIndex = array.length-16;

  // To create a random jumbled array
  function create(){
  while(currentIndex!=16){
    let randomIndex = Math.floor(Math.random()*16);
    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
    currentIndex+=1;

  }

  //Build the UI table using buttons inside grid

  for(i=0;i<16;i++){
    let cards = document.createElement('button');
    cards.classList.add('hide','card');
    cards.setAttribute('id','Nos'+[i])
    cards.textContent = array[i];
    let grid = document.querySelector('.grid');
    grid.append(cards);
    cards.addEventListener('click',handlesclick);
  }
  };
  create();
  console.log(array);

  //handle click functionality

  let count = 0;
  let firstCard;
  let secondCard;
  let text1;
  let text2;
  let match = 0;

  function handlesclick(event){

    let card = event.target;

    if(count<2){
      card.classList.replace('hide','unhide');
      count++;
    }

    if(count==1 && card.classList.contains('unhide')){
      firstCard = event.target;
      text1 = event.target.textContent;
    }
    else if(count==2 && card.classList.contains('unhide')){
      secondCard = event.target;
      text2 = event.target.textContent;
    }

    if(count==2)
    {
      if(firstCard == secondCard)
      {
        firstCard.classList.replace('unhide','hide');
      }
      // If Cards Match
      else if(text1 == text2){
      firstCard.disabled = true;
      secondCard.disabled = true; 
      match+=1;
      //  If All cards are Matched
       if(match==8){
         let grid = document.querySelector('.grid');
         grid.classList.add('blur');
         let won = document.getElementById('won');
         won.style.display = "block";
        
        }
      
      }
      // If cards not Matching
     else if(text1 !== text2){
      setTimeout(() => {
        firstCard.classList.replace('unhide','hide');
        secondCard.classList.replace('unhide','hide');
        
      }, 700);

     }
    //  to reset All the values Stored for reference purpose (Matching cards)
    
    setTimeout(() => {
      resetValues();
    }, 750);

    }
  
  }

  function resetValues()
  {
      count = '';
      firstCard = '';
      secondCard = '';
      text1 = '';
      text2 = '';

  }


   
})();

// restart button to refresh the page 

function restart(){
  location. reload();

}
  







    



