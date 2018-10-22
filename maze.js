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

	//Exercise 4
		
		start.addEventListener("click",function(){
			location.reload();
		});

	//Exercise 5
		let status = document.getElementById("status");

		function msg1(){
			status.innerHTML = "SUCCESS\nYou Win";
		}
		function msg2(){
			status.innerHTML = "You touched the wall\nYou lose";	
		}

	//Exercise 6

		let maze = document.getElementById("maze");
		maze.addEventListener("mouseleave",illegal);
		function illegal(){	
			let list3 = document.querySelectorAll("div");
			list3[2].classList.add("youlose");
			list3[3].classList.add("youlose");
			list3[4].classList.add("youlose");
			list3[5].classList.add("youlose");
			list3[6].classList.add("youlose");
			status.innerHTML = "You illegally left the maze You Lose !";
			removelistener();
		}
		end.addEventListener("mouseleave",function(){
			maze.removeEventListener("mouseleave",illegal);	
		});

	});
}

	