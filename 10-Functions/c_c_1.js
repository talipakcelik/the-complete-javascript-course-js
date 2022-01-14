console.log("dede");

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", function (e) {
    e.target.style.color = "blue";
  });
})();

// iç fonksiyonun dışındakine ulaşma sebebi closure
// IIFE çoktan oynatılıp bitmesine rağmen, event listener'ın call back fonksiyonu hala çalışıyor.
