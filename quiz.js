const quizQuestions = [
  {
	 question: "Which is a recommended quality review team role?",
      a: "Project Manager",
      b: "Assurance",
      c: "Project Support",
      d: "Administrator",
    correctAnswer: "d",
  },
  {
    question: "Which is a typical core activity within configuration management?",
      a: "Quality Assurance",
      b: "Risk Assurance",
      c: "Verification And Audit",
      d: "None of the above",
    correctAnswer: "c",
  },
  {
    question: "Which is a characteristic of a project",
      a: "Low Risk",
      b: "Fallback",
      c: "Business as usual",
      d: "Cross-Functional",
    correctAnswer: "d",
  },
];

const quiz = document.getElementById('quiz');
const answerS1s = document.querySelectorAll('.answer');
const question1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;



function showQuiz() {

  deselectAnswers()

  const currentQuizData = quizQuestions[currentQuiz];
  question1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
showQuiz();

function deselectAnswers(){
  answerS1s.forEach(answerS1 => answerS1.checked = false)
}

function getSeleceted(){
  let answer
  answerS1s.forEach(answerS1 => {
    if(answerS1.checked){
      answer = answerS1.id
    }
  })
  return answer
}
 
function setNextQuestion(){
  const answer = getSeleceted()
  if(answer){
    if( answer === quizQuestions[currentQuiz].correctAnswer) {
      score++; 
    }
    currentQuiz++
     if(currentQuiz < quizQuestions.length){
      showQuiz()
    }
    else{
      quiz.innerHTML = `
      <p style="text-align:center;margin-top:150px;margin-left:50px;text-align:center;justify-conent:center;font-size:25px;font-weight:bolder;"> you scored ${score}/${quizQuestions.length} </p>
      <button style="padding-bottom:20px; margin-top:262px;"onclick="location.reload()">reload</button>`
    }

  }
}
 submitBtn.addEventListener('click',setNextQuestion)

