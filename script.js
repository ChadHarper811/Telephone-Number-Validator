const userInputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const definitionTarget = document.getElementById("definition-target");
const definitionDiv = document.getElementById("definition-div");
const resultText = document.getElementById("result-text");
const closeBtn = document.getElementById("close-btn");

const palindromeCheck = str => {
    const userInputStr = str;

    if (str === "") {
        alert("Please input a value");
        return;
    }

    const compareStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    console.log(compareStr)
    let results = "";
    if (compareStr === [...compareStr].reverse().join("")) {
        results = `<bold>${userInputStr}</bold> is a palindrome.`
    } else {
        results = `<bold>${userInputStr}</bold> is not a palindrome.`
    }

    resultText.innerHTML = results;
    resultDiv.classList.remove("hidden");
}

definitionTarget.addEventListener("click", () => {
    definitionDiv.classList.contains("hidden") ? definitionDiv.classList.remove("hidden") : definitionDiv.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
    definitionDiv.classList.contains("hidden") ? definitionDiv.classList.remove("hidden") : definitionDiv.classList.add("hidden");
})

checkBtn.addEventListener("click", () => {
    palindromeCheck(userInputText.value);
    userInputText.value = "";
})