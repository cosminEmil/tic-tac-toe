let isXorO = 0;

function createButtons() {
    for (let i = 1; i <= 9; ++i) {
        let buttons = document.getElementById("buttons");
        let button = document.createElement("button");
        button.className = "buttons"
        button.id = i;
        button.addEventListener("click", () => {
            checkWinner(button)
        })
        buttons.appendChild(button);
    }
}

function equality(bx, by, bz) {
    if (bx == by && by == bz && bx != "") {
        return 1;
    }
    return 0;
}

function checkWinner(button) {
    if (isXorO == 0 && button.innerText == "") {
        button.innerText = 'O';
        isXorO = 1;
    } else if (isXorO == 1 && button.innerText == "") {
        button.innerText = 'X';
        isXorO = 0;
    }
    let winner = button.innerText, ok = 0;

    let b1 = document.getElementById("1").innerText, b2 = document.getElementById("2").innerText,
    b3 = document.getElementById("3").innerText, b4 = document.getElementById("4").innerText,
    b5 = document.getElementById("5").innerText, b6 = document.getElementById("6").innerText,
    b7 = document.getElementById("7").innerText, b8 = document.getElementById("8").innerText,
    b9 = document.getElementById("9").innerText;

    if (equality(b1,b2,b3) || equality(b4,b5,b6) || equality(b7,b8,b9)) {
        ok = 1;
    }
    if (equality(b1,b4,b7) || equality(b2,b5,b8) || equality(b3,b6,b9)) {
        ok = 1;
    }
    if (equality(b1,b5,b9) || equality(b3,b5,b7)) {
        ok = 1;
    }
    if (ok == 1) {
        let message = document.getElementById("message");
        message.innerText = winner + " won the game!";
    }
}
