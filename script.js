//your JS code here. If required.
const age = document.getElementById("age")
const name = document.getElementById("name")
const btn = document.getElementById("btn")
btn.addEventListener("click",(e)=>{
	e.preventDefault();
	let ageVal=age.value;
	let nameVal=name.value;
	if(ageVal==="" || nameVal===""){
		alert("Please enter valid details.")
		return
	}
	// alert(age.value) 
	const promise = new Promise((res,rej)=>{
	setTimeout(()=>{
		if(ageVal>18){
			res("Welcome, "+nameVal+". You can vote.")
		}else{
			rej("Oh sorry . You aren't old enough.")
		}
	},4000)
	})
	promise
			.then(result=>alert(result))
			.catch(result=>alert(result))
	age.value=""
	name.value=""
})

