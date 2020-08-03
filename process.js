$(document).ready(function(){
var levo = ["ld klub","eve","rotmans siroki","rotmans slim","ld club"];
var iza = ["rotmans","ld","monus","cesterfild","de santis"];
var ukoso_desno = ["bond","winston","monte carlo","viceroy","fast","gauloises","next","davidoff","karelija"];
var desno = ["lm","lucky strike","laki strajk","west","marlboro","camel","jade","diva","pall mall","ronhill","opposite","parlament"];
var msg;
var forma = document.getElementById('forma');
var result = $('#result');
var naslov=$("h1");
var btn=$("#btn");
naslov.css({left:"-1000px"});
naslov.animate({
left:0,
top:600,
fontSize:64}
,1300, function(){
naslov.css("color","gold");
naslov.delay(1200).animate({
top:0,
fontSize:48
}
,300);
naslov.css("color","white");
}
);
var  arrow= document.getElementById('arrow');
var ac=$("#arrow_container");
ac.hide();
result.hide();
forma.addEventListener("submit",function loadDoc(e) {
	e.preventDefault();
ac.show("explode",{pieces:14},300).hide("explode",{pieces:14},4000);
        //ac.fadeIn().fadeOut(3500);
        result.slideDown().slideUp(4500);
	msg='';
	var article = document.getElementById('article').value.trim();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

  if (article !== '') {
  	
	msg='Trazeni artikl <b style="font-size:2rem">"'+article+'"</b> ';
	if (levo.includes(article.toLowerCase())) {
		arrow.src='https://cdn.pixabay.com/photo/2015/08/19/16/14/arrow-896214_640.png';
		msg+="je <span style='color:red;font-size:2rem;'>levo</span>";
	}else if(iza.includes(article.toLowerCase())){
		arrow.src='https://cdn2.iconfinder.com/data/icons/arrows-vol-1-1/32/down1-512.png';
		msg+="je <span style='color:red;font-size:2rem;'>iza</span>";
	}else if(ukoso_desno.includes(article.toLowerCase())){
		arrow.src='https://www.charbase.com/images/glyph/8600';
		msg+="je <span style='color:red;font-size:2rem;'>ukoso-desno</span>"
	}else if(desno.includes(article.toLowerCase())){
		arrow.src='https://cdn3.iconfinder.com/data/icons/social-productivity-line-art-3/128/arrow-right2-512.png';
        msg+="je <span style='color:red;font-size:2rem;'>desno</span>";
	} else{
		arrow.src='https://img.icons8.com/cotton/2x/cancel-2--v1.png';
		msg+= "<span style='color:red;font-size:2rem;'>nije na stanju</span>";
	}
}else{
	arrow.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1024px-Icon-round-Question_mark.svg.png';
	msg= "<span style='color:red'>Niste uneli tekst</span>";
}
	document.getElementById('article').value = "";
      result.html(msg);
    }
  };
  xhttp.open("GET", "", true);
  xhttp.send();
});
});




