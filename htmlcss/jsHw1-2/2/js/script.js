var users = [];

for (var i = 0; i < 5; i++) {
  users.push( prompt('Введите имя ' + (i + 1) ) );
}

console.log('users', users);

var userName = prompt('Введите своё имя');

for (i = 0; i < users.length; i++) {
  if (users[i] === userName) {
    var flag = true;
  }
}

if (flag == true) {
  alert(userName + ', вы успешно вошли');
} else {
  alert('Ошибка, имени ' + userName + ' не найдено');
}
