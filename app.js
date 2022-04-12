// let inputnumber =
//   document.body.children[1].children[2].children["user-number"].value;
// let sum = 0;

// const mimeTypes = require("nodemailer/lib/mime-funcs/mime-types");

// function cal() {
//   for (
//     i = 0;
//     i > document.body.children[1].children[2].children["user-number"].value;
//     i++
//   );
//   {
//     sum = sum + (sum + 1);
//     document.getElementById("calculated-sum").textContent = sum;
//   }

//   document.getElementById("calculated-sum").style.display = "block";
// }

// document.querySelector("button").addEventListener("click", cal);
//first calculator

const calculatesumbuttonelement = document.querySelector("#calculator button");

function calculateSum() {
  const usernumberelement = document.getElementById("user-number");
  const enterednumber = usernumberelement.value;

  let sumuptonumber = 0;

  for (let i = 0; i <= enterednumber; i++) {
    sumuptonumber = sumuptonumber + i;
  }

  const output = document.getElementById("calculated-sum");
  output.textContent = sumuptonumber;
  output.style.display = "block";
}

calculatesumbuttonelement.addEventListener("click", calculateSum);

//second

const highlightbutton = document.querySelector("#highlight-links button");

function lighton() {
  const links = document.querySelectorAll("#highlight-links a");

  for (const anchor of links) {
    anchor.classList.add("highlight");
  }
}

highlightbutton.addEventListener("click", lighton);

//third

const dummy = {
  firstname: "max",
  lastname: "fuck",
  age: "13",
};

const databutton = document.querySelector("#user-data button");

function bringmydata() {
  const newul = document.getElementById("output-user-data");

  newul.innerHTML = "";

  for (const ob in dummy) {
    const newlist = document.createElement("li");
    const outputtext = ob.toUpperCase() + ": " + dummy[ob];
    newlist.textContent = outputtext;

    newul.append(newlist);
  }
}

databutton.addEventListener("click", bringmydata);

// fourth

const rollDiceButtonElement = document.querySelector("#statistics button");

function rolldice() {
  return Math.floor(Math.random() * 6) + 1; //math.floor() = 5.65 ==> 5
}

function derivenumberofdicerolls() {
  const targetnumberinputelement =
    document.getElementById("user-target-number");
  const dicerollslistelement = document.getElementById("dice-rolls");
  const enterednumber = targetnumberinputelement.value;
  dicerollslistelement.innerHTML = "";

  let hasrolledtargetnumber = false;
  let numberofrolls = 0;

  while (!hasrolledtargetnumber) {
    const rollednumber = rolldice();
    numberofrolls++;
    const newrolllistelement = document.createElement("li");
    const outputtext = "Roll " + numberofrolls + ": " + rollednumber;
    newrolllistelement.innerText = outputtext;
    dicerollslistelement.append(newrolllistelement);

    console.log(outputtext);
    hasrolledtargetnumber = rollednumber == enterednumber;
  }

  const outputtotalrollselement = document.getElementById("output-total-rolls");
  const outputtargetnumberelement = document.getElementById(
    "output-target-number",
  );
  outputtargetnumberelement.textContent = enterednumber;
  outputtotalrollselement.textContent = numberofrolls;
}

rollDiceButtonElement.addEventListener("click", derivenumberofdicerolls);
