const decrypt = ()=> {
   
  
    let y = document.getElementById('textDecode').value.toUpperCase();
    let html ="Giải mã RSA ---------------- <br>";
     html += `<h1>Tìm khóa công khai và khóa bí mật</h1>`;
     printToConsole(html);
     let { d,n } = caculateKeyRSA();
       printToConsole(`--Giải mã RSA với y = ${y} <br>`);
         printToConsole(
             `y =  y <sup>d</sup> mod n = ${y} <sup>${d}</sup> mod ${n} <br>`
         );
         let x = soMuLon(y, d, n);
         printToConsole(`<br> Vậy x = ${x} <br>`);
  }