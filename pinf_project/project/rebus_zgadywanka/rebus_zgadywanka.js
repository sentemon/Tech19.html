var currentRebusIndex = 1; // Zmienna przechowująca aktualny indeks rebusu

function sprawdzOdpowiedz() {
  var odpowiedz = document.getElementById("odpowiedz").value.toLowerCase();
  var rebusy = [
    "firewall",
    "waterfowl",
    "sunbeam",
    "landscape",
    "thunderbolt"
  ];

  if (odpowiedz === rebusy[currentRebusIndex - 1]) {
    document.getElementById("result").innerHTML =
      "Poprawna odpowiedź! 🔒";
    // Przełącz na kolejny rebus
    currentRebusIndex++;
    // Wyczyść pole odpowiedzi
    document.getElementById("odpowiedz").value = "";
    // Zaktualizuj treść rebusu
    updateRebus();
  } else {
    document.getElementById("result").innerHTML =
      "Niepoprawna odpowiedź. Spróbuj jeszcze raz. ❌";
  }
}

// Funkcja aktualizująca treść rebusu na stronie
function updateRebus() {
  if (currentRebusIndex > rebusy.length) {
    // Jeśli wszystkie rebusy zostały ukończone, wyświetl komunikat końcowy
    document.getElementById("rebus-container-5").innerHTML =
      "<p>Gratulacje! Wszystkie rebusy ukończone! 🎉</p>";
    document.querySelector(".input-container").style.display = "none";
  } else {
    // W przeciwnym razie zaktualizuj treść rebusu
    var rebusContainerId = "rebus-container-" + currentRebusIndex;
    document.getElementById("rebus-container-" + (currentRebusIndex - 1)).style.display = "none";
    document.getElementById("rebus-container-" + currentRebusIndex).style.display = "block";
  }
}
