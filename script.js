const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn")
const resultDiv = document.getElementById("result");

const validPhoneNumCheck = input => {
    const userInput = input;

    if (userInput === "") {
        alert("Please provide a phone number");
        return;
    }

    const phoneNumberRegex = `^(1\\s?)?(\\[0-9]{3}\\)|[0-9]{3})[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{4}$`;

    const resultText = document.createElement("p");
    resultText.className = "results";
    resultText.appendChild(document.createTextNode(`${phoneNumberRegex.test(userInput) ? "Valid" : "Invalid"} US number: ${userInput} `));
    resultDiv.appendChild(resultText);
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