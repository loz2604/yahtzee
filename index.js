const roll = document.getElementById("roll");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const dice6 = document.getElementById("dice6");
const dice1black = document.getElementById("dice1black");
const dice2black = document.getElementById("dice2black");
const dice3black = document.getElementById("dice3black");
const dice4black = document.getElementById("dice4black");
const dice5black = document.getElementById("dice5black");
const dice6black = document.getElementById("dice6black");
const press_roll = document.getElementById("press_roll");

let diceSound = document.getElementById("sound");
let hold = document.getElementById("hold")
let hold1 = document.getElementById("hold1");
let hold2 = document.getElementById("hold2");
let hold3 = document.getElementById("hold3");
let hold4 = document.getElementById("hold4");
let hold5 = document.getElementById("hold5");
let newGame = document.getElementById("newGame")
let gameOver = document.getElementById("gameOver");
let submitScore = document.getElementById("submitScore");
let showRolls = document.getElementById("showRolls");
let rolls = 0;

let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let e = document.getElementById("e");
let f = document.getElementById("f");
let g = document.getElementById("g");
let h = document.getElementById("h");
let i = document.getElementById("i");
let j = document.getElementById("j");
let k = document.getElementById("k");
let l = document.getElementById("l");
let m = document.getElementById("m");
let n = document.getElementById("n");
let o = document.getElementById("o");
let p = document.getElementById("p");

let ones = document.getElementById("ones");
let twos = document.getElementById("twos");
let threes = document.getElementById("threes");
let fours = document.getElementById("fours");
let fives = document.getElementById("fives");
let sixes = document.getElementById("sixes");
let threeOfAKind = document.getElementById("threeOfAKind");
let fourOfAKind = document.getElementById("fourOfAKind");
let fullHouse = document.getElementById("fullHouse");
let smallStraight = document.getElementById("smallStraight");
let largeStraight = document.getElementById("largeStraight");
let yahtzee = document.getElementById("yahtzee");
let chance = document.getElementById("chance");
let y1 = document.getElementById("y1");
let y2 = document.getElementById("y2");
let y3 = document.getElementById("y3");

let submit1 = document.getElementById("submit1");
let submit2 = document.getElementById("submit2");
let submit3 = document.getElementById("submit3");
let submit4 = document.getElementById("submit4");
let submit5 = document.getElementById("submit5");
let submit6 = document.getElementById("submit6");
let submit7 = document.getElementById("submit7");
let submit8 = document.getElementById("submit8");
let submit9 = document.getElementById("submit9");
let submit10 = document.getElementById("submit10");
let submit11 = document.getElementById("submit11");
let submit12 = document.getElementById("submit12");
let submit13 = document.getElementById("submit13");
let submit14 = document.getElementById("submit14");
let submit15 = document.getElementById("submit15");
let submit16 = document.getElementById("submit16");
let submitCount = 0;

let totalScore = document.getElementById("totalScore");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let score3 = document.getElementById("score3");
let score4 = document.getElementById("score4");
let score5 = document.getElementById("score5");
let score6 = document.getElementById("score6");
let score7 = document.getElementById("score7");
let score8 = document.getElementById("score8");
let score9 = document.getElementById("score9");
let score10 = document.getElementById("score10");
let score11 = document.getElementById("score11");
let score12 = document.getElementById("score12");
let score13 = document.getElementById("score13");
let score14 = document.getElementById("score14");
let score15 = document.getElementById("score15");
let score16 = document.getElementById("score16");

let yahtzeeScore = 0;
let yahtzeeBonusScore = 0;
let score = 0;
let totalUp = 0;
let scoreLower = 0;
let bonus = document.getElementById("bonus");
let bonusUp = 0;

function reload() {
    reload = location.reload();
}
newGame.addEventListener("click", reload, false);

function resetHold() {
    hold1 = false;
    hold1Text = "Hold";
    changeText1("Hold");
    changeColour2();
    hold2 = false;
    hold2Text = "Hold";
    changeText2("Hold");
    changeColour4();
    hold3 = false;
    hold3Text = "Hold";
    changeText3("Hold");
    changeColour6();
    hold4 = false;
    hold4Text = "Hold";
    changeText4("Hold");
    changeColour8();
    hold5 = false;
    hold5Text = "Hold";
    changeText5("Hold");
    changeColour10();
    hold.style.display = "none";
}
function finalScore() {
    let finalTotal = totalUp + scoreLower;
    document.getElementById("finalScore").innerHTML = (`Final Score: ${finalTotal}`);
}
function finishGame() {
    submitScore.style.display = "none";
    roll.style.display = "none";
    hold.style.display = "none";
    gameOver.style.display = "block";
    newGame.style.display = "block";
    n.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    finalScore();
    console.log("game over")
}
function hideTickBox() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
    i.style.display = "none";
    j.style.display = "none";
    k.style.display = "none";
    l.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
}
hideTickBox();
function hideDice() {
    dice1.style.display = "none";
    dice2.style.display = "none";
    dice3.style.display = "none";
    dice4.style.display = "none";
    dice5.style.display = "none";
    dice6.style.display = "none";

    dice1_2.style.display = "none";
    dice2_2.style.display = "none";
    dice3_2.style.display = "none";
    dice4_2.style.display = "none";
    dice5_2.style.display = "none";
    dice6_2.style.display = "none";

    dice1_3.style.display = "none";
    dice2_3.style.display = "none";
    dice3_3.style.display = "none";
    dice4_3.style.display = "none";
    dice5_3.style.display = "none";
    dice6_3.style.display = "none";

    dice1_4.style.display = "none";
    dice2_4.style.display = "none";
    dice3_4.style.display = "none";
    dice4_4.style.display = "none";
    dice5_4.style.display = "none";
    dice6_4.style.display = "none";

    dice1_5.style.display = "none";
    dice2_5.style.display = "none";
    dice3_5.style.display = "none";
    dice4_5.style.display = "none";
    dice5_5.style.display = "none";
    dice6_5.style.display = "none";
};
function hideBlackDice() {
    dice1black.style.display = "none";
    dice2black.style.display = "none";
    dice3black.style.display = "none";
    dice4black.style.display = "none";
    dice5black.style.display = "none";
    dice6black.style.display = "none";

    dice1_2black.style.display = "none";
    dice2_2black.style.display = "none";
    dice3_2black.style.display = "none";
    dice4_2black.style.display = "none";
    dice5_2black.style.display = "none";
    dice6_2black.style.display = "none";

    dice1_3black.style.display = "none";
    dice2_3black.style.display = "none";
    dice3_3black.style.display = "none";
    dice4_3black.style.display = "none";
    dice5_3black.style.display = "none";
    dice6_3black.style.display = "none";

    dice1_4black.style.display = "none";
    dice2_4black.style.display = "none";
    dice3_4black.style.display = "none";
    dice4_4black.style.display = "none";
    dice5_4black.style.display = "none";
    dice6_4black.style.display = "none";

    dice1_5black.style.display = "none";
    dice2_5black.style.display = "none";
    dice3_5black.style.display = "none";
    dice4_5black.style.display = "none";
    dice5_5black.style.display = "none";
    dice6_5black.style.display = "none";
}
function blackDice1() {
    if (randomNumber1 == 1) {
        dice1.style.display = "none";
        dice1black.style.display = "block";
    }
    if (randomNumber1 == 2) {
        dice2.style.display = "none";
        dice2black.style.display = "block";
    }
    if (randomNumber1 == 3) {
        dice3.style.display = "none";
        dice3black.style.display = "block"
    }
    if (randomNumber1 == 4) {
        dice4.style.display = "none";
        dice4black.style.display = "block";
    }
    if (randomNumber1 == 5) {
        dice5.style.display = "none";
        dice5black.style.display = "block";
    }
    if (randomNumber1 == 6) {
        dice6.style.display = "none";
        dice6black.style.display = "block";
    }
}
function blackDice2() {
    if (randomNumber2 == 1) {
        dice1_2.style.display = "none"
        dice1_2black.style.display = "block";
    }
    if (randomNumber2 == 2) {
        dice2_2.style.display = "none";
        dice2_2black.style.display = "block";
    }
    if (randomNumber2 == 3) {
        dice3_2.style.display = "none";
        dice3_2black.style.display = "block";
    }
    if (randomNumber2 == 4) {
        dice4_2.style.display = "none";
        dice4_2black.style.display = "block";
    }
    if (randomNumber2 == 5) {
        dice5_2.style.display = "none";
        dice5_2black.style.display = "block";
    }
    if (randomNumber2 == 6) {
        dice6_2.style.display = "none";
        dice6_2black.style.display = "block";
    }
}
function blackDice3() {
    if (randomNumber3 == 1) {
        dice1_3.style.display = "none";
        dice1_3black.style.display = "block";
    }
    if (randomNumber3 == 2) {
        dice2_3.style.display = "none";
        dice2_3black.style.display = "block";
    }
    if (randomNumber3 == 3) {
        dice3_3.style.display = "none";
        dice3_3black.style.display = "block";
    }
    if (randomNumber3 == 4) {
        dice4_3.style.display = "none";
        dice4_3black.style.display = "block";
    }
    if (randomNumber3 == 5) {
        dice5_3.style.display = "none";
        dice5_3black.style.display = "block";
    }
    if (randomNumber3 == 6) {
        dice6_3.style.display = "none";
        dice6_3black.style.display = "block";
    }
}
function blackDice4() {
    if (randomNumber4 == 1) {
        dice1_4.style.display = "none";
        dice1_4black.style.display = "block";
    }
    if (randomNumber4 == 2) {
        dice2_4.style.display = "none";
        dice2_4black.style.display = "block";
    }
    if (randomNumber4 == 3) {
        dice3_4.style.display = "none";
        dice3_4black.style.display = "block";
    }
    if (randomNumber4 == 4) {
        dice4_4.style.display = "none";
        dice4_4black.style.display = "block";
    }
    if (randomNumber4 == 5) {
        dice5_4.style.display = "none";
        dice5_4black.style.display = "block";
    }
    if (randomNumber4 == 6) {
        dice6_4.style.display = "none";
        dice6_4black.style.display = "block";
    }
}
function blackDice5() {
    if (randomNumber5 == 1) {
        dice1_5.style.display = "none";
        dice1_5black.style.display = "block";
    }
    if (randomNumber5 == 2) {
        dice2_5.style.display = "none";
        dice2_5black.style.display = "block";
    }
    if (randomNumber5 == 3) {
        dice3_5.style.display = "none";
        dice3_5black.style.display = "block";
    }
    if (randomNumber5 == 4) {
        dice4_5.style.display = "none";
        dice4_5black.style.display = "block";
    }
    if (randomNumber5 == 5) {
        dice5_5.style.display = "none";
        dice5_5black.style.display = "block";
    }
    if (randomNumber5 == 6) {
        dice6_5.style.display = "none";
        dice6_5black.style.display = "block";
    }
}
function greyDice1() {
    if (randomNumber1 == 1) {
        dice1.style.display = "block";
        dice1black.style.display = "none";
    }
    if (randomNumber1 == 2) {
        dice2.style.display = "block";
        dice2black.style.display = "none";
    }
    if (randomNumber1 == 3) {
        dice3.style.display = "block";
        dice3black.style.display = "none"
    }
    if (randomNumber1 == 4) {
        dice4.style.display = "block";
        dice4black.style.display = "none";
    }
    if (randomNumber1 == 5) {
        dice5.style.display = "block";
        dice5black.style.display = "none";
    }
    if (randomNumber1 == 6) {
        dice6.style.display = "block";
        dice6black.style.display = "none";
    }
}
function greyDice2() {
    if (randomNumber2 == 1) {
        dice1_2.style.display = "block";
        dice1_2black.style.display = "none";
    }
    if (randomNumber2 == 2) {
        dice2_2.style.display = "block";
        dice2_2black.style.display = "none";
    }
    if (randomNumber2 == 3) {
        dice3_2.style.display = "block";
        dice3_2black.style.display = "none"
    }
    if (randomNumber2 == 4) {
        dice4_2.style.display = "block";
        dice4_2black.style.display = "none";
    }
    if (randomNumber2 == 5) {
        dice5_2.style.display = "block";
        dice5_2black.style.display = "none";
    }
    if (randomNumber2 == 6) {
        dice6_2.style.display = "block";
        dice6_2black.style.display = "none";
    }
}
function greyDice3() {
    if (randomNumber3 == 1) {
        dice1_3.style.display = "block";
        dice1_3black.style.display = "none";
    }
    if (randomNumber3 == 2) {
        dice2_3.style.display = "block";
        dice2_3black.style.display = "none";
    }
    if (randomNumber3 == 3) {
        dice3_3.style.display = "block";
        dice3_3black.style.display = "none"
    }
    if (randomNumber3 == 4) {
        dice4_3.style.display = "block";
        dice4_3black.style.display = "none";
    }
    if (randomNumber3 == 5) {
        dice5_3.style.display = "block";
        dice5_3black.style.display = "none";
    }
    if (randomNumber3 == 6) {
        dice6_3.style.display = "block";
        dice6_3black.style.display = "none";
    }
}
function greyDice4() {
    if (randomNumber4 == 1) {
        dice1_4.style.display = "block";
        dice1_4black.style.display = "none";
    }
    if (randomNumber4 == 2) {
        dice2_4.style.display = "block";
        dice2_4black.style.display = "none";
    }
    if (randomNumber4 == 3) {
        dice3_4.style.display = "block";
        dice3_4black.style.display = "none"
    }
    if (randomNumber4 == 4) {
        dice4_4.style.display = "block";
        dice4_4black.style.display = "none";
    }
    if (randomNumber4 == 5) {
        dice5_4.style.display = "block";
        dice5_4black.style.display = "none";
    }
    if (randomNumber4 == 6) {
        dice6_4.style.display = "block";
        dice6_4black.style.display = "none";
    }
}
function greyDice5() {
    if (randomNumber5 == 1) {
        dice1_5.style.display = "block";
        dice1_5black.style.display = "none";
    }
    if (randomNumber5 == 2) {
        dice2_5.style.display = "block";
        dice2_5black.style.display = "none";
    }
    if (randomNumber5 == 3) {
        dice3_5.style.display = "block";
        dice3_5black.style.display = "none"
    }
    if (randomNumber5 == 4) {
        dice4_5.style.display = "block";
        dice4_5black.style.display = "none";
    }
    if (randomNumber5 == 5) {
        dice5_5.style.display = "block";
        dice5_5black.style.display = "none";
    }
    if (randomNumber5 == 6) {
        dice6_5.style.display = "block";
        dice6_5black.style.display = "none";
    }
}
function upperBonus() {
    if (score >= 63) {
        bonusUp = 35;
        bonus.innerHTML = bonusUp;
        changeBack7();
    } else {
        bonusUp = 0;
        bonus.innerHTML = bonusUp;
    }
};
function upperTotals() {
    totalUp = score + bonusUp;
    console.log("upper total is ", totalUp)
    totalUpper.innerHTML = totalUp;
    totalUpper2.innerHTML = totalUp;
    grandTotal.innerHTML = totalUp + scoreLower;
};
function changeText1() {
    document.getElementById("hold1").innerHTML = hold1Text;
};
function changeText2() {
    document.getElementById("hold2").innerHTML = hold2Text;
}
function changeText3() {
    document.getElementById("hold3").innerHTML = hold3Text;
}
function changeText4() {
    document.getElementById("hold4").innerHTML = hold4Text;
}
function changeText5() {
    document.getElementById("hold5").innerHTML = hold5Text;
}
function changeColour1() {
    document.getElementById("hold1").style.backgroundColor = "darkslategrey"
}
function changeColour2() {
    document.getElementById("hold1").style.backgroundColor = "lightslategrey"
}
function changeColour3() {
    document.getElementById("hold2").style.backgroundColor = "darkslategrey"
}
function changeColour4() {
    document.getElementById("hold2").style.backgroundColor = "lightslategrey"
}
function changeColour5() {
    document.getElementById("hold3").style.backgroundColor = "darkslategrey"
}
function changeColour6() {
    document.getElementById("hold3").style.backgroundColor = "lightslategrey"
}
function changeColour7() {
    document.getElementById("hold4").style.backgroundColor = "darkslategrey"
}
function changeColour8() {
    document.getElementById("hold4").style.backgroundColor = "lightslategrey"
}
function changeColour9() {
    document.getElementById("hold5").style.backgroundColor = "darkslategrey"
}
function changeColour10() {
    document.getElementById("hold5").style.backgroundColor = "lightslategrey"
}
function changeBack1() {
    document.getElementById("row1").style.backgroundColor = "lightslategrey"
    document.getElementById("row1_2").style.backgroundColor = "lightslategrey"
    document.getElementById("score1").style.backgroundColor = "lightslategrey"
}
function changeBack2() {
    document.getElementById("row2").style.backgroundColor = "lightslategrey"
    document.getElementById("row2_2").style.backgroundColor = "lightslategrey"
    document.getElementById("score2").style.backgroundColor = "lightslategrey"
}
function changeBack3() {
    document.getElementById("row3").style.backgroundColor = "lightslategrey"
    document.getElementById("row3_2").style.backgroundColor = "lightslategrey"
    document.getElementById("score3").style.backgroundColor = "lightslategrey"
}
function changeBack4() {
    document.getElementById("row4").style.backgroundColor = "lightslategrey"
    document.getElementById("row4_2").style.backgroundColor = "lightslategrey"
    document.getElementById("score4").style.backgroundColor = "lightslategrey"
}
function changeBack5() {
    document.getElementById("row5").style.backgroundColor = "lightslategrey"
    document.getElementById("row5_2").style.backgroundColor = "lightslategrey"
    document.getElementById("score5").style.backgroundColor = "lightslategrey"
}
function changeBack6() {
    document.getElementById("row6").style.backgroundColor = "lightslategrey"
    document.getElementById("row6_2").style.backgroundColor = "lightslategrey"
    document.getElementById("score6").style.backgroundColor = "lightslategrey"
}
function changeBack7() {
    document.getElementById("row7").style.backgroundColor = "lightslategrey"
    document.getElementById("row7_2").style.backgroundColor = "lightslategrey"
    document.getElementById("bonus").style.backgroundColor = "lightslategrey"
}
function changeBack8() {
    document.getElementById("row8").style.backgroundColor = "lightslategrey"
    document.getElementById("row8_2").style.backgroundColor = "lightslategrey"
    document.getElementById("score7").style.backgroundColor = "lightslategrey"
}
function changeBack9() {
    document.getElementById("row9").style.backgroundColor = "lightslategrey"
    document.getElementById("row9_2").style.backgroundColor = "lightslategrey"
    document.getElementById("score8").style.backgroundColor = "lightslategrey"
}
function changeBack10() {
    document.getElementById("row10").style.backgroundColor = "lightslategrey"
    document.getElementById("row10_2").style.backgroundColor = "lightslategrey"
    document.getElementById("score9").style.backgroundColor = "lightslategrey"
}
function changeBack11() {
    document.getElementById("row11").style.backgroundColor = "lightslategrey"
    document.getElementById("row11_2").style.backgroundColor = "lightslategrey"
    document.getElementById("score10").style.backgroundColor = "lightslategrey"
}
function changeBack12() {
    document.getElementById("row12").style.backgroundColor = "lightslategrey"
    document.getElementById("row12_2").style.backgroundColor = "lightslategrey"
    document.getElementById("score11").style.backgroundColor = "lightslategrey"
}
function changeBack13() {
    document.getElementById("row13").style.backgroundColor = "lightslategrey"
    document.getElementById("row13_2").style.backgroundColor = "lightslategrey"
    document.getElementById("score12").style.backgroundColor = "lightslategrey"
}
function changeBack14() {
    document.getElementById("row14").style.backgroundColor = "lightslategrey"
    document.getElementById("row14_2").style.backgroundColor = "lightslategrey"
    document.getElementById("score13").style.backgroundColor = "lightslategrey"
}
function changeBack15() {
    document.getElementById("row15").style.backgroundColor = "lightslategrey"
    document.getElementById("row15_2").style.backgroundColor = "lightslategrey"
    document.getElementById("row15_3").style.backgroundColor = "lightslategrey"
}
ones.addEventListener("click", () => {
    if (ones != true) {
        ones = true;
        submit1.style.display = "block";
    } else if (ones != false) {
        ones = false;
        submit1.style.display = "none";
    }
    console.log("ones is ", ones)
});
twos.addEventListener("click", () => {
    if (twos != true) {
        twos = true;
        submit2.style.display = "block";
    } else if (twos != false) {
        twos = false;
        submit2.style.display = "none";
    }
    console.log("twos is ", twos)
});
threes.addEventListener("click", () => {
    if (threes != true) {
        threes = true;
        submit3.style.display = "block";
    } else if (threes != false) {
        threes = false;
        submit3.style.display = "none";
    }
    console.log("threes is ", threes)
});
fours.addEventListener("click", () => {
    if (fours != true) {
        fours = true;
        submit4.style.display = "block";
    } else if (fours != false) {
        fours = false;
        submit4.style.display = "none";
    }
    console.log("fours is ", fours)
});
fives.addEventListener("click", () => {
    if (fives != true) {
        fives = true;
        submit5.style.display = "block";
    } else if (fives != false) {
        fives = false;
        submit5.style.display = "none";
    }
    console.log("fives is ", fives)
});
sixes.addEventListener("click", () => {
    if (sixes != true) {
        sixes = true;
        submit6.style.display = "block";
    } else if (sixes != false) {
        sixes = false;
        submit6.style.display = "none";
    }
    console.log("sixes is ", sixes)
});
threeOfAKind.addEventListener("click", () => {
    if (threeOfAKind != true) {
        threeOfAKind = true;
        submit7.style.display = "block";
    } else if (threeOfAKind != false) {
        threeOfAKind = false;
        submit7.style.display = "none";
    }
    console.log("threeOfAKind is ", threeOfAKind)
})
fourOfAKind.addEventListener("click", () => {
    if (fourOfAKind != true) {
        fourOfAKind = true;
        submit8.style.display = "block";
    } else if (fourOfAKind != false) {
        fourOfAKind = false;
        submit8.style.display = "none";
    }
    console.log("fourOfAKind ", fourOfAKind)
})
fullHouse.addEventListener("click", () => {
    if (fullHouse != true) {
        fullHouse = true;
        submit9.style.display = "block";
    } else if (fullHouse != false) {
        fullHouse = false;
        submit9.style.display = "none";
    }
    console.log("fullHouse ", fullHouse)
})
smallStraight.addEventListener("click", () => {
    if (smallStraight != true) {
        smallStraight = true;
        submit10.style.display = "block";
    } else if (smallStraight != false) {
        smallStraight = false;
        submit10.style.display = "none";
    }
    console.log("smallStraight ", smallStraight)
})
largeStraight.addEventListener("click", () => {
    if (largeStraight != true) {
        largeStraight = true;
        submit11.style.display = "block";
    } else if (largeStraight != false) {
        largeStraight = false;
        submit11.style.display = "none";
    }
    console.log("largeStraight ", largeStraight)
})
yahtzee.addEventListener("click", () => {
    if (yahtzee != true) {
        yahtzee = true;
        submit12.style.display = "block";
    } else if (yahtzee != false) {
        yahtzee = false;
        submit12.style.display = "none";
    }
    console.log("yahtzee ", yahtzee)
})
chance.addEventListener("click", () => {
    if (chance != true) {
        chance = true;
        submit13.style.display = "block";
    } else if (chance != false) {
        chance = false;
        submit13.style.display = "none";
    }
    console.log("chance ", chance)
});
y1.addEventListener("click", () => {
    if (y1 != true) {
        y1 = true;
        submit14.style.display = "block";
    } else if (y1 != false) {
        y1 = false;
        submit14.style.display = "none";
    }
    console.log("y1 ", y1)
});
y2.addEventListener("click", () => {
    if (y2 != true) {
        y2 = true;
        submit15.style.display = "block";
    } else if (y2 != false) {
        y2 = false;
        submit15.style.display = "none";
    }
    console.log("y2 ", y2)
});
y3.addEventListener("click", () => {
    if (y3 != true) {
        y3 = true;
        submit16.style.display = "block";
    } else if (y3 != false) {
        y3 = false;
        submit16.style.display = "none";
    }
    console.log("y3 ", y3)
});

hold1.addEventListener("click", () => {
    if (hold1 != true) {
        hold1 = true;
        hold1Text = "Held";
        changeText1("Held");
        changeColour1();
        blackDice1();
    } else if (hold1 != false) {
        hold1 = false;
        hold1Text = "Hold";
        changeText1("Hold");
        changeColour2();
        greyDice1();
    }
    console.log("hold1 is ", hold1)
});

hold2.addEventListener("click", () => {
    if (hold2 != true) {
        hold2 = true;
        hold2Text = "Held";
        changeText2("Held");
        changeColour3();
        blackDice2()

    } else {
        hold2 = false;
        hold2Text = "Hold";
        changeText2("Hold");
        changeColour4();
        greyDice2();
    }
    console.log("hold2 is ", hold2)
});

hold3.addEventListener("click", () => {
    if (hold3 != true) {
        hold3 = true;
        hold3Text = "Held";
        changeText3("Held");
        changeColour5();
        blackDice3()
    } else {
        hold3 = false;
        hold3Text = "Hold";
        changeText3("Hold");
        changeColour6();
        greyDice3();
    }
    console.log("hold3 is ", hold3)
});

hold4.addEventListener("click", () => {
    if (hold4 != true) {
        hold4 = true;
        hold4Text = "Held";
        changeText4("Held");
        changeColour7();
        blackDice4()
    } else {
        hold4 = false;
        hold4Text = "Hold";
        changeText4("Hold");
        changeColour8();
        greyDice4();
    }
    console.log("hold4 is ", hold4)
});

hold5.addEventListener("click", () => {
    if (hold5 != true) {
        hold5 = true;
        hold5Text = "Held";
        changeText5("Held");
        changeColour9();
        blackDice5()
    } else {
        hold5 = false;
        hold5Text = "Hold";
        changeText5("Hold");
        changeColour10();
        greyDice5();
    }
    console.log("hold5 is ", hold5)
});

roll.addEventListener("click", () => {
    diceSound.play();
    setTimeout(function () {
        submitTitle.style.display = "block";
        yahtzeeBonus.style.display = "none";
        pressRoll.style.display = "none";
        showRolls.style.display = "block";
        if (submit1 != true) {
            a.style.display = "block";
        }
        if (submit2 != true) {
            b.style.display = "block";
        }
        if (submit3 != true) {
            c.style.display = "block";
        }
        if (submit4 != true) {
            d.style.display = "block";
        }
        if (submit5 != true) {
            e.style.display = "block";
        }
        if (submit6 != true) {
            f.style.display = "block";
        }
        if (submit7 != true) {
            g.style.display = "block";
        }
        if (submit8 != true) {
            h.style.display = "block";
        }
        if (submit9 != true) {
            i.style.display = "block";
        }
        if (submit10 != true) {
            j.style.display = "block";
        }
        if (submit11 != true) {
            k.style.display = "block";
        }
        if (submit12 != true) {
            l.style.display = "block";
        }
        if (submit13 != true) {
            m.style.display = "block";
        }
        if (submit14 != true) {
            n.style.display = "block";
        }
        if (submit15 != true) {
            o.style.display = "block";
        }
        if (submit16 != true) {
            p.style.display = "block";
        }

        hold.style.display = "block";
        hideDice();

        if (hold1 != true) {
            randomNumber1 = Math.floor(Math.random() * 6) + 1;
            greyDice1();
        }
        if (hold2 != true) {
            randomNumber2 = Math.floor(Math.random() * 6) + 1;
            greyDice2();
        }
        if (hold3 != true) {
            randomNumber3 = Math.floor(Math.random() * 6) + 1;
            greyDice3();
        }
        if (hold4 != true) {
            randomNumber4 = Math.floor(Math.random() * 6) + 1;
            greyDice4();
        }
        if (hold5 != true) {
            randomNumber5 = Math.floor(Math.random() * 6) + 1;
            greyDice5();
        }

        let randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5]
        console.log(randomNumbers)
        rolls += 1;
        showRolls.innerHTML = `Rolls: ${rolls}`;
        console.log(rolls, "rolls")
        if (rolls == 3) {
            submitScore.style.display = "block"
            hold.style.display = "block";
            roll.style.display = "none";
            resetHold();
            blackDice1();
            blackDice2();
            blackDice3();
            blackDice4();
            blackDice5();
        }
    }, 600)
});


submit1.addEventListener("click", () => {
    hideBlackDice();
    hideDice();
    pressRoll.style.display = "block";
    showRolls.style.display = "none";
    submitScore.style.display = "none";
    submitCount++;
    console.log("submit count is ", submitCount)
    resetHold();

    if (submit1 != false) {
        submit1 = true;
        console.log("submit1 is ", submit1)
        hideTickBox()
        roll.style.display = "block";
        changeBack1();
        randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5]
        let result = []
        for (let i = 0; i < randomNumbers.length; i++) {
            if (randomNumbers[i] == 1) {
                result.push(randomNumbers[i])
            }
        }
        sum1 = 0;
        for (let i = 0; i < result.length; i++) {
            sum1 += result[i];
        }
        score1.innerHTML = sum1;
        console.log("total is ", sum1)
        rolls = 0;
        score += sum1;
        console.log("your total score is ", score)
        totalScore.innerHTML = score;
    }
    upperBonus();
    upperTotals();
    if (submitCount == 13) {
        finishGame();
    }
});

submit2.addEventListener("click", () => {
    pressRoll.style.display = "block";
    hideBlackDice();
    hideDice();
    showRolls.style.display = "none";
    submitScore.style.display = "none";
    submitCount++;
    console.log("submit count is ", submitCount)
    resetHold();
    if (submit2 != false) {
        submit2 = true;
        roll.style.display = "block";
        hideTickBox()
        changeBack2();
        randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5]
        let result = []
        for (let i = 0; i < randomNumbers.length; i++) {
            if (randomNumbers[i] == 2) {
                result.push(randomNumbers[i])
            }
        }
        sum2 = 0;
        for (let i = 0; i < result.length; i++) {
            sum2 += result[i];
        }
        score2.innerHTML = sum2;
        console.log("total is ", sum2);
        rolls = 0;
        score += sum2;
        console.log("your total score is ", score)
        totalScore.innerHTML = score;
    }
    upperBonus();
    upperTotals();
    if (submitCount == 13) {
        finishGame();
    }
});
submit3.addEventListener("click", () => {
    pressRoll.style.display = "block";
    hideBlackDice();
    hideDice();
    submitScore.style.display = "none";
    showRolls.style.display = "none";
    submitCount++;
    console.log("submit count is ", submitCount)
    resetHold();
    if (submit3 != false) {
        submit3 = true;
        hideTickBox()
        roll.style.display = "block";
        changeBack3();
        randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5]
        let result = []
        for (let i = 0; i < randomNumbers.length; i++) {
            if (randomNumbers[i] == 3) {
                result.push(randomNumbers[i])
            }
        }
        sum3 = 0;
        for (let i = 0; i < result.length; i++) {
            sum3 += result[i];
        }
        score3.innerHTML = sum3;
        console.log("total is ", sum3);
        rolls = 0;
        score += sum3;
        console.log("your total score is ", score)
        totalScore.innerHTML = score;

    }
    upperBonus();
    upperTotals();
    if (submitCount == 13) {
        finishGame();
    }
});
submit4.addEventListener("click", () => {
    pressRoll.style.display = "block";
    hideBlackDice();
    hideDice();
    showRolls.style.display = "none";
    submitScore.style.display = "none";
    submitCount++;
    console.log("submit count is ", submitCount)
    resetHold();
    if (submit4 != false) {
        submit4 = true;
        hideTickBox()
        roll.style.display = "block";
        changeBack4();
        randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5]
        let result = []
        for (let i = 0; i < randomNumbers.length; i++) {
            if (randomNumbers[i] == 4) {
                result.push(randomNumbers[i])
            }
        }
        sum4 = 0;
        for (let i = 0; i < result.length; i++) {
            sum4 += result[i];
        }
        score4.innerHTML = sum4;
        console.log("total is ", sum4);
        rolls = 0;
        score += sum4;
        console.log("your total score is ", score)
        totalScore.innerHTML = score;
    }
    upperBonus();
    upperTotals();
    if (submitCount == 13) {
        finishGame();
    }
});
submit5.addEventListener("click", () => {
    pressRoll.style.display = "block";
    hideBlackDice();
    hideDice();
    showRolls.style.display = "none";
    submitScore.style.display = "none";
    submitCount++;
    console.log("submit count is ", submitCount)
    resetHold();
    if (submit5 != false) {
        submit5 = true;
        hideTickBox()
        roll.style.display = "block";
        changeBack5();
        randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5]
        let result = []
        for (let i = 0; i < randomNumbers.length; i++) {
            if (randomNumbers[i] == 5) {
                result.push(randomNumbers[i])
            }
        }
        sum5 = 0;
        for (let i = 0; i < result.length; i++) {
            sum5 += result[i];
        }
        score5.innerHTML = sum5;
        console.log("total is ", sum5);
        rolls = 0;
        score += sum5;
        console.log("your total score is ", score)
        totalScore.innerHTML = score;
    }
    upperBonus();
    upperTotals();
    if (submitCount == 13) {
        finishGame();
    }
});
submit6.addEventListener("click", () => {
    pressRoll.style.display = "block";
    hideBlackDice();
    hideDice();
    showRolls.style.display = "none";
    submitScore.style.display = "none";
    submitCount++;
    console.log("submit count is ", submitCount)
    resetHold();
    if (submit6 != false) {
        submit6 = true;
        hideTickBox()
        roll.style.display = "block";
        changeBack6();
        randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5]
        let result = []
        for (let i = 0; i < randomNumbers.length; i++) {
            if (randomNumbers[i] == 6) {
                result.push(randomNumbers[i])
            }
        }
        sum6 = 0;
        for (let i = 0; i < result.length; i++) {
            sum6 += result[i];
        }
        score6.innerHTML = sum6;
        console.log("total is ", sum6);
        rolls = 0;
        score += sum6;
        console.log("your total score is ", score)
        totalScore.innerHTML = score;
    }
    upperBonus();
    upperTotals();
    if (submitCount == 13) {
        finishGame();
    }
});
submit7.addEventListener("click", () => {
    pressRoll.style.display = "block";
    hideBlackDice();
    hideDice();
    showRolls.style.display = "none";
    submitScore.style.display = "none";
    submitCount++;
    console.log("submit count is ", submitCount)
    resetHold();
    if (submit7 != false) {
        submit7 = true;
        hideTickBox()
        roll.style.display = "block";
        changeBack8();
        randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5]
        sum7 = randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4 + randomNumber5
        console.log(randomNumbers)

        for (let i = 0; i < randomNumbers.length; i++) {
            let countOfKind = 0;
            for (let j = 0; j < randomNumbers.length; j++) {
                if (randomNumbers[i] == randomNumbers[j]) {
                    countOfKind++;
                }
            } console.log(countOfKind)
            if (countOfKind >= 3) {
                if (submitCount == 13) {
                    finishGame();
                }
                console.log("three of a kind")
                score7.innerHTML = sum7;
                console.log(sum7)
                scoreLower += sum7;
                totalLower.innerHTML = scoreLower;
                grandTotal.innerHTML = totalUp + scoreLower;
                rolls = 0;
                return

            } else {
                score7.innerHTML = 0;
                scoreLower += 0;
                totalLower.innerHTML = scoreLower;
                grandTotal.innerHTML = totalUp + scoreLower;
                rolls = 0;
                if (submitCount == 13) {
                    finishGame();
                }
            }
        }
    }

});
submit8.addEventListener("click", () => {
    pressRoll.style.display = "block";
    hideBlackDice();
    hideDice();
    showRolls.style.display = "none";
    submitScore.style.display = "none";
    submitCount++;
    console.log("submit count is ", submitCount)
    resetHold();
    if (submit8 != false) {
        submit8 = true;
        hideTickBox()
        roll.style.display = "block";
        changeBack9();
        randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5];
        sum8 = randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4 + randomNumber5;
        console.log(randomNumbers)

        for (let i = 0; i < randomNumbers.length; i++) {
            let countOfKind = 0;
            for (let j = 0; j < randomNumbers.length; j++) {
                if (randomNumbers[i] == randomNumbers[j]) {
                    countOfKind++;
                }
            }
            if (countOfKind >= 4) {
                if (submitCount == 13) {
                    finishGame();
                }
                console.log("four of a kind")
                score8.innerHTML = sum8
                scoreLower += sum8;
                totalLower.innerHTML = scoreLower;
                grandTotal.innerHTML = totalUp + scoreLower;
                rolls = 0;
                return
            } else {
                score8.innerHTML = 0;
                scoreLower += 0;
                totalLower.innerHTML = scoreLower;
                grandTotal.innerHTML = totalUp + scoreLower;
                rolls = 0;
                if (submitCount == 13) {
                    finishGame();
                }
            }
        }
    }

});
submit9.addEventListener("click", () => {
    pressRoll.style.display = "block";
    hideBlackDice();
    hideDice();
    showRolls.style.display = "none";
    submitScore.style.display = "none";
    submitCount++;
    console.log("submit count is ", submitCount)
    resetHold();
    if (submit9 != false) {
        submit9 = true;
        hideTickBox()
        roll.style.display = "block";
        changeBack10();
        randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5];
        console.log(randomNumbers)

        let randomNumbers2 = []
        for (let i = 0; i < randomNumbers.length; i++) {
            for (let j = 0; j < randomNumbers.length; j++) {

                if (randomNumbers[i] == randomNumbers[j]) {
                    randomNumbers2.push(randomNumbers[i]);
                }
            }
        }
        if (randomNumbers2.length == 13) {
            console.log("full house")
            score9.innerHTML = 25;
            scoreLower += 25;
            totalLower.innerHTML = scoreLower;
            grandTotal.innerHTML = totalUp + scoreLower;
        } else {
            score9.innerHTML = 0;
            scoreLower += 0;
            totalLower.innerHTML = scoreLower;
            grandTotal.innerHTML = totalUp + scoreLower;
        }
        if (submitCount == 13) {
            finishGame();
        }
        rolls = 0;
    }
});

submit10.addEventListener("click", () => {
    pressRoll.style.display = "block";
    hideBlackDice();
    hideDice();
    showRolls.style.display = "none";
    submitScore.style.display = "none";
    submitCount++;
    console.log("submit count is ", submitCount)
    resetHold();
    if (submit10 != false) {
        submit10 = true;
        hideTickBox()
        roll.style.display = "block";
        changeBack11();
        randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5];
        const checkSmallStraight1 = [1, 2, 3, 4];
        const checkSmallStraight2 = [2, 3, 4, 5];
        const checkSmallStraight3 = [3, 4, 5, 6];
        if (checkSmallStraight1.every(elem => randomNumbers.includes(elem))) {
            console.log('same members');
            score10.innerHTML = 30;
            scoreLower += 30;
            totalLower.innerHTML = scoreLower;
            grandTotal.innerHTML = totalUp + scoreLower;
        } else if (checkSmallStraight2.every(elem => randomNumbers.includes(elem))) {
            console.log('same members');
            score10.innerHTML = 30;
            scoreLower += 30;
            totalLower.innerHTML = scoreLower;
            grandTotal.innerHTML = totalUp + scoreLower;
        } else if (checkSmallStraight3.every(elem => randomNumbers.includes(elem))) {
            console.log('same members');
            score10.innerHTML = 30;
            scoreLower += 30;
            totalLower.innerHTML = scoreLower;
            grandTotal.innerHTML = totalUp + scoreLower;
        } else {
            console.log('not the same');
            score10.innerHTML = 0;
            totalLower.innerHTML = scoreLower;
            grandTotal.innerHTML = totalUp + scoreLower;
        };
    }
    if (submitCount == 13) {
        finishGame();
    }
    rolls = 0;
})
submit11.addEventListener("click", () => {
    pressRoll.style.display = "block";
    hideBlackDice();
    hideDice();
    showRolls.style.display = "none";
    submitScore.style.display = "none";
    submitCount++;
    console.log("submit count is ", submitCount)
    resetHold();
    if (submit11 != false) {
        submit11 = true;
        hideTickBox()
        roll.style.display = "block";
        changeBack12();
        randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5];
        const checkLargeStraight1 = [1, 2, 3, 4, 5];
        const checkLargeStraight2 = [2, 3, 4, 5, 6];
        if (checkLargeStraight1.sort().join(',') === randomNumbers.sort().join(',')) {
            score11.innerHTML = 40;
            scoreLower += 40;
            totalLower.innerHTML = scoreLower;
            grandTotal.innerHTML = totalUp + scoreLower;
            console.log('same members');
        } else if (checkLargeStraight2.sort().join(',') === randomNumbers.sort().join(',')) {
            score11.innerHTML = 40;
            scoreLower += 40;
            totalLower.innerHTML = scoreLower;
            grandTotal.innerHTML = totalUp + scoreLower;
            console.log('same members');
        } else {
            score11.innerHTML = 0;
            totalLower.innerHTML = scoreLower;
            grandTotal.innerHTML = totalUp + scoreLower;
            console.log("not the same")
        }
    }
    if (submitCount == 13) {
        finishGame();
    }
    rolls = 0;
})
submit12.addEventListener("click", () => {
    pressRoll.style.display = "block";
    hideBlackDice();
    hideDice();
    showRolls.style.display = "none";
    submitScore.style.display = "none";
    submitCount++;
    console.log("submit count is ", submitCount)
    resetHold();
    if (submit12 != false) {
        submit12 = true;
        console.log("yahtzee submit is ", submit12)
        hideTickBox()
        roll.style.display = "block";
        changeBack13();
        randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5]
    }
    if (randomNumber1 == randomNumber2 && randomNumber1 == randomNumber3 && randomNumber1 == randomNumber4 && randomNumber1 == randomNumber5) {
        console.log("yahtzee")
        yahtzeeScore = 50;
        score12.innerHTML = yahtzeeScore;
        scoreLower += 50;
        totalLower.innerHTML = scoreLower;
        grandTotal.innerHTML = totalUp + scoreLower;
    } else {
        yahtzeeScore = 0;
        score12.innerHTML = yahtzeeScore;
        scoreLower += 0;
        totalLower.innerHTML = scoreLower;
        grandTotal.innerHTML = totalUp + scoreLower;
    }
    if (submitCount == 13) {
        finishGame();
    }
    console.log("yahtzee score is ", yahtzeeScore)
    rolls = 0;
});
submit13.addEventListener("click", () => {
    pressRoll.style.display = "block";
    hideBlackDice();
    hideDice();
    showRolls.style.display = "none";
    submitScore.style.display = "none";
    submitCount++;
    console.log("submit count is ", submitCount)
    resetHold();
    if (submit13 != false) {
        submit13 = true;
        hideTickBox()
        roll.style.display = "block";
        changeBack14();
        randomNumbers = [randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5]
        sum13 = randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4 + randomNumber5
    }

    score13.innerHTML = sum13;
    scoreLower += sum13;
    totalLower.innerHTML = scoreLower;
    grandTotal.innerHTML = totalUp + scoreLower;
    rolls = 0;
    if (submitCount == 13) {
        finishGame();
    }
});
submit14.addEventListener("click", () => {
    submit14 = true;
    roll.style.display = "none";
    hold.style.display = "none";
    n.style.display = "none";
    console.log("yahtzee score is ", yahtzeeScore)
    if (yahtzeeScore != 0) {
        if (randomNumber1 == randomNumber2 && randomNumber1 == randomNumber3 && randomNumber1 == randomNumber4 && randomNumber1 == randomNumber5) {
            yahtzeeBonusScore += 100;
            score14.innerHTML = yahtzeeBonusScore;
            yahtzeeBonus.style.display = "block";
            console.log("yes")
            scoreLower += 100;
            totalLower.innerHTML = scoreLower;
            grandTotal.innerHTML = totalUp + scoreLower;
            console.log("lower score is ", scoreLower)
            changeBack15();
        }
    } else {
        score14.innerHTML = yahtzeeBonusScore;
        n.style.display = "none";
        roll.style.display = "block";
        scoreLower += yahtzeeBonusScore;
        totalLower.innerHTML = scoreLower;
        grandTotal.innerHTML = totalUp + scoreLower;
        console.log("no")
    } rolls = 0;
    console.log(rolls)
});
submit15.addEventListener("click", () => {
    submit15 = true;
    roll.style.display = "none";
    hold.style.display = "none";
    console.log("yahtzee score is ", yahtzeeScore)
    if (yahtzeeScore != 0) {
        if (randomNumber1 == randomNumber2 && randomNumber1 == randomNumber3 && randomNumber1 == randomNumber4 && randomNumber1 == randomNumber5) {
            yahtzeeBonusScore += 100;
            score14.innerHTML = yahtzeeBonusScore;
            o.style.display = "none";
            yahtzeeBonus.style.display = "block";
            console.log("yes")
            scoreLower += 100;
            totalLower.innerHTML = scoreLower;
            grandTotal.innerHTML = totalUp + scoreLower;
            console.log("lower score is ", scoreLower)
            changeBack15();
        }
    } else {
        score14.innerHTML = yahtzeeBonusScore;
        o.style.display = "none";
        roll.style.display = "block";
        scoreLower += yahtzeeBonusScore;
        totalLower.innerHTML = scoreLower;
        grandTotal.innerHTML = totalUp + scoreLower;
        console.log("no")
    } rolls = 0;
    console.log(rolls)
});
submit16.addEventListener("click", () => {
    submit16 = true;
    roll.style.display = "none";
    hold.style.display = "none";
    console.log("yahtzee score is ", yahtzeeScore)
    if (yahtzeeScore != 0) {
        if (randomNumber1 == randomNumber2 && randomNumber1 == randomNumber3 && randomNumber1 == randomNumber4 && randomNumber1 == randomNumber5) {
            yahtzeeBonusScore += 100;
            score14.innerHTML = yahtzeeBonusScore;
            p.style.display = "none";
            console.log("yes")
            scoreLower += 100;
            yahtzeeBonus.style.display = "block";
            totalLower.innerHTML = scoreLower;
            grandTotal.innerHTML = totalUp + scoreLower;
            console.log("lower score is ", scoreLower)
            changeBack15();
        }
    } else {
        score14.innerHTML = yahtzeeBonusScore;
        p.style.display = "none";
        roll.style.display = "block";
        scoreLower += yahtzeeBonusScore;
        totalLower.innerHTML = scoreLower;
        grandTotal.innerHTML = totalUp + scoreLower;
        console.log("no")

    } rolls = 0;
    console.log(rolls)
});