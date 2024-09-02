const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn")
const resultDiv = document.getElementById("results-div");

const validPhoneNumCheck = input => {
    const userInput = input;

    if (userInput === "") {
        alert("Please provide a phone number");
        return;
    } 
    const phoneRegex = /^(1)?(-|\s|\()?\d{3}(-|\s|\))?\d{3}(-|\s)?\d{4}$/

    resultDiv.innerHTML += `<p class="${phoneRegex.test(userInput) ? "valid result-text" : "invalid result-text"}">${phoneRegex.test(userInput) ? "Valid" : "Invalid"} US number: ${userInput} </p>`
}

checkBtn.addEventListener("click", () => {
    validPhoneNumCheck(userInput.value);
    userInput.value = "";
})

userInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        validPhoneNumCheck(userInput.value);
        userInput.value = "";
    }
})

clearBtn.addEventListener("click", () => {
    userInput.value = "";
    resultDiv.innerHTML = "";
})