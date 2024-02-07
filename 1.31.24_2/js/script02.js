// Task 2.1: Generate Random Number
function getRandomNumber() {
    const randomDecimal = Math.random() * 101; 
    const randomNumber = Math.floor(randomDecimal);
    return randomNumber; 
}

// Task 2.2: Display Random Number
function displayRandomNumber(number) {
    let messageElement = document.getElementById('message'); 
    messageElement.innerText = `Random Number: ${number}`; 
}

// Task 2.3: 
function addToHistoryList(number) {
    let container = document.getElementById('historyList'); 
    let listItem = document.createElement('li'); 
    listItem.className = 'histdata'; 
    listItem.innerHTML = number; 
    container.appendChild(listItem); 
}


let randomNum = getRandomNumber(); 
displayRandomNumber(randomNum); 
addToHistoryList(randomNum); 

// Task 2.4: Create List Item
function createListItem(number) {
    let listItem = document.createElement('li'); 
    listItem.className = 'histdata'; 
    listItem.innerHTML = number;
    return listItem;
}


function deleteLastRandomNumber() {
    let container = document.getElementById('historyList'); 
    
    if (container.children.length > 0) { 
        container.removeChild(container.lastChild); 
        updateMessage("Last Random Number deleted"); 
    } else {
        updateMessage("History is empty"); 
    }
}

function updateMessage(message) {
    let messageElement = document.getElementById('message'); 
    messageElement.innerHTML = message; 
}

function handleEmptyHistory() {
    let container = document.getElementById('historyList'); 

    if (container.children.length === 0) { 
        updateMessage("History is empty"); 
    }
}