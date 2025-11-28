// ==========================================
// TEIL 1: DIE DATEN (Die 24 Türchen-Inhalte)
// ==========================================
// Angepasst für Gymnasium Klasse 5 (NRW)
// Themen: Natürliche Zahlen, Größen, Geometrie, Logik

const calendarData = [
    {
        day: 1,
        type: "Rätsel",
        title: "Der Zahlen-Detektiv",
        text: "Ich bin eine gerade Zahl. Ich bin größer als 10, aber kleiner als 20. Die Summe meiner Ziffern (Quersumme) ist 3. Wer bin ich?",
        answer: "Die Zahl 12",
        explanation: "Die Zahlen zwischen 10 und 20 sind: 11, 12, 13, ..., 19. <br>Gerade sind davon: 12, 14, 16, 18. <br>Wir prüfen die Quersumme: Bei 12 ist sie 1 + 2 = 3. Treffer!"
    },
    {
        day: 2,
        type: "Fakt",
        title: "Die Null ist ein Held",
        text: "Wusstest du, dass die alten Römer keine Null kannten? Versuch mal, die heutige Jahreszahl ohne Nullen zu schreiben, wenn du römische Zahlen nutzt. Das Rechnen war damals extrem schwer!",
        answer: "Super wichtig!",
        explanation: "Die Null als eigene Zahl wurde erst viel später in Indien erfunden. Sie macht unser Stellenwertsystem (Einer, Zehner, Hunderter...) erst möglich, weil sie leere Stellen füllt."
    },
    {
        day: 3,
        type: "Rätsel",
        title: "Formen-Suche",
        text: "Ich habe 4 Ecken und 4 gleich lange Seiten. Meine Winkel sind alle rechtwinklig (genau 90 Grad). Wie heiße ich?",
        answer: "Das Quadrat",
        explanation: "Ein Rechteck hat auch vier rechte Winkel, aber nur beim Quadrat sind wirklich *alle* Seiten gleich lang."
    },
    {
        day: 4,
        type: "Rätsel",
        title: "Der Zeit-Dieb",
        text: "Ich habe viele Geschwister im Kalender. Einige haben 31 Tage, andere haben 30 Tage. Aber nur ich habe manchmal 28 und manchmal 29 Tage. Welcher Monat bin ich?",
        answer: "Der Februar",
        explanation: "In einem normalen Jahr hat der Februar 28 Tage. In einem Schaltjahr (alle 4 Jahre, das nächste ist 2028) hat er 29 Tage, um die Zeit auszugleichen, die die Erde um die Sonne braucht."
    },
    {
        day: 5,
        type: "Rätsel",
        title: "Hühner & Kühe",
        text: "Auf einem Bauernhof stehen Tiere. Ein Bauer sieht 10 Köpfe und 28 Beine. Es sind nur Hühner und Kühe. Wie viele Kühe sind es?",
        answer: "4 Kühe (und 6 Hühner)",
        explanation: "Probieren wir es aus: 4 Kühe haben 4*4 = 16 Beine. <br>Dann bleiben noch 6 Köpfe für die Hühner. 6 Hühner haben 6*2 = 12 Beine. <br>Zusammen: 16 + 12 = 28 Beine. Passt!"
    },
    {
        day: 6,
        type: "Spezial",
        title: "Der Nikolaus-Stern",
        text: "Der Nikolaus bringt dir Geometrie! Ein perfekter Schneestern hat meistens 6 Spitzen. Wie nennt man die Eigenschaft, wenn man eine Figur in der Mitte falten kann und beide Hälften decken sich genau?",
        answer: "Achsensymmetrie",
        explanation: "Schneeflocken sind wunderschöne Beispiele für Symmetrie in der Natur. Die Faltlinie, auf der die Hälften genau aufeinanderpassen, nennt man Symmetrieachse."
    },
    {
        day: 7,
        type: "Rätsel",
        title: "Die Zahlen-Reihe",
        text: "Setze die Reihe fort: 2, 4, 8, 16, ... Welche Zahl kommt als Nächstes?",
        answer: "32",
        explanation: "Die Regel lautet: Die Zahl wird immer verdoppelt (mal 2 genommen). 16 mal 2 ist 32."
    },
    {
        day: 8,
        type: "Rätsel",
        title: "Formen-Wandler",
        text: "Ich bin eine viereckige Form. Alle meine 4 Seiten sind genau gleich lang. Aber meine Winkel sind KEINE 90 Grad (keine rechten Winkel). Wenn du mich auf eine Spitze stellst, sehe ich aus wie ein Diamant auf einer Spielkarte. Wie heiße ich?",
        answer: "Die Raute (oder Rhombus)",
        explanation: "Ein Quadrat hat auch gleich lange Seiten, aber rechte Winkel. Wenn man ein Quadrat quasi 'schief zusammendrückt', wird es zur Raute."
    },
    {
        day: 9,
        type: "Tipp",
        title: "Große Zahlen lesen",
        text: "Verlierst du bei Millionen und Milliarden den Überblick? Tipp: Mache von hinten (von rechts) alle drei Ziffern einen kleinen Punkt oder eine Lücke.",
        answer: "Bsp: 10.000.000",
        explanation: "So siehst du sofort die Dreiergruppen: Die erste Gruppe sind Einer/Hunderter, die zweite Tausender, die dritte Millionen."
    },
    {
        day: 10,
        type: "Rätsel",
        title: "Kopfrechen-König",
        text: "Rechne im Kopf: Nimm die Hälfte von 100. Addiere 10 dazu. Teile das Ergebnis durch 2. Was kommt raus?",
        answer: "30",
        explanation: "Schritt für Schritt: <br>1. Hälfte von 100 = 50. <br>2. 50 + 10 = 60. <br>3. 60 geteilt durch 2 = 30."
    },
    {
        day: 11,
        type: "Fakt",
        title: "Googol",
        text: "Weißt du, woher die Suchmaschine 'Google' ihren Namen hat? Von der Zahl 'Googol'. Das ist eine 1 mit 100 Nullen dahinter!",
        answer: "Riesig!",
        explanation: "Diese Zahl ist unvorstellbar groß. Sie ist größer als die Anzahl aller Atome im gesamten bekannten Universum."
    },
    {
        day: 12,
        type: "Rätsel",
        title: "Wie spät?",
        text: "Es ist genau 14:00 Uhr. Der große Minutenzeiger der Uhr dreht sich nun genau um 180 Grad weiter. Wie spät ist es dann?",
        answer: "14:30 Uhr",
        explanation: "Ein ganzer Kreis auf der Uhr sind 360 Grad (eine volle Stunde). 180 Grad ist genau ein halber Kreis, also eine halbe Stunde (30 Minuten)."
    },
    {
        day: 13,
        type: "Rätsel",
        title: "Weihnachts-Outfit",
        text: "Der Weihnachtsmann hat ein modisches Problem. Er hat 3 verschiedene rote Mäntel zur Auswahl und 2 verschiedene Paar Stiefel. Wie viele verschiedene Möglichkeiten hat er insgesamt, sich anzuziehen (also einen Mantel mit einem Paar Stiefel zu kombinieren)?",
        answer: "6 Möglichkeiten",
        explanation: "Das ist Kombinatorik: Für jeden der 3 Mäntel kann er sich zwischen 2 Paar Stiefeln entscheiden. Man rechnet einfach: 3 mal 2 = 6."
    },
    {
        day: 14,
        type: "Rätsel",
        title: "Römische Zahlen",
        text: "Die Römer nutzen Buchstaben für Zahlen. Was ergibt V + X in unseren arabischen Ziffern?",
        answer: "15",
        explanation: "Das 'V' steht bei den Römern für die 5. Das 'X' steht für die 10. <br>Rechnung: 5 + 10 = 15."
    },
    {
        day: 15,
        type: "Fakt",
        title: "Würfel-Magie",
        text: "Nimm dir einen ganz normalen Spielwürfel aus einem Brettspiel. Addiere die Augen der gegenüberliegenden Seiten (also oben + unten). Was kommt raus, egal welche Seite oben liegt?",
        answer: "Immer 7!",
        explanation: "Prüf es nach: Die 1 liegt gegenüber der 6 (1+6=7). Die 2 gegenüber der 5 (2+5=7). Die 3 gegenüber der 4 (3+4=7). Das ist genormt."
    },
    {
        day: 16,
        type: "Rätsel",
        title: "Quadratzahlen",
        text: "Ich bin eine Quadratzahl. Ich liege zwischen 40 und 60. Man erhält mich, wenn man eine natürliche Zahl mit sich selbst malnimmt (zum Beispiel 5 mal 5). Welche Zahl bin ich?",
        answer: "49",
        explanation: "Wir testen: <br>6 mal 6 ist 36 (zu klein). <br>7 mal 7 ist 49 (das passt!). <br>8 mal 8 ist 64 (schon zu groß)."
    },
    {
        day: 17,
        type: "Tipp",
        title: "Riesen-Zahlen teilen",
        text: "Stell dir vor, du hast die riesige Zahl **3.456** und willst wissen, ob man sie gerecht durch 9 teilen kann, ohne Rest. Musst du das mühsam schriftlich ausrechnen? Nein, es gibt einen super einfachen Trick, der nur wenige Sekunden dauert! Kennst du ihn?",
        answer: "Die Quersummen-Regel",
        explanation: "Addiere einfach alle Ziffern der Zahl: 3 + 4 + 5 + 6 = 18. <br>Ist das Ergebnis (18) durch 9 teilbar? Ja, ist es! <br>Dann ist auch die ganze große Zahl durch 9 teilbar. Das klappt immer bei der Teilbarkeit durch 3 und durch 9."
    },
    {
        day: 18,
        type: "Rätsel",
        title: "Logik pur",
        text: "Ein Vater hat 3 Töchter. Jede dieser Töchter hat einen Bruder. Wie viele Kinder hat der Vater insgesamt?",
        answer: "4 Kinder",
        explanation: "Es sind nicht 6 Kinder! Die 3 Töchter teilen sich alle denselben einen Bruder. Also: 3 Mädchen + 1 Junge = 4 Kinder."
    },
    {
        day: 19,
        type: "Fakt",
        title: "Bienen-Architekten",
        text: "Bienen sind geniale Baumeister. Wenn sie ihre Waben im Stock bauen, benutzen sie immer exakt die gleiche geometrische Form, um den Honig zu lagern. Sie benutzen keine Kreise, keine Quadrate und keine Dreiecke. Welche Form nutzen sie und warum?",
        answer: "Sechsecke (Hexagone)",
        explanation: "Mit Sechsecken kann man eine Fläche lückenlos füllen (anders als bei Kreisen, da blieben Lücken). Von allen Formen, die lückenlos passen, braucht das Sechseck am wenigsten Baumaterial (Wachs) für den meisten Platz im Inneren. Die Natur spart gerne Energie!"
    },
    {
        day: 20,
        type: "Fakt",
        title: "Das magische Papier",
        text: "Stell dir vor, du hast ein riesiges, normales Blatt Papier. Du faltest es einmal in der Mitte. Dann faltest du es nochmal. Und nochmal. Was glaubst du: Wenn du es schaffen würdest, das Papier 42 Mal zu falten, wie dick wäre der Stapel dann ungefähr?",
        answer: "Bis zum Mond!",
        explanation: "Das glaubt man kaum, aber die Dicke verdoppelt sich bei jedem Falten. Das wächst unfassbar schnell! Nach 42 Faltungen wäre der Papierstapel etwa 384.000 Kilometer hoch – das ist die Strecke von der Erde bis zum Mond."
    },
    {
        day: 21,
        type: "Rätsel",
        title: "Gedanken-Leser",
        text: "Wir machen einen Zaubertrick! Denk dir eine beliebige Zahl zwischen 1 und 10. <br>1. Verdopple deine Zahl (mal 2). <br>2. Addiere 8 dazu (+ 8). <br>3. Teile das Ergebnis durch 2 (: 2). <br>4. Ziehe von diesem Ergebnis deine ursprüngliche Zahl ab, an die du am Anfang gedacht hast. <br>Welche Zahl kommt heraus?",
        answer: "Immer die 4!",
        explanation: "Egal mit welcher Zahl du startest, durch die Rechenschritte (Verdoppeln und später wieder Halbieren) bleibt am Ende immer genau die Hälfte der addierten Zahl übrig. Die Hälfte von 8 ist 4. Probier es mit einer anderen Zahl aus!"
    },
    {
        day: 22,
        type: "Rätsel",
        title: "Spiegelzahlen",
        text: "Wie nennt man Zahlen (oder auch Wörter), die vorwärts und rückwärts gelesen genau gleich sind? Beispiele sind die Zahl 12321 oder das Wort 'Lagerregal'.",
        answer: "Palindrome",
        explanation: "Ein tolles Wortspiel, das es in der Mathematik und im Deutschunterricht gibt. Anna, Otto und Rentner sind auch Palindrome."
    },
    {
        day: 23,
        type: "Fakt",
        title: "Zahlen-Zwischenraum",
        text: "Schau dir auf einem Lineal den Abstand zwischen der 0 und der 1 an. Das ist nicht viel Platz, oder? Was glaubst du, wie viele verschiedene Kommazahlen (Bruchzahlen) passen genau in diesen kleinen Zwischenraum?",
        answer: "Unendlich viele!",
        explanation: "Das ist das Faszinierende an der Mathematik: Denke dir 0,1. Dann 0,01. Dann 0,001. Du kannst immer noch eine Null dranhängen und die Zahl wird kleiner, ist aber immer noch größer als 0. Das hört niemals auf, es gibt unendlich viele Zahlen dazwischen."
    },
    {
        day: 24,
        type: "Finale",
        title: "Das Rentier-Rennen",
        text: "Heute ist Heiligabend! Rudolph, Dasher und Dancer haben ein Wettrennen gemacht. Kannst du die Reihenfolge herausfinden?<br>1. Rudolph war schneller als Dancer. <br>2. Dasher war nicht der Schnellste. <br>3. Dancer war nicht der Letzte. <br>Wer war 1., 2. und 3.?",
        answer: "1. Rudolph, 2. Dancer, 3. Dasher",
        explanation: "Logik-Check: Rudolph ist vor Dancer. Da Dancer nicht Letzter war, muss er Zweiter sein (Rudolph > Dancer > ?). Dasher war nicht der Schnellste, also bleibt für ihn nur der letzte Platz. <br>Frohe Weihnachten und viel Spaß mit Mathe im neuen Jahr!"
    }
];

// ==========================================
// TEIL 2: DIE PROGRAMMIER-LOGIK
// ==========================================

const grid = document.getElementById('calendar-grid');
const modal = document.getElementById('riddle-modal');
const closeBtn = document.querySelector('.close-btn');
const revealBtn = document.getElementById('reveal-btn');
const modalResult = document.getElementById('modal-result');

// Aktuelles Datum ermitteln
const now = new Date();
const currentDay = now.getDate();
const currentMonth = now.getMonth() + 1; // JavaScript Monate sind 0-basiert (Jan=0, Dez=11)

// --- WICHTIG: Test-Modus ---
// Setze testMode auf true, um alle Türchen sofort öffnen zu können (zum Testen).
// Setze es auf false, damit der Kalender "echt" funktioniert (nur im Dezember, Tag für Tag).
const testMode = false; 

// Türchen generieren
calendarData.forEach(item => {
    const door = document.createElement('div');
    door.classList.add('advent-door');
    door.textContent = item.day;
    
    // Standardmäßig ist das Türchen gesperrt
    let isLocked = true;

    // Logik: Öffnen, wenn es Dezember ist UND der Tag erreicht oder vorbei ist
    if (currentMonth === 12 && item.day <= currentDay) {
        isLocked = false;
    }

    // Wenn Testmodus an ist, alles entsperren, egal welches Datum ist
    if (testMode) {
        isLocked = false;
    }

    if (isLocked) {
        door.classList.add('locked');
        // Kleiner Wackel-Effekt, wenn man auf ein gesperrtes Türchen klickt
        door.onclick = () => {
            door.style.transform = "translateX(5px)";
            setTimeout(() => door.style.transform = "translateX(0)", 100);
            setTimeout(() => door.style.transform = "translateX(-5px)", 200);
            setTimeout(() => door.style.transform = "translateX(0)", 300);
        };
    } else {
        door.classList.add('active');
        // Wenn aktiv, öffnet ein Klick das Modal-Fenster
        door.onclick = () => openDoor(item);
    }

    grid.appendChild(door);
});

// Funktion zum Öffnen des Pop-up Fensters (Modal)
function openDoor(data) {
    // Modal mit den Daten des jeweiligen Tages füllen
    document.getElementById('modal-title').innerText = `Tag ${data.day}: ${data.title}`;
    document.getElementById('modal-text').innerHTML = data.text; // innerHTML erlaubt HTML-Tags wie <br> im Text
    document.getElementById('modal-answer').innerText = data.answer;
    document.getElementById('modal-explanation').innerHTML = data.explanation;
    
    // BILD LOGIK:
    const imgEl = document.getElementById('modal-img');
    
    // Hier wird der Pfad zum Bild automatisch erstellt.
    // Es wird erwartet, dass die Bilder im Unterordner "images" liegen 
    // und "tag1.png", "tag2.png" usw. heißen.
    const imagePath = `images/tag${data.day}.png`;
    
    // Versuchen, das Bild zu laden. 
    // Hinweis: Falls das Bild nicht existiert, greift das 'onerror' Attribut im HTML 
    // und versteckt das Bildelement, damit kein "kaputtes Bild"-Icon angezeigt wird.
    imgEl.src = imagePath;
    imgEl.style.display = 'block'; // Grundsätzlich anzeigen (onerror versteckt es bei Bedarf wieder)

    // Buttons und Lösungsbereich zurücksetzen für den initialen Zustand
    modalResult.style.display = 'none';
    revealBtn.style.display = 'inline-block';
    
    // Das Modal-Fenster sichtbar machen (CSS: display: flex)
    modal.style.display = 'flex';
}

// Event-Listener für den "Lösung anzeigen" Button
revealBtn.onclick = () => {
    modalResult.style.display = 'block'; // Lösung einblenden
    revealBtn.style.display = 'none';    // Button ausblenden
};

// Event-Listener zum Schließen über das "X"
closeBtn.onclick = () => {
    modal.style.display = 'none';
};

// Event-Listener zum Schließen durch Klick auf den dunklen Hintergrund neben das Fenster
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
