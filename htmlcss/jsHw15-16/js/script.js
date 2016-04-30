// поисковая форма
function GoogleCallback(func, data) {
	window[func](data);
};

var section;

$(function() {
	$('form').on('submit', function() {
		var url = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q="+ encodeURIComponent($('.search').val()) + "&callback=GoogleCallback&context=?";
		$.ajax( {
			url: url,
			dataType: 'jsonp',
			success: function(data, textStatus) {
				var ul = document.createElement('ul');
				$.each(data.results, function(i, val) {
					var li = document.createElement('li');
					li.innerHTML = '<a href="' + val.url + '"title="' + val.url + '"target="_blank">' + val.title + "</a> - " + val.content;
					ul.appendChild(li);
				});
				$('div').html(ul);
			}
		});
		return false;
	});
});


// прототипы
function Human() {
	this.name = 'Tom';
	this.age = 26;
	this.sex = 'male';
	this.height = 190;
	this.weight = 95;
};

Worker.prototype = new Human();
Student.prototype = new Human();

function Worker() {
	this.job = 'sailor';
	this.salary = 4000;
	this.work = function() {
		alert('Это метод work! Wake up!');
	};
};

function Student() {
	this.university = 'Massachusetts Institute of Technology';
	this.grants = 800;
	this.hobby = function() {
		alert('Это метод hobby: watch TV series');
	};
};

var worker1 = new Worker();
var worker2 = new Worker();
var worker3 = new Worker();

var student1 = new Student();
var student2 = new Student();
var student3 = new Student();

console.log(worker1, worker2, worker3);
console.log(student1, student2, student3);

console.log(worker1.name, worker1.age);
console.log(worker2.height, worker2.weight);
console.log(worker3.sex, worker3.name);

console.log(student1.name, student1.university);
console.log(student2.age, student2.age);
console.log(student3.grants, student3.sex);

$(function() {
	worker2.work();
	student3.hobby();
})
