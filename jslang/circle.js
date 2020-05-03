var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://geoip-db.com/json/geoip.php?jsonp=callback';
var h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(script, h);

var code = document.getElementById('code');
var city = document.getElementById('city');

function callback(data) {
code.innerHTML = data.country_code;
city.innerHTML = data.city;


	if (data.country_code =="ID"){
    test1.innerHTML = "grup rahasia";
    test2.innerHTML = "Konten ini untuk pria dewasa lajang! <br> Berikut adalah banyak cewek dan janda menunggu seks, bersenang-senang dan mengobrol.<br>ANGEL CLUB ";
    test3.innerHTML = "lanjutkan";
    test4.innerHTML = "Konfirmasi gender!";
    test5.innerHTML = "Apakah kamu laki-laki ..?";
    test6.innerHTML = "Anggota baru terdaftar di Sekitar Anda";
    test7.innerHTML = "tidak"
    test8.innerHTML = "iya"
    test9.innerHTML = "Status hubungan!";
    test10.innerHTML = "Apakah kamu lajang?";
    test11.innerHTML = "tidak";
    test12.innerHTML = "iya";
    test13.innerHTML = "LANGKAH TERAKHIR!";
    test14.innerHTML = "Khusus dewasa (18+)! Gunakan foto asli di komunitas ini, nama dan identitas Anda akan dirahasiakan untuk alasan keamanan! Anda yakin ingin mendaftar?";
     test15.innerHTML = "BERGABUNG SEKARANG";
    }
    
    else if (data.country_code =="AT"){
	   
    test1.innerHTML = "geheime Gruppe";
     test2.innerHTML = "Dieser Inhalt ist für alleinstehende erwachsene Männer! <br> Hier warten viele Mädchen und Witwen auf Sex, haben Spaß und plaudern. <br> ANGEL CLUB";
     test3.innerHTML = "weiter";
     test4.innerHTML = "Geschlecht bestätigen!";
     test5.innerHTML = "Bist du männlich ...?";
     test6.innerHTML = "Neue Mitglieder in Ihrer Nähe registriert";
     test7.innerHTML = "Nein"
     test8.innerHTML = "yes"
     test9.innerHTML = "Beziehungsstatus!";
     test10.innerHTML = "Bist du Single?";
     test11.innerHTML = "Nein";
     test12.innerHTML = "Ja";
     test13.innerHTML = "LETZTER SCHRITT!";
     test14.innerHTML = "Nur für Erwachsene (18+)! Verwenden Sie Originalfotos in dieser Community. Ihr Name und Ihre Identität werden aus Sicherheitsgründen vertraulich behandelt. Möchten Sie sich wirklich registrieren?";
      test15.innerHTML = "JETZT REGISTRIEREN";
      }
       else if (data.country_code =="DE"){
	    
    test1.innerHTML = "geheime Gruppe";
     test2.innerHTML = "Dieser Inhalt ist für alleinstehende erwachsene Männer! <br> Hier warten viele Mädchen und Witwen auf Sex, haben Spaß und plaudern. <br> ANGEL CLUB";
     test3.innerHTML = "weiter";
     test4.innerHTML = "Geschlecht bestätigen!";
     test5.innerHTML = "Bist du männlich ...?";
     test6.innerHTML = "Neue Mitglieder in Ihrer Nähe registriert";
     test7.innerHTML = "Nein"
     test8.innerHTML = "Ja"
     test9.innerHTML = "Beziehungsstatus!";
     test10.innerHTML = "Bist du Single?";
     test11.innerHTML = "Nein";
     test12.innerHTML = "Ja";
     test13.innerHTML = "LETZTER SCHRITT!";
     test14.innerHTML = "Nur für Erwachsene (18+)! Verwenden Sie Originalfotos in dieser Community. Ihr Name und Ihre Identität werden aus Sicherheitsgründen vertraulich behandelt. Möchten Sie sich wirklich registrieren?";
      test15.innerHTML = "JETZT REGISTRIEREN";
      }
      else if (data.country_code =="CH"){
	      
    test1.innerHTML = "geheime Gruppe";
     test2.innerHTML = "Dieser Inhalt ist für alleinstehende erwachsene Männer! <br> Hier warten viele Mädchen und Witwen auf Sex, haben Spaß und plaudern. <br> ANGEL CLUB";
     test3.innerHTML = "weiter";
     test4.innerHTML = "Geschlecht bestätigen!";
     test5.innerHTML = "Bist du männlich ...?";
     test6.innerHTML = "Neue Mitglieder in Ihrer Nähe registriert";
     test7.innerHTML = "Nein"
     test8.innerHTML = "Ja"
     test9.innerHTML = "Beziehungsstatus!";
     test10.innerHTML = "Bist du Single?";
     test11.innerHTML = "Nein";
     test12.innerHTML = "Ja";
     test13.innerHTML = "LETZTER SCHRITT!";
     test14.innerHTML = "Nur für Erwachsene (18+)! Verwenden Sie Originalfotos in dieser Community. Ihr Name und Ihre Identität werden aus Sicherheitsgründen vertraulich behandelt. Möchten Sie sich wirklich registrieren?";
      test15.innerHTML = "JETZT REGISTRIEREN";
      }
      else if (data.country_code =="FR"){
	      window.location.replace('https://single-sexy8000.netlify.app');
	test1.innerHTML = "groupe secret";
	test2.innerHTML = "Ce contenu est destiné aux hommes célibataires! <br> Voici beaucoup de filles et de veuves attendant le sexe, s'amusant et discutant. <br> ANGEL CLUB";
	test3.innerHTML = "continue";
	test4.innerHTML = "Confirmer le sexe!";
	test5.innerHTML = "Êtes-vous un homme ...?";
	test6.innerHTML = "Nouveaux membres enregistrés autour de vous";
	test7.innerHTML = "non"
	test8.innerHTML = "Oui"
	test9.innerHTML = "Statut de la relation!";
	test10.innerHTML = "Êtes-vous célibataire?";
	test11.innerHTML = "non";
	test12.innerHTML = "Oui";
	test13.innerHTML = "DERNIÈRE ÉTAPE!";
	test14.innerHTML = "Adultes (18+) seulement! Utilisez des photos originales dans cette communauté, votre nom et votre identité resteront confidentiels pour des raisons de sécurité! Voulez-vous vraiment vous inscrire?";
	test15.innerHTML = "REJOIGNEZ MAINTENANT";
      }
       else if (data.country_code =="NO"){
    test1.innerHTML = "hemmelig gruppe";
	test2.innerHTML = "Dette innholdet er for enslige menn! <br> Her er mange jenter og enker som venter på sex, har det moro og chatter. <br> ANGEL CLUB";
	test3.innerHTML = "fortsett";
	test4.innerHTML = "Bekreft kjønn!";
	test5.innerHTML = "Er du en mann ...?";
	test6.innerHTML = "Nye medlemmer registrert rundt deg";
	test7.innerHTML = "nei"
	test8.innerHTML = "Ja"
	test9.innerHTML = "Forholdsstatus!";
	test10.innerHTML = "Er du singel?";
	test11.innerHTML = "nei";
	test12.innerHTML = "Ja";
	test13.innerHTML = "SISTE TRINN!";
	test14.innerHTML = "Kun voksne (18+)! Bruk originale bilder i dette fellesskapet, ditt navn og identitet blir holdt konfidensiell av sikkerhetsmessige årsaker! Er du sikker på at du vil registrere deg?";
	test15.innerHTML = "Bli med nå";
      }
      else if (data.country_code =="SE"){
    test1.innerHTML = "hemlig grupp";
	test2.innerHTML = "Detta innehåll är för ensamstående män! <br> Här är många flickor och änkor som väntar på sex, ha kul och chatta. <br> ANGEL CLUB";
	test3.innerHTML = "fortsätt";
	test4.innerHTML = "Bekräfta kön!";
	test5.innerHTML = "Är du en man ...?";
	test6.innerHTML = "Nya medlemmar registrerade runt dig";
	test7.innerHTML = "nej"
	test8.innerHTML = "Ja"
	test9.innerHTML = "Förhållandestatus!";
	test10.innerHTML = "Är du singel?";
	test11.innerHTML = "nej";
	test12.innerHTML = "Ja";
	test13.innerHTML = "SISTA STEG!";
	test14.innerHTML = "Endast vuxna (18+)! Använd originalfoton i den här gruppen, ditt namn och identitet kommer att hållas konfidentiellt av säkerhetsskäl! Är du säker på att du vill registrera dig?";
	test15.innerHTML = "GÅ MED NU";
      }
      else if (data.country_code =="FI"){
test1.innerHTML = "salainen ryhmä";
test2.innerHTML = "Tämä sisältö on yksin miehille! <br> Täällä on monia tyttöjä ja leskiä, jotka odottavat seksiä, pitävät hauskaa ja keskustelevat. <br> ANGEL CLUB";
test3.innerHTML = "jatka";
test4.innerHTML = "Vahvista sukupuoli!";
test5.innerHTML = "Oletko mies ...?";
test6.innerHTML = "Uudet jäsenet rekisteröityvät ympärilläsi";
test7.innerHTML = "ei"
test8.innerHTML = "Kyllä"
test9.innerHTML = "Parisuhteen tila!";
test10.innerHTML = "Oletko sinkku?";
test11.innerHTML = "ei";
test12.innerHTML = "Kyllä";
test13.innerHTML = "LAST STEP!";
test14.innerHTML = "Vain aikuiset (18+)! Käytä alkuperäisiä valokuvia tässä ryhmässä, nimesi ja henkilöllisyytesi pidetään luottamuksellisina turvallisuussyistä! Haluatko varmasti rekisteröityä?";
test15.innerHTML = "LIITTY NYT";
      }
      else if (data.country_code =="BE"){
	     
test1.innerHTML = "geheime groep";
test2.innerHTML = "Deze inhoud is alleen voor mannen! <br> Er zijn veel meisjes en weduwen die wachten op seks, plezier maken en chatten. <br> ANGEL CLUB";
test3.innerHTML = "doorgaan";
test4.innerHTML = "Bevestig seks!";
test5.innerHTML = "Ben je een man ...?";
test6.innerHTML = "Nieuwe leden melden zich voor u aan";
test7.innerHTML = "no"
test8.innerHTML = "Ja"
test9.innerHTML = "Relatiestatus!";
test10.innerHTML = "Ben je single?";
test11.innerHTML = "nee";
test12.innerHTML = "Ja";
test13.innerHTML = "LAATSTE STAP!";
test14.innerHTML = "Alleen voor volwassenen (18+)! Gebruik originele foto's in deze groep, uw naam en identiteit worden om veiligheidsredenen vertrouwelijk gehouden! Weet u zeker dat u zich wilt registreren?";
test15.innerHTML = "WORD NU LID";
      }
      else if (data.country_code =="IT"){
test1.innerHTML = "gruppo segreto";
test2.innerHTML = "Questo contenuto è solo per uomini! <br> Ci sono molte ragazze e vedove che aspettano il sesso, si divertono e chiacchierano. <br> ANGEL CLUB";
test3.innerHTML = "continua";
test4.innerHTML = "Conferma sesso!";
test5.innerHTML = "Sei un uomo ...?";
test6.innerHTML = "I nuovi membri si iscrivono per te";
test7.innerHTML = "no"
test8.innerHTML = "Sì"
test9.innerHTML = "Stato relazione!";
test10.innerHTML = "Sei single?";
test11.innerHTML = "no";
test12.innerHTML = "Sì";
test13.innerHTML = "ULTIMO PASSO!";
test14.innerHTML = "Solo per adulti (18+)! Usa le foto originali in questo gruppo, il tuo nome e la tua identità rimarranno riservati per motivi di sicurezza! Sei sicuro di voler registrarti?";
test15.innerHTML = "ISCRIVITI ADESSO";
      }
      else if (data.country_code =="PT"){
test1.innerHTML = "grupo secreto";
test2.innerHTML = "Este conteúdo é apenas para homens! <br> Existem muitas meninas e viúvas que estão esperando sexo, se divertindo e conversando. <br> ANGEL CLUB";
test3.innerHTML = "continuar";
test4.innerHTML = "Confirmar sexo!";
test5.innerHTML = "Você é um homem ...?";
test6.innerHTML = "Novos membros se inscrevem para você";
test7.innerHTML = "não"
test8.innerHTML = "Sim"
test9.innerHTML = "Status do relacionamento!";
test10.innerHTML = "Você é solteiro?";
test11.innerHTML = "não";
test12.innerHTML = "Sim";
test13.innerHTML = "ÚLTIMO PASSO!";
test14.innerHTML = "Somente adultos (18 anos ou mais)! Use fotos originais deste grupo, seu nome e identidade serão mantidos em sigilo por razões de segurança! Você tem certeza de que deseja se registrar?";
test15.innerHTML = "INSCREVA-SE AGORA";
      }
      else if (data.country_code =="BR"){
test1.innerHTML = "grupo secreto";
test2.innerHTML = "Este conteúdo é apenas para homens! <br> Existem muitas meninas e viúvas que estão esperando sexo, se divertindo e conversando. <br> ANGEL CLUB";
test3.innerHTML = "continuar";
test4.innerHTML = "Confirmar sexo!";
test5.innerHTML = "Você é um homem ...?";
test6.innerHTML = "Novos membros se inscrevem para você";
test7.innerHTML = "não"
test8.innerHTML = "Sim"
test9.innerHTML = "Status do relacionamento!";
test10.innerHTML = "Você é solteiro?";
test11.innerHTML = "não";
test12.innerHTML = "Sim";
test13.innerHTML = "ÚLTIMO PASSO!";
test14.innerHTML = "Somente adultos (18 anos ou mais)! Use fotos originais deste grupo, seu nome e identidade serão mantidos em sigilo por razões de segurança! Você tem certeza de que deseja se registrar?";
test15.innerHTML = "INSCREVA-SE AGORA";
      }
      else if (data.country_code =="IN"){
test1.innerHTML = "गुप्त समूह";
test2.innerHTML = "यह सामग्री केवल पुरुषों के लिए है! <br> ऐसी कई लड़कियाँ और विधवाएँ हैं जो सेक्स का इंतज़ार कर रही हैं, मस्ती और चैटिंग कर रही हैं। <br> ANGEL CLUB";
test3.innerHTML = "जारी";
test4.innerHTML = "सेक्स की पुष्टि करें!"
test5.innerHTML = "क्या आप एक आदमी हैं ...?"
test6.innerHTML = "नए सदस्य आपके लिए साइन अप करें";
test7.innerHTML = "नहीं"
test8.innerHTML = "हाँ"
test9.innerHTML = "संबंध स्थिति!"
test10.innerHTML = "क्या आप एकल हैं?"
test11.innerHTML = "नहीं";
test12.innerHTML = "हाँ";
test13.innerHTML = "LAST STEP!"
test14.innerHTML = "केवल वयस्क (18+)! इस समूह में मूल फ़ोटो का उपयोग करें, सुरक्षा कारणों से आपके नाम और पहचान को गोपनीय रखा जाएगा! क्या आप वाकई पंजीकरण करना चाहते हैं?"
test15.innerHTML = "अभी शामिल हों";
      }
      else{
test1.innerHTML = "secret group";
test2.innerHTML = "This content is for men only! <br> There are many girls and widows who are waiting for sex, having fun and chatting. <br> ANGEL CLUB";
test3.innerHTML = "continue";
test4.innerHTML = "Confirm Sex!";
test5.innerHTML = "Are you a man ...?";
test6.innerHTML = "New members sign up for you";
test7.innerHTML = "No"
test8.innerHTML = "Yes"
test9.innerHTML = "Relationship Status!";
test10.innerHTML = "Are you single?";
test11.innerHTML = "No";
test12.innerHTML = "Yes";
test13.innerHTML = "LAST STEP!";
test14.innerHTML = "Adults Only (18+)! Use original photos in this group, your name and identity will be kept confidential for security reasons! Are you sure you want to register?";
test15.innerHTML = "JOIN NOW";
     }
}
