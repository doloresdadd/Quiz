const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");

const question = document.getElementById("question");
const image = document.getElementById("image");
const answerOptions = document.getElementById("answerOptions");

const score = document.getElementById("score");
const submitbtn = document.getElementById("submit");

let questions = [
  {
    question:
      "What was the name of the school where the Doctor was working undercover in 2006’s School Reunion?",
    imgSrc:
      "http://images4.fanpop.com/image/photos/17700000/2x03-School-Reunion-doctor-who-17746475-1600-900.jpg",
    choices: ["Coal Hill", "Deffrey Vale", "Golden Point", "Dolby Grammar"],
    correct: "Deffrey Vale",
  },
  {
    question:
      "Which classic Doctor has encountered the Cybermen, but never had a Cyberman story of their own?",
    imgSrc:
      "https://i0.wp.com/www.blogtorwho.com/wp-content/uploads/2020/02/19772178-high_res-doctor-who-series-12-scaled.jpg?fit=2560%2C1707&ssl=1",
    choices: [
      "Patrick Troughton",
      "Colin Baker",
      "Peter Davison",
      "Jon Pertwee",
    ],
    correct: "Jon Pertwee",
  },
  {
    question: "Which of the following is not a Doctor Who alien:",
    imgSrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FHbLP4XlwtiA%2Fmaxresdefault.jpg&f=1&nofb=1",
    choices: ["Flummox", "Atraxi", "Jagrafess", "Toclafane"],
    correct: "Flummox",
  },
];

let noOfQuestions = questions.length - 1;
let currentQuestion = 0;
let userScore = 0;

function renderQuestion() {
  let q = questions[currentQuestion];

  question.innerText = q.question;
  image.innerHTML = `<img src="${q.imgSrc}">`;

  answerOptions.innerHTML = `<label class="radio-label">
    <input name="answers" type="radio" id="answer1" value="${questions[currentQuestion].choices[0]}" />
    <span class="inner-label" id="option1">${questions[currentQuestion].choices[0]}</span>
  </label>
  <label class="radio-label">
    <input name="answers" type="radio" id="answer2" value="${questions[currentQuestion].choices[1]}" />
    <span class="inner-label" id="option2">${questions[currentQuestion].choices[1]}</span>
  </label>
  <label class="radio-label">
    <input name="answers" type="radio" id="answer3" value="${questions[currentQuestion].choices[2]}" />
    <span class="inner-label" id="option3">${questions[currentQuestion].choices[2]}</span>
  </label>
  <label class="radio-label">
    <input name="answers" type="radio" id="answer4" value="${questions[currentQuestion].choices[3]}" />
    <span class="inner-label" id="option4">${questions[currentQuestion].choices[3]}</span>
  </label>`;

  if (q.correct === option1) {
    answer1.classList.add("correct");
  } else if (q.correct === option2) {
    answer2.classList.add("correct");
  } else if (q.correct === option3) {
    answer3.classList.add("correct");
  } else if (q.correct === option4) {
    answer4.classList.add("correct");
  }
}

renderQuestion();

submitbtn.addEventListener("click", nextQuestion);

function nextQuestion(answer) {
  var ans = document.getElementsByName("answers");
  let correctAns = questions[currentQuestion].correct; //getting correct answer from array

  for (i = 0; i < ans.length; i++) {
    if (ans[i].checked) {
      if (ans[i].value === correctAns) {
        userScore++;
        currentQuestion++;
        if (currentQuestion <= noOfQuestions) {
          renderQuestion();
        } else {
          finalscore();
        }
      } else {
        currentQuestion++;
        if (currentQuestion <= noOfQuestions) {
          renderQuestion();
        } else {
          finalscore();
        }
      }
    }
  }

  // let correctAns = questions[currentQuestion].answer; //getting correct answer from array
  // const allOptions = answerOptions.children.length; //getting all option items
  // console.log(userAns);
  // console.log(correctAns);
}

function finalscore() {
  let percentageScore = (userScore / (noOfQuestions + 1)) * 100;
  console.log(noOfQuestions + 1, userScore, percentageScore.toFixed(2));
  quizContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
  score.innerText = percentageScore.toFixed(2);
}
