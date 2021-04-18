// ######### add feedBack #########

let feedBackButton = document.getElementById('givingFeed');
feedBackButton.addEventListener('submit',feedSubmiter);
let textShow = document.getElementById('feedShow');
let feedText='';

// #################### function submiter feedBack ###########
  function feedSubmiter(event){
      event.preventDefault();
    feedText += event.target[0].value;
    localStorage.setItem('feedBack',JSON.stringify(feedText));
    event.target[0].value ='';
    getFeed();
    
}

function getFeed(){
     feedArr = localStorage.getItem('feedBack');
    console.log(feedArr);
    document.getElementById('feedShow').appendChild(document.createElement('span')).textContent=feedArr;
    
    

}




