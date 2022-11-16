"use strict";

// function buttonClick() {
//     var input = document.getElementById('input');
// 	   input.value = '!!!';

// function buttonClick() {
//     var input = document.getElementById('input');
// 	   alert(input.value);
// }

// function buttonClick() {
//     var input = document.getElementById('input');
// 	   var number = Number(input.value);
// 	   var square = number*number;
// 	   alert(square);
// }

// function buttonClick() {
// 	   let input = document.getElementById('input');
//     let input1 = document.getElementById("input1");
// 	   let value = input.value;
//     input.value = input1.value;
//     input1.value = value;
//     alert(number ** 2);
// }

// function buttonClick() {
//     elem.value = 'Новый текст кнопки';
// }

// function buttonClick() {
//     document.getElementById('input').style.color = 'red';

// }
// //Заблокирует элемент
// function button1Click() {
//     var input = document.getElementById('input');
//     input.disabled = true;
// }

// //Отблокирует элемент
// function button2Click() {
//     var input = document.getElementById('input');
//     input.disabled = false;
// }

// function buttonClick() {
//     alert("Hello");
// }

// function buttonHover() {
//     alert("Hello");
// }

// function buttonDoubleClick() {
//     alert("Hello");
// }

// function buttonOut() {
//     alert("Hello");
// }

// function buttonClick() {
//     let inputValue = input.value;
//     alert(inputValue);
// }

// function buttonClick() {
//     input.value = "Я поменял твой текст";
// }

// function buttonClick() {
//     photo.src = "https://picsum.photos/id/0/5616/3744";
// }

// function buttonClick(input) {
//     while (true) {
//         alert(input.value);
//     }
// }

// function stop(input) {
//     input.value = "Еще раз поменял";
// }
// function clicks(input) {
//     input.value = "Я поменял твой текст";
// }

// function clicks(submit) {
//     submit.value = "Ку-ку";
// }

// function clicks(submit) {
//     submit.disabled = true;
//     submit.value = "Больше нельзя нажать!";
// }

// function buttonOut(image) {
//     image.src = 'assets/img/1.jpg';
// }
// function buttonHover(image) {
//     image.src = 'assets/img/2.jpg';
// }

// function clicks(){
//     let elem = document.getElementById('input');
//     elem.style.color = 'red';
//     elem.style.width = '300px';
// }

// let input = document.getElementById("input");
// function inputNotVisible() {
//     input.style.display = "none";
// }
// function inputVisible() {
//     input.style.display = "inline-block";
// }

// function inputTransform() {
//     let input = document.getElementById("input");
//     input.style.color = "red";
//     input.value = "Ой, я поменял твой текст и css!";
//     input.style.width = '300px';
//     input.style.height = '50px';
//     input.style.borderRadius = '10px';
// }

// function block(){
//     var block = document.getElementById('block');
//     var unblock = document.getElementById('unblock');
//     block.value = 'О, теперь на меня больше не нажать!';
//     block.disabled = true;
//     unblock.style.display = 'block';
// }
// function unblock(){
//     var block = document.getElementById('block');
//     var unblock = document.getElementById('unblock');
//     block.value = 'О, на меня снова можно нажимать!';
//     block.disabled = false;
//     unblock.style.display = 'none';
// }

// let counter = 0
// function clickCounter() {
//     document.getElementById("button").innerHTML = ++counter;
// }

// function clicks() {
//     let input = document.getElementById("input");
//     input.style.position = "absolute";
//     input.style.left = "200px";
//     input.value = "Теперь я плаваю справа!";
// }

// function classView() {
//     let input = document.getElementById("input");
//     input.value = "Мои css классы: " + input.className;
// }

// function clicks() {
//     let input1 = document.getElementById("input1");
//     let input2 = document.getElementById("input2");
//     let temp = input1.value;
//     input1.value = input2.value;
//     input2.value = temp;
// }

// function clicks() {
//     let number = document.getElementById("input1").value;
//     let input = document.getElementById("input2");
//     input.value = number ** 2;
// }

// function clicks() {
//     let input1 = document.getElementById('input1');
//     if (!isNaN(input1.value)) {
//         let input2 = document.getElementById('input2');
//         input2.value = input1.value ** 2;
//     } else {
//         alert("Это не число");
//         input1.value = '';
//     }
// }

// function pOver() {
//     let p = document.getElementById("p");
//     p.style.cursor = "text";
// }

// function clicks() {
//     let button = document.getElementById("button");
//     button.style.cursor = "not-allowed";
//     button.disabled = true;
// }

// function addElement(element) {
//     let input = document.getElementById("input");
//     input.value = input.value + element;
// }

// function buttonClick() {
// 	var elem = document.getElementById('elem');
// 	elem.innerHTML = '!!!';
// }

// function buttonClick() {
// 	var elem = document.getElementById('elem');
// 	elem.outerHTML = '<b>' + elem.innerHTML + '</b>';
// }

// function func() {
// 	var elems = document.getElementsByTagName('p');
// 	for (var i = 0; i < elems.length; i++) {
// 		elems[i].innerHTML = i+1;
// 	}
// }

// function func() {
// 	var elems = document.getElementsByClassName('zzz');
// 	for (var i = 0; i < elems.length; i++) {
// 		elems[i].innerHTML = i+1;
// 	}
// }

// function func() {
// 	var elems = document.querySelectorAll('p.zzz');
// 	for (var i = 0; i < elems.length; i++) {
// 		elems[i].innerHTML = i+1;
// 	}
// }

// function textTrans() {
// 	let p = document.getElementById("p");
// 	p.innerHTML = "Ку-ку! А я <b>жирный</b>!";
// }

// function textTrans() {
// 	let p = document.getElementById("p");
// 	p.outerHTML = "<h3>Абзац превратился в h3!</h3>";
// }

// function mult() {
// 	let input1 = document.getElementById("firstNumber");
// 	let input2 = document.getElementById("secondNumber");
// 	let result = parseInt(input1.value) + parseInt(input2.value);
// 	let input3 = document.getElementById("result");
// 	input3.innerHTML = result;
// }

// function pTrans() {
// 	p = document.getElementsByTagName("p");
// 	for (i = 0; i < p.length; i++) {
// 		p[i].innerHTML = "Ку-ку!";
// 	}
// }

// function Trans() {
// 	let p = document.getElementsByClassName("www");
// 	for (let i = 0; i < p.length; i++) {
// 		p[i].innerHTML = i + 1;
// 	}
// }

// function Trans() {
// 	let www = document.querySelectorAll("p.www");
// 	for (let i = 0; i < www.length; i++) {
// 		www[i].innerHTML = i + 1;
// 	}
// }

// function classAlert() {
// 	let p = document.getElementById("p");
// 	alert(p.getAttribute("class"));
// }

// function classAlert() {
// 	let p = document.getElementById("p");
// 	alert(p.getAttribute("class"));
// }
// function removeAttr() {
// 	let p = document.getElementById("p");
// 	alert("Класс удален! Нажмите на первую кнопку чтобы проверить это!")
// 	p.removeAttribute("class");
// }

// function classAlert() {
// 	let p = document.getElementById("p");
// 	alert(p.getAttribute("class"));
// }
// function setAttr() {
// 	let p = document.getElementById("p");
// 	alert("Класс изменен! Нажмите на первую кнопку чтобы проверить это!");
// 	p.setAttribute("class", "new-class");
// }

// function copyText() {
// 	input = document.getElementById("text").value;
// 	document.getElementById("new-text").innerHTML = input;
// }

// function hrefTrans() {
// 	let a = document.getElementsByTagName("a");
// 	for (let i = 0; i < a.length; i++) {
// 		a[i].innerHTML = a[i].innerHTML + " (" + a[i].getAttribute("href") + ")";
// 	}
// }

// function pTrans(text) {
// 	text.disabled = true;
// 	text.innerHTML = "О, а на меня больше нельзя нажать!"
// 	let p = document.getElementById("text");
// 	p.innerHTML = "Привет, мир!";
// 	p.style.color = "red";
// }

// function pTrans() {
// 	let p = document.getElementsByTagName("p");
// 	for (let i = 0; i < p.length; i++) {
// 		p[i].innerHTML = i;
// 	}
// }

// function pTrans() {
// 	let p = document.getElementsByTagName("p");
// 	for (let i = 0; i < p.length; i++) {
// 		p[i].innerHTML = i + ". " + p[i].innerHTML;
// 	}
// }

// var date = new Date();
// alert(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());

// var months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];

// var date = new Date();
// var month = date.getMonth();
// alert(months[month]);

// let date = new Date();
// alert(date.getDay());

// let date = new Date();
// alert(date.getMonth());

// let date = new Date();
// alert(date.getFullYear());

// let date = new Date();
// date.getTime();
// alert(
//   `${date.getHours() >= 10 ? date.getHours() : "0" + date.getHours()}:${
//     date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes()
//   }:${date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds()} ${
//     date.getDay() >= 10 ? date.getDay() : "0" + date.getDay()
//   }.${
//     date.getMonth() >= 10 ? date.getMonth() : "0" + date.getMonth()
//   }.${date.getFullYear()}`
// );

// let date = new Date();
// alert(date.getDay());

// function convertToWord(num) {
//   let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
//   return days[num];
// }

// let date = new Date();
// alert(convertToWord(date.getDay()));

// function convertToWord(num) {
//     let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
//     return days[num];
//   }

// let date = new Date(2015, 0, 7);
// alert(convertToWord(date.getDay()));

// let date = new Date();
// let minutes = Math.floor(date.getTime() / (1000 * 60));

// let time = Date.parse('1988-03-01T00:00:00');
// let date = new Date();
// let now = date.getTime();
// let result = now - time;
// result = result / (1000 * 60 * 60);
// alert(result);

// let Date = new Date();
// let now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
// let result = Math.floor((date.getTime() - now.getTime()) / 1000);
// alert(result);

// let now = new Date();
// let end = new Date(
//   now.getFullYear(),
//   now.getMonth(),
//   now.getDate() + 1,
//   0,
//   0,
//   0
// );
// let res = Math.floor((end.getTime() - now.getTime()) / 1000);
// alert(res);

// document.querySelector("#input").addEventListener("blur", function () {
//   let birthday = new Date(Date.parse(this.value));
//   let now = new Date();
//   birthday.setFullYear(+now.getFullYear());
//   if (birthday <= now) {
//     birthday.setFullYear(+birthday.getFullYear() + 1);
//   }
//   let difference = Math.round((+birthday - now) / 86400000);
//   document.getElementById("output").innerHTML = difference;
// });

// function count() {
//     let counter = document.querySelector(".counter");
//     let i = 0
//     setInterval(function() {
//         i++;
//         counter.innerHTML = i;
//     }, 1000)
// }

// function start() {
// 	window.timerState = setInterval(timer, 1000);
// }
// function stop() {
// 	clearInterval(timerState);
// }

// function timer() {
// 	let elem = document.querySelector('.counter');
// 	elem.innerHTML = parseInt(elem.innerHTML)+1;
// }

// window.setInterval(function () {
//   let date = new Date();

//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();

//   if (hours < 10) hours = "0" + hours;
//   if (minutes < 10) minutes = "0" + minutes;
//   if (seconds < 10) seconds = "0" + seconds;
//   let time = hours + ":" + minutes + ":" + seconds;
//   document.getElementById("timer").innerHTML = time;
// }, 1000);

// function start() {
//   window.timerElement = window.setInterval(timer, 300);
//   document.getElementById("input").disabled = true;
// }
// function stop() {
//     window.clearInterval(window.timerElement);
// }
// function timer() {
//   let pTimer = document.getElementById("timer");
//   var number = parseInt(pTimer.innerHTML) - 1;
//   pTimer.innerHTML = number;
//   if (number == 0) {
//     stop();
//     var timetStop = document.getElementById("stop");
//     timetStop.innerHTML = "Обратный отсчет завершен.";
//   }
// }
go()
let number = 1;
function go(){
    window.setInterval(timer, 1000);
}
function timer(){
    if(number == undefined || number == 3) {
        number = 1;
    } else number = number + 1;
    let img = document.getElementById('img');
    img.src = 'assets/img/' + number + '.png';
}