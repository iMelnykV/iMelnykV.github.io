var objTest = {
  createContainer: function (parentElem) {
  	var container = document.createElement('div');
  	container.className = 'container';
  	parentElem.appendChild(container);
  },
  createTopic: function (container, titleName) {
    var topic = document.createElement('h1');
  	topic.innerHTML = 'Тест по программированию';

  	var container = document.querySelector('.container');
  	container.appendChild(topic);
  },
  questions: [
    {
      title: '1. Вопрос №1',
      answers: [
        {
          text: 'Вариант ответа №1',
          correct: true
        },
        {
          text: 'Вариант ответа №2',
          correct: false
        },
        {
          text: 'Вариант ответа №3',
          correct: false
        }
      ]
    },
    {
      title: '2. Вопрос №2',
      answers: [
        {
          text: 'Вариант ответа №1',
          correct: false
        },
        {
          text: 'Вариант ответа №2',
          correct: false
        },
        {
          text: 'Вариант ответа №3',
          correct: true
        }
      ]
    },
    {
      title: '3. Вопрос №3',
      answers: [
        {
          text: 'Вариант ответа №1',
          correct: false
        },
        {
          text: 'Вариант ответа №2',
          correct: true
        },
        {
          text: 'Вариант ответа №3',
          correct: false
        }
      ]
    }
  ],
  createQuestions: function () {
    for (var i = 0; i < this.questions.length; i++) {
      var textQuestion = document.createElement('p');
      textQuestion.innerHTML = this.questions[i].title;

      var container = document.querySelector('.container');
      container.appendChild(textQuestion);

      var elemList = document.createElement('li');
      var container = document.querySelector('.container');
      container.appendChild(elemList);

      var textAnswer = document.createElement('label');
      textAnswer.innerHTML = '<input type="checkbox" value="">' + this.questions[i].answers[0].text;
      container.appendChild(textAnswer);

      var elemList = document.createElement('li');
      var container = document.querySelector('.container');
      container.appendChild(elemList);

      var textAnswer = document.createElement('label');
      textAnswer.innerHTML = '<input type="checkbox" value="">' + this.questions[i].answers[1].text;
      container.appendChild(textAnswer);

      var elemList = document.createElement('li');
      var container = document.querySelector('.container');
      container.appendChild(elemList);

      var textAnswer = document.createElement('label');
      textAnswer.innerHTML = '<input type="checkbox" value="">' + this.questions[i].answers[2].text;
      container.appendChild(textAnswer);
    }
  },
  createButton: function (container, buttonName) {
    var result = document.createElement('BUTTON');
    result.className	= 'result_button';
    result.innerHTML = 'Проверить мои результаты';

    var container = document.querySelector('.container');
    container.appendChild(result);
  }
}

var element = document.body;
objTest.createContainer(element);
objTest.createTopic();
objTest.createQuestions();
objTest.createButton();
