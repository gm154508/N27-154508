//Programme verarbeiten oft Objekte der realen Welt.
//Objekte haben Eigenschaften.
//In unserem Bankingprogramm interessieren uns Objekte, 
//wie z.B. Kunde, Konto, Filiale, Bankautomat,...
// Alle Kunden unserer bank haben dieselben Eigenschaften, aber unterschiedliche Eigenschaftswerte
class Kunde{
    constructor(){
        this.IdKunde
        this.Nachname
        this.Vorname
        this.Kennwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail
    }
}

//Von der Kundenklasse wird eine konkrete Instanz gebildet. 

let kunde = new Kunde()
kunde.IdKunde = 123666
kunde.Nachname = "Mustermann"
kunde.Vorname = "Max"
kunde.Geburtsdatum = "19.06.1996"
kunde.Mail = "Mustermann@online.de"
kunde.Kennwort = "123"

//Die konkrete Instanz bekommt Eigenschaftswerte zugewiesen

const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    
    const idKunde = browserAnfrage.body.IdKunde
    const kennwort = browserAnfrage.body.Kennwort
    console.log("ID des Kunden: " + idKunde)
    console.log("Kennwort des Kunden: " + kennwort)
    
    if(idKunde == kunde.idKunde){
        serverAntwort.render('index.ejs', {})          
    }
    serverAntwort.render('login.ejs', {})  
})

// Wenn die login-Seite im Browser aufgerufen wird, ...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {              

    // ... dann wird die login.ejs vom Server gerendert an den
    // Browser zurückgegeben:

    serverAntwort.render('login.ejs', {})          
})

// Die meineApp.post('login') wird ausgeführt, sobald der Button
// auf dem Login-Formular gedrückt wird.

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})