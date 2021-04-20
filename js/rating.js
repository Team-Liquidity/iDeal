let avgRating = [];

let st5 = document.getElementById('star5');
let st4 = document.getElementById('star4');
let st3 = document.getElementById('star3');
let st2 = document.getElementById('star2');
let st1 = document.getElementById('star1');

st5.addEventListener('change', UserClick);
st4.addEventListener('change', UserClick);
st3.addEventListener('change', UserClick);
st2.addEventListener('change', UserClick);
st1.addEventListener('change', UserClick);


function UserClick(event) {
console.log(event);
let avgRating = [];
console.log(avgRating);
    if (event.target.id === 'star5') {
        avgRating.push('5');

    }
    else if (event.target.id === 'star4') {
        avgRating.push('4');
    }
    else if (event.target.id === 'star3') {
        avgRating.push('3');
    }
    else if (event.target.id === 'star2') {
        avgRating.push('2');
    }
    else if (event.target.id === 'star1') {
        avgRating.push('1');
    } else {
        alert('No Rating yet!');
    }
    
    updateStorage();
}

function updateStorage() {
    
    localStorage.setItem('rating' , JSON.stringify(avgRating));   
         
}
function getlocalStorage() {
    let avgString = localStorage.getItem('rating');
    let avgArr = JSON.parse(avgString);
     if(avgRating){
         avgRating =avgArr;
     }
        

    
}
getlocalStorage();