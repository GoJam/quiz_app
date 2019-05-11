const STORE = [
  {
    question: 'What does CSS stand for?',
    answers: [
      'Cheese, Special Sauce',
      'Cascading Style Sheets',
      'Coding Successive Solutions',
      'Canadian Super Solider'
      ],
    correctAnswer: this.answers[1],
    icon: 'https://www.logolynx.com/images/logolynx/b9/b967def9bc01aa73793b9970b658e4b0.jpeg',
    alt: 'CSS3 logo'
  }
] 

function startButtonClick() {
  $('.js-startButton').on('click', event => {
    generateQuestionPage();
  });
}

function generateQuestionPage() {
  console.log('`generateQuestionPage` ran');
}

function handlePage() {
  startButtonClick();
}

$(handlePage);