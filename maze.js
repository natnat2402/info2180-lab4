	//Exercise 1
window.onload = function(){	
	let start = document.getElementById("start");
	start.addEventListener("mouseover", function(){
	
		let list = document.getElementsByClassName("boundary");
		for(var i = 0 ; i < 5; i++){
			list[i].onmouseover = function(){
				this.classList.add("youlose");
				msg2();
				removelistener();		
			}
		}
		
	});
}

	