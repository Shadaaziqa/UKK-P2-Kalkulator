function hitung() {
    // Mendapatkan nilai input dari elemen HTML
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;

    // Melakukan operasi sesuai dengan operator yang dipilih
    var hasil = 0;
    switch (operator) {
        case '+':
            hasil = num1 + num2;
            break;
        case '-':
            hasil = num1 - num2;
            break;
        case '*':
            hasil = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                hasil = num1 / num2;
            } else {
                alert('Pembagian dengan angka 0 tidak diperbolehkan!');
                return;
            }
            break;
        default:
            alert('Operasi tidak valid');
            return;
    }

    // Menampilkan hasil pada elemen HTML
    document.getElementById('hasil').innerText = hasil;
}