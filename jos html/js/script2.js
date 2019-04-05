var nevek = ["Harmónia", "Megvilágosodás", "Pozitivitás" , "Tudod hova kell menned vasárnap","Almáspite"];

	var lany;

	function joslas() {
		var i;
		i = Math.floor(Math.random()*5);
		lany = nevek[i];
		document.getElementById("eredmeny").innerHTML = lany;
	}
