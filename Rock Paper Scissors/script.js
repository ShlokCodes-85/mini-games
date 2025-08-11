let userscore = 0
let compscore = 0

const humaninput = document.querySelectorAll(".human img")
let result_c = document.querySelector("#c-score")
let result_h = document.querySelector("#h-score")
let message = document.querySelector(".msg")
let container = document.querySelector(".msg-container")

const gencompchoice = () => {
    let options = ["paper", "rock", "scissors"]
    choiceId2 = options[Math.floor(Math.random() * 3)]
    return choiceId2
}

humaninput.forEach((choiceId1) => {
    choiceId1.addEventListener("click", () => {
        const human_choice = choiceId1.getAttribute("id");
        playgame(human_choice)
    }) 
    
});

const showWinner = (userwin, human_choice, comp_choice) => {
    if (userwin){
        userscore++
        result_h.innerText = userscore
        message.innerText = `You Won! ${human_choice} beats ${comp_choice}`
        message.style.backgroundColor = "#4CAF50"
        message.style.color = "white"
    } else {
        compscore++
        result_c.innerText = compscore
        message.innerText = `You Lost. ${comp_choice} beats ${human_choice}`
        message.style.backgroundColor = "#F44336"
        message.style.color = "white"
    }
}

const playgame = (human_choice) => {
    const comp_choice = gencompchoice()
    console.log("Computer choice:", comp_choice)
    console.log("User choice:", human_choice)
    if (human_choice === comp_choice){
        message.innerText = "It's a draw!"
        message.style.backgroundColor = "#FFD700"
        message.style.color = "#333333"
    } else {
        let userwin = true
        if (human_choice == "rock"){
            userwin = comp_choice == "paper" ? false : true
        } else if (human_choice == "paper"){
            userwin = comp_choice == "scissors" ? false : true
        } else if (human_choice == "scissors"){
            userwin = comp_choice == "rock" ? false : true
        }
        showWinner(userwin, human_choice, comp_choice)
    }
}