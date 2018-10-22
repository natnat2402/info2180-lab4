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

	//Exercise 2 
	//to test exercise 2 please comment out exercise 1 and uncomment line 33
		function ex2(){
			var i= 0;
			let list2 = document.querySelectorAll("div");

			for ( i=2; i < 7 ; i++){
				list2[i].addEventListener("mouseover",function(){
					list2[2].classList.add("youlose");
					list2[3].classList.add("youlose");
					list2[4].classList.add("youlose");
					list2[5].classList.add("youlose");
					list2[6].classList.add("youlose");
					msg2();
					removelistener();
				});
			}
		} 
//ex();
		
	//Exercise 3
		let end = document.getElementById("end");
			end.addEventListener("mouseover",msg1);

		function msg1(){
			alert("SUCCESS\nYou Win!");
		}
		function msg2(){
			alert("You touched the wall\nYou lose!!!");
		}

		function removelistener(){
			end.removeEventListener("mouseover",msg1);		
			}


	});
}

	