
function GoogleCallback(jObj, data) {
  console.log('data', data);
}

function loadPage() {

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0' + 'test' + '&callback=GoogleCallback&context=?', true);

  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    button.parentNode.removeChild(button);

    if (xhr.status != 200) {
      // обработать ошибку
      alert( xhr.status + ': ' + xhr.statusText );
    } else {
      try {
        var page = JSON.parse(xhr.responseText);
      } catch (e) {
        alert( "Некорректный ответ " + e.message );
      }
      showPage(page);
    }

  }

  button.innerHTML = 'Загружаю...';
  button.disabled = true;
}

function showPage(page) {
  page.forEach(function(page) {
    var li = list.appendChild(document.createElement('li'));
    li.innerHTML = page.name;
  });
}
