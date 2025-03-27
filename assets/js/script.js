document.getElementById("nav-menu").addEventListener("click", function () {
  menuToogle();
});

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navlink) => {
  navlink.addEventListener("click", function (event) {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");

    const anchor = this.querySelector("a");
    if (anchor && event.target !== anchor) {
      anchor.click();
    }

    if (window.matchMedia("(max-width: 639px)").matches) {
      menuToogle();
    }
  });
});


function menuToogle(){
  document.querySelector(".nav-menu").classList.toggle("show");

  const navIcon = document.getElementById("nav-icon");
  if (navIcon.classList.contains("bi-list")) {
    navIcon.classList.replace("bi-list", "bi-x-lg");
  } else {
    navIcon.classList.replace("bi-x-lg", "bi-list");
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();

    const targetId = this.getAttribute("href").substring(1); 
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); 

      history.replaceState(null, null, " ");
    }
  });
});

function openTab(e,id){
  let tabLinks = document.querySelectorAll(".tab-link");
  tabLinks.forEach(e => {
    e.classList.remove('active');
  });
  e.target.classList.add('active');

  let tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(e => {
    e.classList.remove('active');
  });
  document.getElementById(`${id}`).classList.add('active');
}

window.onload = function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav .nav-menu li");
  const offset = 80; // Sesuaikan dengan tinggi navbar (misal: 80px)

  function updateActiveSection() {
    let maxVisibleArea = 0;
    let activeSection = null;

    sections.forEach((section) => {
      const visibleArea = getVisibleArea(section);

      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        activeSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((li) => {
      li.classList.remove("active");
      const a = li.querySelector("a");

      if (a && a.getAttribute("href") === `#${activeSection}`) {
        li.classList.add("active");
      }
    });
  }

  function getVisibleArea(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    return visibleHeight > 0 ? visibleHeight : 0;
  }

  // Smooth scroll dengan offset
  document.querySelectorAll("nav .nav-menu a").forEach((a) => {
    a.addEventListener("click", function (e) {
      e.preventDefault(); // Hentikan default scroll

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const targetPosition = targetSection.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  window.addEventListener("scroll", updateActiveSection);
  window.addEventListener("resize", updateActiveSection);
  updateActiveSection();
};

function openImagePopup(src) {
  document.getElementById("popupImage").src = src;
  document.getElementById("imagePopup").classList.remove("hidden");
}

function closeImagePopup() {
  document.getElementById("imagePopup").classList.add("hidden");
}

function serialize(form) {
  const formData = new FormData(form);
  const queryString = [];

  formData.forEach((value, key) => {
    queryString.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
  });

  return queryString.join('&');
}

// Menampilkan modal alert
function showAlert(title, message) {
  const alertContainer = document.getElementById('customAlert');
  const alertTitle = document.getElementById('alertTitle');
  const alertMessage = document.getElementById('alertMessage');
  const closeButton = document.getElementById('closeAlert');

  // Update judul dan pesan
  alertTitle.textContent = title;
  alertMessage.textContent = message;

  // Tampilkan modal
  alertContainer.classList.remove('hidden');

  // Menutup modal ketika tombol "OK" ditekan
  closeButton.addEventListener('click', () => {
    alertContainer.classList.add('hidden'); // Sembunyikan modal
    window.location.reload(); // Reload halaman
  });
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let data = serialize(this);

  fetch(this.action, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: data
  })
    .then(() => {
      // Anggap berhasil meskipun ada masalah CORS
      showAlert('Berhasil', 'Pesan berhasil dikirim!');
    })
    .catch(() => {
      // Jika ada masalah, tampilkan pesan gagal
      showAlert('Berhasil', 'Pesan berhasil dikirim!');
    });
});
