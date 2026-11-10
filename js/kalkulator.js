// Tantangan Minggu 06: kalkulator nilai interaktif

// Fungsi dipakai ulang dari latihan.js
const hitungRataRata = (tugas, uts, uas) => (tugas + uts + uas) / 3;

function predikat(nilai) {
  if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    return "B";
  } else if (nilai >= 70) {
    return "C";
  } else {
    return "D";
  }
}

// Mengambil elemen halaman
const inputTugas = document.querySelector("#tugas");
const inputUts = document.querySelector("#uts");
const inputUas = document.querySelector("#uas");
const tombol = document.querySelector("#tombol");
const hasil = document.querySelector("#hasil");

// Menjalankan perhitungan setiap kali tombol diklik
tombol.addEventListener("click", () => {
  // Nilai kolom isian selalu berupa teks, jadi diubah ke angka dengan Number()
  const tugas = Number(inputTugas.value);
  const uts = Number(inputUts.value);
  const uas = Number(inputUas.value);

  // Kolom kosong bernilai "" sehingga Number("") menjadi 0; cek dulu
  if (inputTugas.value === "" || inputUts.value === "" || inputUas.value === "") {
    hasil.textContent = "Isi ketiga nilai terlebih dahulu.";
    return;
  }

  const rata = hitungRataRata(tugas, uts, uas);
  hasil.textContent = `Rata-rata ${rata.toFixed(1)}, predikat ${predikat(rata)}`;
});

const tombolTema = document.querySelector("#tombol-tema");
if (tombolTema)
    tombolTema.addEventListener("click", () => {
        document.body.classList.toggle("gelap");
        if (document.body.classList.contains("gelap")) {
            tombolTema.textContent = "Mode Terang";
        } else {
            tombolTema.textContent = "Mode Gelap";
        }
    });

// 3. Penghitung karakter pesan (halaman Kontak)
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if (kotakPesan) {
    kotakPesan.addEventListener("input", () => {
        hitungKarakter.textContent = `${kotakPesan.value.length}/300
karakter`;
    });
}