var links = ['Mercedes-Benz', 'BMW', 'Mazda', 'Hyundai', 'Volkswagen'];

document.body.style.margin = '20px';

for (var i = 0; i < links.length; i++) {
  var a = document.createElement('a');
  a.setAttribute('href', '#');
  a.innerHTML = links[i];
  document.body.insertBefore(a, null);
  a.style.margin = '10px';
  links[i]++;
}

var elements = document.getElementsByTagName('a');

for (var i = 0; i < elements.length; i++) {
  (function(i) {
    elements[i].onclick = function() {
      console.log('Link № '+ i);
    }
  })(i);
}
