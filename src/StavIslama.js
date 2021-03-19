import React, { useState } from 'react';
import Navbar from './Navbar';
import { v4 as uuidv4 } from 'uuid';
import './StavIslama.css';

function StavIslama({ texts }) {
	const [ content, setContent ] = useState(texts[0]);

	const showContent = (
		<div
			className="StavIslama-container StavIslama-content-part"
			onClick={() => {
				console.log(texts[0]);
			}}
		>
			<h3>{content.naslov}</h3>
			<p>{content.text}</p>
            <h4>{content.author}</h4>
            <a href={content.link}>{content.link}</a>
            <p>{content.text2}</p>
            <h4>{content.author2}</h4>
			<a href={content.link2}>{content.link2}</a>
		</div>
	);
    const showList = texts.map(val=>{
        return <h4 onClick={()=>{setContent(val)}} key={uuidv4()}>{val.naslov}</h4>
    })
	return (
		<div className="SiteApp-img">
			<Navbar />
			<div className="StavIslama-parent-container">
                {showContent}
				<div className="StavIslama-container StavIslama-list-container">
                    <div className="StavIslama-list-part">
                        {showList}
                    </div>
                </div>
			</div>
		</div>
	);
}
StavIslama.defaultProps = {
	texts: [
		{
			naslov: 'ŠTA JE HIDŽAMA?',
			author: 'Smail L. Handžić',
			link: 'https://minber.ba/saeto-o-propisima-hidame/',
			text: ` Jedna od metoda koja doprinosi ozdravljenju je, nesumnjivo, i hidžama. 

            Hidžama je, u stvari, proces izvlačenja, odnosno, isisavanja i izbacivanja nečiste krvi iz organizma pomoću čaša ili bočica koje se postavljaju na određena mjesta na tijelu oboljele osobe.
            
            Te čaše se priljepljuju za tijelo putem izazvanog vakuma nastalog uslijed izbacivanja zraka iz njih, te kao takve, ostaju na tijelu nekoliko minuta, u zavisnosti od vrste liječenja. 
            
            Najčešće se vakum prizvodio paljenjem malog drvceta ili papirića, čiji bi dim neutralisao sav kisik iz čaše, a što bi dovelo do vakuma i lijepljenja čaše za tijelo. 
            
            Danas se koriste čaše koje na sebi imaju osigurače kojima se elegantno i lahko izbacuje zrak. Na mjestu gdje se priljepljena čaša nalazi, koncentriše se sva nečista krv. 
            
            Nakon toga se čaša skine, a na tom mjestu se nekoliko puta tanko nareže koža oštrim predmetom kako bi izašla koncentrisana nečista krv. 
            
            Potom se ponovo, dakle, na istom mjestu, priljepi ponovo čaša pod vakumom, koja sada nema ulogu vršenja koncentracije krvi, nego ovoga puta, već prije koncentrisanu nečistu krv na mjestu čaše, sada izbacuje iz organizma.
            `
		},
        {
			naslov: 'PORIJEKLO HIDŽAME',
			author: 'Smail L. Handžić',
			link: 'https://minber.ba/saeto-o-propisima-hidame/',
			text: ` Hidžama  je bila poznata u vrijeme Allahovog poslanika, sallallahu ‘alejhi we selleme, i još mnogo, mnogo prije… 
            
            Naime, dokazano je da se hidžama koristila i u vrijeme starih Egipćana, još u vremenu faraonskih vladara. 

            U najstarijoj knjizi u Egiptu iz oblasti medicine se spominje hidžama kao jedna od metoda pri liječenju bolesnika. 

            U to vrijeme se koristio životinjski rog sa kojim bi se vršilo ispumpavanje nečiste krvi iz organizma. 

            Nakon toga, prešlo se na čaše napravljene od bambusovog drveta, da bi se u novije vrijeme počele koristiti s
            
            Iz Egipta se hidžama proširila i na druge kontinente. 

            Tako se i u starim Grčkim knjigama spominje hidžama, ali i u kineskoj medicini je našla svoje mjesto, samo što su oni praktikovali tzv. „suhu hidžamu“ kojom ne bi izbacivali nečistu krv van organizma, nego bi je ostavljali na površini kože koju bi kasnije organizam sam uklonio.
            `
		},
        {
			naslov: 'HADISI',
			author: 'Smail L. Handžić',
			link: 'https://minber.ba/saeto-o-propisima-hidame/',
			text: ` Mnogobrojni hadisi Allahovog poslanika, sallallahu ‘alejhi we selleme, podstiču na činjenje hidžame. 

            Od Džabira, radijallahu ‘anhu, se prenosi da je rekao: Čuo sam Allahovog poslanika, sallallahu ‘alejhi we selleme gdje kaže: „Ako i u čemu od toga sa čime se liječite ima koristi, onda je to u pijenju meda, ili u rezu od hidžame, ili u žigosanju vatrom, a ja ne volim žigosanje.“ (Buharija, 5702; Ibn Madžeh, 3476; Ahmed, 1/245) Od Ibn Mes’uda, radijallahu ‘anhu, se prenosi da je rekao: „Rekao je Allahov poslanik, sallallahu ‘alejhi we selleme: „Pored god koje skupine meleka bi naišao u noći Isra’a, rekli bi mi: „O Muhammede, naredi svome ummetu da čine hidžamu!“ (Ibn Madžeh od Enesa radijallahu ‘anhu, 3479; Tirmizija od Ibn Mes’uda, a šejh Albani, rahimehullahi, je hadis ocjenio vjerodostojnim, Sahih El-Džami’, 5671) 

            Od Selme, radijallahu ‘anha, se prenosi da je rekla: „Ko god bi se Allahovom poslaniku, sallallahu ‘alejhi we selleme, požalio na bolove u glavi, on bi mu rekao: „Učini hidžamu!“ (Ebu Davud, 3858; Tirmizi, 2055, Ibn Madžeh, 3502) Od Asima ibn Omera ibn Katade se prenosi da je Džabir, radijallahu ‘anhu, posjetio El-Mukni’a, pa mu je rekao: „Neću otići sve dok ne učiniš hidžamu!“ Zatim je kazao: „Čuo sam Allahovog poslanika, sallallahu ‘alejhi we selleme, kako kaže: „U tome je lijek!“ (Buharija, 5697; Muslim, 4/1729) 

            Ovi, ali i mnogi drugi hadisi koje nismo naveli, jasno ukazuju na to da je hidžama jedna od najboljih metoda pri liječenju, te da je propisana, odnosno, da ju je i sam Allahov poslanik, sallallahu ‘alejhi we selleme, činio, da ju je dozvolio, i, čak šta više, na njeno činjenje podsticao. 

            Međutim, ovo ne znači da se bilo ko može upustiti u činjenje hidžame drugim osobama. 

            Kao i za svaku nauku, neophodno je poznavati neke važne neophodnosti za činjenje hidžame, koje, ako se kojim slučajem zapostave, mogu dovesti do nepoželjnih posljedica, pa čak i smrti.
            `
		},
        {
			naslov: 'KORISTI HIDŽAME',
			author: 'Smail L. Handžić',
			link: 'https://minber.ba/saeto-o-propisima-hidame/',
			text: ` Hidžama koja se učini na vrhu pleća koristi pri liječenju od bolova koji se osjećaju u ramenima i grlu. 
            
            Hidžama koja se učini na glavi, te na vratnim venama u prijedjelu potiljka, nadomak ljudskog uha, koristi pri liječenju od bolesti i bolova glave. 
            
            Od Enesa, radijallahu ‘anhu, se prenosi da je rekao: „Allahov poslanik, sallallahu ‘alejhi we selleme, je činio hidžamu u predjelu vratnih vena i na vrhu pleća.“ (Tirmizi, 2052; Ebu Davud, 3860; Ibn Madžeh, 3483) 
            
            Od Ibn Buhejneh, se prenosi da je Allahov poslanik, sallallahu ‘alejhi we seleme, učinio hidžmu na sredini glave, dok je bio u ihramima, na putu za Mekku. (Buharija, 5998) 
            
            Osim ovoga, hidžama se može činiti i za liječenje od drugih bolesti, kao protiv bolova i upala u zglobovima, za liječenje od reumatizma i bolova nastalih od njega, protiv malaksalosti, išijasa, bolesti mokraćnog mjehura i bubrega, hemiplegije nastale uslijed sudara, protiv povišenog i smanjenog pritiska, visokog holesterola, upale jetre, srčanih bolesti, bolesti šećera, za uravnoteženje mjesečnog ciklusa kod žena, kožnih bolesti i alergija, i još mnogih drugih bolesti.
            ` ,
            author2:'Dr. Safet Kuduzović'  ,
            link2: 'https://www.n-um.com/hidzama-lijek-kojeg-su-meleki-preporucili/',
            text2: ` Koristi hidžame su slijedeće:

            – poboljšanje protoka krvi kroz mozak,
            
            – liječenje starih krvnih zrnaca,
            
            – stimuliranje rada jetre,slezene i želuca,
            
            – liječenje grčenja mišića vrata,leđa i stopala,
            
            – liječenje migrene,
            
            – putem aktiviranja cirkulacije krvi i poboljšavanja njenog kvaliteta i podizanja imunog sistema,poboljđšava se vid i liječe se bolesti očiju,
            
            – liječenje opće slabosti,
            
            – liječenje bolesti probavnog sistema,
            
            – liječenje bola u nervima,
            
            – reguliranje krvnog pritiska,
            
            – oslobađanje tijela od loše krvi,
            
            – aktiviranje imunog sistema,
            
            – rješavanje od toksina,
            
            – liječenje povišene mokračne kiseline,
            
            – liječenje oštećenja pamćenja,
            – preventiva moždanog udara.
            
            Naučno je dokazano da je hidžama periodični proces pregleda krvi, što dovodi do aktiviranja ćelija i uklanjanja nakupljenih toksina (otrova) i jačanja imunog sistema.
            `
		},
        {
			naslov: 'DA LI HIDŽAMA I DOBROVOLJNO DAVANJE KRVI KVARE POST?',
			author: 'Dr. Zijad Ljakić',
			link: 'https://zijadljakic.ba/da-li-hidzama-i-dobrovoljno-davanje-krvi-kvare-post/',
			text: ` Es-Selamu alejkum.
            Ima li smetnje da mi se u toku posta uradi hidžama, tj. da li mi je time pokvaren post? Ujedno me me interesuje da li darivanje krvi kvari post? Allah te nagradio na odgovoru.
            ODGOVOR: Alejkumusselam.
            
            Oko hidžame, da li ona kvari post ili ne, prenešeno je nekiliko hadisa koji su oprečni jedni drugima i mogu se različito tumačiti. To je razlog razilaženja učenjaka po ovom pitanju, a sam propis hidžame je ujedno propis dobrovoljnog davanja krvi koje je savremeno pitanje.
            
            Naime, bilježi Buharija u svom Sahihu od Ibn Abbasa, radijallahu anhuma, da je Vjerovjesnik, sallallahu alejhi ve sellem, učinio hidžamu a postio je.
            
            A hadis oprečan ovome je ono što bilježe Ebu Davud, Tirmizi i ostli u vjerodostojnoj predaji u više rivajeta da je Poslanik, sallallahu alejhi ve sellem, prolazeći pored dvojice koji su radili hidžamu rekao: „Prekinuo je post onaj ko radi hidžamu i onaj kome se radi“.
            
            Što se tiče stavova učenjaka i njihovih dokaza, oni se sastoje u sljedećem:
            
            Prvo mišljenje – onaj kome se uradi hidžama post mu je pokvaren, a po mngim od njih post je pokvaren i onom ko radi hidžamu ako ustima izvalači krv).

            Ovo je stav Ahmeda, Ibn Sirina, ‘Ata’, Evzaija, Ishaka, Ibnul-Munzira, Ibn Huzejme, a odabrao ga je i Ibn Tejmije. Takođe, ovo je stav Ebu Hurejre i Aiše, radijallahu anhum, od ashaba.

            Dokazuju svoj stav sljedećim argumentima:

            Prvo – hadisom „Prekinuo je post onaj ko radi hidžamu i onaj kome se radi“.

            Drugi – da je gore spomenuti hadis Ibn Abbasa, radijallahu anhuma, (u kojem je došlo da je Vjerovjesnik, sallallahu alejhi ve sellem, učinio hidžamu a postio je) bez obzira što je u Buhariji slab, jer ga imam Ahmed tako ocjenjuje tvrdeći da je greška hadisa u riječi „saim“ jer Ibn Abbas, radijallahu anhuma, u istom rivajetu prenosi da je Vjerovjesnik, sallallahu alejhi ve sellem, bio „muhrim“ (u ihramima) kad je radio hidžamu a ne „saim“ (postač).

            Treći – ako bi se prihvatilo ha je taj hadis vjerodostojan, onda je on derogiran.

            Drugo mišljenje – da hidžama ne kvari post ni onome ko je radi niti onome kome se radi.
            Ovo je stav džumhura (većine) učenjaka: Ebu Hanife, Malika, Šafije i drugih. Prenosi se od S'ad ibn ebi Vekkasa, Ibn Omera  i Enesa, radijallahu anhum, da su u toku posta radili hidžamu.

            Argumenti ovog mišljenja su:

            Prvi – vjerodostojan hadis od Ibn Abbsa, radijallahu anhu, kojeg Buharija bilježi u svom Sahihu. A na ocjenjivanje tog hadisa slabim od strane imama Ahmeda odgovaraju time što je ovaj hadis prenesen u rivajetu od Ejuba Es-Suhtijanija, a kaže Ibn Hadžer: „Hadis je vjerodostojan bez ikakve sumnje“.

            Drugi – da je hadis „Prekinuo je post onaj ko radi hidžamu i onaj kome se radi“ derogiran, na čemu su Šafija, Bejheki, Ibn Abdulberr i mnogi drugi.

            Treći – slabost gornjeg hadisa, na čemu je skupina učenjaka ovog mišljenja.

            Komentar: Tvrdnja derogiranosti oba hadisa sa obe strane nema validnog dokaza pogotovo kad se ne zna istorija hadisa, tj. vrijeme izricanja tih riječi. Takođe, ispravno je da su oba hadisa vjerodostojna. Ostaje da se analizi hadisa priđe sa jedne od sljedeće dvije stvari:

            Prva analiza – da je hadis „Prekinuo je post onaj ko radi hidžamu i onaj kome se radi“ derogiran drugim hadisom, tj. onim što se prenosi od Ebu Se'ida El-Hudrija, radijallahu anhu, da je rekao: „Vjerovjesnik, sallallahu alejhi ve sellem, je dao olakšicu postaču u hidžami“. Bilježe ga Darekutni, Bejheki i Nesai u „Es-Sunen el-kubra“, a

            Ibn Hazm ga ocjenjuje vjerodostojnim (Albani kaže da su mu ravije pouzdani, osim što ima razilaženja da li su to riječi Ebu Se'ida ili Vjerovjesnika, sallallahu alejhi ve sellem) i kaže da olakšica dolazi poslije zabrane što znači da je gornji hadis derogiran. Ovo podupire rivajet kojeg bilježi Darekutni od Enesa, radijallahu anhu, u kojem je došlo da je u početku hidžama postaču bila pokuđena, da je Vjerovjesnika, sallallahu alejhi ve sellem, prošao pored Džafera kojem je rađena hidžama i rekao: „Omrsili su se ova dvojica“, a zatim je u tome dao olakšicu, pa je Enes postio i radio hidžamu. Ovaj hadis su ocjenili vjerodostojnim Darekutni, Bejheki i Albani.

            Druga analiza – da je hidžama bila pokuđena radi slabosti koju prouzrokuje. Na ovo ukazuje hadis kojeg bilježi Buharija u svom Sahihu od Enesa, radijallahu anhu, kada je upitan: „Da li je bilo pokuđena hidžama postaču“, on je odgovorio: „Ne, osim radi slabosti (koju uzrokuje)“.

            Prema tome, najbliži stav ispravnom, a Allah zna najbolje, je ono na čemu je džumhur učenjaka, tj. da hidžama ne kari post. Osim što je pokuđeno da je radi onaj koga ona mnogo oslabi, a prelazi u haram onome koga zbog slabosti odvede da se omrsi i prekine post.

            Isti propis se odnosi na dobrovoljeno davanje krvi, tj. davanje krvi u osnovi ne kvari post, s tim da shodno stanju i slabosti organizma nekih ljudi njihovo davanje krvi može biti pokuđeno ili haram ako zbog toga budu prisiljeno da prekinu post. Ve billahi tevfik.

            `
		},
		{
			naslov: 'DA LI JEDNA HIDŽAMA VRIJEDI KAO 10 RUKJI?',
			author: 'Dr. Zijad Ljakić',
			link: 'https://zijadljakic.ba/jedna-hidzama-vrijedi-kao-10-rukji-hadis/',
			text: `PITANJE: Esselamu alejkum we rahmetullah we berekatuhu.
            Da li je tačno da jedna hidžama ima efekat kao 10 rukji? Da jedna hidžama zamijeni 10 rukji.
            
            ODGOVOR: Alejkumusselam ve rahmetullahi ve berekatuhu.
            
            Hvala Allahu i neka je salavat i selam na posljednjeg vjerovjesnika, a zatim:
            
            Ne postoji vjerodostojan, slab niti izmišljen šerijatski tekst, ni hadis niti predaja od ashaba i selefa, koji ukazuju da jedna hidžama vrijedi kao 10 rukji, shodno tome što sam ja utvrdio. . .
            `
		},
		{
			naslov: 'HADISI O DANIMA KADA JE POKUĐENO ČINITI HIDŽAMU',
			author: 'Dr. Zijad Ljakić',
			link: 'https://zijadljakic.ba/hadisi-o-danima-kada-je-pokudjeno-haram-ili-stetno-ciniti-hidzamu/',
			text: ` Es selamun alejki v.r.v.b.
            Bavim se hidžamom za žene. Zanima me koliko su pouzdani hadisi koji govore o štetnosti izvođenja hidžame u određenim danima (npr. nedjelja isl.). Naveću vam hadise koje su mi klijenti navodili kao razlog zbog kojeg ne žele određenim danima raditi hidžamu. Unaprijed hvala!
            „Četvrto: Hidžama nije poželjna u određenim vremenima
            Resulullah, sallallahu ‘alejhi we sellem, je zabranio činjenje hidžame srijedom, petkom, subotom i nedjeljom. Ibn Madže, (3552, 3553) i Hakim, 4/409 sa dobrim lancem prenosilaca. U drugoj predaji Resulullah, sallallahu ‘alejhi we sellem,kaže: “Ko učini hidžamu srijedom ili subotom, pa ga pogodi šuga, neka ne krivi nikoga osim sebe.” Bezzar, 3/388 (El-kešf). Vidjeti, takoðer Zadul-mead, 4/61.“.
            
            ODGOVOR: Alejkumusselam ve rahmetullahi ve berekatuhu.

            Hvala Allahu i neka je salavat i selam na posljednjeg vjerovjesnika, a zatim:

            Prvo: Tekst, izvod (dokumentacija) i ocjena hadisa

            Prenosi imam Zuhri (tabi'in) od Se'ida ibn Museejiba od Ebu Hurejre, radijallahu anhu, da je Vjerovjesnik, sallallahu alejhi ve sellem, rekao: „Ko učini hidžamu srijedom ili subotom, pa ga pogodi guba, neka ne krivi nikoga osim sebe“.Bilježe ga Hakim, Bejheki i Bezzar, a bilježi ga i Ebu Davud kao mursel (hadis u čijem senedu nedostaje ashab) od imama Zuhrija.

            Kaže Ebu Davud da je hadis od Ebu Hurejere, radijallahu anhu, slab. A rivajet od imama Zuhrija je slab jer je hadis mursel.

            Takođe, hadis su ocijenili slabim Bezzar, Bejheki i Zehebi, jer je u njegovom lancu prenosilaca  Sulejman ibn Erkam, a on je slab ravija. Kaže Zehebi da je metruk, tj. jako slab.

            Drugo: U hadisu su spomenuti subota i srijeda, nigdje nije spomenuta nedjelja i petak. Osim što se prenosi od učenjaka Ishaka ibn Rahevejhi da je prezirao činjenje hidžame petkom, utorkom i srijedom, osim ako je utorak 17., 19. ili 21. dan po Hidžri.

            Međutim, za pokuđenost dana koje navodi nema vjerodostojnih dokaza.

            Prema tome, nema ništa vjerodostojno preneseno oko pokuđenosti, štetnosti ili zabranjenosti činjenja hidžame u određenim danima.

            Ve billahi tevfik.
            
            `
		},
		{
			naslov: 'DA LI HIDŽAMA I DOBROVOLJNO DAVANJE KRVI KVARE POST?',
			author: 'Dr. Zijad Ljakić',
			link: 'https://zijadljakic.ba/da-li-hidzama-i-dobrovoljno-davanje-krvi-kvare-post/',
			text: ` Es-Selamu alejkum.
            Ima li smetnje da mi se u toku posta uradi hidžama, tj. da li mi je time pokvaren post? Ujedno me me interesuje da li darivanje krvi kvari post? Allah te nagradio na odgovoru.
            ODGOVOR: Alejkumusselam.
            
            Oko hidžame, da li ona kvari post ili ne, prenešeno je nekiliko hadisa koji su oprečni jedni drugima i mogu se različito tumačiti. To je razlog razilaženja učenjaka po ovom pitanju, a sam propis hidžame je ujedno propis dobrovoljnog davanja krvi koje je savremeno pitanje.
            
            Naime, bilježi Buharija u svom Sahihu od Ibn Abbasa, radijallahu anhuma, da je Vjerovjesnik, sallallahu alejhi ve sellem, učinio hidžamu a postio je.
            
            A hadis oprečan ovome je ono što bilježe Ebu Davud, Tirmizi i ostli u vjerodostojnoj predaji u više rivajeta da je Poslanik, sallallahu alejhi ve sellem, prolazeći pored dvojice koji su radili hidžamu rekao: „Prekinuo je post onaj ko radi hidžamu i onaj kome se radi“.
            
            Što se tiče stavova učenjaka i njihovih dokaza, oni se sastoje u sljedećem:
            
            .
            .
            .
            `
		},
		{
			naslov: 'DA LI HIDŽAMA I DOBROVOLJNO DAVANJE KRVI KVARE POST?',
			author: 'Dr. Zijad Ljakić',
			link: 'https://zijadljakic.ba/da-li-hidzama-i-dobrovoljno-davanje-krvi-kvare-post/',
			text: ` Es-Selamu alejkum.
            Ima li smetnje da mi se u toku posta uradi hidžama, tj. da li mi je time pokvaren post? Ujedno me me interesuje da li darivanje krvi kvari post? Allah te nagradio na odgovoru.
            ODGOVOR: Alejkumusselam.
            
            Oko hidžame, da li ona kvari post ili ne, prenešeno je nekiliko hadisa koji su oprečni jedni drugima i mogu se različito tumačiti. To je razlog razilaženja učenjaka po ovom pitanju, a sam propis hidžame je ujedno propis dobrovoljnog davanja krvi koje je savremeno pitanje.
            
            Naime, bilježi Buharija u svom Sahihu od Ibn Abbasa, radijallahu anhuma, da je Vjerovjesnik, sallallahu alejhi ve sellem, učinio hidžamu a postio je.
            
            A hadis oprečan ovome je ono što bilježe Ebu Davud, Tirmizi i ostli u vjerodostojnoj predaji u više rivajeta da je Poslanik, sallallahu alejhi ve sellem, prolazeći pored dvojice koji su radili hidžamu rekao: „Prekinuo je post onaj ko radi hidžamu i onaj kome se radi“.
            
            Što se tiče stavova učenjaka i njihovih dokaza, oni se sastoje u sljedećem:
            
            .
            .
            .
            `
		},
		{
			naslov: 'DA LI HIDŽAMA I DOBROVOLJNO DAVANJE KRVI KVARE POST?',
			author: 'Dr. Zijad Ljakić',
			link: 'https://zijadljakic.ba/da-li-hidzama-i-dobrovoljno-davanje-krvi-kvare-post/',
			text: ` Es-Selamu alejkum.
            Ima li smetnje da mi se u toku posta uradi hidžama, tj. da li mi je time pokvaren post? Ujedno me me interesuje da li darivanje krvi kvari post? Allah te nagradio na odgovoru.
            ODGOVOR: Alejkumusselam.
            
            Oko hidžame, da li ona kvari post ili ne, prenešeno je nekiliko hadisa koji su oprečni jedni drugima i mogu se različito tumačiti. To je razlog razilaženja učenjaka po ovom pitanju, a sam propis hidžame je ujedno propis dobrovoljnog davanja krvi koje je savremeno pitanje.
            
            Naime, bilježi Buharija u svom Sahihu od Ibn Abbasa, radijallahu anhuma, da je Vjerovjesnik, sallallahu alejhi ve sellem, učinio hidžamu a postio je.
            
            A hadis oprečan ovome je ono što bilježe Ebu Davud, Tirmizi i ostli u vjerodostojnoj predaji u više rivajeta da je Poslanik, sallallahu alejhi ve sellem, prolazeći pored dvojice koji su radili hidžamu rekao: „Prekinuo je post onaj ko radi hidžamu i onaj kome se radi“.
            
            Što se tiče stavova učenjaka i njihovih dokaza, oni se sastoje u sljedećem:
            
            .
            .
            .
            `
		},
        {
			naslov: 'DA LI HIDŽAMA I DOBROVOLJNO DAVANJE KRVI KVARE POST?',
			author: 'Dr. Zijad Ljakić',
			link: 'https://zijadljakic.ba/da-li-hidzama-i-dobrovoljno-davanje-krvi-kvare-post/',
			text: ` Es-Selamu alejkum.
            Ima li smetnje da mi se u toku posta uradi hidžama, tj. da li mi je time pokvaren post? Ujedno me me interesuje da li darivanje krvi kvari post? Allah te nagradio na odgovoru.
            ODGOVOR: Alejkumusselam.
            
            Oko hidžame, da li ona kvari post ili ne, prenešeno je nekiliko hadisa koji su oprečni jedni drugima i mogu se različito tumačiti. To je razlog razilaženja učenjaka po ovom pitanju, a sam propis hidžame je ujedno propis dobrovoljnog davanja krvi koje je savremeno pitanje.
            
            Naime, bilježi Buharija u svom Sahihu od Ibn Abbasa, radijallahu anhuma, da je Vjerovjesnik, sallallahu alejhi ve sellem, učinio hidžamu a postio je.
            
            A hadis oprečan ovome je ono što bilježe Ebu Davud, Tirmizi i ostli u vjerodostojnoj predaji u više rivajeta da je Poslanik, sallallahu alejhi ve sellem, prolazeći pored dvojice koji su radili hidžamu rekao: „Prekinuo je post onaj ko radi hidžamu i onaj kome se radi“.
            
            Što se tiče stavova učenjaka i njihovih dokaza, oni se sastoje u sljedećem:
            
            .
            .
            .
            `
		},
        {
			naslov: 'DA LI HIDŽAMA I DOBROVOLJNO DAVANJE KRVI KVARE POST?',
			author: 'Dr. Zijad Ljakić',
			link: 'https://zijadljakic.ba/da-li-hidzama-i-dobrovoljno-davanje-krvi-kvare-post/',
			text: ` Es-Selamu alejkum.
            Ima li smetnje da mi se u toku posta uradi hidžama, tj. da li mi je time pokvaren post? Ujedno me me interesuje da li darivanje krvi kvari post? Allah te nagradio na odgovoru.
            ODGOVOR: Alejkumusselam.
            
            Oko hidžame, da li ona kvari post ili ne, prenešeno je nekiliko hadisa koji su oprečni jedni drugima i mogu se različito tumačiti. To je razlog razilaženja učenjaka po ovom pitanju, a sam propis hidžame je ujedno propis dobrovoljnog davanja krvi koje je savremeno pitanje.
            
            Naime, bilježi Buharija u svom Sahihu od Ibn Abbasa, radijallahu anhuma, da je Vjerovjesnik, sallallahu alejhi ve sellem, učinio hidžamu a postio je.
            
            A hadis oprečan ovome je ono što bilježe Ebu Davud, Tirmizi i ostli u vjerodostojnoj predaji u više rivajeta da je Poslanik, sallallahu alejhi ve sellem, prolazeći pored dvojice koji su radili hidžamu rekao: „Prekinuo je post onaj ko radi hidžamu i onaj kome se radi“.
            
            Što se tiče stavova učenjaka i njihovih dokaza, oni se sastoje u sljedećem:
            
            .
            .
            .
            `
		},
        {
			naslov: 'DA LI HIDŽAMA I DOBROVOLJNO DAVANJE KRVI KVARE POST?',
			author: 'Dr. Zijad Ljakić',
			link: 'https://zijadljakic.ba/da-li-hidzama-i-dobrovoljno-davanje-krvi-kvare-post/',
			text: ` Es-Selamu alejkum.
            Ima li smetnje da mi se u toku posta uradi hidžama, tj. da li mi je time pokvaren post? Ujedno me me interesuje da li darivanje krvi kvari post? Allah te nagradio na odgovoru.
            ODGOVOR: Alejkumusselam.
            
            Oko hidžame, da li ona kvari post ili ne, prenešeno je nekiliko hadisa koji su oprečni jedni drugima i mogu se različito tumačiti. To je razlog razilaženja učenjaka po ovom pitanju, a sam propis hidžame je ujedno propis dobrovoljnog davanja krvi koje je savremeno pitanje.
            
            Naime, bilježi Buharija u svom Sahihu od Ibn Abbasa, radijallahu anhuma, da je Vjerovjesnik, sallallahu alejhi ve sellem, učinio hidžamu a postio je.
            
            A hadis oprečan ovome je ono što bilježe Ebu Davud, Tirmizi i ostli u vjerodostojnoj predaji u više rivajeta da je Poslanik, sallallahu alejhi ve sellem, prolazeći pored dvojice koji su radili hidžamu rekao: „Prekinuo je post onaj ko radi hidžamu i onaj kome se radi“.
            
            Što se tiče stavova učenjaka i njihovih dokaza, oni se sastoje u sljedećem:
            
            .
            .
            .
            `
		},
	]
};

export default StavIslama;
