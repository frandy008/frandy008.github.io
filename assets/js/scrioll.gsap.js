gsap.to("#home", {
  scale: 0.1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#home",
    start: "top 0",
    end: "bottom 50%",
    markers: false,
    scrub: true,
  }
});

// gsap.to("#about", {
//   scale: 0.1,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: "#about",
//     start: "top 10%",
//     end: "bottom 50%",
//     markers: false,
//     scrub: true,
//   }
// });

// gsap.to("#portfolio", {
//   scale: 0.1,
//   opacity: 0,
//   scrollTrigger: {
//     trigger: "#portfolio",
//     start: "top 0%",
//     end: "bottom 0%",
//     scrub: true,
//   }
// });

let portfolioCards = document.querySelectorAll('.portfolio-card');

portfolioCards.forEach(card => {
  gsap.to(card, {
    scale: 0.8, // Mengecilkan lebih natural
    opacity: 0,
    scrollTrigger: {
      trigger: card,
      start: "top 20%", // Mulai animasi saat bagian atas card hampir masuk viewport
      end: "bottom 30%", // Selesai saat hampir keluar
      scrub: true
    }
  });
});
