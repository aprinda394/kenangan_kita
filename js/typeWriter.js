
let i = 0;
let text1 = "Hey! Sayang";
let text2 = "terima kasih untuk segalanya.Aku mungkin tidak selalu bisa mengungkapkan semuanya dengan kata-kata, tapi hari ini aku ingin kamu tahu betapa bersyukurnya aku memiliki kamu di hidupku. Terima kasih karena selalu ada, bahkan di saat-saat paling sulit sekalipun. Kamu bukan cuma pacar, tapi juga sahabat terbaikku, tempatku berbagi cerita, keluh kesah, tawa, dan air mata.Setiap perhatian kecil yang kamu berikan, setiap pelukan hangat, dan setiap kata penyemangatmu benar-benar berarti untukku. Kamu selalu tahu caranya membuat aku merasa lebih baik, tanpa harus berusaha keras. Kamu hadir bukan hanya sebagai cinta, tapi sebagai rumah yang membuat aku merasa tenang dan aman.Terima kasih karena selalu sabar dengan segala kekuranganku. Terima kasih karena tidak pernah menyerah saat aku mulai meragukan diriku sendiri. Terima kasih karena kamu percaya padaku, bahkan ketika aku sendiri belum yakin. Cinta dan dukunganmu membuat aku ingin menjadi versi terbaik dari diriku.Aku tahu hubungan kita tidak selalu mudah. Ada kalanya kita berbeda pendapat, salah paham, atau bahkan saling menyakiti tanpa sengaja. Tapi setiap kali itu terjadi, kamu selalu memilih untuk tetap bertahan, tetap berjuang, dan tetap mencintaiku. Dan itu adalah hal yang paling berharga yang pernah aku terima.Semoga aku bisa terus membuatmu bahagia seperti kamu telah membahagiakanku. Aku tidak tahu apa yang akan terjadi di masa depan, tapi satu hal yang pasti aku ingin kamu ada di dalamnya.Sekali lagi, terima kasih sudah mencintaiku dengan tulus. Aku mencintaimu lebih dari yang bisa dijelaskan dengan kata-kata.."
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
