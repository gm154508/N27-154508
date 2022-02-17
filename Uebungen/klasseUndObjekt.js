console.log("Übungen zu Klasse und Objekt")
console.log("============================")

// Übung 1
// In einem Fußballverein sollen Spieler verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) Das Objekt der realen Welt ist der Spieler.
// zu b)
class Spieler{
    constructor(){
        this.Pame
        this.Position
        this.Verein
        this.Nummer
    }
}
// zu c)
// Es wird nun ein konreter Spieler mit konkreten Eigenschaftswerten erzeugt.
// Dazu wird der konkrete Spieler deklariert (=bekanntgemacht): let spielerMueller
// In einem zweiten schritt wird der knkrete Spieler instanziiert = new Spieler()
let spielerMueller = new Spieler()

// zu d)
// Es werden konkrete Eigenschaftswerte in den Arbeitsspeicher geschrieben:
spielerMueller.Name = "Thomas Müller"
spielerMueller.Nummer = 25
spielerMueller.Position = "Stürmer"
spielerMueller.Verein = "FCB"
spielerMueller.Alter = 18

console.log(spielerMueller.Name)
console.log(spielerMueller.Position)
console.log("Der Spieler "+spielerMueller.Name+" hat die Nummer "+spielerMueller.Nummer+".")

if(spielerMueller.Alter>=18){
    spielerMueller.volljährig=true
    console.log("Der Spieler " + spielerMueller.Name + " ist volljährig.")
}
// Übung 2
// In einem Schulprogramm sollen Zeugnisse verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) Das Zeugnis ist das Objekt der realen Welt.

// zu b) 
class Zeugnis{
    constructor(){
        this.SchuelerName
        this.Klasse
        this.Geburtsdatum
        this.Gesamtnote
        this.Fehlstunden
        this.Faecher
    }
}

// zu c)
let zeugnisPit = new Zeugnis()
let zeugnisMax = new Zeugnis()

// zu d)
zeugnisPit.SchuelerName = "Pit Kiff"
zeugnisPit.Fehlstunden = 100
zeugnisPit.Gesamtnote = 1

zeugnisMax.SchuelerName = "Max Muster"
zeugnisMax.Fehlstunden = 10
zeugnisMax.Gesamtnote = 2

if(zeugnisMax.Fehlstunden > zeugnisPit.Fehlstunden){
    console.log("Max Muster hat mehr Fehlstunden")
}else{
    console.log("Pit Kiff hat mehr Fehlstunden")
}

// Übung 3
// In einem Kiosk soll das Sortiment mit verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) Die Objakte der realen Welt sind Produkte
// zu b)
class Produkt{
    constructor(){
        this.Bruttopreis
        this.Bezeichnung
        this.MwStSatz
        this.barcode
    }
}
// zu c)
// Deklaration und Instanziierung
let produkt1 = new Produkt()

// zu d)
produkt1.Bezeichnung = "Kaugummi"
produkt1.Barcode = 5901234123457
produkt1.BruttoPreis = 1.19 // Im Quellcode steht anstelle des Kommas ein Punkt
produkt1.MwStSatz = 19 // Prozent

console.log("Das Produkt " + produkt1.Bezeichnung + " hat den Bruttopreis " + produkt1.BruttoPreis + " €")

produkt1.Nettopreis = produkt1.BruttoPreis / (100 + produkt1.MwStSatz) * 100
console.log("Nettopreis: " + produkt1.Nettopreis + " €")

if(produkt1.BruttoPreis > 1){
    console.log("Achtung! Preis von " + produkt1.Bezeichnung + " muss gesenkt werden!")
}else{
    console.log("Preis von " + produkt1.Bezeichnung + "ist o.k.")
}

// Übung 4
// Für ein Schulfest sollen alle Stände verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten
// Geben sie ausgewählte Eigenschaften auf der console auf der console aus.

// zu a) Die Objekte der realen welt ist der Stand
// zu b) 
class Stand{
    constructor(){
        this.StandName
        this.Mitarbeiter
        this.Produkte
        this.Kasse
    }
}
// zu c)
let Stand1 = new Stand ()

 // zu d)
Stand1.StandName = "Pommesverkauf"
Stand1.Mitarbeiter = "Maria"
Stand1.Produkte = "Pommes"
Stand1.Kasse = 20.00

// zu e)
console.log("Der Stand " + Stand1.StandName +" wird von " + Stand1.Mitarbeiter + "betrieben")

if(Stand1.Kasse < 100){
    console.log("Der Stand hat Verlust gemacht")
}else{
    console.log("Der Stand hat Gewinn gemacht")
}









