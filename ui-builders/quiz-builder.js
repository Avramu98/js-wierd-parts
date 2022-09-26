const mainContentElement = document.querySelector(".main-content");
const quizContainerElement = document.querySelector(".quiz-container");

const handleStartQuiz = (bluredElement, displayedElement, disabledElement) => {
  bluredElement.style.filter = "blur(10px)";
  displayedElement.style.display = "block";
  disabledElement.disabled = true;
  disabledElement.style.color = "red";
};

const handlePictureQuestion = (parentElement, image, questionNameElement) => {
  const questionPictureElement = buildElement('img', 'class', 'question-picture');
  questionPictureElement.src = image;
  parentElement.appendChild(questionPictureElement);
  parentElement.insertBefore(questionNameElement, questionPictureElement);
};

const handleCheckAnswer = (id, inputValue, inputContainer, answerContainer, userAnswer) => {
  if (inputValue.length > 5) {
    inputContainer.style.display = "none";
    const answerElementId = parseInt(
      answerContainer.getAttribute("data-value")
    );
    if (id === answerElementId) {
      answerContainer.style.display = "block";
    }
    userAnswer.innerHTML = capitalizeFirstLetter(inputValue);
  }
}

const handleFinishQuiz = () => {
  location.reload();
};

const quizBuilder = (quizes) => {

  const questionListContainerElement = buildElement('div', 'class', 'question-list-container');
  const quizHeader = buildElement('h1', null, null, 'Test your knowledge');
  const startQuizButton = buildElement('button', 'id', 'start-quiz', 'Start Test');
  const quizListElement = buildElement('ul', 'id', 'quiz-list'); 
  const finishQuizButton = buildElement('button', 'id', 'finish-quiz', 'Finish quiz');

  quizes.map((quiz) => {
    const { id, question, questionImage, codeSnippetFrame, answer } = quiz;
    const quizSectionElement = buildElement('li', 'class', 'quiz-section');
    const questionContainerElement = buildElement('div', 'class', 'question-container');
    const questionNameElement = buildElement('h2', null, null, question);
    questionContainerElement.appendChild(questionNameElement);

    if (questionImage) handlePictureQuestion(questionContainerElement, questionImage, questionNameElement);

    if (!codeSnippetFrame) {
      const answerContainerElement = buildElement('div', 'class', 'answer-container');
      answerContainerElement.setAttribute("data-value", id);
      const userInputContainerElement = buildElement('div');
      const inputElement = buildElement('input', 'class', 'user-input');
      const userAnswerElement = buildElement('p', 'class', 'user-answer');
      const goodAnswerElement = buildElement('p', 'class', 'good-answer', capitalizeFirstLetter(answer))
      const checkAnswerButton = buildElement('button', 'class', 'check-answer', 'Check Answer');
      checkAnswerButton.addEventListener('click', () => handleCheckAnswer(id, inputElement.value, userInputContainerElement, answerContainerElement,  userAnswerElement));
      answerContainerElement.append(userAnswerElement, goodAnswerElement);
      userInputContainerElement.appendChild(inputElement);
      userInputContainerElement.appendChild(checkAnswerButton);
      quizSectionElement.append( answerContainerElement, userInputContainerElement);
    } else {
      prepareFrame(codeSnippetFrame, questionContainerElement);
    }
    quizSectionElement.append(questionContainerElement);
    quizListElement.appendChild(quizSectionElement);
  });

  questionListContainerElement.append(quizListElement, finishQuizButton);
  quizContainerElement.append(quizHeader, startQuizButton, questionListContainerElement);

  startQuizButton.addEventListener("click", () => handleStartQuiz(mainContentElement, questionListContainerElement, startQuizButton));
  
  finishQuizButton.addEventListener("click", handleFinishQuiz);
};

quizBuilder(data.quiz);
