//create state object with list of questions
var state = {
    questions: []
};

function addQuestion(state,question,answer,choices){
    state.questions.push({
        question: question,
        answer: answer,
        choices: choices
        });
}

addQuestion(state,'What does Snuffles want to be called now that he abandoned his slave name?','Snowball',['Snowball','Sniffles','Snoopy','Kimbel','Buddy']);
addQuestion(state,'What is the name of Rick\'s favorite intergalactic arcade?','Blips and Chitz',['Dimension C-137','Intergalactic Fun Land', 'Anatomy Park', 'Blips and Chitz','Smith Residence']);
addQuestion(state,'In the episode "Big Trouble in Little Sanchez" what is the name of the younger version of Rick?','Tiny Rick',['Rickest Rick','Evil Rick','Little Sanchez','Tiny Rick','Doofus Rick']);
addQuestion(state,'What is the name of the virtual reality game that Rick and Morty play at Blips and Chitz?','Roy',['Mortynight Run','Brian','Roy','Pocket Mortys','Meeseks and Destroy']);
addQuestion(state,'What does Rick\'s catchphrase "Wubba lubba dub dub!" mean in native bird person language?',"Help me. I am in great pain",['Get Schwifty','Cronenberged up the whole place','Monument to Compromise','Holy crap','Help me. I am in great pain']);
addQuestion(state,"Which of these planets did the Smith family visit to escape the Federal Jurisdiction?"
,'On a Cob Planet',['Cronenberg World','Gear World','Hideout Planet','On a Cob Planet','Alphabetrium']);
addQuestion(state,'Name of the planet Rick and Morty visit where the females have evolved to become super intelligent and rule the world?','Gazorpazorp',['Purge Planet','Gazorpazorp','Planet Squanch','Arbolez Mentirosos','Dimension C-137']);

console.log(state.questions);

var questionTemplate;
