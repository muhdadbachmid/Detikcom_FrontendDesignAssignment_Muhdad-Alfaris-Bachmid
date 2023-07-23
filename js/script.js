// Function untuk menambahkan class "menu-fixed" pada menu saat di-scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector(".top-header");
  if (window.pageYOffset > 100) {
    header.classList.add("menu-fixed");
  } else {
    header.classList.remove("menu-fixed");
  }
});

// Function untuk share ke Twitter
function shareToTwitter() {
  window.open(
    "https://twitter.com/share?url=" + encodeURIComponent(window.location.href)
  );
}

// Function untuk share ke WhatsApp
function shareToWhatsApp() {
  window.open(
    "https://api.whatsapp.com/send?text=" +
      encodeURIComponent("Check out this website: " + window.location.href)
  );
}

// Function untuk share ke Facebook
function shareToFacebook() {
  window.open(
    "https://www.facebook.com/sharer.php?u=" +
      encodeURIComponent(window.location.href)
  );
}
// JavaScript untuk mengatur menu yang tetap di atas pada halaman register.html
document.addEventListener("DOMContentLoaded", function () {
  var menuHeader = document.querySelector(".top-header");

  if (window.location.href.includes("register.html")) {
    // Jika halaman yang dibuka adalah register.html, tambahkan class menu-fixed
    menuHeader.classList.add("menu-fixed");
  } else {
    // Jika halaman yang dibuka adalah index.html, hapus class menu-fixed
    menuHeader.classList.remove("menu-fixed");
  }
});
