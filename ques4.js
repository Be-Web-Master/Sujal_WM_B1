// Implement throttle function

const btn = document.getElementById("btn");
	
function throttleFunc(func, delay){
	let prev = 0; 
    console.log("throttle")
	return (...args) => {
		let now = new Date().getTime();  
		console.log({now,prev, delay}); 
		if(now - prev> delay){ 
		prev = now;
		return func(...args); 
		}
	}
}

	btn.addEventListener("click", throttleFunc(()=>{
	console.log("button is clicked")
	}, 2000));
