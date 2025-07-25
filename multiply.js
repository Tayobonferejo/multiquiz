
window.addEventListener("load", function(){
    const question = document.getElementById("question");
    const questionGroup = ["what is multiply 5 and 3",
    "what is multiply 4 and 5",
    "what is multiply 3 and 7",
    "what is multiply 5 and 5",
    "what is multiply 6 and 3",
    "what is multiply 7 and 4" ];

    // randomNumber()
    const button = document.getElementById("button");
    const inputField = document.getElementById("number");
    const ranNum = Number(Math.floor(Math.random() * 6));
    question.innerText = `${questionGroup[ranNum]}`;
    console.log(ranNum);
    console.log(`${questionGroup[ranNum]}`);
    let count = 0;

        button.addEventListener("click", function(event){
            const inputNumber = Number(inputField.value);
            event.preventDefault();
            document.getElementById("myForm").reset();
            
            const answer = [15, 20, 21, 25, 18, 28];

            if(ranNum === 0&& inputNumber === answer[0]){
                count = count + 1;
            }
            else if(ranNum === 1 && inputNumber === answer[1]){
                count = count + 1;
            }
            else if(ranNum === 2 && inputNumber === answer[2]){
                count = count + 1;
            }
            else if(ranNum === 3 && inputNumber === answer[3]){
                count = count + 1;
            }
            else if(ranNum === 4 && inputNumber === answer[4]){
                count = count + 1;
            }
            else if(ranNum === 5 && inputNumber === answer[5]){
                count = count + 1;
            }
            else{
                count = count - 1;
                console.log(`${ranNum} === 1 && ${inputNumber} === answer[1])`)
            }
            console.log(count);
            const ranNum = Number(Math.floor(Math.random() * 6));

        })

});