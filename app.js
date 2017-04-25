//create state object with list of questions
var state = {
    questions: []
};

function addQuestion(state,question,answer){
    state.questions.push({
        question: question,
        answer: answer
        });
}

addQuestion(state,'What does Snuffles want to be called now that he abandoned his slave name?','snowball');
addQuestion(state,'What is the name of Rick\'s favorite intergalactic arcade?','Blips and Chitz');
addQuestion(state,'In the episode Big Trouble in Little Sanchez what is the name of the younger version of Rick?','Tiny Rick');
addQuestion(state,'What is the name of the virtual reality game that Rick and Morty play at Blips and Chitz?','Roy');
addQuestion(state,'What does Rick\'s catchphrase "Wubba lubba dub dub!" mean in native bird person language?',"Help me. I am in great pain");
addQuestion(state,"Which of these planets did the Smith family visit to escape the Federal Jurisdiction?"
,'On a Cob');
addQuestion(state,'Name of the planet Rick and Morty visit where the females have evolved to become super intelligent and rule the world?','Gazorpazorp');

console.log(state.questions);

var questionTemplate = (
    


);
