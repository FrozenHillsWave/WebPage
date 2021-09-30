function bezar() {
    alert("Ablak bezárva!");
  }
function maximize() {
    alert("Ablak maximalizálva!");
  }
function minimalize() {
    alert("Ablak minimalizálva!");
  }

function commands() {
    var command = document.getElementById("commandprompt_input").value;
    //document.getElementById("output").innerHTML = "Your answer is " + command;
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