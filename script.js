// //your JS code here. If required.
const arr = [1,2,3,4];

let first = setTimeout(findOdd(arr),3000);

function findOdd(arr) {
	setTimeout(nice(arr),1000); 
}
function nice(arr) {
	document.getElementById("output").innerHTML = arr.filter(ele => ele%2!==0);
	hey(arr);
}
	function hey(arr) {
	setTimeout(mulWithTwo(arr),2000);
}
function mulWithTwo(arr) {
		const ans = arr.map(ele => ele*2);
	document.getElementById("output").innerHTML = ans;
}


