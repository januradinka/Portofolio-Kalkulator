//Fungsi untuk memunculkan angka ke layar
function appendNumber(number) {
  document.getElementById("calc-display").value += number;
}

//Fungsi untuk memunculkan tanda (+, -, *, /) ke layar
function appendOperator(operator) {
  document.getElementById("calc-display").value += operator;
}

//Fungsi tombol 'C' untuk menghapus semua tulisan di layar
function clearDisplay() {
  document.getElementById("calc-display").value = "";
}

//Fungsi tombol '=' untuk menghitung hasil matematika
function calculateResult() {
  
  var teksDiLayar = document.getElementById("calc-display").value;
  var hasilAkhir = eval(teksDiLayar);

  // Masukkan hasil hitungan tersebut kembali ke dalam layar
  document.getElementById("calc-display").value = hasilAkhir;
}
