function submit() {

    isEmpty();

    var score = statisticsScore();
    var totalScore = document.getElementById("totalScore");

    totalScore.value = score;
}


function isEmpty() {

    var classInformation = document.getElementById("className");
    var studentNumber = document.getElementById("studentNumber");
    var studentName = document.getElementById("studentName");

    if (classInformation.value.length === 0) {
        alert("请输入班级");
    }
    if (studentNumber.value.length === 0) {
        alert("请输入学号");
    }
    if (studentName.value.length === 0) {
        alert("请输入姓名");
    }
}


function statisticsScore() {

    var score = 0;

    score += countBlanksQuestionScore();
    score += countChoiceQuestionScore();
    score += countMultipleChoiceQuestionScore();
    score += countTrueOrFalseQuestionScore();
    score += countShortAnswerQuestionScore();

    return score;
}


function countBlanksQuestionScore() {

    var blankAnswer = 0;
    var answer = document.getElementsByName("blanksAnswer");

    if (answer[0].value === "统一建模语言") {
        blankAnswer += 5;
    }
    if (answer[1].value === "封装性") {
        blankAnswer += 5;
    }
    if (answer[2].value === "多态性") {
        blankAnswer += 5;
    }
    if (answer[3].value === "继承性") {
        blankAnswer += 5;
    }

    return blankAnswer;
}


function countChoiceQuestionScore() {

    var choiceAnswer = 0;
    var answer = document.getElementsByName("choiceAnswer");

    if (answer[0].value === "B") {
        choiceAnswer += 10;
    }
    if (answer[1].value === "C") {
        choiceAnswer += 10;
    }


    return choiceAnswer;
}


function countMultipleChoiceQuestionScore() {

    var multipleChoiceAnwser = 0;
    var answer = document.getElementsByName("multipleChoiceAnswer");

    if (answer[0].value === "A" + "B" + "D") {
        multipleChoiceAnwser += 10;
    }
    if (answer[1].value === "A" + "B" + "C") {
        multipleChoiceAnwser += 10;
    }

    return multipleChoiceAnwser;

}

function countTrueOrFalseQuestionScore() {

    var trueOrFalseAnswer = 0;
    var answer = document.getElementsByName("trueOrFalseAnswer");

    if (answer[0].value === "错误") {
        trueOrFalseAnswer += 10;
    }
    if (answer[1].value === "正确") {
        trueOrFalseAnswer += 10;
    }

    return trueOrFalseAnswer;
}


function countShortAnswerQuestionScore() {

    var shortAnswerAnswer = 0;
    var answer = document.getElementById("shortAnswerAnswer");

    if (answer.value === "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形" +
        "式。可以是物理实体;可以是某种图形;或者是一种数学表达式") {
        shortAnswerAnswer += 10;
    }

    return shortAnswerAnswer;
}
