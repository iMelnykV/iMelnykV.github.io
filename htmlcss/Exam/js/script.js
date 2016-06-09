docReady(function() {

// carousels init
var carousels = document.querySelectorAll('.carousel');
var flicks = [];

[].forEach.call(carousels, function(item, i) {
  flicks[i] = new Flickity(item, {
    prevNextButtons: false,
    autoPlay: true,
    wrapAround: true,
    contain: true,
    cellSelector: '.carousel__cell',
    pageDots: false,
  });

  // carousel__arrow--left
  item.children[0].children[0].addEventListener('click', function() {
    flicks[i].next();
  });

  // carousel__arrow--right
  item.children[0].children[1].addEventListener('click', function() {
    flicks[i].previous();
  });
});
// ^ carousels init

var dataImages = [],
    amountOfImages = dataImages.length,
    apiKey = '1983864-eea8becd8812584cf0ae486ec';

var input = document.querySelectorAll('.search-block__input')[0];
var button = document.querySelectorAll('.search-block__btn')[0];
var searchBtnListener = button.addEventListener('click', searchPartner);
var grid = document.querySelector('.grid');
var iso;

iso = new Isotope(grid, {
  itemSelector: '.grid__item'
});

getImages();

function searchPartner(event) {
  var value = input.value;
  if (value) {
    getImages(encodeURIComponent(value));
  }
};

function getImages(query) {
  var xhr,
    q = (query === undefined) ? '' : query,
    orientation = 'all',
    amount = 7,
    url = 'https://pixabay.com/api/?key=' + apiKey +
          '&q=' + q +
          '&orientation=' + orientation +
          '&per_page=' + amount +
          '&image_type=photo&pretty=true';

  getJSONP(url, responseHandler);
}

function responseHandler(data) {
  // TODO check imgResponse for undefined
  if (data.hits.length < 7) {
    console.log('Not enough images');
  }

  dataImages = data.hits.map(function(item) {
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
      url: item.webformatURL
    };
  });

  updateGrid();
}

function updateGrid() {
  var i, max, elem, grid;

  grid = document.querySelector('.grid');
  elems = document.querySelectorAll('.grid__item');

  if (grid.children.length) {
    grid.innerHTML = '';
    iso.remove(elems)
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
    iso.insert(elem);
  }
};
});
// David Flanagan's JSONP function
function getJSONP(url, callback) {
    var cbnum = "cb" + getJSONP.counter++;
    var cbname = "getJSONP." + cbnum;

    if (url.indexOf("?") === -1)
        url += "?callback=" + cbname;
    else
        url += "&callback=" + cbname;

    var script = document.createElement("script");

    getJSONP[cbnum] = function(response) {
        try {
            callback(response);
        }
        finally {
            delete getJSONP[cbnum];
            script.parentNode.removeChild(script);
        }
    };
    script.src = url;
    document.body.appendChild(script);
}

getJSONP.counter = 0;
