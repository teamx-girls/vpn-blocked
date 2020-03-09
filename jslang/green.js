	var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://geoip-db.com/json/geoip.php?jsonp=callback';
var h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(script, h);

var code = document.getElementById('code');


function callback(data) {
	code.innerHTML = data.country_code;
	
    
    if (data.country_code=="ID"){
	text1.innerHTML = "PERHATIAN!";
	text2.innerHTML = "Banyak dari wanita ini adalah wanita lajang dan menikah yang berusaha menipu suami mereka. Mereka mungkin menjadi bagian dari tetangga Anda atau orang yang Anda kenal. Apakah Anda setuju untuk menjaga kerahasiaan identitas wanita-wanita ini ..?";
	text3.innerHTML = "Saya Setuju";
    } 
    else if (data.country_code=="DE"){
    text1.innerHTML = "ACHTUNG!";
	text2.innerHTML = "Viele dieser Frauen sind ledig und verheiratet und versuchen, ihre Ehemänner zu betrügen. Sie gehören vielleicht zu Ihren Nachbarn oder zu Menschen, die Sie kennen. Sind Sie damit einverstanden, die Identität dieser Frauen geheim zu halten?";
	text3.innerHTML = "Ich stimme zu";
    }
    else if (data.country_code=="AT"){
    text1.innerHTML = "ACHTUNG!";
	text2.innerHTML = "Viele dieser Frauen sind ledig und verheiratet und versuchen, ihre Ehemänner zu betrügen. Sie gehören vielleicht zu Ihren Nachbarn oder zu Menschen, die Sie kennen. Sind Sie damit einverstanden, die Identität dieser Frauen geheim zu halten?";
	text3.innerHTML = "Ich stimme zu";
    }
    else if (data.country_code=="CH"){
    text1.innerHTML = "ACHTUNG!";
	text2.innerHTML = "Viele dieser Frauen sind ledig und verheiratet und versuchen, ihre Ehemänner zu betrügen. Sie gehören vielleicht zu Ihren Nachbarn oder zu Menschen, die Sie kennen. Sind Sie damit einverstanden, die Identität dieser Frauen geheim zu halten?";
	text3.innerHTML = "Ich stimme zu";
    }
    else if (data.country_code=="FR"){
    text1.innerHTML = "ATTENTION !";
	text2.innerHTML = "Beaucoup de ces femmes sont des célibataires et des femmes mariées qui cherchent à tromper leur mari. Elles peuvent faire partie de vos voisins ou de personnes que vous connaissez. Acceptez-vous de garder la discrétion sur l'identité de ces femmes... ?";
	text3.innerHTML = "Je suis d'accord";
    }
    else if (data.country_code=="NO"){
    text1.innerHTML = "MERK FØLGENDE!";
	text2.innerHTML = "Mange av disse kvinnene er enslige og gifte kvinner som søker å lure sine ektemenn. De kan være en del av naboene eller folk du kjenner. Er du enig i å beholde diskresjonen om identiteten til disse kvinnene?";
	text3.innerHTML = "Bli enige";
    }
    else if (data.country_code=="SE"){
    text1.innerHTML = "UPPMÄRKSAMHET!";
	text2.innerHTML = "Många av dessa kvinnor är ensamstående och gifta kvinnor som vill lura sina män. De kan vara en del av dina grannar eller personer du känner. Håller du med att hålla diskretionen om dessa kvinnors identitet?";
	text3.innerHTML = "Hålla med";
    }
    else if (data.country_code=="FI"){
    text1.innerHTML = "HUOMIO!";
	text2.innerHTML = "Monet näistä naisista ovat naimattomia ja naimisissa olevia naisia, jotka yrittävät pettää aviomiehiään. He voivat olla osa naapureitasi tai tuntemiasi ihmisiä. Oletteko samaa mieltä siitä, että näiden naisten henkilöllisyydessä on harkintavalta?";
	text3.innerHTML = "Olla samaa mieltä";
    }
	else if (data.country_code=="DK"){
    text1.innerHTML = "OPMÆRKSOMHED!";
	text2.innerHTML = "Mange af disse kvinder er enlige og gifte kvinder, der søger at narre deres mænd. De kan være en del af dine naboer eller folk, du kender. Er du enig i at holde skønnet om disse kvinders identitet?";
	text3.innerHTML = "Enig";
    }
    else if (data.country_code=="BE"){
    text1.innerHTML = "LET OP!";
	text2.innerHTML = "Veel van deze vrouwen zijn alleenstaande en getrouwde vrouwen die hun man willen bedriegen. Ze kunnen deel uitmaken van je buren of mensen die je kent. Bent u het ermee eens om discretie te houden over de identiteit van deze vrouwen...?";
	text3.innerHTML = "Akkoord";
    }
	else if (data.country_code=="NL"){
    text1.innerHTML = "LET OP!";
	text2.innerHTML = "Veel van deze vrouwen zijn alleenstaande en getrouwde vrouwen die hun man willen bedriegen. Ze kunnen deel uitmaken van je buren of mensen die je kent. Bent u het ermee eens om discretie te houden over de identiteit van deze vrouwen...?";
	text3.innerHTML = "Akkoord";
    }
    else if (data.country_code=="IT"){
    text1.innerHTML = "ATTENZIONE!";
	text2.innerHTML = "Molte di queste donne sono donne single e sposate che cercano di ingannare i loro mariti. Possono far parte dei vostri vicini o di persone che conoscete. Accettate di mantenere la discrezione sull'identità di queste donne...?";
	text3.innerHTML = "Accetto";
    }
    else if (data.country_code=="BR"){
    text1.innerHTML = "ATENÇÃO!";
	text2.innerHTML = "Muitas destas mulheres são solteiras e casadas que procuram enganar os seus maridos. Elas podem ser parte de seus vizinhos ou de pessoas que você conhece. Concorda em manter discrição sobre a identidade dessas mulheres?";
	text3.innerHTML = "Concorde";
    }
    
    else if (data.country_code=="PT"){
    text1.innerHTML = "ATENÇÃO!";
	text2.innerHTML = "Muitas destas mulheres são solteiras e casadas que procuram enganar os seus maridos. Elas podem ser parte de seus vizinhos ou de pessoas que você conhece. Concorda em manter discrição sobre a identidade dessas mulheres?";
	text3.innerHTML = "Concorde";
    }
    else if (data.country_code=="ES"){
    text1.innerHTML = "¡ATENCIÓN!";
	text2.innerHTML = "Muchas de estas mujeres son solteras y casadas que buscan engañar a sus maridos. Pueden ser parte de sus vecinos o de gente que conoce. ¿Está de acuerdo en mantener la discreción sobre la identidad de estas mujeres...?";
	text3.innerHTML = "Acepta";
    }
    else if (data.country_code=="AR"){
    text1.innerHTML = "¡ATENCIÓN!";
	text2.innerHTML = "Muchas de estas mujeres son solteras y casadas que buscan engañar a sus maridos. Pueden ser parte de sus vecinos o de gente que conoce. ¿Está de acuerdo en mantener la discreción sobre la identidad de estas mujeres...?";
	text3.innerHTML = "Acepta";
    }
    else if (data.country_code=="MX"){
    text1.innerHTML = "¡ATENCIÓN!";
	text2.innerHTML = "Muchas de estas mujeres son solteras y casadas que buscan engañar a sus maridos. Pueden ser parte de sus vecinos o de gente que conoce. ¿Está de acuerdo en mantener la discreción sobre la identidad de estas mujeres...?";
	text3.innerHTML = "Acepta";
    }
}
	