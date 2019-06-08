var levo = ["ld klub","eve","rotmans siroki","rotmans slim","ld club"];
var iza = ["rotmans","ld","monus","cesterfild","de santis"];
var ukoso_desno = ["bond","winston","monte carlo","viceroy","fast","gauloises","next","davidoff","karelija"];
var desno = ["lm","lucky strike","laki strajk","west","mallboro","camel","jade","diva","pall mall","ronhill","opposite","parlament"];

console.log('test');
var msg;
var forma = document.getElementById('forma');
var result = document.getElementById('result');
forma.addEventListener("submit",function loadDoc(e) {
	e.preventDefault();
	msg='';
	var article = document.getElementById('article').value.trim();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    
  if (article !== '') {
	msg='Trazeni artikl <b style="font-size:2rem">"'+article+'"</b> ';
	if (levo.includes(article.toLowerCase())) {
		msg+="je <span style='color:red;font-size:2rem;'>levo</span>";
	}else if(iza.includes(article.toLowerCase())){
		msg+="je <span style='color:red;font-size:2rem;'>iza</span>";
	}else if(ukoso_desno.includes(article.toLowerCase())){
		msg+="je <span style='color:red;font-size:2rem;'>ukoso-desno</span>";
	}else if(desno.includes(article.toLowerCase())){
        msg+="je <span style='color:red;font-size:2rem;'>desno</span>";
	} else{
		msg+= "<span style='color:red;font-size:2rem;'>nije na stanju</span>";
	}
}else{
	msg= "<span style='color:red'>Niste uneli tekst</span>";
}
	document.getElementById('article').value = "";
      result.innerHTML = msg;
    }
  };
  xhttp.open("GET", "", true);
  xhttp.send();
});




