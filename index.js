let num1 = 16
let num2 = 4

document.getElementById("num1-el") .textContent = num1
document.getElementById("num2-el") .textContent = num2

function tambah() {
    let tambah = num1 + num2
    console.log(tambah)
    document.getElementById("sum-el") .textContent = "Jumlah: " + tambah
}
function kurang() {
    let kurang = num1 - num2
    console.log(kurang)
    document.getElementById("sum-el") .textContent = "Jumlah: " + kurang
}
function bagi() {
    let bagi = num1 / num2
    console.log(bagi)
    document.getElementById("sum-el") .textContent = "Jumlah: " + bagi
}
function kali() {
    let kali = num1 * num2
    console.log(kali)
    document.getElementById("sum-el") .textContent = "Jumlah: " + kali
}


