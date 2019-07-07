var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
}

	var li = document.querySelectorAll("li");
	for (var i = 0; i < li.length; i++) {
		console.log("click");
		li[i].addEventListener("click", function () {
			 this.classList.toggle('done');
		})
}


function createListElement() {
	var lit = document.createElement("li");
	lit.appendChild(document.createTextNode(input.value));
	ul.appendChild(lit);
	input.value = "";
	var btn = document.createElement("button");
	btn.classList.add("delete");
	btn.appendChild(document.createTextNode("delete"));
	lit.appendChild(btn);
	again();
	// btn.addEventListener("click", function () {
	// 		 this.classList.toggle('done');
	// })
}

function again() {
	var li = document.querySelectorAll("li");
	for (var i = 0; i < li.length; i++) {
		console.log(li.length);
		li[i].addEventListener("click", function () {
			 this.classList.toggle('done');
		})
}
}

function addListAfterClick() {
	if (inputLength() > 0) {
	createListElement();
}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
	createListElement();
}
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)