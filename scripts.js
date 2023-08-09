

const cityValues = [
    { city: "Praha", cost: 500, id: 0 },
    { city: "Frankfurt", cost: 3000, id: 1 },
    { city: "NewYork", cost: 1500, id: 2 },
    { city: "Sydney", cost: 30000, id: 3 }
];


function setSelect() {
    let citySelection = document.getElementById("citySelection");
    let selected = citySelection.value;
    return parseInt(cityValues[selected].cost);
}




function setNumOfTickets() {
    let ticketSelection = document.getElementById("ticketSelection");
    return ticketSelection.value;
}

function isReturnTicketChecked() {
    return document.getElementById("returnTicket").checked;
}

/**     
 * 
 * <label for="radioEconomy">Economy class – bez přirážky: </label>
        <input type="radio" name="class" id="radioEconomy">
        <br>

        <label for="radioBusiness">Business class - + 25 procent k ceně: </label>
        <input type="radio" name="class" id="radioBusiness">
        <br>

        <label for="radioRoyal">Royal class - + 50 procent k ceně: </label>
        <input type="radio" name="class" id="radioRoyal">
        <br></br>
        
        */
function setPercentageIncrease() {

    let checkedClass = document.querySelector('input[name="businessClass"]:checked');
    let increaseByPercent;
    switch (checkedClass.id) {
        case "radioEconomy": increaseByPercent = 0; break;
        case "radioBusiness": increaseByPercent = 0.25; break;
        case "radioRoyal": increaseByPercent = 0.50; break;
    }
    return increaseByPercent;

}

function getBudget() {

    return document.getElementById("budgetInput").value;
}

function submitBudget() {
    let budget = parseInt(getBudget());

    if (isNaN(budget) || budget <= 0)
        alert("Please input correct sum of your budget.")
    else if (budget < getResult())
        alert("You can't afford this ticket");
    else
        alert("You can afford this ticket");


}

function validateNoteInput() {
    let noteElement = document.getElementById("noteId");
    let noteText = noteElement.value;

    var allowedChars = /[a-zA-Z0-9\s§]+/g;
    noteText = noteText.match(allowedChars).join('');

    noteElement.value = noteText;
}








function getResult() {
    let result = 0;

    const getSelection = setSelect();
    result += getSelection;

    const numOfTickets = setNumOfTickets();

    result *= numOfTickets;

    const increaseByClass = setPercentageIncrease();
    result += (result * increaseByClass);

    result = isReturnTicketChecked() ? result * 2 : result;

    return result;
}

function updatePrice() {
    getResult();
    const resultSpan = document.getElementById("resultId");
    resultSpan.textContent = getResult();
}

updatePrice();

