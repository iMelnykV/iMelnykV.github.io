function addEvent(element, event, handler) {
	if (window.attachEvent) {
    element.attachEvent('on'+event,handler);
	} else {
		element.addEventListener(event,handler);
	}
}

var Button1 = document.getElementById('3');
var Button2 = document.getElementById('4');

function ChangeButtonState() {
  var statesText = ['START', 'PAUSE'];

	if (_time.isActive) {
		_time.save_time += _time.delta_time();
    _time.Start_time = 0;
	} else {
		_time.Start_time = Date.now();
	}
	_time.isActive =! _time.isActive;
	Button1.innerHTML = statesText[_time.isActive + 0];
}

function resetTimer() {
	var my_timer = document.querySelector('.Clock');
	my_timer.innerHTML = '00:00:00:000';
	_time.isActive = false;
	_time.Start_time = 0;
	_time.End_time = 0;
	_time.save_time = 0;
}

var _time = {
	Start_time: 0,
	End_time: 0,
	isActive: false,
	timerID: undefined,
	minTime: 6,
	addition_time: 0,
	save_time: 0,
	delta_time: function() {
    return Date.now() - this.Start_time;
	}
};

function Counter() {
  if (_time.isActive) {
    _time.timerID=setInterval(startTimer,_time.minTime);
	} else if (_time.timerID !== undefined) {
    clearInterval(_time.timerID);
  }
}

function startTimer() {
  if(_time.isActive) {
    var my_timer = document.querySelector('.Clock');
	  var time = my_timer.innerHTML;
	  var arr = time.split(":");
	  var h = arr[0];
	  var m = arr[1];
	  var s = arr[2];
	  var ms = arr[3];
	  _time.addition_time = _time.delta_time() + _time.save_time;

		if (_time.addition_time >= 3600000) {
      h = '' + Math.floor(_time.addition_time / 3600000);
			_time.addition_time = _time.addition_time % 3600000;
		}
		if (_time.addition_time >= 60000) {
			m = '' + Math.floor(_time.addition_time / 60000);
			_time.addition_time = _time.addition_time % 60000;
		}
		if (_time.addition_time >= 1000) {
			s = '' + Math.floor(_time.addition_time / 1000);
			_time.addition_time = _time.addition_time % 1000;
		}
		if (_time.addition_time < 1000) {
			ms = '' + _time.addition_time;
		}
    if (s.length < 2 ) s = "0" + s;
	  if (m.length < 2) m = "0" + m;
	  if (h.length < 2) h = "0" + h;

    document.getElementById("q").innerHTML = h + ":" + m + ":" + s + ":" + ms;
	}
}
addEvent(Button1, "click", ChangeButtonState);
addEvent(Button1, "click", Counter);
addEvent(Button2, "click", resetTimer);
