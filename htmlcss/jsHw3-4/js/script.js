var objTest = {
  createContainer: function () {
    var container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    var topic = document.createElement('h1');
    topic.innerHTML = 'Тест по программированию';
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

      container = document.querySelector('.container');
      container.appendChild(textQuestion);

      textAnswer1 = document.createElement('label');
      textAnswer1.innerHTML = '<input type="checkbox" value="">' + this.questions[i].answers[0].text;
      container.appendChild(textAnswer1);

      elemList1 = document.createElement('li');
      container.appendChild(elemList1);

      textAnswer2 = document.createElement('label');
      textAnswer2.innerHTML = '<input type="checkbox" value="">' + this.questions[i].answers[1].text;
      container.appendChild(textAnswer2);

      elemList2 = document.createElement('li');
      container.appendChild(elemList2);

      textAnswer3 = document.createElement('label');
      textAnswer3.innerHTML = '<input type="checkbox" value="">' + this.questions[i].answers[2].text;
      container.appendChild(textAnswer3);
    }
  },
  createButton: function () {
    var result = document.createElement('BUTTON');
    result.className = 'result_button';
    result.innerHTML = 'Проверить мои результаты';

    container.appendChild(result);
  }
}

var element = document.body;
objTest.createContainer(element);
objTest.createQuestions();
objTest.createButton();
