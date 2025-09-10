// Ambil parameter id dari URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Ambil data JSON
fetch("products.json")
  .then(response => response.json())
  .then(products => {
    const product = products[productId];

    if (!product) {
      document.querySelector(".container").innerHTML = "<h3>Produk tidak ditemukan.</h3>";
      return;
    }

    // Isi data produk
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-desc").textContent = product.desc;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-img").src = product.img;

    // Tabel kemasan
    const kemasanBody = document.getElementById("kemasan-body");
    product.kemasan.forEach(item => {
      kemasanBody.innerHTML += `<tr><td>${item.name}</td><td>${item.price}</td></tr>`;
    });

    // Detail
    const detailList = document.getElementById("detail-list");
    product.details.forEach(d => {
      detailList.innerHTML += `<li>${d}</li>`;
    });

    const materialList = document.getElementById("material-list");
    product.material.forEach(m => {
      materialList.innerHTML += `<li>${m}</li>`;
    });

    const packagingList = document.getElementById("packaging-list");
    product.packaging.forEach(p => {
      packagingList.innerHTML += `<li>${p}</li>`;
    });

    const noteList = document.getElementById("note-list");
    product.notes.forEach(n => {
      noteList.innerHTML += `<li>${n}</li>`;
    });

    // Tombol checkout
    document.getElementById("wa-btn").href = product.wa;
    document.getElementById("shopee-btn").href = product.shopee;
    document.getElementById("tiktok-btn").href = product.tiktok;
    document.getElementById("tokopedia-btn").href = product.tokopedia;
  })
  .catch(err => {
    console.error("Error loading products:", err);
  });
