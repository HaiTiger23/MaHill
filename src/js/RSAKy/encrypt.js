const encrypt = () => {
     
    let x = document.getElementById("textEncode").value.toUpperCase();
   
   let  html = `<h1>Tìm khóa công khai và khóa bí mật</h1>`;
    printToConsole(html);
    let { d,n } = caculateKeyRSA();
    printToConsole(`--Ký với x = ${x} <br>`);
    printToConsole(
        `y =  sigk(x) = x<sup>d</sup> mod n <br> = ${x}<sup>${d}</sup> mod ${n}`
    );
    let y = soMuLon(x, d, n);
    printToConsole(`<br> Vậy (x,y) = (${x},${y}) <br>`);
};
