let t = true;
let a, b, c;
// Ввод коэффициентов уравнения
while (t) {
	a = Number(prompt("Enter number a"));
	b = Number(prompt("Enter number b"));
	c = Number(prompt("Enter number c"));

	if (a==a && b==b && c==c){
    	t = false;
	} else {
		alert("Go crazy adsfgasgvaggasg")
	}
}

if (a != 0 && b != 0 && c != 0) {
	let x1, x2;
	let d = Math.pow(b, 2) - 4*a*c;
	console.log("d=" + d);
	alert(d.toFixed(2))
	if (d >= 0) {
		 x1 = ((-1)*b + Math.sqrt(d))/2*a;
		 x2 = ((-1)*b - Math.sqrt(d))/2*a;

		alert("x1="+x1.toFixed(2));
		alert("x2="+x2.toFixed(2));

	} else {
	 	
	 	let x3 = ((-1)*b)/2*a;
	 	let x4 = (Math.sqrt(Math.abs(d)))/2*a;

	
	 	alert(x3.toFixed(2)+ "+" + x4.toFixed(2)+"i");
	 	alert(x3.toFixed(2)+ "-" + x4.toFixed(2)+"i");
	}

} else {
	if (a==0 && b == 0 && c!=0) {
		alert("не верное равенство")
	} else
		alert("не уравнение");
}