//create state object with list of questions
var state = {
    questions: [],
    correctAnswers: 0,
    questionCount: 0
};

function addQuestion(state,question,answer,choices,renderAnswer){
    state.questions.push({
        question: question,
        answer: answer,
        choices: choices,
        renderAnswer: renderAnswer
        });

        //append question feedback to div that is hidden
}

//get answer
function getAnswer(state,questionId){
    return state.questions[questionId].answer
}

function checkAnswer(state,questionId,userAnswer){
    return getAnswer(state,questionId) === userAnswer;
}

function createQuestion(state,questionId){

}

//function for adding progress bar


//function for rendering answer:
//this function will display a div
//if getAnswer is true will render a true feedback
//if getAnswer is false will render a false feedback(red highlighting)
//needs a next button


//function that keeps track of total questions
//function that keeps track of total correct answers

//event handler for submit button
//event handler for updating total questions and correct answers

//function for when quiz is done display results(dom manipulaiton)







//adding questions to the quiz
addQuestion(state,'What does Snuffles want to be called now that he abandoned his slave name?','Snowball',['Snowball','Sniffles','Snoopy','Kimbel','Buddy'],'In the episode "Lawnmower Dog" Rick gives the dog Snuffles a device that enhances intelligence. After he eventually becomes smart enough and realizes he doesn\'t like his pet name "Snuffles", he changes his name to Snowball and back again later in the episode.');
addQuestion(state,'What is the name of Rick\'s favorite intergalactic arcade?','Blips and Chitz',['Dimension C-137','Intergalactic Fun Land', 'Anatomy Park', 'Blips and Chitz','Smith Residence'],'In the episode "Mortynight Run", Rick sells a gun to an alien assasin(Krombopulos Michael) so he can have enough money to afford an afternoon at the intergalactic arcade "Blips and Chitz".');
addQuestion(state,'What is the name of the younger version of Rick?','Tiny Rick',['Rickest Rick','Evil Rick','Little Sanchez','Tiny Rick','Doofus Rick'],"In the episode \"Big Trouble in Little Sanchez\" Tiny Rick is a younger version of Rick. Rick transfers his brain into a younger clone of himself in an attempt to catch a vampire at Harry Herpson High School with Morty and Summer.");
addQuestion(state,'What is the name of the virtual reality game that Rick and Morty play at Blips and Chitz?','Roy',['Mortynight Run','Brian','Roy','Pocket Mortys','Meeseks and Destroy'],'Roy: A Life Well Lived is a virtual reality life simulator game played at Blips and Chitz by Rick and Morty. In the game the main character is Roy, whom you must guide through life\'s challenges, and the players final score is how many years Roy lived.');
addQuestion(state,'What does Rick\'s catchphrase "Wubba lubba dub dub!" mean in native bird person language?',"Help me. I am in great pain",['Get Schwifty','Cronenberged up the whole place','Monument to Compromise','Holy crap','Help me. I am in great pain'],"Rick usually says Wubba lubba dub dub! when he\'s in a good mood or after he cracks a joke. However, in season one episode titled 'Ricksy Business' we find out it means \"help me. I am in great pain\" in the Birdperson language." );
addQuestion(state,"Which of these planets did the Smith family visit to escape the Federal Jurisdiction?"
,'On a Cob Planet',['Cronenberg World','Gear World','Hideout Planet','On a Cob Planet','Alphabetrium'],"The Smith family moved to this planet when they were trying to escape the Federal Jurisdiction. Everything is on a cob, even mountains, down to the molecular level. When Rick realizes this he was disturbed and urges the family to evacuate the planet." );
addQuestion(state,'Name of the planet Rick and Morty visit where the females have evolved to become super intelligent and rule the world?','Gazorpazorp',['Purge Planet','Gazorpazorp','Planet Squanch','Arbolez Mentirosos','Dimension C-137'],"In the episode \"Raising Gazorpazorp\" Rick, Summer, and Morty meet Gazorpians known for their large humanoid figures with six hands. Due to conflicts the male and female species of Gazorpazorp became divided. The females thrived and lead the world while the males remained primitive.");
//add scary terry
//add mr meeseks
console.log(state.questions);
