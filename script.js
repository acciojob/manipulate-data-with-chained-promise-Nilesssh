const arr = [1,2,3,4];

 setTimeout(function () {setTimeout(
	  function () {
	document.getElementById("output").innerHTML = arr.filter(ele => ele%2===0);
	setTimeout(
		function (){
	const ans = arr.filter(ele => ele%2===0 );
	const nel = ans.map(ele=>ele*2);
	document.getElementById("output").innerHTML = nel;
},2000);
},1000),3000});


