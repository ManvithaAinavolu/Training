const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userinputContainer = document.getElementById("user-input-section");
const newgameContainer = document.getElementById("new-game-container");
const newgamebutton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resulttext = document.getElementById("result-text");
let options = {
    Fruits: [
        "Apple",
        "Mango",
        "Banana",
        "Orange",
        "Guava"
    ],
    Animals: [
        "Lion",
        "Tiger",
        "Elephant",
        "Dog",
        "Cat",
        "Crocodile"
    ],
    Countries: [
        "India",
        "America",
        "Australia",
        "Japan",
        "China",
        "Europe",
        "Africa"
    ]
};

let winCount = 0;
let count = 0;
let choosenWord = 0;

const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Please select any option..</h3>`;
    let buttonCon = document.createElement("div");
    for (let val in options) {
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${val}')">${val}</button> `;
    }
    optionsContainer.appendChild(buttonCon);
};

const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");
    optionsButtons.forEach((button) => {
        button.disabled = true;
    });

    letterButtons.forEach((button) => {
        button.disabled = true;
    });
    newgameContainer.classList.remove("hide"); 
};


const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    optionsButtons.forEach((button) => {
        if (button.innerText.toLowerCase() === optionValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });
    letterContainer.classList.remove("hide");
    userinputContainer.innerText = "";
    let optionArray = options[optionValue];
    console.log(optionArray)
    choosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    choosenWord = choosenWord.toUpperCase();
    let displayItem = choosenWord.replace(/./g, '<span class=dashes>_</span>');
    userinputContainer.innerHTML = displayItem;
};

const initializer = () => {
    winCount = 0;
    count = 0;
    userinputContainer.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newgameContainer.classList.add("hide");
    letterContainer.innerHTML = "";

    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);
        button.addEventListener("click", () => {
            let charArray = choosenWord.split("");
            let dashes = document.getElementsByClassName("dashes");

            if (charArray.includes(button.innerText)) {
                charArray.forEach((char, index) => {
                    if (char === button.innerText) {
                        dashes[index].innerText = char;
                        winCount += 1;
                        if (winCount == charArray.length) {
                            resulttext.innerHTML = `<h2 class='win-msg'>You Win!</h2><p>The word was <span>${choosenWord}</span></p>`;
                            blocker();
                        }
                    }
                });
            } else {
                count += 1;
                drawMan(count);
                if (count == 6) {
                    resulttext.innerHTML = `<h2 class='lose-msg'>Game Over!!</h2><p> the word was <span>${choosenWord}</span></p>`;
                    blocker();
                }
            }
            button.disabled = true;
        });
        letterContainer.append(button);
    }
    displayOptions();
    let { initialDrawing } = canvasCreator();
    initialDrawing();
};
newgamebutton.addEventListener("click", () => {
    initializer(); 
});
const canvasCreator = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;
    const drawLine = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
    };

    const head = () => {
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI * 2, true);
        context.stroke();
    };

    const body = () => {
        drawLine(70, 40, 70, 80);
    };

    const leftArm = () => {
        drawLine(70, 50, 50, 70);
    };

    const rightArm = () => {
        drawLine(70, 50, 90, 70);
    };

    const leftLeg = () => {
        drawLine(70, 80, 50, 110);
    };

    const rightLeg = () => {
        drawLine(70, 80, 90, 110);
    };

    const initialDrawing = () => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        drawLine(10, 130, 130, 130);
        drawLine(10, 10, 10, 131);
        drawLine(10, 10, 70, 10);
        drawLine(70, 10, 70, 20);
    };

    return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};
const drawMan = (count) => {
    let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
    switch (count) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
            break;
    }
};

initializer();
