const question = document.getElementById("question");
const button = document.getElementById("myForm");
const inputField = document.getElementById("number");
let score = document.querySelector("main > p > span");

const questionGroup = [
    "what is multiply 5 and 3",
    "what is multiply 4 and 5",
    "what is multiply 3 and 7",
    "what is multiply 5 and 5",
    "what is multiply 6 and 3",
    "what is multiply 7 and 4"
];

const answer = [15, 20, 21, 25, 18, 28];

let count = 0;
let ranNum = 0; // ✅ Define globally

function randomSelect() {
    ranNum = Math.floor(Math.random() * questionGroup.length); // ✅ Set global variable
    question.innerText = `${questionGroup[ranNum]}`;
}

randomSelect();

button.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputValue = inputField.value;
    const inputNumber = Number(inputValue);

    if(inputValue.trim().length === 0){
        alert("You need to answer the question");
    }

    // Check answer
    if (inputNumber === answer[ranNum]) {
        count += 1;
    } else {
        count -= 1;
    }

    console.log("Score:", count);
    score.innerText = `${count}`;

    // Reset form and ask new question
    document.getElementById("myForm").reset();
    randomSelect();
});
