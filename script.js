let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";
                                               //conditon ? true : false; 
//function to change the turn
const changeTurn = () =>{
        return turn === "X"? "O": "X";
}

// function to check for win

const checkWin = () => {
    let boxtext  = document.getElementsByClassName("boxtext");
    let winningCombination = [  
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    
    ];
                    // let   highlightCell = (e) =>{
                    //             Array.from.forEach(((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&  (boxtext[e[2]].innerText === boxtext[e[1]].innerText)))
                    //     {
                    //         document.getElementsByClassName("highlight")[0].style.background = "#f7b32c"; 
                    //     }
                    // } 

    
    winningCombination.forEach( e=> {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&  (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText != "")){
            alert(boxtext[e[0]].innerText + " Won")     
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            // alert("Won")
            document.querySelector(".image").getElementsByTagName("img")[0].style.width = "300px";
            // highlightCell(e);
             
        }
    }) 
     
}

            //Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
     element.addEventListener('click', () =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
           
        }
    })
})

// reset button logic
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    // turn = "X"; 
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.info').innerText = boxtext[0].innerText + "";
})