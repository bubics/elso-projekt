	var nevek = ["V-bucks", "Barna", "Laura" , "Életkedv","A lolosok buzik"];

	var lany;

	function joslas() {
		var i;
		i = Math.floor(Math.random()*5);
		lany = nevek[i];
		document.getElementById("eredmeny").innerHTML = lany;
	}
