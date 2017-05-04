//create state object with list of questions
var state = {
    questions: [],
    correctAnswers: 0,
    questionCount: 0,
};

function addQuestion(state, question, answer, choices, imageQuestion, imageAnswer) {
    state.questions.push({
        question: question,
        answer: answer,
        choices: choices,
        imageQuestion: imageQuestion,
        imageAnswer: imageAnswer
    });
}

//state management
function getAnswer(state, questionId) {
    return state.questions[questionId].answer
}

function checkAnswer(state, questionId, userAnswer) {
    return getAnswer(state, questionId) === userAnswer;
}
//create the list of optiom choices for user to submit
function renderOptions(state, questionID) {
    var OptionsHTML = state.questions[questionID].choices.map(function(option,index) {
        return '<div class="form-check">' +
            '<input class="form-check-input visuallyhidden" type="radio" name="answers"' + 'id="' + index + '"' +  'value="' + index + '">' +
            '<label for="' + index + '"' +  'class="form-check-label btn btn-primary btn-block js-option">' + option + '</label></div>';
    });
    return OptionsHTML;
}
//DOM manipulaiton

//this function displays the question with the options
function renderQuestion(state, questionId) {
    var totalQuestionCount = state.questionCount;
    totalQuestionCount += 1;
    var question = state.questions[questionId];
    var element = $('.js-quiz-layout');
    element.find('i').addClass("visuallyhidden");
    element.find('.js-main-image').attr('src', question.imageQuestion);
    element.find('.js-card-text').text(question.question);
    element.find('.js-card-text').append(renderOptions(state, questionId));
    element.find('.js-card-text').append('</br>' + 'Total Correct Answers: ' + state.correctAnswers);
    element.find('.js-card-text').append('</br>' + 'Question: ' + totalQuestionCount + ' out of ' + state.questions.length);
    $('.js-next').addClass('visuallyhidden');
    $('.js-start').addClass('visuallyhidden');
}

function renderAnswer(state, questionId, userAnswer) {
    var question = state.questions[questionId];
    var element = $('.js-quiz-layout');
    element.find('.js-main-image').attr('src',question.imageAnswer);
    correctAnswer = checkAnswer(state,questionId,userAnswer);

    if (correctAnswer){
        state.correctAnswers += 1;
        element.find('i').removeClass('visuallyhidden');
        element.find('i').removeClass("fa fa-times fa-5x");
        element.find('i').addClass("fa fa-check fa-5x");
    }
    else {
        element.find('i').removeClass('visuallyhidden');
        element.find('i').removeClass('fa fa-check fa-5x');
        element.find('i').addClass("fa fa-times fa-5x");
    }

    element.find('.js-card-text').text("The correct Answer is : " + question.answer);
    $('.js-start').addClass('visuallyhidden');
    $('.js-next').removeClass('visuallyhidden');
    state.questionCount +=1;
}

function renderResults(state){
    $('.js-next').addClass('visuallyhidden');
    $('.js-start').addClass('visuallyhidden');
    var element = $('.js-quiz-layout');
    element.find('.js-card-text').html('</br>' + 'Final Score: ' + state.correctAnswers + '<span> Out of ' + state.questions.length + '</span>');
    element.find('.js-main-image').attr('src','images/rick-and-morty.jpg')

}

//questions with answers for quiz
addQuestion(state, 'What does Snuffles want to be called now that he abandoned his slave name?', 'Snowball', ['Snowball', 'Sniffles', 'Snoopy', 'Kimbel'], 'images/snuffles.jpg', 'images/snowballs.gif');
addQuestion(state, 'What is the name of Rick\'s favorite intergalactic arcade?', 'Blips and Chitz', ['Dimension C-137', 'Intergalactic Fun Land', 'Anatomy Park', 'Blips and Chitz'], 'images/blips-chitz.jpg', 'images/rick-morty-blitz-chips.gif');
addQuestion(state, 'What is the name of the younger version of Rick?', 'Tiny Rick', ['Rickest Rick', 'Evil Rick', 'Little Sanchez', 'Tiny Rick'], 'images/tinyrick.png', 'images/tiny_rick.gif');
addQuestion(state, 'What is the name of the virtual reality game that Rick and Morty play at Blips and Chitz?', 'Roy', ['Mortynight Run', 'Brian', 'Roy', 'Pocket Mortys'], 'images/rick-and-morty-roy-blips-and-chitz.jpg', 'images/rick-morty-roy.gif');
addQuestion(state, 'What does Rick\'s catchphrase "Wubba lubba dub dub!" mean in native bird person language?', "Help me. I am in great pain", ['Get Schwifty', 'Cronenberged up the whole place', 'Monument to Compromise', 'Help me. I am in great pain'], 'images/wubba.jpg', 'images/wubba.gif');
addQuestion(state, "Which of these planets did the Smith family visit to escape the Federal Jurisdiction?", 'On a Cob Planet', ['Gear World', 'Hideout Planet', 'On a Cob Planet', 'Alphabetrium'], 'images/smith-family.jpg', 'images/cob-planet.gif');
addQuestion(state, 'Name of the planet Rick and Morty visit where the females have evolved to become super intelligent and rule the world?', 'Gazorpazorp', ['Purge Planet', 'Gazorpazorp', 'Planet Squanch', 'Dimension C-137'], 'images/gazorpazorp.png', 'images/gazorpazorp.gif');


//event listeners
$('form').on('change', 'input', function(e){
     var $targetLabel = $('label[for='+ e.target.id +']');
     //get questionId
     var answerId = e.target.id;
     var questionId = state.questionCount;
    var $userAnswer = $targetLabel.text();
    renderAnswer(state,questionId,$userAnswer);

});

$('.btn-controls').on('click','.js-next',function(event){
    var questionId = state.questionCount;
    if(questionId >= state.questions.length){
        renderResults(state);
    }

    renderQuestion(state,questionId);
})

$(function() {

    $('.js-start').on('click',function(event){
        event.preventDefault();
        renderQuestion(state, 0);
    });

});
