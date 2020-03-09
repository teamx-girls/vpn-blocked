var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://geoip-db.com/json/geoip.php?jsonp=callback';
var h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(script, h);

var code = document.getElementById('code');

function callback(data) {
    code.innerHTML = data.country_code;
    city.innerHTML = data.city;
    city1.innerHTML = data.city;

    if (data.country_code == "DE") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "Entdecken Sie einen neuen Sexualpartner, frech plaudern, voller Geilheit und Nacktheit";
        newmember.innerHTML = "einige Mitglieder, die sich gerade in Ihrer Nähe angemeldet haben";
        newmember1.innerHTML = "einige Mitglieder, die sich gerade in Ihrer Nähe registriert haben";
        newmember.innerHTML = "einige Mitglieder, die sich gerade in Ihrer Nähe registriert haben";
        gratis.innerHTML = "kostenlos, keine Zahlung<br> garantierte Sicherheit und Privatsphäre";
        gratis1.innerHTML = "kostenlos, keine Zahlung<br>garantierte Sicherheit und Privatsphäre";
        alasan1.innerHTML = "Chat und Videos privat mit Ihrem Partner";
        alasan2.innerHTML = "Holen Sie sich die besten Sex-Partner<br>und WhatsApp-Nummern von Mitgliedern in Ihrer Nähe";
        alasan3.innerHTML = "Private Chats und Videos mit Ihrem Partner";
        alasan4.innerHTML = "Holen Sie sich die besten Sexualpartner<br>und WhatsApp-Nummern von Mitgliedern in Ihrer Nähe";
        register.innerHTML = "beitreten";
    } else if (data.country_code == "AT") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "Entdecken Sie einen neuen Sexualpartner, frech plaudern, voller Geilheit und Nacktheit";
        newmember.innerHTML = "einige Mitglieder, die sich gerade in Ihrer Nähe angemeldet haben";
        newmember1.innerHTML = "einige Mitglieder, die sich gerade in Ihrer Nähe registriert haben";
        newmember.innerHTML = "einige Mitglieder, die sich gerade in Ihrer Nähe registriert haben";
        gratis.innerHTML = "kostenlos, keine Zahlung<br> garantierte Sicherheit und Privatsphäre";
        gratis1.innerHTML = "kostenlos, keine Zahlung<br>garantierte Sicherheit und Privatsphäre";
        alasan1.innerHTML = "Chat und Videos privat mit Ihrem Partner";
        alasan2.innerHTML = "Holen Sie sich die besten Sex-Partner<br>und WhatsApp-Nummern von Mitgliedern in Ihrer Nähe";
        alasan3.innerHTML = "Private Chats und Videos mit Ihrem Partner";
        alasan4.innerHTML = "Holen Sie sich die besten Sexualpartner<br>und WhatsApp-Nummern von Mitgliedern in Ihrer Nähe";
        register.innerHTML = "beitreten";
    } else if (data.country_code == "CH") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "Entdecken Sie einen neuen Sexualpartner, frech plaudern, voller Geilheit und Nacktheit";
        newmember.innerHTML = "einige Mitglieder, die sich gerade in Ihrer Nähe angemeldet haben";
        newmember1.innerHTML = "einige Mitglieder, die sich gerade in Ihrer Nähe registriert haben";
        newmember.innerHTML = "einige Mitglieder, die sich gerade in Ihrer Nähe registriert haben";
        gratis.innerHTML = "kostenlos, keine Zahlung<br> garantierte Sicherheit und Privatsphäre";
        gratis1.innerHTML = "kostenlos, keine Zahlung<br>garantierte Sicherheit und Privatsphäre";
        alasan1.innerHTML = "Chat und Videos privat mit Ihrem Partner";
        alasan2.innerHTML = "Holen Sie sich die besten Sex-Partner<br>und WhatsApp-Nummern von Mitgliedern in Ihrer Nähe";
        alasan3.innerHTML = "Private Chats und Videos mit Ihrem Partner";
        alasan4.innerHTML = "Holen Sie sich die besten Sexualpartner<br>und WhatsApp-Nummern von Mitgliedern in Ihrer Nähe";
        register.innerHTML = "beitreten";
    } else if (data.country_code == "FR") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "découvrez un nouveau partenaire sexuel, un chat insolent, plein de cornes et de nudité";
        newmember.innerHTML = "quelques membres qui viennent de s'inscrire près de chez vous";
        newmember1.innerHTML = "quelques membres qui viennent de s'inscrire près de chez vous";
        gratis.innerHTML = "gratuit, pas de paiement<br> sécurité et confidentialité garanties";
        gratis1.innerHTML = "gratuit, pas de paiement<br> sécurité et confidentialité garanties";
        alasan1.innerHTML = "chat et vidéos en privé avec votre partenaire";
        alasan2.innerHTML = "Obtenez les meilleurs partenaires sexuels<br>et les numéros de WhatsApp des membres près de chez vous";
        alasan3.innerHTML = "Chat et vidéos privés avec votre partenaire";
        alasan4.innerHTML = "Obtenez les meilleurs partenaires sexuels<br>et les numéros WhatsApp des membres près de chez vous";
        register.innerHTML = "join";
    } else if (data.country_code == "NO") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "oppdag en ny sexpartner, slem chat, full av begjær og nakenhet.";
        newmember.innerHTML = "Noen medlemmer som nettopp har registrert seg i nærheten av deg";
        newmember1.innerHTML = "Noen medlemmer som nettopp har registrert seg i nærheten av deg";
        gratis.innerHTML = "gratis, ingen betaling i det hele tatt<br>garantert sikkerhet og personvern";
        gratis1.innerHTML = "gratis, ingen betaling i det hele tatt<br>garantert sikkerhet og personvern";
        alasan1.innerHTML = "Chatter og videoer privat med partneren din";
        alasan2.innerHTML = "Få de beste sexpartnerne<br>og WhatsApp-numrene fra medlemmer i nærheten";
        alasan3.innerHTML = "Chatter og videoer privat med partneren din";
        alasan4.innerHTML = "Få de beste sexpartnerne<br>og WhatsApp-numrene fra medlemmer i nærheten";
        register.innerHTML = "bli med";
    } else if (data.country_code == "SE") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "upptäck en ny sexpartner, stygg chatt, full av lust och nakenhet.";
        newmember.innerHTML = "Några medlemmar som just har registrerat dig";
        newmember1.innerHTML = "Några medlemmar som just har registrerat dig";
        gratis.innerHTML = "gratis, ingen betalning alls.<br>garanterad säkerhet och integritet";
        gratis1.innerHTML = "gratis, ingen betalning alls.<br>garanterad säkerhet och integritet";
        alasan1.innerHTML = "Chattar och videor privat med din partner";
        alasan2.innerHTML = "Få de bästa sexpartnerna<br>och WhatsApp-numren från medlemmar nära dig";
        alasan3.innerHTML = "Chattar och videor privat med din partner";
        alasan4.innerHTML = "Få de bästa sexpartnerna<br>och WhatsApp-numren från medlemmar nära dig";
        register.innerHTML = "Ansluta sig";
    } else if (data.country_code == "FI") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "löydä uusi seksikumppani, tuhma chat, täynnä himoa ja alastomuutta.";
        newmember.innerHTML = "Jotkut jäsenet, jotka ovat juuri rekisteröityneet lähelläsi";
        newmember1.innerHTML = "Jotkut jäsenet, jotka ovat juuri rekisteröityneet lähelläsi";
        gratis.innerHTML = "ilmainen, ei maksua ollenkaan<br>taattu turvallisuus ja yksityisyys";
        gratis1.innerHTML = "ilmainen, ei maksua ollenkaan<br>taattu turvallisuus ja yksityisyys";
        alasan1.innerHTML = "Chatit ja videot yksityisesti kumppanisi kanssa";
        alasan2.innerHTML = "Hanki parhaat seksikumppanit<br>ja WhatsApp-numerot läheisiltä jäseniltä";
        alasan3.innerHTML = "Chatit ja videot yksityisesti kumppanisi kanssa";
        alasan4.innerHTML = "Hanki parhaat seksikumppanit<br>ja WhatsApp-numerot läheisiltä jäseniltä";
        register.innerHTML = "yhtyä";
    } else if (data.country_code == "BE") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "ontdek een nieuwe sekspartner, brutale babbel, vol geilheid en naaktheid";
        newmember.innerHTML = "enkele leden die zich net bij u in de buurt hebben geregistreerd";
        newmember1.innerHTML = "enkele leden die zich net bij u in de buurt hebben geregistreerd";
        gratis.innerHTML = "gratis, geen betaling<br> gegarandeerde veiligheid en privacy";
        gratis1.innerHTML = "gratis, geen betaling<br>gegarandeerde veiligheid en privacy";
        alasan1.innerHTML = "chat en video's privé met uw partner";
        alasan2.innerHTML = "Krijg de beste sekspartners<br>en WhatsApp-nummers van leden bij u in de buurt";
        alasan3.innerHTML = "Privé chats en video's met je partner";
        alasan4.innerHTML = "Krijg de beste sekspartners<br>en WhatsApp-nummers van leden bij jou in de buurt";
        register.innerHTML = "join";
    } else if (data.country_code == "NL") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "ontdek een nieuwe sekspartner, brutale babbel, vol geilheid en naaktheid";
        newmember.innerHTML = "enkele leden die zich net bij u in de buurt hebben geregistreerd";
        newmember1.innerHTML = "enkele leden die zich net bij u in de buurt hebben geregistreerd";
        gratis.innerHTML = "gratis, geen betaling<br> gegarandeerde veiligheid en privacy";
        gratis1.innerHTML = "gratis, geen betaling<br>gegarandeerde veiligheid en privacy";
        alasan1.innerHTML = "chat en video's privé met uw partner";
        alasan2.innerHTML = "Krijg de beste sekspartners<br>en WhatsApp-nummers van leden bij u in de buurt";
        alasan3.innerHTML = "Privé chats en video's met je partner";
        alasan4.innerHTML = "Krijg de beste sekspartners<br>en WhatsApp-nummers van leden bij jou in de buurt";
        register.innerHTML = "join";
    } else if (data.country_code == "IT") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "scopri un nuovo partner sessuale, chat sfacciata, piena di eccitazione e nudità";
        newmember.innerHTML = "alcuni membri che si sono appena registrati vicino a te";
        newmember1.innerHTML = "alcuni membri che si sono appena registrati vicino a te";
        gratis.innerHTML = "gratis, nessun pagamento<br> sicurezza e privacy garantita";
        gratis1.innerHTML = "gratis, nessun pagamento<br>garantita sicurezza e privacy";
        gratis1.innerHTML = "gratis, nessun pagamento<br>garantita sicurezza e privacy";
        alasan1.innerHTML = "chat e video in privato con il vostro partner";
        alasan2.innerHTML = "Ottieni i migliori partner sessuali<br>e i numeri WhatsApp dai membri vicini a te";
        alasan3.innerHTML = "chat e video privati con il tuo partner";
        alasan3.innerHTML = "chat e video privati con il tuo partner";
        alasan4.innerHTML = "Ottieni i migliori partner sessuali<br>e i numeri WhatsApp dei membri vicino a te";
        alasan4.innerHTML = "Ottieni i migliori partner sessuali<br>e i numeri WhatsApp dei membri vicino a te";
        register.innerHTML = "Iscriviti";
    } else if (data.country_code == "BR") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "descubra um novo parceiro sexual, conversa atrevida, cheia de tesão e nudez";
        newmember.innerHTML = "alguns membros que acabaram de se registar perto de si";
        newmember1.innerHTML = "alguns membros que acabaram de se registar perto de si";
        gratis.innerHTML = "gratuito, sem pagamento<br> segurança e privacidade garantidas";
        gratis1.innerHTML = "gratuito, sem pagamento<br>garantia de segurança e privacidade";
        alasan1.innerHTML = "chat e vídeos privados com o seu parceiro";
        alasan2.innerHTML = "Obtenha os melhores parceiros sexuais<br>e números WhatsApp de membros perto de si";
        alasan3.innerHTML = "Conversas e vídeos privados com o seu parceiro";
        alasan4.innerHTML = "Obtenha os melhores parceiros sexuais<br>e os números do WhatsApp dos membros mais próximos de si";
        register.innerHTML = "junte-se";
    } else if (data.country_code == "PT") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "descubra um novo parceiro sexual, conversa atrevida, cheia de tesão e nudez";
        newmember.innerHTML = "alguns membros que acabaram de se registar perto de si";
        newmember1.innerHTML = "alguns membros que acabaram de se registar perto de si";
        gratis.innerHTML = "gratuito, sem pagamento<br> segurança e privacidade garantidas";
        gratis1.innerHTML = "gratuito, sem pagamento<br>garantia de segurança e privacidade";
        alasan1.innerHTML = "chat e vídeos privados com o seu parceiro";
        alasan2.innerHTML = "Obtenha os melhores parceiros sexuais<br>e números WhatsApp de membros perto de si";
        alasan3.innerHTML = "Conversas e vídeos privados com o seu parceiro";
        alasan4.innerHTML = "Obtenha os melhores parceiros sexuais<br>e os números do WhatsApp dos membros mais próximos de si";
        register.innerHTML = "junte-se";
    } else if (data.country_code == "ES") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "descubrir una nueva pareja sexual, charla descarada, llena de calentura y desnudez";
        newmember.innerHTML = "algunos miembros que se acaban de registrar cerca de ti";
        newmember1.innerHTML = "algunos miembros que se acaban de registrar cerca de ti";
        gratis.innerHTML = "gratis, sin pago <br> seguridad y privacidad garantizadas";
        gratis1.innerHTML = "free, no payment<br> guaranteed security and privacy";
        alasan1.innerHTML = "chat y videos en privado con tu pareja";
        alasan2.innerHTML = "Consigue las mejores parejas sexuales <br>y números de WhatsApp de los miembros cercanos a ti";
        alasan3.innerHTML = "Chats y videos privados con tu pareja";
        alasan4.innerHTML = "Consigue las mejores parejas sexuales<br>y números de WhatsApp de los miembros cerca de ti";
        register.innerHTML = "unirse";

    } else if (data.country_code == "AR") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "descubrir una nueva pareja sexual, charla descarada, llena de calentura y desnudez";
        newmember.innerHTML = "algunos miembros que se acaban de registrar cerca de ti";
        newmember1.innerHTML = "algunos miembros que se acaban de registrar cerca de ti";
        gratis.innerHTML = "gratis, sin pago <br> seguridad y privacidad garantizadas";
        gratis1.innerHTML = "free, no payment<br> guaranteed security and privacy";
        alasan1.innerHTML = "chat y videos en privado con tu pareja";
        alasan2.innerHTML = "Consigue las mejores parejas sexuales <br>y números de WhatsApp de los miembros cercanos a ti";
        alasan3.innerHTML = "Chats y videos privados con tu pareja";
        alasan4.innerHTML = "Consigue las mejores parejas sexuales<br>y números de WhatsApp de los miembros cerca de ti";
        register.innerHTML = "unirse";

    } else if (data.country_code == "MX") {
        judul.innerHTML = "WhatsApp 18+";
        subjudul.innerHTML = "descubrir una nueva pareja sexual, charla descarada, llena de calentura y desnudez";
        newmember.innerHTML = "algunos miembros que se acaban de registrar cerca de ti";
        newmember1.innerHTML = "algunos miembros que se acaban de registrar cerca de ti";
        gratis.innerHTML = "gratis, sin pago <br> seguridad y privacidad garantizadas";
        gratis1.innerHTML = "free, no payment<br> guaranteed security and privacy";
        alasan1.innerHTML = "chat y videos en privado con tu pareja";
        alasan2.innerHTML = "Consigue las mejores parejas sexuales <br>y números de WhatsApp de los miembros cercanos a ti";
        alasan3.innerHTML = "Chats y videos privados con tu pareja";
        alasan4.innerHTML = "Consigue las mejores parejas sexuales<br>y números de WhatsApp de los miembros cerca de ti";
        register.innerHTML = "unirse";

    }


}