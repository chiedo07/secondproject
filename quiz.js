const quizQuestions = [
  {
	 question: "Who invented JavaScript?",
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "None of the above",
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "None of the above",
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    correctAnswer: "d",
  },
];

const quiz = document.getElementById('quiz');
const answerS1s= document.querySelectorAll('.answer');
const question1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


showQuiz()

function showQuiz() {

  deselectAnswers();

  const currentQuizData = quizQuestions[currentQuiz];
  question1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function getSelected() {
let answer
answerS1s.forEach(answerS1 => {
  if(answerS1.checked) {
    answer = answerS1.id
  }
})
return answer
}
function deselectAnswers(){
answerS1s.forEach (answerS1 => answerS1.checked = false)
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  if (answer){
     if (answer === quizQuestions[currentQuiz].correctAnswer) {
         score++
        } 

    currentQuiz++

    if(currentQuiz < quizQuestions.length){
      showQuiz()
    } else{
     quiz.innerHTML = `
     <h2> you answered ${score}/${quizQuestions.length} correctly</h2>
     <button onclick="location.reload()">Reload</button>`;
   }
  }
});


