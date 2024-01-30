const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

// let candidateName = input.question("What is your name?");
// console.log("Hello" + candidateName + "!");

/* TODO 1.1a: Define candidateName */
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// let question = input.question("Who was the first American woman in space? ");
// console.log (question);

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

// if (correctAnswer === candidateAnswer){
//   console.log("Correct");
//   }
//   else {
//     console.log("False");
//   }


//TODO: Variables for Part 2

// let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters?", "(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?"];
// let correctAnswers = ["Sally Ride", "true","40","Trajectory","3"];

let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40",	"Trajectory","3" ];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  // candidateName = input.question("What is your name? ")
  candidateName = input.question("Enter your name: ");
  console.log("candidateName :" , candidateName)
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // candidateAnswer =  input.question(question);

  // for (let i = 0; i < questions.length; i++){
  //   let userAnswer = input.question(questions[i]);
  //   candidateAnswers.push(userAnswer);

  for (let i = 0; i < questions.length; i++) {
    let userAnswer = input.question(questions[i]);
    candidateAnswers.push(userAnswer);
    //  candidateAnswers[i] = input.question(questions[i]);
  }
}

function gradeQuiz(candidateAnswers) {
  // console.log(candidateAnswers)
//   console.log('Your responses : ${candidateAnswers} and correct responses : ${correctAnswers}');
// }
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // if (candidateAnswer === "Sally Ride") {
  //   console.log ("Amazing! your answer is correct");
  // } else {
  //   console.log ("Sorry! your answer is incorrect");
  // }
  console.log(`Your responses : ${candidateAnswers} and correct responses : ${correctAnswers}`);

  // let grade;  //TODO 3.2 use this variable to calculate the candidates score.

  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
  let numOfCorrect = 0;

  console.log(`Candidate Name: ${candidateName}
    1) Who was the first American woman in space?
    Your Answer: ${candidateAnswers[0]}
    Correct Answer: Sally Ride
    
    2) True or false: 5000 meters = 5 kilometers.
    Your Answer: ${candidateAnswers[1]}
    Correct Answer: true
    
    3) (5 + 3)/2 * 10 = ?
    Your Answer: ${candidateAnswers[2]}
    Correct Answer: 40
    
    4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
    Your Answer: ${candidateAnswers[3]}
    Correct Answer: Trajectory
    
    5) What is the minimum crew size for the ISS?
    Your Answer: ${candidateAnswers[4]}
    Correct Answer: 3`)

  for( i=0; i<correctAnswers.length; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      // grade += 20;
       numOfCorrect++;
    } 
  } 
  grade = numOfCorrect/questions.length *100;
  
  if (grade >= 80) {
    console.log( `Overall Grade: ${grade}% (${numOfCorrect} of ${questions.length} responses correct) >>> Status: PASSED <<<`);
  } else {
    console.log(`Overall Grade: ${grade}% (${numOfCorrect} of ${questions.length} responses correct) >>> Status: FAILED <<<`);
  }
  // console.log(grade);

  return grade;
}
// console.log(`Overall Grade: ${grade}% (${numOfCorrect} of ${questions.length} responses correct) >>> Status: FAILED <<<`)

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  // console.log();
   console.log("Hello,"+ candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};