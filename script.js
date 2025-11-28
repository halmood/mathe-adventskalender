// --- TEIL 1: DIE DATEN ---
const calendarData = [
    {
        day: 1,
        type: "Rätsel",
        title: "Der Zahlen-Detektiv",
        text: "Ich bin eine gerade Zahl. Ich bin größer als 10, aber kleiner als 20. Die Summe meiner Ziffern (Quersumme) ist 3. Wer bin ich?",
        answer: "Die Zahl 12",
        explanation: "Die Zahlen zwischen 10 und 20 sind: 11, 12, 13, ..., 19. <br>Gerade sind: 12, 14, 16, 18. <br>Die Quersumme von 12 ist 1 + 2 = 3. Treffer!"
    },
    {
        day: 2,
        type: "Fakt",
        title: "Die Null ist ein Held",
        text: "Wusstest du, dass die Römer keine Null kannten? Versuch mal, 2024 ohne Nullen zu schreiben, wenn du römische Zahlen nutzt (MMXXIV). Das Rechnen war damals extrem schwer!",
        answer: "Super!",
        explanation: "Die Null als Zahl wurde erst viel später in Indien erfunden. Sie macht unser Stellenwertsystem (Einer, Zehner, Hunderter) erst möglich."
    },
    {
        day: 3,
        type: "Rätsel",
        title: "Formen-Suche",
        text: "Ich habe 4 Ecken und 4 gleich lange Seiten. Meine Winkel sind alle rechtwinklig (90 Grad). Wie heiße ich?",
        answer: "Das Quadrat",
        explanation: "Ein Rechteck hat auch rechte Winkel, aber nur beim Quadrat sind wirklich *alle* Seiten gleich lang."
    },
    {
        day: 4,
        type: "Tipp",
        title: "Längen schätzen",
        text: "Hast du kein Lineal dabei? Merk dir: Die Breite deines Daumens ist ungefähr 1 cm. Die Spanne von deinem Daumen bis zum kleinen Finger ist oft ca. 15-20 cm.",
        answer: "Gut zu wissen!",
        explanation: "Das nennt man 'Körpermaße'. Miss deine Handspanne zu Hause mal nach, dann hast du immer ein Maßband dabei!"
    },
    {
        day: 5,
        type: "Rätsel",
        title: "Hühner & Kühe",
        text: "Auf einem Bauernhof stehen Tiere. Ein Bauer sieht 10 Köpfe und 28 Beine. Es sind nur Hühner und Kühe. Wie viele Kühe sind es?",
        answer: "4 Kühe (und 6 Hühner)",
        explanation: "4 Kühe haben 16 Beine. 6 Hühner haben 12 Beine. <br>16 + 12 = 28 Beine. <br>4 + 6 = 10 Köpfe."
    },
    {
        day: 6,
        type: "Spezial",
        title: "Der Nikolaus-Stern",
        text: "Der Nikolaus bringt dir Geometrie! Ein perfekter Schneestern hat meistens 6 Spitzen. Wie nennt man die Eigenschaft, wenn man ihn in der Mitte falten kann und beide Hälften decken sich genau?",
        answer: "Achsensymmetrie",
        explanation: "Schneeflocken sind wunderschöne Beispiele für Symmetrie in der Natur. Die Faltlinie nennt man Symmetrieachse."
    },
    {
        day: 7,
        type: "Rätsel",
        title: "Die Zahlen-Reihe",
        text: "Setze die Reihe fort: 2, 4, 8, 16, ... Welche Zahl kommt als Nächstes?",
        answer: "32",
        explanation: "Die Regel lautet: Die Zahl wird immer verdoppelt (mal 2 genommen)."
    },
    {
        day: 8,
        type: "Fakt",
        title: "360 Grad",
        text: "Ein voller Kreis hat 360 Grad. Warum eigentlich 360? Das kommt von den alten Babyloniern. 360 lässt sich super durch 2, 3, 4, 5 und 6 teilen!",
        answer: "Aha!",
        explanation: "Deswegen hat auch eine Stunde 60 Minuten und nicht 100. Alte Tradition!"
    },
    {
        day: 9,
        type: "Tipp",
        title: "Große Zahlen lesen",
        text: "Verlierst du bei Millionen und Milliarden den Überblick? Tipp: Mache von hinten (von rechts) alle drei Ziffern einen kleinen Punkt.",
        answer: "Bsp: 10.000.000",
        explanation: "So siehst du sofort: Die erste Gruppe sind Einer/Hunderter, die zweite Tausender, die dritte Millionen."
    },
    {
        day: 10,
        type: "Rätsel",
        title: "Rechen-König",
        text: "Rechne im Kopf: Nimm die Hälfte von 100. Addiere 10. Teile das Ergebnis durch 2. Was kommt raus?",
        answer: "30",
        explanation: "1. Hälfte von 100 = 50. <br>2. 50 + 10 = 60. <br>3. 60 geteilt durch 2 = 30."
    },
    {
        day: 11,
        type: "Fakt",
        title: "Googol",
        text: "Weißt du, woher 'Google' seinen Namen hat? Von der Zahl 'Googol'. Das ist eine 1 mit 100 Nullen!",
        answer: "Riesig!",
        explanation: "Das ist mehr als die Anzahl aller Atome im bekannten Universum."
    },
    {
        day: 12,
        type: "Rätsel",
        title: "Wie spät?",
        text: "Es ist 14:00 Uhr. Der große Zeiger der Uhr dreht sich nun genau 180 Grad weiter. Wie spät ist es dann?",
        answer: "14:30 Uhr",
        explanation: "Ein ganzer Kreis sind 360 Grad (60 Minuten). 180 Grad ist ein halber Kreis, also 30 Minuten."
    },
    {
        day: 13,
        type: "Tipp",
        title: "Textaufgaben knacken",
        text: "Verwirren dich Textaufgaben? Tipp: Nimm einen Textmarker. Unterstreiche NUR die Zahlen und die Frage. Alles andere ist oft nur Deko.",
        answer: "Wird gemacht!",
        explanation: "So filterst du die wichtigen Informationen (die 'gegebenen' Werte) heraus."
    },
    {
        day: 14,
        type: "Rätsel",
        title: "Römische Zahlen",
        text: "Was ergibt V + X in arabischen Ziffern?",
        answer: "15",
        explanation: "V steht für 5. X steht für 10. <br>5 + 10 = 15."
    },
    {
        day: 15,
        type: "Fakt",
        title: "Würfel-Magie",
        text: "Nimm dir einen normalen Spielwürfel. Addiere die Augen der gegenüberliegenden Seiten (oben + unten). Was kommt raus?",
        answer: "Immer 7!",
        explanation: "1+6=7, 2+5=7, 3+4=7. Das ist bei jedem Standardwürfel so."
    },
    {
        day: 16,
        type: "Rätsel",
        title: "Quadratzahlen",
        text: "Ich bin eine Quadratzahl. Ich liege zwischen 40 und 60. Man erhält mich, wenn man eine Zahl mit sich selbst malnimmt.",
        answer: "49",
        explanation: "6 mal 6 ist 36 (zu klein). <br>7 mal 7 ist 49 (passt!). <br>8 mal 8 ist 64 (zu groß)."
    },
    {
        day: 17,
        type: "Tipp",
        title: "Teilbarkeit durch 9",
        text: "Ist 3.456 durch 9 teilbar? Addiere einfach die Ziffern: 3+4+5+6 = 18. Ist 18 durch 9 teilbar? Ja! Dann ist es die große Zahl auch.",
        answer: "Quersummen-Regel",
        explanation: "Das funktioniert für die Teilbarkeit durch 3 und durch 9."
    },
    {
        day: 18,
        type: "Rätsel",
        title: "Logik pur",
        text: "Ein Vater hat 3 Töchter. Jede Tochter hat einen Bruder. Wie viele Kinder hat der Vater insgesamt?",
        answer: "4 Kinder",
        explanation: "Die 3 Töchter teilen sich denselben einen Bruder."
    },
    {
        day: 19,
        type: "Fakt",
        title: "Bienen-Mathe",
        text: "Warum bauen Bienen ihre Waben immer als Sechsecke? Sechsecke brauchen am wenigsten Wachs, um am meisten Honig zu speichern.",
        answer: "Schlau!",
        explanation: "Kreise hätten Lücken dazwischen, Quadrate wären instabiler. Die Natur optimiert!"
    },
    {
        day: 20,
        type: "Rätsel",
        title: "Der Kuchen",
        text: "Du willst einen runden Kuchen mit nur 3 geraden Schnitten in 8 Stücke teilen. Wie geht das?",
        answer: "2x Kreuz, 1x Mitte",
        explanation: "Schneide ein Kreuz (4 Stücke). Dann schneide den Kuchen waagerecht in der Mitte durch (wie ein Brötchen). Zack, 8 Stücke!"
    },
    {
        day: 21,
        type: "Tipp",
        title: "Überschlag",
        text: "Bevor du genau rechnest, mache einen Überschlag! <br>Aufgabe: 49 * 21. <br>Rechne im Kopf: 50 * 20 = 1000. Dein Ergebnis muss also in der Nähe von 1000 liegen.",
        answer: "Fehler vermeiden",
        explanation: "Das hilft dir, grobe Tippfehler im Taschenrechner sofort zu erkennen."
    },
    {
        day: 22,
        type: "Rätsel",
        title: "Spiegelzahlen",
        text: "Wie nennt man Zahlen (oder Wörter), die vorwärts und rückwärts gelesen gleich sind? Beispiel: 12321 oder 'Lagerregal'.",
        answer: "Palindrome",
        explanation: "Ein tolles Wortspiel aus der Mathematik und Deutsch."
    },
    {
        day: 23,
        type: "Fakt",
        title: "Unendlich",
        text: "Wie viele Zahlen gibt es zwischen 0 und 1? <br>Antwort: Unendlich viele!",
        answer: "Wow",
        explanation: "0,1... 0,01... 0,001... Du kannst immer noch eine kleinere Zahl finden. Die Unendlichkeit ist faszinierend."
    },
    {
        day: 24,
        type: "Finale",
        title: "Weihnachts-Rechnung",
        text: "Heute ist Heiligabend! Addiere die Anzahl der Türchen (24) zur Anzahl der Tage eines Jahres (365) und ziehe das aktuelle Jahr (2025) ab. Wenn du -1636 herausbekommst, hast du richtig gerechnet! Frohe Weihnachten!",
        answer: "Frohes Fest!",
        explanation: "Mathe ist überall. Genieße die Ferien und deine Geschenke!"
    }
];

// --- TEIL 2: DIE LOGIK ---

const grid = document.getElementById('calendar-grid');
const modal = document.getElementById('riddle-modal');
const closeBtn = document.querySelector('.close-btn');
const revealBtn = document.getElementById('reveal-btn');
const modalResult = document.getElementById('modal-result');

// Datum prüfen
const now = new Date();
const currentDay = now.getDate();
const currentMonth = now.getMonth() + 1; // JS Monate sind 0-basiert

// WICHTIG: Test-Modus
// Setze testMode auf true, um alle Türchen sofort öffnen zu können (zum Testen).
// Setze es auf false, damit der Kalender "echt" funktioniert (nur ab 1. Dez).
const testMode = true; 

calendarData.forEach(item => {
    const door = document.createElement('div');
    door.classList.add('advent-door');
    door.textContent = item.day;
    
    // Standardmäßig gesperrt
    let isLocked = true;

    // Logik: Öffnen, wenn Dezember ist UND der Tag erreicht wurde
    if (currentMonth === 12 && item.day <= currentDay) {
        isLocked = false;
    }

    // Wenn Testmodus an ist, alles entsperren
    if (testMode) {
        isLocked = false;
    }

    if (isLocked) {
        door.classList.add('locked');
        // Klick-Effekt für gesperrte Türen
        door.onclick = () => {
            door.style.transform = "translateX(5px)";
            setTimeout(() => door.style.transform = "translateX(0)", 100);
            setTimeout(() => door.style.transform = "translateX(-5px)", 200);
            setTimeout(() => door.style.transform = "translateX(0)", 300);
        };
    } else {
        door.classList.add('active');
        door.onclick = () => openDoor(item);
    }

    grid.appendChild(door);
});

function openDoor(data) {
    // Modal mit Daten füllen
    document.getElementById('modal-title').innerText = `Tag ${data.day}: ${data.title}`;
    document.getElementById('modal-text').innerHTML = data.text;
    document.getElementById('modal-answer').innerText = data.answer;
    document.getElementById('modal-explanation').innerHTML = data.explanation;
    
    // BILD LOGIK:
    const imgEl = document.getElementById('modal-img');
    
    // Hier wird der Pfad automatisch erstellt: "images/tag1.png", "images/tag2.png" etc.
    const imagePath = `images/tag${data.day}.png`;
    
    imgEl.src = imagePath;
    imgEl.style.display = 'block'; // Bild anzeigen

    // Buttons zurücksetzen
    modalResult.style.display = 'none';
    revealBtn.style.display = 'inline-block';
    
    // Modal anzeigen
    modal.style.display = 'flex';
}

// Button: Lösung anzeigen
revealBtn.onclick = () => {
    modalResult.style.display = 'block';
    revealBtn.style.display = 'none'; // Button verstecken nach Klick
};

// Schließen über X
closeBtn.onclick = () => {
    modal.style.display = 'none';
};

// Schließen durch Klick neben das Fenster
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
