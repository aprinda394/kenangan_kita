
let i = 0;
let text1 = "Hey! Sayang";
let text2 = "Makasih ya udah selalu ada buat aku, entah itu pas aku lagi seneng, sedih, atau bahkan pas aku lagi nyebelin. Kamu tuh kayak kopi pagi yang bikin hariku lebih semangat. Terima kasih udah jadi tempat aku cerita, tertawa, dan kadang ngambek juga. Aku bersyukur banget punya kamu yang sabar dan selalu ngerti aku. Semoga kita terus bisa bareng-bareng, ngelewatin hari-hari dengan tawa dan cinta.Love,"
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);
//};
