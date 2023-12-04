const decrypt = () => {
     
     let x = document.getElementById("textEncode").value.toUpperCase();
    let y = document.getElementById("y").value;
    let html = `<h1>Tìm khóa công khai và khóa bí mật</h1>`;
    printToConsole(html);
    let { e, n } = caculateKeyRSA();
    printToConsole(`--Xác minh chữ ký RSA ---------------- <br>`);
    printToConsole(
        `x =  y <sup>e</sup> mod n = ${y} <sup>${e}</sup> mod ${n} <br>`
    );
    let ver = soMuLon(y, e, n);
    if (x == ver) {
        printToConsole(`<br> Vì ${x} = ${ver} => chữ ký hợp lệ <br>`);
    } else {
        printToConsole(`<br> Vì ${x} khác ${ver} => chữ ký không hợp lệ <br>`);
    }
};
