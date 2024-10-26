// Ambil elemen dari HTML
const loveBtn = document.getElementById("loveBtn");
const nextBtn = document.getElementById("nextBtn");
const message = document.getElementById("message");

// Event Listener untuk butang pertama
loveBtn.addEventListener("click", function () {
    message.textContent = "I Love You ❤"; // Papar mesej cinta
    loveBtn.style.display = "none"; // Sorok butang pertama
    nextBtn.style.display = "inline-block"; // Tunjuk butang 'Next'
});

// Event Listener untuk butang kedua (Next)
nextBtn.addEventListener("click", function () {
    message.textContent = "Loading... ⏳"; // Papar loading
    nextBtn.style.display = "none"; // Sorok butang 'Next'

    // Papar mesej selepas 3 saat
    setTimeout(() => {
        message.textContent = "Syaza babi... Sorry, tapi boong 😜";
    }, 3000);
});