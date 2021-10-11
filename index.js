function bezar() {
    alert("Ablak bezárva!");
  }
function maximize() {
    alert("Ablak maximalizálva!");
  }
function minimalize() {
    alert("Ablak minimalizálva!");
  }

document.addEventListener("keydown", function () {
  commands()
});

function commands() {
    var command = document.getElementById("commandprompt_input").value;
    switch (command) {
        case "help":
            document.getElementById("output").innerHTML = "Használható parancsok:<br> \
            -ping <br>\
            -pong";
            break;
        case "ping":
          document.getElementById("output").innerHTML = "PONG"
          break;
        case "pong":
          document.getElementById("output").innerHTML = "PING"
          break;
    
        default:
            document.getElementById("output").innerHTML = 'Error! Please enter valid command! To see what commands you can use type "help" in to the command line';
            break;
    }
}

window.onload = function() {
  HexGenerator()

  document.getElementById("card0").style.backgroundColor = RobertColor;
  document.getElementById("card1").style.backgroundColor = RobertColor;
  document.getElementById("card2").style.backgroundColor = RobertColor;
  document.getElementById("card3").style.backgroundColor = RobertColor;
}


function HexGenerator() {
  HEXHolder = [];
  for (let index = 0; index < 6; index++) {
    HEX = Math.floor(Math.random() * (9 - 1 + 1) + 1);
    HEXHolder.push(HEX.toString())
  };
  RobertColor = "#"
  for (let index = 0; index < HEXHolder.length; index++) {
    RobertColor += HEXHolder[index]
  }
}