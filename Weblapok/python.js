numberOfApps = 20;
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
        

        enemyHitbox = document.createElement("div");
        document.querySelector('section').appendChild(enemyHitbox);

        


        
        number = index + 1;
        newID = document.createAttribute("id", "appIconHolder" + number);
        enemyHitbox.setAttribute("id", "appIconHolder" + number);
        list.push(enemyHitbox)
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
        document.getElementById("appIconHolder" + number).style.backgroundColor = "red";
        document.getElementById("appIconHolder" + number).style.border = "1px solid black"
        };
        enemySkin = document.createElement("img");
        list[0].appendChild(enemySkin);
        enemySkin.src = "../Képek/DOORS.png";
        enemySkin.style.width = "100%";
        enemySkin.style.height = "100%";
        enemySkin.style.filter = "grayscale(100%)"
};

function CampfireBase() {
    campFireHolder = document.createElement("div");
    document.querySelector('body').appendChild(campFireHolder);
    document.createAttribute("id", "CampFireHolder");
    campFireHolder.setAttribute("id", "CampFireHolder");
    CampHolderSize = window.innerHeight / 2;
    campFireHolder.style.width = CampHolderSize;
    campFireHolder.style.height = CampHolderSize;
    campFireHolder.style.position = "relative"
    campFireHolder.style.top = CampHolderSize/2;
    campFireHolder.style.border = "10px solid red";
    campFireHolder.style.zIndex = 999;
    
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
    };
};
function CampfireBlaze() {
    var id = null;
    blazePixel = document.createElement("div");
    document.querySelector('#CampFireHolder').appendChild(blazePixel);
    document.createAttribute("id", "BlazePixel");
    blazePixel.setAttribute("id", "BlazePixel");
    blazePixel.style.display = "block"
    blazePixel.style.backgroundColor = "red";


    pos = campFireHolder.offsetHeight - blazePixel.offsetHeight;
    size = campFireHolder.offsetHeight / 16;
    clearInterval(id);
    id = setInterval(frame, 500);
    function frame() {
        if (pos == campFireHolder.offsetHeight / 5) {
        blazePixel.style.display = "none"
        clearInterval(id);
        } else {
        size -= size / 75;
        pos--;
        blazePixel.style.height = size + "px";
        blazePixel.style.width = size + "px";
        blazePixel.style.top = pos + 'px';
        };
    };
    setTimeout(() => {
        
    }, 1000);
};
function Campfire() {
    CampfireBase();
    setInterval(() => {
        CampfireBlaze();
    }, 2000);
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
    difficultyWarning = document.createElement("p");
    document.querySelector('.python-page-lower').appendChild(difficultyWarning);
    document.createAttribute("id", "DifficultyWarning");
    difficultyWarning.setAttribute("id", "DifficultyWarning");
    difficultyWarning.innerHTML = 'Figyelmeztetés! <br>  A helyes válaszokat 0-4-ig lehet választani, a 0 arra utal ha nincs helyes válasz! <br> 1) Nagyon Könnyű (10) <br> 2) Könnyű (20) <br> 3) Közepes (30) <br> 4) Nehéz (50) <br> 5) Ultra Nehéz (100) <br> 6) Halál mod (200) <br> 7) Egyéb <br> Válasz: ';
    
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
