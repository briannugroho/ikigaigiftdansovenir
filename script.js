// KONFIGURASI BISNIS
const WA_NUMBER = "6287774447347"; // ganti dengan nomor WA Anda


// Filter produk berdasarkan kategori
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    let filter = button.getAttribute('data-filter');

    // Hapus dan tambahkan class active
    document.querySelectorAll('[data-filter]').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Loop produk
    document.querySelectorAll('.product-item').forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = ""; // kembali ke default CSS (grid/flex)
      } else {
        item.style.display = "none"; // sembunyikan
      }
    });
  });
});


// Pencarian produk
document.getElementById('searchBar').addEventListener('keyup', function () {
  let query = this.value.toLowerCase();
  let products = document.querySelectorAll('.product-item');

  products.forEach(product => {
    let title = product.querySelector('.card-title').textContent.toLowerCase();
    if (title.includes(query)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
    });