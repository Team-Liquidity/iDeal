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

let averageArr = [];
function UserClick(event) {
    console.log(event);
    console.log(averageArr);
    if (event.target.id === 'star5') {
        averageArr.push(5);
    }
    else if (event.target.id === 'star4') {
        averageArr.push(4);
    }
    else if (event.target.id === 'star3') {
        averageArr.push(3);

    }
    else if (event.target.id === 'star2') {
        averageArr.push(2);

    }
    else if (event.target.id === 'star1') {
        averageArr.push(1);
    } else {
        alert('No Rating yet!');
    }

    updateStorage();
}

// let avgRating1 = [];
// console.log(avgRating1);

function updateStorage() {
    localStorage.setItem('rating', JSON.stringify(averageArr));
}
function getlocalStorage() {
    let avgString = localStorage.getItem('rating');
    let avgArr = JSON.parse(avgString);
    if (avgArr) {
        averageArr = avgArr;
    }



}
getlocalStorage();