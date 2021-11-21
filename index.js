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
  };
});

function ClearInput() {
  setTimeout(() =>
  document.getElementById("commandprompt_input").value = "",
  500
)};
function commands() {
    commandList = ["ping", "pong", "partnereink", "logonk", "tagok", "python"]
    var command = document.getElementById("commandprompt_input").value;
    switch (command) {
        case "?":
        case "help":
            document.getElementById("output").innerHTML = "Használható parancsok:<br> \
            -"+commandList[0]+"<br>\
            -"+commandList[1]+"<br>\
            -"+commandList[2]+"<br>\
            -"+commandList[3]+"<br>\
            -"+commandList[4]+"<br>\
            -"+commandList[5];

            ClearInput();
            break;
        case "ping":
          document.getElementById("output").innerHTML = "PONG"
          ClearInput();
          break;
        case "pong":
          document.getElementById("output").innerHTML = "PING"
          ClearInput();
          break;
        case "partnereink":
          window.open("./Weblapok/partnereink.html")
          ClearInput();
          break;
        case "logonk":
          window.open("./Weblapok/logonk.html")
          ClearInput();
          break;
        case "tagok":
          window.open("./Weblapok/tagok.html")
          ClearInput();
          break;
        case "python":
          window.open("./Weblapok/python.html")
          ClearInput();
          break;
    
        default:
            document.getElementById("output").innerHTML = 'Error! Please enter valid command! To see what commands you can use type "help" in to the command line';
            ClearInput();
            break;
    };
};

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