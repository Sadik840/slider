document.getElementsByClassName('first');
setMargin(1);
var active=0;

function displaySlide(n){
	active = n;

	setMargin(n);
}

function setMargin(num){
	if(num==1){
		first[0].style.marginleft = '0%';
	}
	if(num==2){
		first[0].style.marginleft = '-20%';
	}
	if(num==3){
		first[0].style.marginleft = '-40%';
	}
	if(num==4){
		first[0].style.marginleft = '-60%';
	}
}

function nextSlide(p){
	active = active+p;
	displaySlide(active);
}
function nextSlide(q){
	active = active+q;
	displaySlide(active);
}