let input = document.querySelector('#inputName');

let queueButton = document.querySelector('#queueButton');
let fastTrackButton = document.querySelector('#fastTrackButton');
let checkInButton = document.querySelector('#checkIn');
let queueContainer = document.querySelector('#queueContainer');
let orderedList = document.createElement('ol');
queueContainer.appendChild(orderedList);
let emptyContainer = document.querySelector('#emptyContainer');

let inputArray = [];

let text = document.createElement('p');
text.innerText = 'There’s currently no people standing in line';
text.style.color = 'red';

writeMessage();


queueButton.addEventListener('click', () => {
    if (inputName.value !== ''){
    let listElement = document.createElement('li');
    listElement.innerHTML = inputName.value;
    orderedList.appendChild(listElement);
    inputArray.push(inputName.value);
    inputName.value ='';
    removeMessage();
    }
    
})

fastTrackButton.addEventListener('click', () => {
    if (inputName.value !== ''){
    let listElement = document.createElement('li');
    listElement.innerHTML = inputName.value;
    orderedList.insertBefore(listElement, orderedList.childNodes[0]);
    inputArray.unshift(inputName.value);
    inputName.value ='';
    removeMessage();
    }
})

checkInButton.addEventListener('click', () => {
    if(inputArray.length !== 0){
    orderedList.removeChild(orderedList.childNodes[0]);
    inputArray.shift();
    writeMessage();
    }
})

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (inputName.value !== ''){
            let listElement = document.createElement('li');
            listElement.innerHTML = inputName.value;
            orderedList.appendChild(listElement);
            inputArray.push(inputName.value);
            inputName.value ='';
            removeMessage();
            }
    }
});


function writeMessage() {
    if (inputArray.length === 0){
        emptyContainer.appendChild(text);
    }
}

function removeMessage(){
    if(emptyContainer.contains(text)){
        emptyContainer.removeChild(text);
    }
}
