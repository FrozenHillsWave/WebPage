var numberOfApps = 10;
var CurrentAppIconWidthList =  [];

function CustomBackgroundGeneration() {
    background = document.createElement("img");
    document.querySelector('body').appendChild(background);
    background.src = "../Képek/PythonBackgroundBase.jpg";
    background.style.position = "absolute";
    background.style.filter = "brightness(40%)";
    background.style.webkitUserDrag = "none";
    setInterval(() => {
        background.style.height = window.innerHeight;
        background.style.width = window.innerWidth;
        background.style.left = 0;
        background.style.top = 0;
    }, 100);

    //Készitünk egy neon keretet
    neonframe = document.createElement("div");
    document.querySelector("body").appendChild(neonframe);
    neonframe.style.position = "absolute";
    setInterval(() => {
        var FreeSpace = window.innerWidth - neonframe.offsetWidth;
        var TopMargin = window.innerHeight - neonframe.offsetHeight;
        neonframe.style.left = parseInt(FreeSpace/2);
        neonframe.style.top = parseInt(TopMargin/2);
        neonframe.style.height = window.innerHeight / 1.15;
        neonframe.style.width = window.innerWidth / 1.05;
        neonframe.style.border = "10px solid #1167b1";
        neonframe.style.filter = "drop-shadow(0 0 15px #59bfff) contrast(200%)";
    }, 99);
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
    campFireHolder.style.top = window.innerHeight/3;
    //campFireHolder.style.border = "1px solid red";
    campFireHolder.style.left = window.innerWidth - campFireHolder.offsetWidth;
    campFireHolder.style.zIndex = 100;
    
    for (let index = 0; index < 2; index++) {
        campFireWood = document.createElement("div");
        document.querySelector('#CampFireHolder').appendChild(campFireWood);
        document.createAttribute("id", "CampFire" + index);
        campFireWood.setAttribute("id", "CampFire" + index);
        CampFireMiddle = CampHolderSize - campFireWood.offsetWidth/1.35
        campFireWood.style.left = CampFireMiddle;
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
            campFireWood.style.filter = "brightness(80%)";
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
    campFireImg.style.webkitUserDrag = "none";
    campFireImg.style.height = CampHolderSize / 2;
    campFireImg.style.position = "absolute"
    campFireImg.style.left = CampFireMiddle + 10;
    campFireImg.style.top = CampHolderSize/2.25;
    campFireImg.style.zIndex = 103;
};
done = true;
function CampfireBlaze() {
    done = false;
    var size = campFireHolder.offsetHeight / 16;
    var id = null;
    var blazeStart = document.getElementById("CampFireImg").offsetWidth
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


var FirstQuestionCounter = 1
var SecondQuestionCounter = 1

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
    difficultyWarning.innerHTML = 'Figyelmeztetés! <br>  A helyes válaszokat 0-4-ig lehet választani, a 0 arra utal ha nincs helyes válasz! <br> 1) Nagyon Könnyű (10) <br> 2) Könnyű (20) 🔒 <br> 3) Közepes (30) 🔒 <br> 4) Nehéz (50) 🔒 <br> 5) Ultra Nehéz (100) 🔒 <br> 6) Halál mod (200) 🔒 <br> 7) Egyéb 🔒  <br> Válasz: ';
    
    difficultyInput = document.createElement("input");
    document.createAttribute("id", "DifficultyInput");
    document.querySelector('#DifficultyWarning').appendChild(difficultyInput);
    difficultyInput.setAttribute("id", "DifficultyInput");
    difficultyInput.setAttribute("maxlength", 1);
    
    AnswerInputItem = document.getElementById("AnswerInput2_" + SecondQuestionCounter);
    ReplaceingUsedInputs('#SecondQuestion' + (SecondQuestionCounter - 1), AnswerInputItem.value, AnswerInputItem)
};

var FullPythonCounter = 1;
var FullVersionQuestionCounter = 1;
function FullPythonAppWarning() {
    if (FullPythonCounter == 1) {
        AnswerInputItem = document.getElementById("DifficultyInput");
        ReplaceingUsedInputs('#DifficultyWarning', AnswerInputItem.value, AnswerInputItem)
        FullPythonCounter++;
    } else {
        AnswerInputItem = document.getElementById("DifficultyInput");
        ReplaceingUsedInputs('#FullVersionQuestion' + (FullVersionQuestionCounter - 1), AnswerInputItem.value, AnswerInputItem)
    };
    
    FullVersion = document.createElement("p");
    document.querySelector('.python-page-lower').appendChild(FullVersion);
    FullVersion.innerHTML = "A többi mód eléréséért tölstsd le a python applickációnkat!"

    difficultyAnswer = document.createElement("p");
    document.createAttribute("id", "FullVersionQuestion" + FullVersionQuestionCounter);
    difficultyAnswer.setAttribute("id", "FullVersionQuestion" + FullVersionQuestionCounter);
    document.querySelector('.python-page-lower').appendChild(difficultyAnswer);
    difficultyAnswer.innerHTML = "Válasz: ";

    difficultyInput = document.createElement("input");
    document.createAttribute("id", "DifficultyInput");
    document.querySelector('#FullVersionQuestion' + FullVersionQuestionCounter).appendChild(difficultyInput);
    difficultyInput.setAttribute("id", "DifficultyInput");
    difficultyInput.setAttribute("maxlength", 1);  

    FullVersionQuestionCounter++;
};

var numberOfAnswers = 4;
var Running = true;
var Runned = 1;
var AnswerCounter = 0;
function ActualQuiz() {
    try {
        if (FullPythonCounter == 1) {
            AnswerInputItem = document.getElementById("DifficultyInput");
            ReplaceingUsedInputs('#DifficultyWarning', AnswerInputItem.value, AnswerInputItem)
            FullPythonCounter++;
        } else {
            AnswerInputItem = document.getElementById("DifficultyInput");
            ReplaceingUsedInputs('#FullVersionQuestion' + (FullVersionQuestionCounter - 1), AnswerInputItem.value, AnswerInputItem)
        };
    } catch (error) {
        
    };


    Running = false

    Questions = ["Kinek van a legtöbb aranylabdája?", "Ronaldo melyik csapatban játszik?", "Ki a francia rekord bajnok?", "Ki nyert legtöbbször világbajnokságot?", "Ki nyert legtöbbször labdarúgó olimpiát?", "Ki nyerte meg legtöbbször a Bajnokok ligáját?", "Melyik játékos értéke volt a legtöbb amiért eladók?", "Ki nem magyar válogatott?", "Mennyi az összértéke kb a magyar válogatottnak?", "Ki a legtöbbszörös válogatott?"]
    Answers = [
                "L.Messi@*", "C.Ronaldo", "R.Lewandowski", "Neymar",
                "Real Madrid", "Juventus", "Manchester United@*", "Manchester City",    
                "Paris Saint German", "Olympique de Marseille", "As Monaco fc", "As Saint-Étienne@*",     
                "Brazília@*", "Argentína", "Magyarország", "Anglia",
                "Brazília", "Argentína", "Magyarország@*", "Anglia",
                "Barcelona", "AC Milan", "PSG", "Real Madrid@*",
                "Neymar@*", "Mbappe", "Ronaldo", "Messi",
                "Dibusz Dénes", "Willi Orbán", "Loic Nego", "Dzsudzsák Balázs@*",
                "70M Euró", "100M Euró@*", "50M Euró", "110M Euró",
                "Dzsudzsák Balázs", "Puskás Ferenc", "Király Gábor@*", "Hidegkuti Nándor"
            ];

    quizQuestion = document.createElement("p");
    document.querySelector('.python-page-lower').appendChild(quizQuestion);
    document.createAttribute("id", "Question" + Runned);
    quizQuestion.setAttribute("id", "Question" + Runned);
    quizQuestion.innerHTML = Questions[Runned-1]

    
    for (let index = 0; index < numberOfAnswers; index++) {
        quizAnswer = document.createElement("p");
        document.querySelector("#Question" + Runned).appendChild(quizAnswer);
        document.createAttribute("id", "Answer" + (index + 1));
        quizAnswer.setAttribute("id", "Answer" + (index + 1));
        quizAnswer.innerHTML = Answers[AnswerCounter].split("@", 1);
        AnswerCounter++;
    };

    quizAnswerInputHolder = document.createElement("span");
    document.createAttribute("id", "QuizAnswerInputHolder" + Runned);
    quizAnswerInputHolder.setAttribute("id", "QuizAnswerInputHolder" + Runned);
    document.querySelector("#Question" + Runned).appendChild(quizAnswerInputHolder);
    quizAnswerInputHolder.innerHTML = "Válasz: ";


    quizAnswerInput = document.createElement("input");
    document.createAttribute("id", "QuizAnswerInput" + Runned);
    quizAnswerInput.setAttribute("id", "QuizAnswerInput" + Runned);
    document.querySelector("#Question" + Runned).appendChild(quizAnswerInput);
    quizAnswerInput.setAttribute("maxlength", 1);

    Runned++;
};

var Finished = false;
var correctAnswerCounter = 0;
function Finish() {
    Finished = false;
    finish = document.createElement("p");
    document.createAttribute("id", "Finish");
    finish.setAttribute("id", "Finish");
    document.querySelector(".python-page-lower").appendChild(finish);
    finish.innerHTML = "A végső eredmény: " + correctAnswerCounter + "/" + numberOfApps;
};

window.onload = function() {
    CustomBackgroundGeneration();
    AppIconCreation();
    Campfire();
};

document.addEventListener("keydown", function () {
    var FirstQuestion = document.getElementById("AnswerInput" + FirstQuestionCounter).value;
    if (event.keyCode == "13" && FirstQuestion.length != 0) {
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
        var SecondQuestion = document.getElementById("AnswerInput2_" + SecondQuestionCounter).value;
        if (event.keyCode == "13" && SecondQuestion.length != 0)  { 
            switch (SecondQuestion) {
                case "1":
                    QuizWritingBegin();
                    break;
                case "2":
                    QuizTestBegin();
                    Difficulty();
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
        var DifficultyChoosing = document.getElementById("DifficultyInput").value;
        if (event.keyCode == "13" && DifficultyChoosing.length != 0) { 
            
            switch (DifficultyChoosing) {
                case "1":
                    setInterval(() => {
                        if (Running == true && Runned <= 10) {
                            ActualQuiz();
                            AnswerChecking();
                        } else if (Runned == 11) {
                            Runned++;
                            Finished = true;
                        } else if (Finished == true) {
                            Finish();
                        };
                    }, 500);
                    break;
                default:
                    FullPythonAppWarning();
                    break;
            };
        };
    });
};

function AnswerChecking() {
    document.addEventListener("keydown", function () {
        var QuestionVis = document.getElementById("appIconHolder" + (Runned - 1));
        var Answer = document.getElementById("QuizAnswerInput" + (Runned - 1)).value;
        if (event.keyCode == "13" && Answer.length != 0) {
            AnswerInputItem = document.getElementById("QuizAnswerInput" + (Runned - 1));
            ReplaceingUsedInputs("#Question" + (Runned-1), AnswerInputItem.value, AnswerInputItem);

            switch (Answer) {
                case "1":
                    Running = true;
                    if (Answers[AnswerCounter-4].split("@", 2).length == 2) {
                        QuestionVis.style.backgroundColor = "green";
                        correctAnswerCounter++;
                    } else {
                        QuestionVis.style.backgroundColor = "red";
                        //console.log("Wrong Answer")
                    };
                    break;
                case "2":
                    Running = true;
                    if (Answers[AnswerCounter-3].split("@", 2).length == 2) {
                        correctAnswerCounter++;
                        QuestionVis.style.backgroundColor = "green";
                    } else {
                        QuestionVis.style.backgroundColor = "red";
                        //console.log("Wrong Answer")
                    };
                    break;
                case "3":
                    Running = true;
                    if (Answers[AnswerCounter-2].split("@", 2).length == 2) {
                        correctAnswerCounter++;
                        QuestionVis.style.backgroundColor = "green";
                    } else {
                        QuestionVis.style.backgroundColor = "red";
                        //console.log("Wrong Answer")
                    };
                    break;
                case "4":
                    Running = true;
                    if (Answers[AnswerCounter-1].split("@", 2).length == 2) {
                        correctAnswerCounter++;
                        QuestionVis.style.backgroundColor = "green";
                    } else {
                        QuestionVis.style.backgroundColor = "red";
                        //console.log("Wrong Answer")
                    };
                    break;
                default:
                    Running = true;
                    console.log("Invalid Answer");
                    //Throwing back the "Asnwer" question and warning
                    break;
            };
        };
    });
};