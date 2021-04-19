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
    let userName = document.createElement('h2');
    let feedBack = document.createElement('p');
    container.appendChild(userName);
    container.appendChild(feedBack);
    userName.textContent = event.target[0].value;
    feedBack.textContent = event.target[1].value;
    feedbacks.push({ userNameInput: userName.textContent, userFeedbackInput: feedBack.textContent })
    localStorage.setItem('userName', JSON.stringify(feedbacks));
    getFeed()
}

function getFeed() {
    //  feedArr = localStorage.getItem('feedBack');
    nameArr = localStorage.getItem('feedbacks');
    //  console.log(feedArr);
    console.log(nameArr);
    document.getElementById('userName').appendChild(document.createElement('span')).textContent = nameArr;
    //  document.getElementById('userShow').appendChild(document.createElement('span')).textContent=nameArr;
}
// function getFeed(){
//   localStorage.setItem('userName',JSON.stringify(feedbacks)); 
//   console.log('userName',JSON.stringify(feedbacks));
//   location();
// }