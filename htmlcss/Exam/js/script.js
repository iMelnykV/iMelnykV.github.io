var carousel1 = document.querySelector('.carousel_1');
var carousel2 = document.querySelector('.carousel_2');
var carousel3 = document.querySelector('.carousel_3');

var carousel1 = new Flickity(carousel1, {
  prevNextButtons: false,
  autoPlay: true,
  wrapAround: true,
  contain: true,
  cellSelector: '.carousel__cell',
  pageDots: false,
});

var carousel2 = new Flickity(carousel2, {
  prevNextButtons: false,
  autoPlay: true,
  wrapAround: true,
  contain: true,
  cellSelector: '.carousel__cell',
  pageDots: false,
});

var carousel3 = new Flickity(carousel3, {
  prevNextButtons: false,
  autoPlay: true,
  wrapAround: true,
  contain: true,
  cellSelector: '.carousel__cell',
  pageDots: false,
});

document.querySelector('.carousel_1 .carousel__arrow--left').addEventListener('click', function() {
    carousel1.next();
});

document.querySelector('.carousel_1 .carousel__arrow--right').addEventListener('click', function() {
    carousel1.previous();
});

document.querySelector('.carousel_2 .carousel__arrow--left').addEventListener('click', function() {
    carousel2.next();
});

document.querySelector('.carousel_2 .carousel__arrow--right').addEventListener('click', function() {
    carousel2.previous();
});

document.querySelector('.carousel_3 .carousel__arrow--left').addEventListener('click', function() {
    carousel3.next();
});

document.querySelector('.carousel_3 .carousel__arrow--right').addEventListener('click', function() {
    carousel3.previous();
});


var dataImages = [],
    amountOfImages = dataImages.length,
    apiKey = '1983864-eea8becd8812584cf0ae486ec';

  function init() {
    getImages();
  }

var getImages = function (query) {
  var q, orientation, amount;

  q = (query === undefined) ? '' : query;
  orientation = 'all';
  amount = 7;

  var url= 'https://pixabay.com/api/?key=' + apiKey +
    '&q=' + q +
    '&orientation=' + orientation +
    '&per_page=' + amount +
    '&lang=' + 'en' +
    '&image_type=photo&pretty=true';

  var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

  var xhr = new XHR();
  xhr.open('GET', url , true);
  xhr.send();
  xhr.onreadystatechange = self.checkResponse = function(event) {
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
      console.log(xhr.status + ': ' + xhr.statusText);
    } else {

      var imgResponse = JSON.parse(xhr.responseText);

      // TODO check imgResponse for undefined

      dataImages = imgResponse.hits.map(function(item) {
        var orient;

        if (item.webformatHeight > item.webformatWidth) {
          orient = 'vertical';
        } else if (item.webformatWidth / item.webformatHeight > 1.65) {
          orient = 'horizontal';
        } else {
          orient = 'polaroid';
        }

        return {
          text: item.tags,
          orientation: orient,
          url: item.webformatURL};
      });

      updateGrid();
    }
  };
};

updateGrid = function () {
  var i, max, elem, grid;

  grid = document.querySelector('.grid');

  if (grid.children.length) {
    grid.innerHTML = '';
  }

  sizer = document.createElement('div');
  sizer.className = 'grid__sizer';
  grid.appendChild(sizer);

  for (i = 0, max = dataImages.length; i < max; i++) {
    elem = document.createElement('div');
    img = document.createElement('div');
    text = document.createElement('span');

    switch (dataImages[i].orientation) {
      case 'vertical':
        elem.className = 'grid__item grid__item--height2';
        break;
      case 'horizontal':
        elem.className = 'grid__item grid__item--width2';
        break;
      case 'polaroid':
        elem.className = 'grid__item';
        break;
      default:
        elem.className = 'grid__item';
    }

    img.style.backgroundImage = 'url("' + dataImages[i].url + '")';
    img.className = 'grid__img';
    elem.appendChild(img);

    text.innerHTML = dataImages[i].text;
    text.className = 'grid__title';
    elem.appendChild(text);

    grid.appendChild(elem);
  }

  var iso = new Isotope('.grid', {
    itemSelector: '.grid__item',
    layoutMode: 'masonry',
    // masonry: {
    //   columnWidth: '.grid__sizer'
    // }
  });
  iso.layout();
  iso.reloadItems();
};

getImages();

var input = document.getElementsByClassName('search-block__input')[0];
var button = document.getElementsByClassName('search-block__btn')[0];

var searchPartner = function (event) {
  var value = input.value;
  if (value) {
    getImages(encodeURIComponent(value));
  }
};

var searchBtnListener = button.addEventListener('click', searchPartner);
