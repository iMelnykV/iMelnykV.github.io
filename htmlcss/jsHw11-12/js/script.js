$(function() {

  var task = $('#task').html();
  var page;
  var taskData = [
    {
      title: 'Мельник Виктор Сергеевич',
      content: ['img/img14.jpg']
    },
    {
      title: 'Ведущий экономист',
      content: []
    },
    {
      title: 'Хочу учить фронтенд, потому что: ',
      content: ['IT технологии обладают невероятным потенциалом', 'Мне это интересно', 'Рост, развитие, возможности']
    },
    {
      title: 'Мои контакты: ',
      content: ['тел.: +380958482749', '<a href="https://www.facebook.com/profile.php?id=100011195833702">facebook</a>']
    },
    {
      title: 'Хобби: ',
      content: ['Охота', 'Рыбалка', 'Путешествия']
    }
  ];
  page = tmpl(task, {
    data: taskData
  });

  $('.second').click(function() {
    $('.carousel').css("display", "none");
    $('.second').css("display", "none");
    $('.first').css("display", "block");
    $('body').append(page)
  });

  $('.first').click(function() {
    $('.carousel').css("display", "block");
    $('.second').css("display", "block");
    $('.first').css("display", "none");
    $('.profile').remove()
  });
});
