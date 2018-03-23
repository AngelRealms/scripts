var all = document.getElementsByTagName("*")
function func(element){
	alert(element.tagName.toLowerCase() + "\n" + element.id + element.innerHTML);
}
for(var x=0; x < all.length; x++){
	all[x].addEventListener('click',function(){func(this);},false);
}
