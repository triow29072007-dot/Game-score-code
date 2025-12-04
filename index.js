let num1 = 8
let num2 = 2

document.getElementById("num1-el") .textContent = num1
document.getElementById("num2-el") .textContent = num2

function tambah() {
    let tambah = num1 + num2
    console.log(tambah)
    document.getElementById("sum-el") .textContent = "Sum: " + tambah
}
function kurang() {
    let kurang = num1 - num2
    console.log(kurang)
    document.getElementById("sum-el") .textContent = "Sum: " + kurang
}
function bagi() {
    let bagi = num1 / num2
    console.log(bagi)
    document.getElementById("sum-el") .textContent = "Sum: " + bagi
}
function kali() {
    let kali = num1 * num2
    console.log(kali)
    document.getElementById("sum-el") .textContent = "Sum: " + kali
}


