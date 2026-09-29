// ======================================
// 1. SELECT ELEMENT HTML
// ======================================

const alat = document.getElementById("alat");
const namaAlat = document.getElementById("namaAlat");
const informasiAlat = document.getElementById("informasiAlat");

const formPinjam = document.getElementById("formPinjam");
const hasilPengajuan = document.getElementById("hasilPengajuan");

const formLogin = document.getElementById("formLogin");
const pesanLogin = document.getElementById("pesanLogin");


// ======================================
// 2. EVENT CHANGE (PILIH ALAT)
// ======================================

alat.addEventListener("change", function () {

    const pilihan = alat.value;

    if (pilihan === "") {
        informasiAlat.classList.add("hidden");
    } else {
        namaAlat.textContent = pilihan;
        informasiAlat.classList.remove("hidden");
    }

});


// ======================================
// 3. MEMILIH ALAT DARI KATALOG
// ======================================

function pilihAlat(nama) {

    // Mengisi dropdown sesuai alat yang dipilih
    alat.value = nama;

    // Menjalankan event change
    alat.dispatchEvent(new Event("change"));

    // Menuju form peminjaman
    document.getElementById("pinjam").scrollIntoView({
        behavior: "smooth"
    });

}


// ======================================
// 4. HANDLE EVENT FORM PEMINJAMAN
// ======================================

formPinjam.addEventListener("submit", function (event) {

    // Mencegah halaman dimuat ulang
    event.preventDefault();

    // Mengambil data formulir
    const nama = document.getElementById("nama").value.trim();
    const nim = document.getElementById("nim").value.trim();
    const pilihanAlat = alat.value;
    const tanggal = document.getElementById("tanggal").value;
    const durasi = document.getElementById("durasi").value;
    const keperluan = document.getElementById("keperluan").value.trim();

    // Validasi data
    if (
        nama === "" ||
        nim === "" ||
        pilihanAlat === "" ||
        tanggal === "" ||
        durasi === "" ||
        keperluan === ""
    ) {
        alert("Mohon lengkapi semua data peminjaman!");
        return;
    }

    // Menampilkan hasil pengajuan
    hasilPengajuan.className =
        "mt-6 p-4 rounded-lg bg-green-100 border border-green-300 text-green-800";

    hasilPengajuan.innerHTML = `
        <h3 class="text-lg font-bold mb-3">
            Pengajuan Berhasil!
        </h3>

        <p><strong>Nama:</strong> ${escapeHTML(nama)}</p>
        <p><strong>NIM:</strong> ${escapeHTML(nim)}</p>
        <p><strong>Alat:</strong> ${escapeHTML(pilihanAlat)}</p>
        <p><strong>Tanggal:</strong> ${escapeHTML(tanggal)}</p>
        <p><strong>Durasi:</strong> ${escapeHTML(durasi)}</p>
        <p><strong>Keperluan:</strong> ${escapeHTML(keperluan)}</p>

        <p class="mt-3 font-semibold">
            Status: Menunggu persetujuan admin.
        </p>
    `;

    // Mengosongkan formulir
    formPinjam.reset();

    // Menyembunyikan informasi alat
    informasiAlat.classList.add("hidden");

    // Mengarahkan ke hasil pengajuan
    hasilPengajuan.scrollIntoView({
        behavior: "smooth"
    });

});


// ======================================
// 5. HANDLE EVENT LOGIN
// ======================================

formLogin.addEventListener("submit", function (event) {

    // Mencegah halaman dimuat ulang
    event.preventDefault();

    // Mengambil data login
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Validasi
    if (email === "" || password === "") {

        pesanLogin.textContent =
            "Email dan password harus diisi.";

        pesanLogin.className =
            "text-center mt-4 text-red-600";

        return;
    }

    // Menampilkan pesan login
    pesanLogin.textContent =
        "Login berhasil dijalankan. Sistem belum terhubung ke database.";

    pesanLogin.className =
        "text-center mt-4 text-green-600";

});


// ======================================
// 6. FUNGSI KEAMANAN INPUT
// ======================================

function escapeHTML(teks) {

    return String(teks).replace(/[&<>"']/g, function (karakter) {

        const karakterHTML = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return karakterHTML[karakter];

    });

}