'use strict'
function con()
{
	return confirm("Let us play a game")
}

function random()
{
	 let s= Math.floor(Math.random()*100)
	 return s%2==0 ? s: s+1;
}


function check1(decide) 
{
	if (s == true){
		 alert("OK, now think an amount of money and keep it in mind ")
		 return 1
	}
	else{
		return alert("it's alright if you dont want to play");
		return 0
		//break;
		//exit();
	}
}
function calculate(random)
{
	alert("add the same amount of money for me in the money which you thought");
	alert ("again add " + random);
	alert("give half to charity");
	alert("now return me my money");
	let div= random/2;
	alert("THE REMAING AMOUNT IS " +div);

}



let s =con();
let s1 = random();
let s3=check1(s);
if(s3 ==1){
	calculate(s1);
}


