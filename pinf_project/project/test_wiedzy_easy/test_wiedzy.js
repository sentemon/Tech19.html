const pytaniaBezpieczenstwoWSieci = [
    {
      pytanie: "Jakie jest zalecane zachowanie wobec podejrzanych wiadomości e-mail?",
      odpowiedzi: {
        a: "Otwórz je od razu",
        b: "Ignoruj je",
        c: "Sprawdź ich wiarygodność, zanim klikniesz w linki"
      },
      poprawnaOdpowiedz: "c"
    },
    {
      pytanie: "Co oznacza termin 'phishing'?",
      odpowiedzi: {
        a: "Technika bezpieczeństwa",
        b: "Atak polegający na oszustwie w celu uzyskania poufnych informacji",
        c: "Szybki dostęp do Internetu"
      },
      poprawnaOdpowiedz: "b"
    },
    {
      pytanie: "Jaki rodzaj hasła jest zalecany dla silnego zabezpieczenia konta online?",
      odpowiedzi: {
        a: "'123456'",
        b: "'Hasło123'",
        c: "Złożone hasło z kombinacją liter, cyfr i znaków specjalnych"
      },
      poprawnaOdpowiedz: "c"
    },
    {
      pytanie: "Co to jest dwuetapowe uwierzytelnianie?",
      odpowiedzi: {
        a: "Korzystanie z jednego hasła",
        b: "Dodatkowa warstwa ochrony, wymagająca dodatkowego potwierdzenia, np. kodu SMS",
        c: "Wyłączanie zabezpieczeń w celu ułatwienia dostępu"
      },
      poprawnaOdpowiedz: "b"
    },
    {
      pytanie: "Dlaczego używanie tego samego hasła do różnych kont online jest niebezpieczne?",
      odpowiedzi: {
        a: "Jest to bezpieczne, ponieważ łatwiej je zapamiętać",
        b: "Ryzyko utraty wszystkich kont w przypadku naruszenia jednego hasła",
        c: "To standardowa praktyka bezpieczeństwa"
      },
      poprawnaOdpowiedz: "b"
    },
    {
      pytanie: "Co to jest firewall?",
      odpowiedzi: {
        a: "Program antywirusowy",
        b: "Urządzenie lub oprogramowanie blokujące niechciane połączenia sieciowe",
        c: "Bezpieczna przeglądarka internetowa"
      },
      poprawnaOdpowiedz: "b"
    },
    {
      pytanie: "Jakie są potencjalne zagrożenia związane z używaniem publicznych sieci Wi-Fi?",
      odpowiedzi: {
        a: "Brak zagrożeń",
        b: "Możliwość przechwycenia danych przez nieautoryzowane osoby",
        c: "Szybsze połączenie internetowe"
      },
      poprawnaOdpowiedz: "b"
    },
    {
      pytanie: "Co to jest malware?",
      odpowiedzi: {
        a: "Oprogramowanie zabezpieczające",
        b: "Złośliwe oprogramowanie, które może szkodzić systemowi",
        c: "Przyjazne oprogramowanie"
      },
      poprawnaOdpowiedz: "b"
    },
    {
      pytanie: "Jakie są korzyści z regularnych aktualizacji oprogramowania?",
      odpowiedzi: {
        a: "Brak korzyści",
        b: "Poprawa funkcji",
        c: "Zabezpieczenie przed lukami bezpieczeństwa"
      },
      poprawnaOdpowiedz: "c"
    },
    {
      pytanie: "Co to jest VPN (Virtual Private Network)?",
      odpowiedzi: {
        a: "Publiczna sieć Wi-Fi",
        b: "Bezpieczne połączenie internetowe, ukrywające adres IP",
        c: "Sklep internetowy"
      },
      poprawnaOdpowiedz: "b"
    }
  ];

  const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const submitButton = document.getElementById("submit-btn");

    function generateQuiz() {
      let quizHTML = "";

      pytaniaBezpieczenstwoWSieci.forEach((pytanie, index) => {
        quizHTML += `<div class="question">
          <p>${index + 1}. ${pytanie.pytanie}</p>
          <div class="options">
            ${Object.entries(pytanie.odpowiedzi).map(([key, value]) =>
              `<input type="radio" name="question${index}" value="${key}" required>
              <label for="question${index}">${value}</label><br>`
            ).join("")}
          </div>
        </div>`;
      });

      quizContainer.innerHTML = quizHTML;
    }

    function calculateScore() {
      const userAnswers = Array.from(document.querySelectorAll("input[type=radio]:checked"))
        .reduce((acc, input) => {
          acc[input.name] = input.value;
          return acc;
        }, {});

      let score = 0;

      pytaniaBezpieczenstwoWSieci.forEach((pytanie, index) => {
        if (userAnswers[`question${index}`] === pytanie.poprawnaOdpowiedz) {
          score++;
        }
      });

      return score;
    }

    function showResult() {
      const score = calculateScore();
      resultContainer.innerHTML = `<p>Twój wynik to: ${score} / ${pytaniaBezpieczenstwoWSieci.length}</p>`;
    }

    submitButton.addEventListener("click", () => {
      showResult();
    });

    generateQuiz();
