// ######### add feedBack #########
let feedBackButton = document.getElementById('givingFeed');
feedBackButton.addEventListener('submit', feedSubmiter);
let userInput = document.getElementById('userName');
userInput.addEventListener('submit', feedSubmiter);
let feedbacks = [];

// #################### function submiter feedBack ###########
let container = document.getElementById('slideShow');

function feedSubmiter(event) {
    event.preventDefault();
    // let icone = document.createElement('i');
    let userName = document.createElement('h2');
    let feedBack = document.createElement('p');
    container.appendChild(userName);
    // userName.appendChild(icone);
    container.appendChild(feedBack);
  // icone.textContent= '${<i class="fa fa-user-circle-o" aria-hidden="true"></i>}';
    userName.textContent = event.target[0].value;
    feedBack.textContent = event.target[1].value;
    feedbacks.push({ userNameInput: userName.textContent, userFeedbackInput: feedBack.textContent})
    console.log('userName',userName);
    console.log('feedBack',feedBack);

    localStorage.setItem('userName', JSON.stringify(feedbacks));
    
  }
    
  
  function getFeed() {
    let objArr =localStorage.getItem('userName');
    let nameArr =JSON.parse(objArr);
    let stringRate =localStorage.getItem('rating');
    let objRate =JSON.parse(stringRate);
    console.log(objRate);
    console.log(nameArr);
    if(nameArr ){
      for(let i = 0; i < nameArr.length; i++){    
        let userName = document.createElement('h2');
        let feedBack = document.createElement('p');
        let ratingElement = document.createElement('p');
        container.appendChild(userName);
        container.appendChild(feedBack);
        
        userName.textContent = nameArr [i].userNameInput;
        feedBack.textContent = nameArr [i].userFeedbackInput; 
      }
    }
      if (feedbacks !== null) {
      nameArr = feedbacks;

  }
  return nameArr;

  }
  getFeed();