let currentPage = window.location.pathname.split('/').pop();

let menuItems = document.querySelectorAll('.navbar ul li a');

menuItems.forEach(item => {
    if (item.getAttribute('href') === currentPage) {
        item.classList.add('active');
    }
});

let lastScrollTop = 0;
let ticking = false;

window.addEventListener("scroll", function() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop && currentScroll > 60){
        document.querySelector(".header").style.top = "-300px"; // Menggeser header ke atas saat menggulir ke bawah
      } else {
        document.querySelector(".header").style.top = "0"; // Mengembalikan header ke posisi awal saat menggulir ke atas
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      ticking = false;
    });
    ticking = true;
  }
}, false);


const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')
  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark':'fa-solid fa-bars'
}

