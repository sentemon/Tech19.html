const trudniejszetrudniejszePytaniaBezpieczenstwoWSieci = [
    {
      pytanie: "Czym jest atak typu 'Man-in-the-Middle'?",
      odpowiedzi: {
        a: "Atakiem na serwer",
        b: "Atakiem na urządzenia mobilne",
        c: "Atakiem polegającym na przechwyceniu i modyfikacji komunikacji między dwoma stronami"
      },
      poprawnaOdpowiedz: "c"
    },
    {
      pytanie: "Co to jest zero-day exploit?",
      odpowiedzi: {
        a: "Atak wykorzystujący nową funkcję systemu operacyjnego",
        b: "Atak, na który nie istnieje jeszcze skuteczna obrona",
        c: "Atak przeprowadzany o północy"
      },
      poprawnaOdpowiedz: "b"
    },
    {
      pytanie: "Czym różni się biometryczna autentykacja od tradycyjnych metod uwierzytelniania?",
      odpowiedzi: {
        a: "Biometryczna autentykacja korzysta z hasła, a tradycyjne metody z biometrii",
        b: "Biometryczna autentykacja opiera się na danych biometrycznych, takich jak odcisk palca czy rozpoznawanie twarzy",
        c: "Nie ma różnicy między nimi"
      },
      poprawnaOdpowiedz: "b"
    },
    {
      pytanie: "Co to jest 'sandboxing' w kontekście bezpieczeństwa komputerowego?",
      odpowiedzi: {
        a: "Blokowanie dostępu do internetu",
        b: "Izolowanie i uruchamianie podejrzanych plików w kontrolowanym środowisku",
        c: "Zaszyfrowane przesyłanie danych"
      },
      poprawnaOdpowiedz: "b"
    },
    {
      pytanie: "Jakie są zagrożenia związane z używaniem nieaktualizowanych wtyczek do przeglądarek?",
      odpowiedzi: {
        a: "Brak zagrożeń",
        b: "Możliwość infekcji malware, wykorzystującego lukę w zabezpieczeniach",
        c: "Poprawa wydajności przeglądarki"
      },
      poprawnaOdpowiedz: "b"
    },
    {
      pytanie: "Czym jest 'cryptojacking'?",
      odpowiedzi: {
        a: "Ochroną przed atakami hakerskimi na kryptowaluty",
        b: "Atakiem polegającym na nielegalnym wykorzystywaniu mocy obliczeniowej urządzeń do wydobycia kryptowalut",
        c: "Szyfrowaniem plików na dysku twardym"
      },
      poprawnaOdpowiedz: "b"
    },
    {
      pytanie: "Co to jest 'social engineering'?",
      odpowiedzi: {
        a: "Zastosowanie sztucznej inteligencji w bezpieczeństwie",
        b: "Atakiem na media społecznościowe",
        c: "Manipulacją ludzi w celu uzyskania poufnych informacji"
      },
      poprawnaOdpowiedz: "c"
    },
    {
      pytanie: "Dlaczego używanie publicznych komputerów do logowania się na swoje konta online jest ryzykowne?",
      odpowiedzi: {
        a: "Nie jest ryzykowne",
        b: "Możliwość przechwycenia danych przez złośliwe oprogramowanie",
        c: "Ułatwienie dostępu do konta"
      },
      poprawnaOdpowiedz: "b"
    },
    {
      pytanie: "Co to jest 'ransomware'?",
      odpowiedzi: {
        a: "Oprogramowanie antywirusowe",
        b: "Atak, podczas którego dane są szyfrowane, a użytkownik musi zapłacić okup, aby je odzyskać",
        c: "Rodzaj firewalla"
      },
      poprawnaOdpowiedz: "b"
    },
    {
      pytanie: "Jakie są zalecenia dotyczące zarządzania hasłami?",
      odpowiedzi: {
        a: "Używanie tego samego hasła wszędzie",
        b: "Przechowywanie hasła na widocznym miejscu",
        c: "Używanie unikalnych i silnych haseł do różnych kont"
      },
      poprawnaOdpowiedz: "c"
    }
  ];
  

  const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const submitButton = document.getElementById("submit-btn");

    function generateQuiz() {
      let quizHTML = "";

      trudniejszetrudniejszePytaniaBezpieczenstwoWSieci.forEach((pytanie, index) => {
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

      trudniejszetrudniejszePytaniaBezpieczenstwoWSieci.forEach((pytanie, index) => {
        if (userAnswers[`question${index}`] === pytanie.poprawnaOdpowiedz) {
          score++;
        }
      });

      return score;
    }

    function showResult() {
      const score = calculateScore();
      resultContainer.innerHTML = `<p>Twój wynik to: ${score} / ${trudniejszetrudniejszePytaniaBezpieczenstwoWSieci.length}</p>`;
    }

    submitButton.addEventListener("click", () => {
      showResult();
    });

    generateQuiz();
