var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://geoip-db.com/json/geoip.php?jsonp=callback';
var h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(script, h);

var country = document.getElementById('country');
var city = document.getElementById('city');

function callback(data) {
	
	if (data.country_code=="ID"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Banyak gadis dan janda sedang menunggu kencan seks, bersenang-senang dan mengobrol";
	text2.innerHTML = "mengobrol dan video call dengan partner sexmu";
	text3.innerHTML = "Grup 'Whats-Dating' gratis dan tanpa peraturan";
    text4.innerHTML = "Dapatkan Pasangan Seks Anda malam ini!";
    text5.innerHTML = "mengobrol dan video call dengan partner sexmu";
    text6.innerHTML = "Dapatkan Pasangan Seks Anda malam ini!";
    text7.innerHTML = "hai .. saya lajang, dan saya perlu kencan seks malam ini.😍😍";
    text8.innerHTML = "benar-benar grup yang hebat, banyak wanita seksi dan horny di sini.";
    text9.innerHTML = "Halo, saya di sana juga, saya menunggu Anda";
    text10.innerHTML = "Grup yang sangat keren, aku menemukan cintaku di sini 😋😍";
    text11.innerHTML = "Yang terbaik adalah saya belum pernah menemukan grup kencan seperti ini 👌";
    text12.innerHTML = "Bergabunglah dengan grup 'Whats-Dating' kami ... gratis dan tanpa peraturan!";
  	} 
    else if (data.country_code=="DE"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Viele Mädchen und Witwen warten auf Sex-Dates, haben Spaß und plaudern";
	text2.innerHTML = "Chat und Videoanruf mit Ihren Sexpartnern";
	text3.innerHTML = "Die Gruppe 'What-Dating' ist kostenlos und unverbindlich";
    text4.innerHTML = "Holen Sie sich Ihren Sex-Partner heute Abend!";
    text5.innerHTML = "Chat und Videoanruf mit Ihren Sexpartnern";
    text6.innerHTML = "Holen Sie sich Ihren Sex-Partner heute Abend!";
    text7.innerHTML = "hi .. ich bin single und brauche heute abend ein sexdate 😍😍";
    text8.innerHTML = "Wirklich eine tolle Gruppe, viele sexy und geile Frauen hier. 😋😍";
    text9.innerHTML = "Hallo, ich bin auch da, ich warte auf dich";
    text10.innerHTML = "Wirklich coole Gruppe, ich finde meine Liebe hier";
    text11.innerHTML = "Das Beste ist, dass ich noch nie eine solche Datumsgruppe gefunden habe 👌";
    text12.innerHTML = "Treten Sie unserer 'Whats-Dating' Gruppe bei ... kostenlos und unverbindlich!";
	}
	else if (data.country_code=="AT"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Viele Mädchen und Witwen warten auf Sex-Dates, haben Spaß und plaudern";
	text2.innerHTML = "Chat und Videoanruf mit Ihren Sexpartnern";
	text3.innerHTML = "Die Gruppe 'What-Dating' ist kostenlos und unverbindlich";
    text4.innerHTML = "Holen Sie sich Ihren Sex-Partner heute Abend!";
    text5.innerHTML = "Chat und Videoanruf mit Ihren Sexpartnern";
    text6.innerHTML = "Holen Sie sich Ihren Sex-Partner heute Abend!";
    text7.innerHTML = "hi .. ich bin single und brauche heute abend ein sexdate 😍😍";
    text8.innerHTML = "Wirklich eine tolle Gruppe, viele sexy und geile Frauen hier. 😋😍";
    text9.innerHTML = "Hallo, ich bin auch da, ich warte auf dich";
    text10.innerHTML = "Wirklich coole Gruppe, ich finde meine Liebe hier";
    text11.innerHTML = "Das Beste ist, dass ich noch nie eine solche Datumsgruppe gefunden habe 👌";
    text12.innerHTML = "Treten Sie unserer 'Whats-Dating' Gruppe bei ... kostenlos und unverbindlich!";
	}
	else if (data.country_code=="CH"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Viele Mädchen und Witwen warten auf Sex-Dates, haben Spaß und plaudern";
	text2.innerHTML = "Chat und Videoanruf mit Ihren Sexpartnern";
	text3.innerHTML = "Die Gruppe 'What-Dating' ist kostenlos und unverbindlich";
    text4.innerHTML = "Holen Sie sich Ihren Sex-Partner heute Abend!";
    text5.innerHTML = "Chat und Videoanruf mit Ihren Sexpartnern";
    text6.innerHTML = "Holen Sie sich Ihren Sex-Partner heute Abend!";
    text7.innerHTML = "hi .. ich bin single und brauche heute abend ein sexdate 😍😍";
    text8.innerHTML = "Wirklich eine tolle Gruppe, viele sexy und geile Frauen hier. 😋😍";
    text9.innerHTML = "Hallo, ich bin auch da, ich warte auf dich";
    text10.innerHTML = "Wirklich coole Gruppe, ich finde meine Liebe hier";
    text11.innerHTML = "Das Beste ist, dass ich noch nie eine solche Datumsgruppe gefunden habe 👌";
    text12.innerHTML = "Treten Sie unserer 'Whats-Dating' Gruppe bei ... kostenlos und unverbindlich!";
	}
	else if (data.country_code=="FR"){
    country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Beaucoup de filles et de veuves attendent des rendez-vous sexuels, s'amusent et discutent";
	text2.innerHTML = "Chat et appel vidéo avec vos partenaires sexuels";
	text3.innerHTML = "Le groupe 'What-Dating' est gratuit et sans engagement";
    text4.innerHTML = "Obtenez votre partenaire sexuel ce soir!";
    text5.innerHTML = "Chat et appel vidéo avec vos partenaires sexuels";
    text6.innerHTML = "Obtenez votre partenaire sexuel ce soir!";
    text7.innerHTML = "salut .. je suis célibataire et j'ai besoin d'une rencontre sexuelle ce soir 😍😍";
    text8.innerHTML = "Vraiment un grand groupe, beaucoup de femmes sexy et sexy ici. 👌";
    text9.innerHTML = "Bonjour, je suis là aussi, je vous attends 😍";
    text10.innerHTML = "Groupe vraiment cool, je trouve mon amour ici";
    text11.innerHTML = "La meilleure chose est que je n'ai jamais trouvé un tel groupe de rendez-vous 👌";
    text12.innerHTML = "Rejoignez notre groupe 'What-Dating' ... gratuitement et sans obligation!";
  	}
	else if (data.country_code=="BE"){
    country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Veel meisjes en weduwen wachten op seksdates, hebben plezier en chatten";
	text2.innerHTML = "Chat en video-oproep met uw sekspartners";
	text3.innerHTML = "De groep 'What-Dating' is gratis en niet bindend";
    text4.innerHTML = "Haal je sekspartner vanavond!";
    text5.innerHTML = "Chat en video-oproep met uw sekspartners";
    text6.innerHTML = "Haal je sekspartner vanavond!";
    text7.innerHTML = "hallo .. ik ben single en heb vannacht een sekse nodig 😋";
    text8.innerHTML = "Echt een geweldige groep, veel sexy en geile vrouwen hier.";
    text9.innerHTML = "Hallo, ik ben er ook, ik wacht op je 😍";
    text10.innerHTML = "Echt coole groep, ik vind mijn liefde hier";
    text11.innerHTML = "Het beste is dat ik nog nooit zo'n date-groep heb gevonden 👌";
    text12.innerHTML = "Word lid van onze 'What-Dating' groep ... gratis en vrijblijvend!";
  	}
	else if (data.country_code=="NL"){
    country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Veel meisjes en weduwen wachten op seksdates, hebben plezier en chatten";
	text2.innerHTML = "Chat en video-oproep met uw sekspartners";
	text3.innerHTML = "De groep 'What-Dating' is gratis en niet bindend";
    text4.innerHTML = "Haal je sekspartner vanavond!";
    text5.innerHTML = "Chat en video-oproep met uw sekspartners";
    text6.innerHTML = "Haal je sekspartner vanavond!";
    text7.innerHTML = "hallo .. ik ben single en heb vannacht een sekse nodig 😋";
    text8.innerHTML = "Echt een geweldige groep, veel sexy en geile vrouwen hier.";
    text9.innerHTML = "Hallo, ik ben er ook, ik wacht op je 😍";
    text10.innerHTML = "Echt coole groep, ik vind mijn liefde hier";
    text11.innerHTML = "Het beste is dat ik nog nooit zo'n date-groep heb gevonden 👌";
    text12.innerHTML = "Word lid van onze 'What-Dating' groep ... gratis en vrijblijvend!";
  	}
	else if (data.country_code=="SE"){
    country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Många flickor och änkor väntar på sexdatum, ha kul och chatta";
	text2.innerHTML = "Chatta och videosamtal med dina sexpartners";
	text3.innerHTML = "Den 'What-dating' grupp är gratis och icke-bindande";
    text4.innerHTML = "Skaffa din sexpartner i kväll!";
    text5.innerHTML = "Chatta och videosamtal med dina sexpartners";
    text6.innerHTML = "Skaffa din sexpartner i kväll!";
    text7.innerHTML = "hej .. jag är singel och behöver en sexdatum ikväll 😋";
    text8.innerHTML = "Verkligen en bra grupp, massor av sexiga och kåta kvinnor här.";
    text9.innerHTML = "Hej, jag är där också, jag väntar på dig  😍";
    text10.innerHTML = "Riktigt cool grupp, jag hittar min kärlek här";
    text11.innerHTML = "Det bästa är att jag aldrig hittat en sådan datumgrupp 👌";
    text12.innerHTML = "Gå med i vår 'What-Dating' -grupp ... gratis och utan skyldighet!";
  	}
	else if (data.country_code=="DK"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Mange piger og enker venter på sexdatoer, har det sjovt og chatter";
	text2.innerHTML = "Chat og videoopkald med dine sexpartnere";
	text3.innerHTML = "Gruppen 'Whats-Dating' er gratis og uforpligtende";
    text4.innerHTML = "Få din sexpartner i aften!";
    text5.innerHTML = "Chat og videoopkald med dine sexpartnere";
    text6.innerHTML = "Få din sexpartner i aften!";
    text7.innerHTML = "hej .. jeg er single og har brug for en sexdato i aften 😋";
    text8.innerHTML = "Virkelig en dejlig gruppe, masser af sexede og liderlige kvinder her.";
    text9.innerHTML = "Hej, jeg er også der, jeg venter på dig 😍";
    text10.innerHTML = "Virkelig cool gruppe, jeg finder min kærlighed her";
    text11.innerHTML = "Det bedste er, at jeg aldrig har fundet en sådan datagruppe 👌";
    text12.innerHTML = "Deltag i vores 'Whats-Dating' gruppe ... gratis og uden forpligtelse!";
  	}
	else if (data.country_code=="FI"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Monet tytöt ja lesket odottavat sukupuolen päivämääriä, pitävät hauskaa ja keskustelevat";
	text2.innerHTML = "Chat ja videopuhelu seksikumppanien kanssa";
	text3.innerHTML = "Whats-Dating -ryhmä on ilmainen ja ei-sitova";
    text4.innerHTML = "Hanki seksikumppani tänään!";
    text5.innerHTML = "Chat ja videopuhelu seksikumppanien kanssa";
    text6.innerHTML = "Hanki seksikumppani tänään!";
    text7.innerHTML = "Hei .. Olen sinkku ja tarvitsen sukupuolen tänään 😋";
    text8.innerHTML = "Todella hyvä ryhmä, paljon seksikkäitä ja kiimaisia naisia täällä.";
    text9.innerHTML = "Hei, minäkin olen siellä, odotan sinua 😍";
    text10.innerHTML = "Todella siisti ryhmä, täällä on rakkauteni";
    text11.innerHTML = "Parasta on, että en ole koskaan löytänyt sellaista päivämääräryhmää 👌";
    text12.innerHTML = "Liity Whats-Dating-ryhmään ... ilmaiseksi ja ilman velvoitetta!";
  	}
	else if (data.country_code=="NO"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Mange jenter og enker venter på sexdato, har det gøy og chatter";
	text2.innerHTML = "Chat og videosamtale med sexpartnerne dine";
	text3.innerHTML = "'Whats-Dating' -gruppen er gratis og uforpliktende";
    text4.innerHTML = "Få din sexpartner i kveld!";
    text5.innerHTML = "Chat og videosamtale med sexpartnerne dine";
    text6.innerHTML = "Få din sexpartner i kveld!";
    text7.innerHTML = "hei .. jeg er singel og trenger en sexdate i kveld 😋";
    text8.innerHTML = "Virkelig en flott gruppe, mange sexy og kåte kvinner her.";
    text9.innerHTML = "Hallo, jeg er der også, jeg venter på deg 😍";
    text10.innerHTML = "Virkelig kul gruppe, jeg finner min kjærlighet her";
    text11.innerHTML = "Det beste er at jeg aldri har funnet en slik datagruppe 👌";
    text12.innerHTML = "Bli med i vår 'Whats-Dating' gruppe ... gratis og uten forpliktelse!";
  	}
	else if (data.country_code=="IT"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Molte ragazze e vedove stanno aspettando appuntamenti sessuali, si divertono e chattano";
	text2.innerHTML = "Chat e videochiamata con i tuoi partner sessuali";
	text3.innerHTML = "Il gruppo 'Whats-Dating' è gratuito e non vincolante";
    text4.innerHTML = "Ottieni il tuo partner sessuale stasera!";
    text5.innerHTML = "Chat e videochiamata con i tuoi partner sessuali";
    text6.innerHTML = "Ottieni il tuo partner sessuale stasera!";
    text7.innerHTML = "ciao sono single e ho bisogno di un appuntamento sessuale stasera 😋";
    text8.innerHTML = "Davvero un grande gruppo, molte donne sexy ed eccitate qui.";
    text9.innerHTML = "Ciao, ci sono anch'io, ti aspetto 😍";
    text10.innerHTML = "Gruppo davvero fantastico, trovo il mio amore qui";
    text11.innerHTML = "La cosa migliore è che non ho mai trovato un tale gruppo di date 👌";
    text12.innerHTML = "Unisciti al nostro gruppo 'Whats-Dating' ... gratis e senza impegno!";
  	}
	else if (data.country_code=="PT"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Muitas garotas e viúvas estão esperando encontros sexuais, se divertem e conversam";
	text2.innerHTML = "Bate-papo e vídeo chamada com seus parceiros sexuais";
	text3.innerHTML = "O grupo 'Whats-Dating' é gratuito e não vinculativo";
    text4.innerHTML = "Obtenha seu parceiro sexual hoje à noite!";
    text5.innerHTML = "Bate-papo e vídeo chamada com seus parceiros sexuais";
    text6.innerHTML = "Obtenha seu parceiro sexual hoje à noite!";
    text7.innerHTML = "oi .. eu sou solteiro e preciso de um encontro hoje à noite 😋";
    text8.innerHTML = "Realmente um ótimo grupo, muitas mulheres sexy e excitadas aqui.";
    text9.innerHTML = "Olá, também estou lá, estou esperando por você 😍";
    text10.innerHTML = "Grupo muito legal, eu acho meu amor aqui";
    text11.innerHTML = "A melhor coisa é que eu nunca encontrei um grupo de datas assim 👌";
    text12.innerHTML = "Participe do nosso grupo 'Whats-Dating' ... grátis e sem compromisso!";
  	}
	else if (data.country_code=="BR"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Muitas garotas e viúvas estão esperando encontros sexuais, se divertem e conversam";
	text2.innerHTML = "Bate-papo e vídeo chamada com seus parceiros sexuais";
	text3.innerHTML = "O grupo 'Whats-Dating' é gratuito e não vinculativo";
    text4.innerHTML = "Obtenha seu parceiro sexual hoje à noite!";
    text5.innerHTML = "Bate-papo e vídeo chamada com seus parceiros sexuais";
    text6.innerHTML = "Obtenha seu parceiro sexual hoje à noite!";
    text7.innerHTML = "oi .. eu sou solteiro e preciso de um encontro hoje à noite 😋";
    text8.innerHTML = "Realmente um ótimo grupo, muitas mulheres sexy e excitadas aqui.";
    text9.innerHTML = "Olá, também estou lá, estou esperando por você 😍";
    text10.innerHTML = "Grupo muito legal, eu acho meu amor aqui";
    text11.innerHTML = "A melhor coisa é que eu nunca encontrei um grupo de datas assim 👌";
    text12.innerHTML = "Participe do nosso grupo 'Whats-Dating' ... grátis e sem compromisso!";
  	}
	else if (data.country_code=="ES"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Muchas chicas y viudas esperan citas sexuales, se divierten y conversan";
	text2.innerHTML = "Chat y videollamada con tus parejas sexuales";
	text3.innerHTML = "El grupo 'Whats-Dating' es gratuito y no vinculante";
    text4.innerHTML = "¡Consigue tu pareja sexual esta noche!";
    text5.innerHTML = "Chat y videollamada con tus parejas sexuales";
    text6.innerHTML = "¡Consigue tu pareja sexual esta noche!";
    text7.innerHTML = "hola .. estoy soltera y necesito una cita sexual esta noche 😋";
    text8.innerHTML = "Realmente un gran grupo, muchas mujeres sexys y cachondas aquí.";
    text9.innerHTML = "Hola, yo también estoy ahí, te estoy esperando 😍";
    text10.innerHTML = "Grupo realmente genial, encuentro mi amor aquí";
    text11.innerHTML = "Lo mejor es que nunca he encontrado un grupo de citas 👌";
    text12.innerHTML = "Únase a nuestro grupo 'Whats-Dating' ... ¡gratis y sin compromiso!";
  	}
	else if (data.country_code=="AR"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Muchas chicas y viudas esperan citas sexuales, se divierten y conversan";
	text2.innerHTML = "Chat y videollamada con tus parejas sexuales";
	text3.innerHTML = "El grupo 'Whats-Dating' es gratuito y no vinculante";
    text4.innerHTML = "¡Consigue tu pareja sexual esta noche!";
    text5.innerHTML = "Chat y videollamada con tus parejas sexuales";
    text6.innerHTML = "¡Consigue tu pareja sexual esta noche!";
    text7.innerHTML = "hola .. estoy soltera y necesito una cita sexual esta noche 😋";
    text8.innerHTML = "Realmente un gran grupo, muchas mujeres sexys y cachondas aquí.";
    text9.innerHTML = "Hola, yo también estoy ahí, te estoy esperando 😍";
    text10.innerHTML = "Grupo realmente genial, encuentro mi amor aquí";
    text11.innerHTML = "Lo mejor es que nunca he encontrado un grupo de citas 👌";
    text12.innerHTML = "Únase a nuestro grupo 'Whats-Dating' ... ¡gratis y sin compromiso!";
  	}
	else if (data.country_code=="MX"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Muchas chicas y viudas esperan citas sexuales, se divierten y conversan";
	text2.innerHTML = "Chat y videollamada con tus parejas sexuales";
	text3.innerHTML = "El grupo 'Whats-Dating' es gratuito y no vinculante";
    text4.innerHTML = "¡Consigue tu pareja sexual esta noche!";
    text5.innerHTML = "Chat y videollamada con tus parejas sexuales";
    text6.innerHTML = "¡Consigue tu pareja sexual esta noche!";
    text7.innerHTML = "hola .. estoy soltera y necesito una cita sexual esta noche 😋";
    text8.innerHTML = "Realmente un gran grupo, muchas mujeres sexys y cachondas aquí.";
    text9.innerHTML = "Hola, yo también estoy ahí, te estoy esperando 😍";
    text10.innerHTML = "Grupo realmente genial, encuentro mi amor aquí";
    text11.innerHTML = "Lo mejor es que nunca he encontrado un grupo de citas 👌";
    text12.innerHTML = "Únase a nuestro grupo 'Whats-Dating' ... ¡gratis y sin compromiso!";
  	}
	else if (data.country_code=="TR"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Birçok kız ve dul seks tarihlerini bekliyor, eğlenin ve sohbet edin";
	text2.innerHTML = "Seks partnerlerinizle sohbet ve video görüşmesi yapın";
	text3.innerHTML = "'Whats-Dating' grubu ücretsiz ve bağlayıcı değildir";
    text4.innerHTML = "Seks Partnerinizi Bu Gece Alın!";
    text5.innerHTML = "Seks partnerlerinizle sohbet ve video görüşmesi yapın";
    text6.innerHTML = "Seks Partnerinizi Bu Gece Alın!";
    text7.innerHTML = "merhaba .. bekarım ve bu gece seks tarihine ihtiyacım var 😋";
    text8.innerHTML = "Gerçekten harika bir grup, çok sayıda seksi ve azgın kadın.";
    text9.innerHTML = "Merhaba, ben de oradayım, seni bekliyorum 😍";
    text10.innerHTML = "Gerçekten harika bir grup, aşkımı burada buluyorum";
    text11.innerHTML = "En iyi şey, hiç böyle bir tarih grubu bulamadım 👌";
    text12.innerHTML = "'Whats-Dating' grubumuza katılın ... ücretsiz ve zorunluluk olmadan!";
  	}
	else if (data.country_code=="RU"){
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Многие девушки и вдовы ждут секса, веселятся и общаются";
	text2.innerHTML = "Чат и видео звонок с вашими сексуальными партнерами";
	text3.innerHTML = "Группа 'Whats-Dating' бесплатна и не обязательна";
    text4.innerHTML = "Получите ваш сексуальный партнер сегодня вечером!";
    text5.innerHTML = "Чат и видео звонок с вашими сексуальными партнерами";
    text6.innerHTML = "Получите ваш сексуальный партнер сегодня вечером!";
    text7.innerHTML = "привет .. я не женат и мне нужна секс-ночь 😋";
    text8.innerHTML = "Действительно отличная группа, много сексуальных и сексуальных женщин здесь.";
    text9.innerHTML = "Привет я тоже там жду тебя 😍";
    text10.innerHTML = "Действительно классная группа, я нахожу свою любовь здесь";
    text11.innerHTML = "Лучше всего то, что я никогда не нашел такую группу дат 👌";
    text12.innerHTML = "Присоединяйтесь к нашей группе 'Whats-Dating' ... бесплатно и без обязательств!";
  	}
	else {
	country.innerHTML = data.country_name;
	city.innerHTML = data.city;
	text1.innerHTML = "Many girls and widows are waiting for sex dates, having fun and chatting";
	text2.innerHTML = "Chat and video call with your sex partners";
	text3.innerHTML = "'Whats-Dating' group is free and without obligation";
    text4.innerHTML = "Get Your Sex-partner tonight!";
    text5.innerHTML = "Chat and video call with your sex partners";
    text6.innerHTML = "Get Your Sex-partner tonight!";
    text7.innerHTML = "hi .. I'm single, and I need a sex date tonight 😍 ";
    text8.innerHTML = "really a great group, lots of sexy and horny women here. 👌";
    text9.innerHTML = "Hello, I'm there too, I'm waiting for you :)";
    text10.innerHTML = "Really cool group, i find my love here 😋😍 ";
    text11.innerHTML = "The best thing is that I have never found a date group like this 😋👌";
    text12.innerHTML = "Join our 'Whats-Dating' group ... free and without obligation!";
	}
}

