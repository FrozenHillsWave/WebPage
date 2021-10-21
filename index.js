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
  if (event.keyCode == "13") {
    commands()
  }
});

function commands() {
    commandList = ["ping", "pong", "partnereink", "logonk", "unalom"]
    var command = document.getElementById("commandprompt_input").value;
    switch (command) {
        case "help":
            document.getElementById("output").innerHTML = "Használható parancsok:<br> \
            -"+commandList[0]+"<br>\
            -"+commandList[1]+"<br>\
            -"+commandList[2]+"<br>\
            -"+commandList[3]+"<br>\
            -"+commandList[4];
            break;
        case "ping":
          document.getElementById("output").innerHTML = "PONG"
          break;
        case "pong":
          document.getElementById("output").innerHTML = "PING"
          break;
        case "partnereink":
          window.open("partnereink.html")
          break;
        case "logonk":
          window.open("logonk.html")
          break;
        case "unalom":
          window.open("unalom.html")
          break;
    
        default:
            document.getElementById("output").innerHTML = 'Error! Please enter valid command! To see what commands you can use type "help" in to the command line';
            break;
    }
}

window.onload = function() {
  HexGenerator()

  document.getElementById("card0").style.backgroundColor = HexColor;
  document.getElementById("card1").style.backgroundColor = HexColor;
  document.getElementById("card2").style.backgroundColor = HexColor;
  document.getElementById("card3").style.backgroundColor = HexColor;
}


function HexGenerator() {
  HEXHolder = [];
  for (let index = 0; index < 6; index++) {
    HEX = Math.floor(Math.random() * (9 - 1 + 1) + 1);
    HEXHolder.push(HEX.toString())
  };
  HexColor = "#"
  for (let index = 0; index < HEXHolder.length; index++) {
    HexColor += HEXHolder[index]
  }
}