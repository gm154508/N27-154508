// Das instalierrte MYSQL-Modul wird mit require eingebunden. 
// Das MYSQL-Modul stellt die Verbindung zwischen der App und 
// der MYSQL-Datenbank her. 
// Eine Datenbank wird benötigt, wenn Daten auch nach der Laufzeit 
// des Programms noch weiter existieren sollen. 
// Außerdem ermöglicht die Datenbank, dass z.B. Geldüberweisungen 
// zwischen Anwendern möglich werden.

var mysql = require ('mysql');

// Die Verbindung zur Datenbank wird hergstellt. Dazu werden
// die Adresse und die Anmeldedaten der Datenbank angegeben.

var dbVerbindung = mysql.createConnection({
    host: "10.40.38.110",
    user: "placematman",
    password: "BKB123456!",
    database: "dbn27",
  });
  
  dbVerbindung.connect(function(err) {

// Wenn die Verbindung scheitert , wird ein Fehler geworfen.

    if (err) throw err;

// Wenn die Verbindung aufgebaut werden kann, wird der Erfolg
// auf der Console geloggt.

    console.log("Connected!");
  });

// Die Verbindung zur Datenbank wird geöffnet.

  dbVerbindung.connect(function(fehler){

// Die Tabelle namens Kunde wird erstellt 
// Die Spalten heißen: idkunde, vorname, nachname, ort, kennwort, mail
// VARCHAR(45) legt den Datentyp der Spalte auf "Text" mit der Länge max. 45 Zeichen fest
// INT(11) begrenzt die Eingabe auf 11 Ziffern.
// idKunde ist primary key. Das bedeutet das die idKunde den Datensatz eindeutig
// kennzeichnet. 

    dbVerbindung.query('CREATE TABLE kunde(idKunde INT(11), vorname VARCHAR(45), nachname VARCHAR(45), ort VARCHAR(45), kennwort VARCHAR(45), mail VARCHAR(45), PRIMARY KEY(idKunde));', function (fehler) {

// Falls ein Problem bei der Query auftaucht, ...

    if (fehler) {

// ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet, ...

    if(fehler.code == "ER_TABLE_EXISTS_ERROR"){

// ... dann wird eine Fehlermeldung geloggt. 

    console.log("Tabelle kunde existiert bereits und wird nicht angelegt.")
    }else{
    console.log("Fehler: " + fehler )
    }
    }else{
    console.log("Tabelle Kunde erfolgreich angelegt.")
    }
    })
    })

    
// Programme verarbeiten oft Objekte der realen Welt.
// Objekte haben Eigenschaften.
// In unserem Bankingprogramm interessieren uns Objekte,
// wie z.B. Kunde, Konto, Filiale, Bankautomat, ...
// Alle Kunden unserer Bank haben dieselben Eigenschaften, aber
// unterschiedliche Eigenschaftswerte

class Kundenberater{
    constructor(){
        this.IdKundenberater
        this.Nachname
        this.Vorname
        this.Begruessung
        this.Email
        this.Telefonnummer
        this.Filiale
    }
}
let kundenberater = new Kundenberater()

kundenberater.IdKundenberater = 345876
kundenberater.Nachname = "Hoffmann"
kundenberater.Vorname = "Hans Hermann"
kundenberater.Begruessung = "Dann melden sie sich doch einfach bei mir, per Telefon, Mail oder direkt vor Ort!"
kundenberater.Email = "HoffmannKundensupport@n27.com"
kundenberater.Telefonnummer = "01234 23457"
kundenberater.Filiale = "Josefstraße 10, Borken"
class Kunde{
    constructor(){
        this.IdKunden 
        this.Nachname
        this.Vorname
        this.Kennwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail
        this.Telefonnummer
    }
}

// Von der Kunden-Klasse wird eine konkrete Instanz
// gebildet. 

let kunde = new Kunde()

// Die konkrete Instanz bekommt Eigenschaftswerte
// zugewiesen

kunde.IdKunde = 123666
kunde.Nachname = "Mustermann"
kunde.Vorname = "Max"
kunde.Geburtsdatum = "12.03.2004"
kunde.Telefonnummer = 845201
kunde.Mail = "mustermannmax@web.de"
kunde.Kennwort = "696"

const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
const cookieParser = require('cookie-parser')
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))
meineApp.use(cookieParser('geheim'))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Die Methode meineApp.get('/' ...) wird abgearbeitet, wenn
// der Kunde die Indexseite (localhost:3000 bzw. 
// n27.herokuapp.com) ansurft.

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
    
    // Wenn ein signierter Cookie mit Namen 'istAngemeldetAls' im Browser vorhanden ist, 
    // dann ist die Prüfung wahr und es wird die gerenderte Index-Seite an den Browser 
    // zurückgegeben. Anderenfalls wird die Login-Seite an den Browser gegeben.

    if(browserAnfrage.signedCookies['istAngemeldetAls']){

        // Wenn der Kunde bereits angemeldet ist, soll die
        // Index-Seite an den Browser gegeben werden.

        serverAntwort.render('index.ejs',{})
    }else{

        // Wenn der Kunde noch nicht eigeloggt ist, soll
        // die Loginseite an den Browser zurückgegeben werden.
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })
    }                 
})

// Die Methode meineApp.post('/login'...) wird abgearbeitet, sobald 
// der Anwender im Login-Formular auf "Einloggen" klickt.

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    
    // Die im Browser eingegebene IdKunde und Kennwort werden zugewiesen 
    // an die Konstanten namens idKunde und kennwort.

    const idKunde = browserAnfrage.body.IdKunde
    const kennwort = browserAnfrage.body.Kennwort
    
    console.log("ID des Kunden: " + idKunde)
    console.log("Kennwort des Kunden: " + kennwort)

    // Die Identität des Kunden wird überprüft.
    
    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){
        
        // Ein Cookie namens 'ist AngemeldetAls' wird beim Browser gesetzt.
        // Der Wert des Cookies ist das in eine Zeichenkette umgewandelte Kunden-Objekt.
        // Der Cookie wird signiert, also gegen Manipulation geschützt.

        serverAntwort.cookie('istAngemeldetAls',JSON.stringify(kunde),{signed:true})
        console.log("Der Cookie wurde erfolgreich gesetzt.")

        // Wenn die Id des Kunden mit der Eingabe im Browser übereinstimmt
        // UND ("&&") das Kennwort ebenfalls übereinstimmt,
        // dann gibt der Server die gerenderte Index-Seite zurück.
        
        serverAntwort.render('index.ejs', {})
    }else{

        // Wenn entweder die eingegebene Id oder das Kennwort oder beides
        // nicht übereinstimmt, wird der Login verweigert. Es wird dann die
        // gerenderte Login-Seite an den Browser zurückgegeben.

        serverAntwort.render('login.ejs', {
            Meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
        })
    }
})


// Wenn die login-Seite im Browser aufgerufen wird, ...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {              

    // Der cookie wird gelöscht

    serverAntwort.clearCookie("istAngemeldetAls");

    // ... dann wird die login.ejs vom Server gerendert an den
    // Browser zurückgegeben:

    serverAntwort.render('login.ejs', {
        Meldung : "Bitte geben Sie die Zugangsdaten ein."
    })          
})

// Die meineApp.post('login') wird ausgeführt, sobald der Button
// auf dem Login-Formular gedrückt wird.

meineApp.get('/about',(browserAnfrage, serverAntwort, next) => {              
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
    serverAntwort.render('about.ejs', {
    }) 
    }else{
        serverAntwort.render('login.ejs', {
            Meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
        })
    }
    })         

meineApp.get('/profile',(browserAnfrage, serverAntwort, next) => {  
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('profile.ejs', {
            Vorname: kunde.Vorname,
            Nachname: kunde.Nachname,
            Telefonnummer: kunde.Telefonnummer,
            Email: kunde.Mail,
            Kennwort: kunde.Kennwort,
            Erfolgsmeldung: ""
        })          
    }else{
        serverAntwort.render('login.ejs', {
            Meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
        })
    }
})

meineApp.get('/support',(browserAnfrage, serverAntwort, next) => {  
    if(browserAnfrage.signedCookies['istAngemeldetAls']){            
        serverAntwort.render('support.ejs', {
            Vorname: kundenberater.Vorname,
            Nachname: kundenberater.Nachname,
            Begruessung: kundenberater.Begruessung,
            Telefonnummer: kundenberater.Telefonnummer,
            Email: kundenberater.Email,
            Filiale: kundenberater.Filiale,
            Erfolgsmeldung: ""
    })
}else{
    serverAntwort.render('login.ejs', {
        Meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
    })
}
})

//Sobald der Speichern-Button auf der Profile-Seite gedrückt wird,
//wird die meineApp.post('profile'...) abgearbeitet.
meineApp.post('/profile',(browserAnfrage, serverAntwort, next) => {              
    
    //Die Erfolgsmeldung für das Speichern der geänderten Profildaten
    //wird in eine lokale Variable namens erfolgsmeldung gespeichert

    let erfolgsmeldung = ""

    // Der Wert der Eigenschaft von Mail in Browser wird zugewiesen an die 
    //Eigenschaft Mail des Objekts Kunde
    if(kunde.Mail != browserAnfrage.body.Mail){
        
        //Wenn der Wert der Eigenschaft von kunde abweicht vom Wert
        //der Eigenschaft Mail aus dem Browser-Formular dann wird 
        //die Erfolgsmeldung initialisiert:

        erfolgsmeldung = erfolgsmeldung + "Änderung der Mail erfolgreich."
        kunde.Mail = browserAnfrage.body.Mail
        console.log(erfolgsmeldung)
    }
    if(kunde.Kennwort != browserAnfrage.body.Kennwort){
        
        erfolgsmeldung = erfolgsmeldung + "Änderung des Kennworts erfolgreich."
        kunde.Kennwort = browserAnfrage.body.Kennwort
        console.log(erfolgsmeldung)
    }
    if(kunde.Telefonnummer != browserAnfrage.body.Telefonnummer){
      
        erfolgsmeldung = erfolgsmeldung + "Änderung der Telefonnummer erfolgreich."
        kunde.Telefonnummer = browserAnfrage.body.Telefonnummer
        console.log(erfolgsmeldung)
    }
    
    console.log("Profil gespeichert." + kunde.Kennwort)
        
    serverAntwort.render('profile.ejs', {
        Vorname: kunde.Vorname,
        Nachname: kunde.Nachname,
        Telefonnummer: kunde.Telefonnummer,
        Email: kunde.Mail,
        Kennwort: kunde.Kennwort,
        Erfolgsmeldung: erfolgsmeldung
    })
})
        
class Konto{
    constructor(){
        this.Kontostand
        this.IBAN
        this.Kontoart
        this.PIN
    }
}
// Instanziierung eines Objekts namens konto vom Typ Konto

let konto = new Konto()

konto.Kontostand = 2000000
konto.IBAN ="DE90123456781234567890"
konto.Kontoart = "Sparbuch"
konto.Pin = 5473


meineApp.get('/KontostandAnzeigen',(browserAnfrage, serverAntwort, next) => {              
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
    serverAntwort.render('KontostandAnzeigen.ejs', {
        Kontostand: konto.Kontostand,
        IBAN: konto.IBAN,
        Kontoart: konto.Kontoart,
        PIN: konto.PIN,
        Meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
    }) 
    }else{
        serverAntwort.render('login.ejs', {
           
        })
    }
    })        

    class Kredit{
     constructor(){
         this.Zinssatz
         this.Laufzeit
         this.Betrag
     }
     //Eine Funktion berechnet etwas. Im Namen der Funktion steht also immer ein Verb.
     berechneGesamtkostenKredit (){
        return this.Betrag * this.Zinssatz / 100 + this.Betrag
     }  
    }   
    
    meineApp.get('/KreditBerechnen',(browserAnfrage, serverAntwort, next) => {              
        if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('KreditBerechnen.ejs', {
            Kontostand: konto.Kontostand,
            
            Meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
        }) 
        }else{
            serverAntwort.render('login.ejs', {
               
            })
        }
        })        
    
require('./Uebungen/ifUndElse.js')
//require('./Uebungen/klasseUndObjekt.js')
require('./Klausuren/20221026_klausur.js')