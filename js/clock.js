// Prompt ile kullanıcıdan ismini girmesini istedik.
let name = prompt("İsminizi Giriniz: ")
// Eğer değer boş değilse isim yazılacak
if(name != null) {
    document.getElementById("myName").innerHTML =
    name
}
// Diğer her durumda aşağıdaki kod bloğu çalışacak
else{
    alert("Lütfen isminizi giriniz!");
}

// Saat fonksiyonu 
function showTime() {
    const today = new Date();
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let dayName = days[today.getDay()];
    let vakit = "Gündüz";

    // Saate göre günün hangi vakti olduğunu anlamamıza yarayacak olan if bloğu
    if(h <= 21 && h > 17){
        vakit = "Akşam";
    } 
    else if (h <= 17 && h > 12){
        vakit = "Öğlen";
    } 
    else if (h <= 11 && h >= 5){
        vakit = "Sabah";
    } 
    else {
        vakit = "Gece";
    }

    let time = h + ":" + m + ":" + s;
    document.querySelector("#myClock").innerHTML = `${vakit} ${h} : ${m} : ${s} ${dayName}`
    
}
setInterval(showTime, 1000);
showTime();