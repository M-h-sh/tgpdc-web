// 'js/mian.js'

var slider_img = document.querySelector('.bg-image');
var images = ['hands.jpg', 'g.png', 'client.png', 'd.png', 'y.png'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "assets/"+images[i]);
	
}