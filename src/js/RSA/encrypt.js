const encrypt = ()=> {
   
    let x = document.getElementById('textEncode').value.toUpperCase();
    let html = "<br> Mã hóa RSA ---------------- <br>";
    html += `<h1>Tìm khóa công khai và khóa bí mật</h1>`;
    printToConsole(html);
    let {e,n} =caculateKeyRSA()
    printToConsole(`--Mã hóa RSA với x = ${x} <br>`);
    printToConsole(`y =  x <sup>e</sup> mod n = ${x} <sup>${e}</sup> mod ${n} <br>`);
    let y = soMuLon(x,e,n);
    printToConsole(`<br> Vậy y = ${y} <br>`);
  }
