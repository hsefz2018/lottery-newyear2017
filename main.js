(function (window) {
  'use strict';

  var Student = function (year, klass, num, name, photo) {
    this.year = year;
    this.klass = klass;
    this.num = num;
    this.name = name;
    this.photo = photo;
  };
  //Student.prototype.distribution = [];
  Student.prototype.show = function () {
    console.log("Hello, I'm " + this.name);
  };

  var students = [
    new Student(1000, 1, 1, 'abc', '110000101.png')
    new Student(1000, 2, 2, 'abc', '110000202.png')
    new Student(1001, 1, 1, 'abc', '110010101.png')
    new Student(1001, 3, 2, 'abc', '110010302.png')
    new Student(1002, 1, 1, 'abc', '110020101.png')
    new Student(1002, 2, 2, 'abc', '110020202.png')
    new Student(1005, 3, 7, 'abc', '110050307.png')
  ];
  for (var i in students) {
    students[i].show();
  }

  var random_under = function (upbound) {
    return Math.floor(Math.random() * upbound);
  };
  var _2d = function (i) {
    return i < 10 ? ('0' + i.toString()) : i.toString();
  };

  var roll = function () {
    document.getElementById('year-disp').classList.remove('highlight-text');
    document.getElementById('klass-disp').classList.remove('highlight-text');
    document.getElementById('num-disp').classList.remove('highlight-text');
    var roll_progress = 0;
    var sel_year = -1, sel_klass = -1, last_idx = 0;
    var timer_id;
    timer_id = setInterval(function () {
      var len = students.length, idx = random_under(len);
      if (roll_progress === 0) {
        // Do nothing
        while (students[idx].year === students[last_idx].year) idx = random_under(len);
      } else if (roll_progress === 1) {
        // Year selected
        while (students[idx].year != sel_year || students[idx].klass === students[last_idx].klass)
          idx = random_under(len);
      } else if (roll_progress === 2 || ++roll_progress % 3 === 0) {
        // Year & class selected
        while (idx === last_idx || students[idx].year != sel_year || students[idx].klass != sel_klass)
          idx = random_under(len);
      } else return;
      last_idx = idx;
      document.getElementById('year-disp').innerText = students[idx].year;
      document.getElementById('klass-disp').innerText = _2d(students[idx].klass);
      document.getElementById('num-disp').innerText = _2d(students[idx].num);
      document.getElementById('name-disp').innerText = students[idx].name;
      document.getElementById('photo-disp').style['background-image'] = 'url(photos/' + students[idx].photo + ')';
    }, 40);
    setTimeout(function () { roll_progress = 1; sel_year = students[last_idx].year; document.getElementById('year-disp').classList.add('highlight-text'); }, 1500);
    setTimeout(function () { roll_progress = 2; sel_klass = students[last_idx].klass; document.getElementById('klass-disp').classList.add('highlight-text'); }, 3250);
    setTimeout(function () { roll_progress = 3; }, 5000);
    setTimeout(function () { clearInterval(timer_id); document.getElementById('num-disp').classList.add('highlight-text'); }, 6500);
    setTimeout(function () {
      document.getElementById('btn-more').classList.remove('collapse');
      document.getElementById('btn-okay').classList.remove('collapse');
      var disp_card = document.getElementById('main-card');
      disp_card.classList.remove('expand');
      disp_card.classList.add('expand-more');
      document.getElementById('list-card').classList.add('expand');
      setTimeout(function () {
        document.getElementById('list-card').classList.remove('expand');
        document.getElementById('list-card').classList.add('expand-more');
      }, 700);  // > 600ms
      var winner_list = document.getElementById('winner-list');
      var item = document.createElement('div');
      item.classList.add('transitive');
      item.classList.add('winner-list-item');
      if (winner_list.children.length % 2 === 0) item.classList.add('odd');
      item.innerHTML = students[last_idx].year + _2d(students[last_idx].klass) + _2d(students[last_idx].num)
        + '&nbsp;&nbsp;&nbsp;' + students[last_idx].name;
      if (winner_list.children.length === 0) winner_list.appendChild(item);
      else winner_list.insertBefore(item, winner_list.firstElementChild);
      setTimeout(function () { item.classList.add('expand'); }, 200);
    }, 7000);
  };

  document.getElementById('btn-go').onclick = function () {
    document.getElementById('btn-go').classList.add('collapse');
    document.getElementById('main-card').classList.add('expand');
    roll();
  };
  document.getElementById('btn-more').onclick = function () {
    document.getElementById('btn-more').classList.add('collapse');
    document.getElementById('btn-okay').classList.add('collapse');
    document.getElementById('main-card').classList.remove('expand-more');
    document.getElementById('main-card').classList.add('expand');
    roll();
  };
  document.getElementById('btn-okay').onclick = function () {
    document.getElementById('main-card').classList.remove('expand-more');
    document.getElementById('winner-list').classList.add('largetext');
    document.getElementById('winners-caption').classList.add('xlargetext');
    document.getElementById('congrats').classList.add('expand');
    document.getElementById('btn-prize').classList.remove('collapse');
  };
  document.getElementById('btn-prize').onclick = function () {
    document.getElementById('list-card').classList.remove('expand-more');
    document.getElementById('btn-prize').classList.add('collapse');
    document.getElementById('prize-card').classList.add('expand');
  };
}(window));
