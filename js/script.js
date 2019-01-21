window.onload = tableField;
let arrayGameField = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
let phase = 1; // 1 - cross , 0 - zero
function tableField() {
    const field = document.querySelector(".field");
    let table = document.createElement("table"),
        tr,
        td;
    for(let i = 0; i < 3; i++){
        tr = document.createElement("tr");
        for(let j = 0; j < 3; j++){
           td = document.createElement("td");
           tr.appendChild(td);
           td.setAttribute("data-row", i.toString());
           td.setAttribute("data-cell", j.toString());
           td.onclick = game;
        }
        table.appendChild(tr);
    }
    table.border = 1;
    table.className = "field__table"
    field.appendChild(table);
}
function game(event) {
    let target = event.target;
    let row = target.getAttribute("data-row");
    let cell = target.getAttribute("data-cell");
    if(arrayGameField[row][cell] == null){
        arrayGameField[row][cell] = phase;
        let cellContent, nextPhase;
        if(phase === 1) {
            cellContent = "X";
            nextPhase = "0";
            phase = 0;
        }else{
            cellContent = "0";
            nextPhase = "X";
            phase = 1;
        }
        target.innerText = cellContent;
        let nPhase = document.querySelector(".step").innerText = nextPhase;
    }else{
        target.style.borderColor = "red"
    }

    let winner = gameWinner();
    switch(winner){
        case null:
        break;
        case 0:
        alert("Winner 0");
        location.reload();
        break;
        case 1: 
        alert("Winner X");
        location.reload();
        break;
    }
}

function gameWinner() {
    let win;

    for(let i = 0; i < 2; i++){
        //по горизонтали
        if(
        (arrayGameField[0][0] == i) && (arrayGameField[0][1] == i) && (arrayGameField[0][2] == i)||
        (arrayGameField[1][0] == i) && (arrayGameField[1][1] == i) && (arrayGameField[1][2] == i) ||
        (arrayGameField[2][0] == i) && (arrayGameField[2][1] == i) && (arrayGameField[2][2] == i) ||
        //по вертикале
        (arrayGameField[0][0] == i) && (arrayGameField[1][0] == i) && (arrayGameField[2][0] == i) ||
        (arrayGameField[0][1] == i) && (arrayGameField[1][1] == i) && (arrayGameField[2][1] == i) ||
        (arrayGameField[0][2] == i) && (arrayGameField[1][2] == i) && (arrayGameField[2][2] == i) ||
        //по горизонтали
        (arrayGameField[0][0] == i) && (arrayGameField[1][1] == i) && (arrayGameField[2][2] == i) ||
        (arrayGameField[0][2] == i) && (arrayGameField[1][1] == i) && (arrayGameField[2][0] == i)){
            win = i;
        }
    }
    if(win === undefined) {
        win = -1;
    }
    return win;
}

