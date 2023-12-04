const encrypt = ()=> {
   
    let x = document.getElementById('textEncode').value.toUpperCase();
    let sString = document.getElementById("s").value;
    let p = document.getElementById("p").value;
    let a = document.getElementById("a").value;
    let s = sString.split(",");
    let binX = convertToBinary(x).toString().split("");
    let t = s.map((e) => {
        return (e * a) % p;
    });
    printToConsole(`<br> Mã hóa MHK <br> x = ${x} = ${binX.join(" ")} <br>`);
    printToConsole(`t = {${t.join(",")}} <br> `);
    if(binX.length > t.length) {
      let numberAdd =  t.length - (binX.length % t.length);
      for (let index = 0; index < numberAdd; index++) {
          binX.unshift(0);
      }
    }
      printToConsole(`Ta có: x = ${binX.join(" ")} <br>`)
      let yTemp = 0;
      let xTemp = [];
      let order = 1;
      let phepTinh = "";
      for (let index = 0; index < binX.length; index++) {
          const element = binX[index];
          yTemp+= element* t[index % t.length];
          phepTinh += `${element}x${t[index % t.length]} + `;
          xTemp.push(element);
           if ((index+1) % t.length == 0) {
            printToConsole(`--ta có x${order} = ${xTemp.join(" ")} <br> y${order} = ${phepTinh} = ${yTemp} <br>`)
               xTemp = [];
               yTemp = 0;
               order++;
               phepTinh = ""
           }
      }
    }
  function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin;
}