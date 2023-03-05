/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo del documento in qualcos'altro.
      */

    const title = document.getElementById('title');
    title.innerHTML = "title change";

       
        //
      

      /* ESERCIZIO 2
       Scrivi una funzione per cambiare la classe del titolo della pagina in "myHeading".
      */

       const h1 = document.getElementsByTagName('h1')[0];
       h1.innerHTML = 'h1 change';


        //
      

      /* ESERCIZIO 3
       Scrivi una funzione per cambiare il contenuto di tutti i p che sono discendenti di un div.
      */

       const changePcontent = function () {
        const divs = document.getElementsByTagName('div');
        for (let i = 0; i < divs.length; i++) {
          const div = divs[i];
          const paragraphs = div.getElementsByTagName('p');
          for (let j = 0; j < paragraphs.length; j++) {
            const paragraph = paragraphs[j];
            paragraph.textContent = "ce l'ho fatta";
          }
        }
      };
      changePcontent();

        //
      

      /* ESERCIZIO 4
       Scrivi una funzione per cambiare la proprietà href di ogni link a https://www.google.com
      */

      const changeUrls = function () {
        //
      }

      /* ESERCIZIO 5
       Scrivi una funzione per aggiungere un nuovo elemento alla seconda lista non-ordinata.
      */

      const addToTheSecond = function (content) {
        //
      }

      /* ESERCIZIO 6
       Scrivi una funzione per aggiungere un secondo paragrafo al primo div.
      */

      const addParagraph = function (content) {
        //
      }

      /* ESERCIZIO 7
       Scrivi una funzione per far scomparire la prima lista non-ordinata.
      */

      const firstUlDisappear = function () {
        //
      }

      /* ESERCIZIO 8
       Scrivi una funzione per rendere verde lo sfondo di ogni lista non-ordinata.
      */

      const paintItGreen = function () {
        //
      }

      /* ESERCIZIO 9
       Rendi il tag h1 capace di cambiare colore del testo ogni volta che l'utente ci clicca sopra.
      */

      const makeItClickable = function () {
        //
      }

      /* ESERCIZIO 10
       Cambia il testo del footer con qualcos'altro quando l'utente ci clicca sopra.
      */

      const changeFooterText = function () {
        //
      }

      /* ESERCIZIO 11
       Aggiungi un event listener al campo di testo nella pagina e fai in modo che dopo ogni lettera il suo valore venga mostrato in console.
      */

      const inputField = document.getElementById('input-field')
      // ...

      /* ESERCIZIO 12
       Crea un messaggio di benvenuto con un alert quando la pagina ha finito di caricarsi.
      */

      window.alert('Welcome to team 1 ☺')
      