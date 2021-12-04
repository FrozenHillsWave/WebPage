numberOfApps = 10;
CurrentAppIconWidthList =  []


function PYthonTitle() {
    document.getElementById("python-source").innerHTML = "C:/Doors/py.exe"
    document.getElementById("python-source").style.fontFamily = "Source Code Pro, monospace"
    document.getElementById("python-source").style.fontWeight = "900"
    document.getElementById("python-source").style.color = "black"
}; 
function AppIconCreation() {
    CurrentAppIconWidth = 0
    list = []

    for (let index = 0; index < numberOfApps; index++) {
        AppIconHolder = document.createElement("div");
        document.querySelector('section').appendChild(AppIconHolder);
        
        number = index + 1;
        newID = document.createAttribute("id", "appIconHolder" + number);
        AppIconHolder.setAttribute("id", "appIconHolder" + number);
        list.push(AppIconHolder)
        //console.log(űist)
        /*
        window.addEventListener('resize', function(){
            setTimeout(() => {
                NE = 0
            }, 0.000001);
            GG.push(NE)
            NE += document.getElementById("appIconHolder1").offsetWidth
            for (let index = 0; index < numberOfApps; index++) {
                document.getElementById("appIconHolder" + index).style.marginLeft = GG[index];
                
            }
            setTimeout(() => {
                GG = []
            }, 0.00000001);
            
            console.log(GG)
        });*/

        for (let index = 0; index < numberOfApps; index++) {
            CurrentAppIconWidthList.push(CurrentAppIconWidth)
            CurrentAppIconWidth += document.getElementById("appIconHolder1").offsetWidth / numberOfApps
        };
        for (let x = 0; x < numberOfApps; x++) {     
            setInterval(() => {
                MaxWidth = document.getElementById("system-tray").offsetWidth
                AppIconWidth = document.getElementById("appIconHolder" + (x+1)).style.width = MaxWidth / numberOfApps;
                document.getElementById("appIconHolder" + (x+1)).style.marginLeft = CurrentAppIconWidthList[x];
        }, 1);}

        document.getElementById("appIconHolder" + number).style.height = "100%";
        document.getElementById("appIconHolder" + number).style.position = "absolute";
        document.getElementById("appIconHolder" + number).style.zIndex = "996";
        document.getElementById("appIconHolder" + number).style.backgroundColor = "grey";
        document.getElementById("appIconHolder" + number).style.border = "1px solid black"
        };
};

function CampfireBase() {
    campFireHolder = document.createElement("div");
    document.querySelector('body').appendChild(campFireHolder);
    document.createAttribute("id", "CampFireHolder");
    campFireHolder.setAttribute("id", "CampFireHolder");
    CampHolderSize = window.innerHeight/2;
    campFireHolder.style.width = CampHolderSize;
    campFireHolder.style.height = CampHolderSize;
    campFireHolder.style.position = "relative"
    campFireHolder.style.top = CampHolderSize/1.75;
    //campFireHolder.style.border = "10px solid red";
    campFireHolder.style.left = "77.5%";
    campFireHolder.style.zIndex = 100;
    
    for (let index = 0; index < 2; index++) {
        campFireWood = document.createElement("div");
        document.querySelector('#CampFireHolder').appendChild(campFireWood);
        document.createAttribute("id", "CampFire" + index);
        campFireWood.setAttribute("id", "CampFire" + index);
        campFireWood.style.marginLeft = CampHolderSize/4;
        campFireWood.style.width = CampHolderSize/2;
        campFireWood.style.height = CampHolderSize/8;
        campFireWood.style.position = "absolute";
        campFireWood.style.top = CampHolderSize - CampHolderSize/6;
        campFireWood.style.zIndex = 101;
        if (index == 1) {
            campFireWood.style.transform = "rotate(350deg)";
            campFireWood.style.top += 10;
        } else {
            campFireWood.style.transform = "rotate(190deg)";
            campFireWood.style.filter = "brightness(90%)";
        };
        campFireWood.style.borderRadius = "10px";
        campFireWood.style.backgroundColor = "brown";

        campFireWoodFront = document.createElement("div");
        document.querySelector('#CampFire' + index).appendChild(campFireWoodFront);
        campFireWoodFront.style.width = campFireWood.offsetWidth/4;
        campFireWoodFront.style.height = campFireWood.offsetHeight;
        campFireWoodFront.style.marginLeft = campFireWood.offsetWidth - campFireWood.offsetWidth/4;
        campFireWoodFront.style.borderRadius = "10px";
        campFireWoodFront.style.backgroundColor = "#654321";
        campFireWoodFront.style.zIndex = 102; 
    };

    campFireImg = document.createElement("img");
    document.querySelector('#CampFireHolder').appendChild(campFireImg);
    document.createAttribute("id", "CampFireImg");
    campFireImg.setAttribute("id", "CampFireImg");
    campFireImg.style.width = CampHolderSize / 2;
    campFireImg.src = "../Képek/Blaze.png";
    campFireImg.style.height = CampHolderSize / 2;
    campFireImg.style.position = "absolute"
    campFireImg.style.left = CampHolderSize / 4;
    campFireImg.style.top = CampHolderSize/2.25;
    campFireImg.style.zIndex = 103;
};
done = true;
function CampfireBlaze() {
    done = false;
    var size = campFireHolder.offsetHeight / 16;
    var id = null;
    var blazeStart = Math.random() * (4 - 1.5) + 1.5;
    var shrink = Math.random() * (200 - 100) + 100;
    var speed = Math.random() * (3 - 1) + 1;
    var Colors = ["#E40230", "#E4101C", "#EA5B0C"]
    var Position = campFireHolder.offsetHeight - 2*(CampHolderSize/8);
    var KillHeight = Math.random() * (100 - 1) + 1;

    blazePixel = document.createElement("div");
    document.querySelector('#CampFireHolder').appendChild(blazePixel);
    document.createAttribute("id", "BlazePixel");
    blazePixel.setAttribute("id", "BlazePixel");
    blazePixel.style.backgroundColor = Colors[parseInt(Math.random() * (Colors.length - 1) + 1)];
    blazePixel.style.marginLeft = campFireHolder.offsetWidth / blazeStart;
    blazePixel.style.position = "absolute";
    blazePixel.style.zIndex = 99;

    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (Position < KillHeight) {
            clearInterval(id);
            this.blazePixel.remove();
            done = true;
        } else { 
            size -= size / shrink;
            Position -= speed;
            if (shrink < 100) {
                blazeStart += 0.5;
            } else {
                blazeStart -= 0.5;
            }
            //console.log(size)
            //console.log(Position)
            blazePixel.style.height = size + "px";
            blazePixel.style.width = size + "px";
            blazePixel.style.left = blazeStart + "px";
            
            blazePixel.style.top = Position + 'px'
        };
    };
};
function Campfire() {
    CampfireBase();
    setInterval(() => {
        if (done == true) {
            CampfireBlaze();
        };
    }, 10);
};


function BasicError(Option1, Option2) {
    error = document.createElement("p");
    document.querySelector('.python-page-lower').appendChild(error);
    error.innerHTML = 'Hiba, kérem adjon meg helyes választ ' + Option1 + ' vagy '+ Option2 +'!'
};
function ReplaceingUsedInputs(replaceHolder, replaceText, replaceItem) {
    replacement = document.createElement("span");
    document.querySelector(replaceHolder).appendChild(replacement);
    replacement.innerHTML = replaceText;
    replaceItem.remove() 
};


FirstQuestionCounter = 1
SecondQuestionCounter = 1

function QuizFirstQuestionError() {
    BasicError('"Igen"', '"Nem"');

    firstquestion = document.createElement("p");
    document.querySelector('.python-page-lower').appendChild(firstquestion);
    document.createAttribute("id", "FirstQuestion" + (FirstQuestionCounter + 1))
    firstquestion.setAttribute("id", "FirstQuestion" + (FirstQuestionCounter + 1));
    firstquestion.innerHTML = 'Kezdhetünk?: '

    AnswerInput = document.createElement("input");
    document.createAttribute("id", "AnswerInput" + (FirstQuestionCounter + 1))
    AnswerInput.setAttribute("id", "AnswerInput" + (FirstQuestionCounter + 1));
    AnswerInput.setAttribute("maxlength", 5);
    document.querySelector('#FirstQuestion' + (FirstQuestionCounter + 1)).appendChild(AnswerInput);

    AnswerInputItem = document.getElementById("AnswerInput" + FirstQuestionCounter)
    ReplaceingUsedInputs('#FirstQuestion' + FirstQuestionCounter, AnswerInputItem.value, AnswerInputItem)
    
    FirstQuestionCounter += 1
};
function QuizFirstQuestionNegative() {
    bye = document.createElement("p");
    document.querySelector('.python-page-lower').appendChild(bye);
    bye.innerHTML = 'Találkozunk késöbb'

    AnswerInputItem = document.getElementById("AnswerInput" + FirstQuestionCounter)
    ReplaceingUsedInputs('#FirstQuestion' + FirstQuestionCounter, AnswerInputItem.value, AnswerInputItem)
};
function QuizFirstQuestionPositive() {
    secondquestion = document.createElement("p");
    document.querySelector('.python-page-lower').appendChild(secondquestion);
    document.createAttribute("id", "SecondQuestion" + SecondQuestionCounter);
    secondquestion.setAttribute("id", "SecondQuestion" + SecondQuestionCounter);
    secondquestion.innerHTML = 'Quizt irnál vagy probálnál? (1 / 2): ';

    AnswerInput2 = document.createElement("input");
    document.createAttribute("id", "AnswerInput2_" + (SecondQuestionCounter + 1));
    AnswerInput2.setAttribute("id", "AnswerInput2_" + (SecondQuestionCounter + 1));
    document.querySelector('#SecondQuestion' + SecondQuestionCounter).appendChild(AnswerInput2);
    AnswerInput2.setAttribute("maxlength", 1);
    
    AnswerInputItem = document.getElementById("AnswerInput" + FirstQuestionCounter)
    ReplaceingUsedInputs('#FirstQuestion' + FirstQuestionCounter, AnswerInputItem.value, AnswerInputItem)

    SecondQuestionCounter += 1;
};


function QuizSecondQuestionError() {
    BasicError('"1"', '"2"');

    secondquestion = document.createElement("p");
    document.querySelector('.python-page-lower').appendChild(secondquestion);
    document.createAttribute("id", "SecondQuestion" + SecondQuestionCounter);
    secondquestion.setAttribute("id", "SecondQuestion" + SecondQuestionCounter);
    secondquestion.innerHTML = 'Quizt irnál vagy probálnál? (1 / 2): ';

    AnswerInput2 = document.createElement("input");
    document.createAttribute("id", "AnswerInput2_" + (SecondQuestionCounter + 1));
    AnswerInput2.setAttribute("id", "AnswerInput2_" + (SecondQuestionCounter + 1));
    document.querySelector('#SecondQuestion' + SecondQuestionCounter).appendChild(AnswerInput2);
    AnswerInput2.setAttribute("maxlength", 1);
    
    AnswerInputItem = document.getElementById("AnswerInput2_" + SecondQuestionCounter)
    ReplaceingUsedInputs('#SecondQuestion' + (SecondQuestionCounter - 1), AnswerInputItem.value, AnswerInputItem)

    SecondQuestionCounter += 1;
};
function QuizWritingBegin() {
    
};
function QuizTestBegin() {
    difficultyList = ["Nagyon Könnyű (10)", "Könnyű (20) 🔒", "Közepes (30) 🔒", "Nehéz (50) 🔒", "Ultra Nehéz (100) 🔒" , "Halál mod (200) 🔒", "Egyéb 🔒"];
    difficultyWarning = document.createElement("p");
    document.querySelector('.python-page-lower').appendChild(difficultyWarning);
    document.createAttribute("id", "DifficultyWarning");
    difficultyWarning.setAttribute("id", "DifficultyWarning");
    difficultyWarning.innerHTML = 'Figyelmeztetés! <br>  A helyes válaszokat 0-4-ig lehet választani, a 0 arra utal ha nincs helyes válasz! <br> 1)  <br> Válasz: ';
    
    difficultyInput = document.createElement("input");
    document.createAttribute("id", "DifficultyInput");
    document.querySelector('#DifficultyWarning').appendChild(difficultyInput);
    difficultyInput.setAttribute("id", "DifficultyInput");
    difficultyInput.setAttribute("maxlength", 1);
    
    AnswerInputItem = document.getElementById("AnswerInput2_" + SecondQuestionCounter)
    ReplaceingUsedInputs('#SecondQuestion' + (SecondQuestionCounter - 1), AnswerInputItem.value, AnswerInputItem)
};


function FullPythonAppWarning() {
    //Refusal message
};
function ActualQuiz() {
    //Paragraph kérdéssel for loopban
    //4 kérdés for looppal
};


window.onload = function() {
    PYthonTitle();
    AppIconCreation();
    Campfire();
};

document.addEventListener("keydown", function () {
    if (event.keyCode == "13") {
        FirstQuestion = document.getElementById("AnswerInput" + FirstQuestionCounter).value;
        switch (FirstQuestion) {
            case "igen":
            case "Igen":
                QuizFirstQuestionPositive();
                Second();
                break;
            case "nem":
            case "Nem":
                QuizFirstQuestionNegative();
                break;
            default:
                QuizFirstQuestionError();
                break;
        };
    };
});

function Second() {
    document.addEventListener("keydown", function () {
        if (event.keyCode == "13") { 
            SecondQuestion = document.getElementById("AnswerInput2_" + SecondQuestionCounter).value;
            switch (SecondQuestion) {
                case 1:
                case "1":
                    QuizWritingBegin();
                    break;
                case 2:
                case "2":
                    QuizTestBegin();
                    Difficulty()
                    break;
                default:
                    QuizSecondQuestionError();
                    break;
            };
        };
    });
};
function Difficulty() {
    document.addEventListener("keydown", function () {
        if (event.keyCode == "13") { 
            DifficultyChoosing = document.getElementById("DifficultyInput").value;
            switch (DifficultyChoosing) {
                case 1:
                case "1":
                    ActualQuiz()
                    //1st option
                    break;
                case 7:
                case "7":
                    //custom option
                    alert("Egyéb")
                    break;
                default:
                    FullPythonAppWarning();
                    break;
            };
        };
    });
};
