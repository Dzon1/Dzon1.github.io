<?php
$levo = array("ld klub","eve","rotmans siroki","rotmans slim","ld club");
$iza = array("rotmans","ld","monus","cesterfild","de santis");
$ukoso_desno = array("bond","winston","monte carlo","viceroy","fast","gauloises","next","davidoff","karelija");
$desno = array("lm","lucky strike","laki strajk","west","mallboro","camel","jade","diva","pall mall","ronhill","opposite","parlament");
if (isset($_POST['btn']) && !empty($_POST['article'])) {
	$article = $_POST['article'];
	$msg='Trazeni artikl <b style="font-size:1.6rem">"'.$article.'"</b> ';
	if (in_array(strtolower($article),$levo)) {
		$msg.="je <span style='color:red;font-size:20px;'>levo</span>";
	}else if(in_array(strtolower($article),$iza)){
		$msg.="je <span style='color:red;font-size:20px;'>iza</span>";
	}else if(in_array(strtolower($article),$ukoso_desno)){
		$msg.="je <span style='color:red;font-size:20px;'>ukoso-desno</span>";
	}else if(in_array(strtolower($article),$desno)){
        $msg.="je <span style='color:red;font-size:20px;'>desno</span>";
	} else{
		$msg.= "<span style='color:red;font-size:1.6rem;'>nije na stanju</span>";
	}

	echo "<div style='text-align:center;font-size:1.5rem;margin:50px;auto;'>$msg<br/><br/><a style='display:inline-block;background:skyblue;padding:6px 10px;border-radius:10px;text-decoration:none;' href='index.html'>Nova pretraga</a></div>";
} else{
	exit(header("Location:index.html"));
}
