function change() {
    var numeros = ["1","2","3","4","5","6","7","8","9","0","A","B","C","D","F","E"];
    var punto = '';
    console.log(random)

    for (i = 0; i < 6;i++) {
         var random = [Math.floor(Math.random() * numeros.length)];
         punto += numeros[random];

    }
     document.getElementById("mega").style.backgroundColor= "#" + punto;
     document.getElementById("hexcode").innerHTML = "#" +  punto;
}
