console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// (DATEN: persönliche Informationen wie Geburtsdatum, Adresse, Telefonnummer usw.)
// DATENSCHUTZ:
// Der Schutz der Daten durch bestimmte Prozeduren; DSGVO/BDSG schützen vor Datenmissbrauch natürlicher
// Personen.
// DATENSICHERHEIT:
// Zielt darauf die generelle Sicherheit der Daten zu erhalten. 
//
// Aufgabe 2 a)
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// SYMMETRISCH:
// Ein Schlüssel der die Datei ver- und entschlüsselt. Möchte man einzelnen Zugang zur Datei ermöglichen,
// so muss man sicher gehen das man z.B. das Passwort auf sicheren Weg weitergibt (z.B. am Telefon).
// VORTEIL: sehr schnell    NACHTEIL: Nicht so sicher
// BEISPIELPROGRAMM: 7Zip, Bitlocker
// ASYMMETRISCH:
// Hierbei gibt es ein Schlüsselpaar. Einen Private-Key und einen Public-Key.
// Ein Schlüssel verschlüsselt, einer entschlüsselt. 
// VORTEIL: Hohe Sicherheit (durch zwei Schlüssel)  NACHTEIL: Aufwendige Rechnungen und dadurch langsamer
// BEISPIELPROGRAMM: Kleopatra
//
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// BOXCRYPTOR:
// Boxcryptor verbindet die Schnelligkeit der symmetrischen Verschlüssung mit der Sicherheit 
// der asymmetrischen Verschlüssung. 
// 
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
// Programme verarbeiten oft Objekte der realen Welt. Objekte haben Eigenschaften, welche wir deklarieren.
// Die Instanzierung definiert dabei nur die allgemeine Infos (z.B. Schuhgröße) die wir haben möchten die 
// jeder Mensch besitzt jedoch von Mensch zu Mensch unterschiedlich sind.
// Die Initialiserung gibt uns anschließend die genaue Informatioen (z.B. das die Schuhgröße 40 beträgt)
//  
//
//
//
//
//
//
// Aufgabe 4)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voneinander ab!  
// 
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!
class Zeugnis{
    constructor(){
        this.SchuelerName
        this.Schulname
        this.Bildungsgang
        this.Klasse
        this.Geburtsdatum
        this.Notendurchschnitt
        this.Fehlstunden
        this.Faecher
    }
}

// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  

let zeugnisPit = new Zeugnis()

zeugnisPit.SchuelerName = "Pit Kiff"
zeugnisPit.Schulname = "Berufskolleg Borken"
zeugnisPit.Bildungsgang = "Wirtschaftsgymnasium"
zeugnisPit.Klasse = "12a"
zeugnisPit.Geburtsdatum = "23.04.2005"
zeugnisPit.Notendurchschnitt = 3
zeugnisPit.Fehlstunden = 28
zeugnisPit.Faecher = "BWL, Mathe, Deutsch, VWL"

// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 

console.log ("Name: "+zeugnisPit.SchuelerName)
console.log("Schule: "+zeugnisPit.Schulname)
console.log("Bildungsgang: "+zeugnisPit.Bildungsgang)
console.log("Klasse: "+zeugnisPit.Klasse)
console.log("Geburtsdatum: "+zeugnisPit.Geburtsdatum)
console.log("Notendurchschnitt: "+zeugnisPit.Notendurchschnitt)
console.log("Fehlstunden: "+zeugnisPit.Fehlstunden)
console.log("Faecher: "+zeugnisPit.Faecher)


// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
//
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 
// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 
// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"
// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 
// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"

let MathePit = 15
let DeutschPit = 10
let Englischpit = 5

let MatheGit = 10
let DeutschGit = 8
let EnglischGit = 15

if (MatheGit+DeutschGit+EnglischGit/3 > MathePit+DeutschPit+Englischpit/3){
    console.log("Pit hat das bessere Zeugnis")
}else{
        console.log("Git hat das bessere Zeugnis")
}


// ODER
//15+10+5 = 30  30/10 = 3.0
let DurchschnittPit = 3.0
//10+8+15 = 33  33/10 = 3.3
let DurchschnittGit= 3.3

if (DurchschnittPit>DurchschnittGit){
    console.log("Pit hat das bessere Zeugnis")
}else{
        console.log("Git hat das bessere Zeugnis")
}