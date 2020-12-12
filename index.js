let SidebarShowBtn = document.querySelector(".sidebar-show-btn");
let Sidebar = document.querySelector(".sidebar");
let BtnMore = document.querySelector(".btn-more");
let Cards = document.querySelectorAll(".card");
let widgets = document.querySelectorAll(".widget");
let WidgetBody = document.querySelectorAll(".widget__body");
let Location = document.querySelectorAll(".location-group__checkbox");
let Checkbox = document.querySelectorAll(".checkbox");
let WidgetShowHiddenBtn = document.querySelector(".widget__show-hidden-btn");

let CardCount = 9
console.log(Cards[2]);

for (let i = 9; i < Cards.length; i++) {
	Cards[i].classList.add("card--hide");
}	
SidebarShowBtn.onclick = function (){
	Sidebar.classList.toggle("sidebar-mob-active");
}

BtnMore.onclick = function (){
	for (let i = 0; (i < 3 && CardCount < Cards.length); i++) {
		Cards[CardCount].classList.remove("card--hide");
		CardCount++;
	}	
}

widgets.forEach ((widget, index) => {
	widget.addEventListener('click', function (event) {
		if(event.target.classList.contains("widget__title")) {
			event.target.classList.toggle("widget__title--transform");
			WidgetBody[index].classList.toggle("widget--hide");
		}
	});
});

Location[4].addEventListener('change', function (event) {
	if (Location[4].checked) {
		for (let i = 0; i <(Location.length-1); i++) {
		Location[i].checked = false;
		};		
	} 
});

for (let i = 0; i <(Location.length-1); i++) {
	Location[i].addEventListener('change', function (event) {
		if (Location[4].checked) {
			Location[4].checked = false;
		}
	});
};

WidgetShowHiddenBtn.addEventListener("click", function (event) {
	for (let i = 5; i <(Checkbox.length); i++) {
		Checkbox[i].classList.toggle("widget__hidden");
	}
})
