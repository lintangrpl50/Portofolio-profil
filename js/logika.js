// Tugas Minggu 06: lima soal logika JavaScript
// File ini dihubungkan ke index.html dengan <script src="js/logika.js" defer></script>

// Soal 1: ganjil atau genap
function ganjilGenap(angka) {
  if (angka % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}

// Soal 2: suhu Celsius ke Fahrenheit (arrow function)
const celsiusKeFahrenheit = (celsius) => celsius * 9 / 5 + 32;

// Soal 3: angka terbesar dari tiga angka (if dan &&)
function nilaiTerbesar(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

// Soal 4: tahun kabisat
function tahunKabisat(tahun) {
  if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Soal 5: harga setelah diskon
function hargaSetelahDiskon(total) {
  if (total >= 200000) {
    return total * 80 / 100; // diskon 20%
  } else if (total >= 100000) {
    return total * 90 / 100; // diskon 10%
  } else {
    return total; // tanpa diskon
  }
}

// ===== Pengujian (minimal 3 masukan per fungsi) =====

console.log("Soal 1: ganjil atau genap");
console.log(`ganjilGenap(7) = ${ganjilGenap(7)}`); // ganjil
console.log(`ganjilGenap(12) = ${ganjilGenap(12)}`); // genap
console.log(`ganjilGenap(0) = ${ganjilGenap(0)}`); // genap

console.log("Soal 2: Celsius ke Fahrenheit");
console.log(`celsiusKeFahrenheit(0) = ${celsiusKeFahrenheit(0)}`); // 32
console.log(`celsiusKeFahrenheit(100) = ${celsiusKeFahrenheit(100)}`); // 212
console.log(`celsiusKeFahrenheit(-40) = ${celsiusKeFahrenheit(-40)}`); // -40

console.log("Soal 3: nilai terbesar dari tiga angka");
console.log(`nilaiTerbesar(5, 9, 2) = ${nilaiTerbesar(5, 9, 2)}`); // 9
console.log(`nilaiTerbesar(80, 75, 80) = ${nilaiTerbesar(80, 75, 80)}`); // 80
console.log(`nilaiTerbesar(-3, -7, -1) = ${nilaiTerbesar(-3, -7, -1)}`); // -1

console.log("Soal 4: tahun kabisat");
console.log(`tahunKabisat(2024) = ${tahunKabisat(2024)}`); // true
console.log(`tahunKabisat(2026) = ${tahunKabisat(2026)}`); // false
console.log(`tahunKabisat(1900) = ${tahunKabisat(1900)}`); // false
console.log(`tahunKabisat(2000) = ${tahunKabisat(2000)}`); // true

console.log("Soal 5: harga setelah diskon");
console.log(`hargaSetelahDiskon(250000) = ${hargaSetelahDiskon(250000)}`); // 200000
console.log(`hargaSetelahDiskon(100000) = ${hargaSetelahDiskon(100000)}`); // 90000
console.log(`hargaSetelahDiskon(75000) = ${hargaSetelahDiskon(75000)}`); // 75000