// Programme verarbeiten oft Objekte der realen Welt.
// Objekte haben Eigenschaften.
// In unserem Bankingprogramm interessieren uns Objekte,
// wie z.B. Kunde, Konto, Filiale, Bankautomat, ...
// Alle Kunden unserer Bank haben dieselben Eigenschaften, aber
// unterschiedliche Eigenschaftswerte

class Kunde{
    constructor(){
        this.IdKunde
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
            meldung : ""
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
            meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
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
        meldung : "Bitte geben Sie die Zugangsdaten ein."
    })          
})

// Die meineApp.post('login') wird ausgeführt, sobald der Button
// auf dem Login-Formular gedrückt wird.

meineApp.get('/about',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('about.ejs', {})          
})

meineApp.get('/profile',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('profile.ejs', {
        Vorname: kunde.Vorname,
        Nachname: kunde.Nachname,
        Telefonnummer: kunde.Telefonnummer,
        Email: kunde.Mail,
        Kennwort: kunde.Kennwort,
        Erfolgsmeldung: ""
    })          
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

// require('./Uebungen/ifUndElse.js')
require('./Uebungen/klasseUndObjekt.js')