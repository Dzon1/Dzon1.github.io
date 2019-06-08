var levo = ["ld klub","eve","rotmans siroki","rotmans slim","ld club"];
var iza = ["rotmans","ld","monus","cesterfild","de santis"];
var ukoso_desno = ["bond","winston","monte carlo","viceroy","fast","gauloises","next","davidoff","karelija"];
var desno = ["lm","lucky strike","laki strajk","west","marlboro","camel","jade","diva","pall mall","ronhill","opposite","parlament"];

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
		msg+="je <span style='color:red;font-size:2rem;'>levo</span><img height='50px' width='50px' src='https://cdn.pixabay.com/photo/2015/08/19/16/14/arrow-896214_640.png'/>";
	}else if(iza.includes(article.toLowerCase())){
		msg+="je <span style='color:red;font-size:2rem;'>iza</span><img height='50px' width='50px' src='https://cdn2.iconfinder.com/data/icons/arrows-vol-1-1/32/down1-512.png'/>";
	}else if(ukoso_desno.includes(article.toLowerCase())){
		msg+="je <span style='color:red;font-size:2rem;'>ukoso-desno</span><img height='50px' width='80px' src='https://www.charbase.com/images/glyph/8600'/>"
	}else if(desno.includes(article.toLowerCase())){
        msg+="je <span style='color:red;font-size:2rem;'>desno</span><img height='50px' width='80px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/800px-Arrow_east.svg.png'/>";
	} else{
		msg+= "<span style='color:red;font-size:2rem;'>nije na stanju</span><img height='50px' width='50px' src='https://www.charbase.com/images/glyph/8600'/>";
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




