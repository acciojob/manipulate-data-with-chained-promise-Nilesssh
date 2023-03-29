const arr = [1,2,3,4];

 setTimeout(()=>setTimeout(()=>nice(arr),1000),3000);

function nice(arr) {
	document.getElementById("output").innerHTML = arr.filter(ele => ele%2===0);
	setTimeout(()=>mulWithTwo(arr),2000);
}
function mulWithTwo(arr) {
	const ans = arr.filter(ele => ele%2===0 );
	const nel = ans.map(ele=>ele*2);
	document.getElementById("output").innerHTML = nel;
}