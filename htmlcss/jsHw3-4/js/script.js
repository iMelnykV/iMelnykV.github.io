var objTest = {
  questions: [
    {
      title: '1. Вопрос №1',
      answers: [
        {
          text: '<label><input type = "checkbox">Вариант ответа №1</input></label>',
          correct: true
        },
        {
          text: '<label><input type = "checkbox">Вариант ответа №2</input></label>',
          correct: false
        },
        {
          text: '<label><input type = "checkbox">Вариант ответа №3</input></label>',
          correct: false
        }
      ]
    },
    {
      title: '2. Вопрос №2',
      answers: [
        {
          text: '<label><input type = "checkbox">Вариант ответа №1</input></label>',
          correct: false
        },
        {
          text: '<label><input type = "checkbox">Вариант ответа №2</input></label>',
          correct: false
        },
        {
          text: '<label><input type = "checkbox">Вариант ответа №3</input></label>',
          correct: true
        }
      ]
    },
    {
      title: '3. Вопрос №3',
      answers: [
        {
          text: '<label><input type = "checkbox">Вариант ответа №1</input></label>',
          correct: false
        },
        {
          text: '<label><input type = "checkbox">Вариант ответа №2</input></label>',
          correct: true
        },
        {
          text: '<label><input type = "checkbox">Вариант ответа №3</input></label>',
          correct: false
        }
      ]
    }
  ],
  generateElement: function () {
    var elDiv = document.createElement('form');
    elDiv.classList.add('container');
    document.body.appendChild(elDiv);

    var topic = document.createElement('h1');
    topic.innerHTML = 'Тест по программированию';
    elDiv.appendChild(topic);

    for (var i = 0; i < this.questions.length; i++) {
      var question = document.createElement('p');
      question.classList.add('question-text');
      question.innerHTML = this.questions[i].title;

      var form = document.querySelector('form');
      form.appendChild(question);

      for (var y = 0; y < this.questions[i].answers.length; y++) {
        var answer = document.createElement('p');
        answer.classList.add('answer-text');
        answer.innerHTML = this.questions[i].answers[y].text;
        form.appendChild(answer);
      }
    }
    var result = document.createElement('BUTTON');
    result.className = 'result_button';
    result.innerHTML = 'Проверить мои результаты';
    form.appendChild(result);
  }
}

objTest.generateElement();
