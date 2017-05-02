//create state object with list of questions
var state = {
    questions: [],
    correctAnswers: 0,
    questionCount: 0,
};

function addQuestion(state, question, answer, choices, renderAnswer, imageQuestion, imageAnswer) {
    state.questions.push({
        question: question,
        answer: answer,
        choices: choices,
        renderAnswer: renderAnswer,
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
    var question = state.questions[questionId];
    var element = $('.js-quiz-layout');
    element.find('i').addClass("visuallyhidden");
    element.find('.js-main-image').attr('src', question.imageQuestion);
    element.find('.js-card-text').text(question.question);
    element.find('.js-card-text').append(renderOptions(state, questionId));
    $('.js-next').addClass('visuallyhidden');
    $('.js-start').addClass('visuallyhidden');
}

function renderAnswer(state, questionId,userAnswer) {
    var question = state.questions[questionId];
    var element = $('.js-quiz-layout');
    element.find('.js-main-image').attr('src',question.imageAnswer);
    element.find('.js-card-text').text(question.answer);
    correctAnswer = checkAnswer(state,questionId,userAnswer);
    if (correctAnswer){
        element.find('i').removeClass('visuallyhidden');
        element.find('i').removeClass("fa fa-times");
        element.find('i').addClass("fa fa-check");

    }
    else {
        element.find('i').removeClass('visuallyhidden');
        element.find('i').removeClass('fa fa-check');
        element.find('i').addClass("fa fa-times");
    }
    $('.js-start').addClass('visuallyhidden');
    $('.js-next').removeClass('visuallyhidden');
    state.questionCount +=1;
}

//questions with answers for quiz
addQuestion(state, 'What does Snuffles want to be called now that he abandoned his slave name?', 'Snowball', ['Snowball', 'Sniffles', 'Snoopy', 'Kimbel'], 'In the episode "Lawnmower Dog" Rick gives the dog Snuffles a device that enhances intelligence. After he eventually becomes smart enough and realizes he doesn\'t like his pet name "Snuffles", he changes his name to Snowball and back again later in the episode.', 'images/snuffles.jpg', 'images/snowballs.gif');
addQuestion(state, 'What is the name of Rick\'s favorite intergalactic arcade?', 'Blips and Chitz', ['Dimension C-137', 'Intergalactic Fun Land', 'Anatomy Park', 'Blips and Chitz'], 'In the episode "Mortynight Run", Rick sells a gun to an alien assasin(Krombopulos Michael) so he can have enough money to afford an afternoon at the intergalactic arcade "Blips and Chitz".', 'images/blips-chitz.jpg', 'images/rick-morty-blitz-chips.gif');
addQuestion(state, 'What is the name of the younger version of Rick?', 'Tiny Rick', ['Rickest Rick', 'Evil Rick', 'Little Sanchez', 'Tiny Rick'], "In the episode \"Big Trouble in Little Sanchez\" Tiny Rick is a younger version of Rick. Rick transfers his brain into a younger clone of himself in an attempt to catch a vampire at Harry Herpson High School with Morty and Summer.", 'images/tinyrick.png', 'images/tiny_rick.gif');
addQuestion(state, 'What is the name of the virtual reality game that Rick and Morty play at Blips and Chitz?', 'Roy', ['Mortynight Run', 'Brian', 'Roy', 'Pocket Mortys'], 'Roy: A Life Well Lived is a virtual reality life simulator game played at Blips and Chitz by Rick and Morty. In the game the main character is Roy, whom you must guide through life\'s challenges, and the players final score is how many years Roy lived.', 'images/rick-and-morty-roy-blips-and-chitz.jpg', 'images/rick-morty-roy.gif');
addQuestion(state, 'What does Rick\'s catchphrase "Wubba lubba dub dub!" mean in native bird person language?', "Help me. I am in great pain", ['Get Schwifty', 'Cronenberged up the whole place', 'Monument to Compromise', 'Help me. I am in great pain'], "Rick usually says Wubba lubba dub dub! when he\'s in a good mood or after he cracks a joke. However, in season one episode titled 'Ricksy Business' we find out it means \"help me. I am in great pain\" in the Birdperson language.", 'images/wubba.jpg', 'images/wubba.gif');
addQuestion(state, "Which of these planets did the Smith family visit to escape the Federal Jurisdiction?", 'On a Cob Planet', ['Gear World', 'Hideout Planet', 'On a Cob Planet', 'Alphabetrium'], "The Smith family moved to this planet when they were trying to escape the Federal Jurisdiction. Everything is on a cob, even mountains, down to the molecular level. When Rick realizes this he was disturbed and urges the family to evacuate the planet.", 'images/smith-family.jpg', 'images/cob-planet.gif');
addQuestion(state, 'Name of the planet Rick and Morty visit where the females have evolved to become super intelligent and rule the world?', 'Gazorpazorp', ['Purge Planet', 'Gazorpazorp', 'Planet Squanch', 'Dimension C-137'], "In the episode \"Raising Gazorpazorp\" Rick, Summer, and Morty meet Gazorpians known for their large humanoid figures with six hands. Due to conflicts the male and female species of Gazorpazorp became divided. The females thrived and lead the world while the males remained primitive.", 'images/gazorpazorp.png', 'images/gazorpazorp.gif');


//event listeners
$('form').on('change', 'input', function(e){
     var $targetLabel = $('label[for='+ e.target.id +']');
     //get questionId
     var answerId = e.target.id;
     var questionId = state.questionCount;
     console.log(questionId);
    console.log($targetLabel);
    var $userAnswer = $targetLabel.text();
    console.log($userAnswer);
    renderAnswer(state,questionId,$userAnswer);
});

$('.btn-controls').on('click','.js-next',function(event){
    var questionId = state.questionCount;
    console.log(questionId);
    renderQuestion(state,questionId);
})

    //start the quiz
$(function() {

    $('.js-start').on('click',function(event){
        event.preventDefault();
        renderQuestion(state, 0);


    });

});
//function for rendering answer:
//this function will display a div
//if getAnswer is true will render a true feedback
//if getAnswer is false will render a false feedback(red highlighting)
//needs a next button


//function that keeps track of total questions
//function that keeps track of total correct answers

//event handler for updating total questions and correct answers

//function for when quiz is done display results(dom manipulaiton)
