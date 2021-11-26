function PYthonTitle() {
    document.getElementById("python-source").innerHTML = "C:/Doors/py.exe"
    document.getElementById("python-source").style.fontFamily = "Source Code Pro, monospace"
    document.getElementById("python-source").style.fontWeight = "900"
    document.getElementById("python-source").style.color = "black"
};
numberOfApps = 20;
CurrentAppIconWidthList =  []
    
function AppIconCreation() {
    CurrentAppIconWidth = 0
    űist = []

    for (let index = 0; index < numberOfApps; index++) {
        

        enemyHitbox = document.createElement("div");
        document.querySelector('section').appendChild(enemyHitbox);

        


        
        number = index + 1;
        newID = document.createAttribute("id", "appIconHolder" + number);
        enemyHitbox.setAttribute("id", "appIconHolder" + number);
        űist.push(enemyHitbox)
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
        űist[0].appendChild(enemySkin);
        enemySkin.src = "../Képek/DOORS.png";
        enemySkin.style.width = "100%";
        enemySkin.style.height = "100%";
        enemySkin.style.filter = "grayscale(100%)"
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
    
    AnswerInputItem = document.getElementById("AnswerInput2_" + SecondQuestionCounter)
    ReplaceingUsedInputs('#SecondQuestion' + (SecondQuestionCounter - 1), AnswerInputItem.value, AnswerInputItem)

    console.log('#SecondQuestion' + SecondQuestionCounter)

    SecondQuestionCounter += 1;
};
function QuizSecondQuestionNegative() {
    
};
function QuizSecondQuestionPositive() {
    
};

window.onload = function() {
    PYthonTitle();
    AppIconCreation();
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
                    break;
                default:
                    QuizSecondQuestionError();
                    console.log(SecondQuestion)
                    break;
            };
        };
    });
};
