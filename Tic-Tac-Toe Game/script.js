let boxes = document.querySelectorAll(".grid");
let resetbtn = document.querySelector("#reset");
let winmessage = document.querySelector(".win");
let turn_O = true;
let count = 0;
let winner = false;

let winpatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn_O) {
            box.innerText = "O";
            turn_O = false;
        } else {
            box.innerText = "X";
            turn_O = true;
        }
        count++;
        checkWinner();
        if (!winner) {
            checkDraw();
        }
        box.disabled = true;
    })
})

const checkDraw = () => {
    if (count === 9 && !winner) {
            winmessage.innerText = "It's a Draw!";
            boxes.forEach(box => box.disabled = true);
            return;
    }
}

const checkWinner = () => {
    for (let patterns of winpatterns) {
        let posVal1 = boxes[patterns[0]].innerText;
        let posVal2 = boxes[patterns[1]].innerText;
        let posVal3 = boxes[patterns[2]].innerText;
        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                winmessage.innerText = `Winner ${posVal1}`;
            boxes.forEach(box => box.disabled = true);
            winner = true;
            } 
        }
    }
}


resetbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = " ";
        box.disabled = false;
    })
        winmessage.innerText = "";
        count = 0;
        winner = false;
})

