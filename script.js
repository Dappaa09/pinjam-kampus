// 1. Selector Element (Mendapatkan elemen HTML dari DOM)
const btnKatalog = document.querySelector("#btn-katalog");
const katalogSection = document.querySelector("#katalog");
const detailSection = document.querySelector("#detail-section");
const detailTitle = document.querySelector("#detail-title");
const detailDesc = document.querySelector("#detail-desc");
const btnCloseDetail = document.querySelector("#btn-close-detail");
const btnDetails = document.querySelectorAll(".btn-detail");

// 2. Event Handler: Klik "Lihat Katalog Alat" untuk scroll ke katalog
if (btnKatalog) {
  btnKatalog.addEventListener("click", () => {
    katalogSection.scrollIntoView({ behavior: "smooth" });
  });
}

// 3. Complete Interaction: Klik "Detail Alat" -> Manipulasi DOM
btnDetails.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Ambil data dari atribut tombol
    const namaAlat = event.target.getAttribute("data-nama");
    const stokAlat = event.target.getAttribute("data-stok");

    // Ubah isi konten DOM
    detailTitle.textContent = `Detail Peminjaman: ${namaAlat}`;
    detailDesc.textContent = `Inventaris ${namaAlat} saat ini memiliki ketersediaan ${stokAlat}. Silakan ajukan izin peminjaman melalui form jika ingin menggunakannya.`;

    // Tampilkan kotak detail
    detailSection.classList.remove("hidden");
    detailSection.scrollIntoView({ behavior: "smooth" });
  });
});

// 4. Event Handler: Tutup kotak detail
if (btnCloseDetail) {
  btnCloseDetail.addEventListener("click", () => {
    detailSection.classList.add("hidden");
  });
}