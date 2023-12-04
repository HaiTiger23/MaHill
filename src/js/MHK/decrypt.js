const decrypt = () => {
    let y = document.getElementById("textDecode").value;
    let sString = document.getElementById("s").value;
    let p = document.getElementById("p").value;
    let a = document.getElementById("a").value;
    let s = sString.split(",");

    printToConsole(`<br> Giải mã y = ${y} <br> `);
    printToConsole(
        `Tính a<sup>-1</sup> mod p = ${a}<sup>-1</sup> mod ${p} =<br> `
    );
    let d = euclidOpen(a, p);
    let c = (d * y) % p;
    printToConsole(`C = ${d} x ${y} mod ${p} = ${c}<br> `);

    let xBin = [];
    for (let index = s.length - 1; index >= 0; index--) {
        const element = s[index];
        if (c >= element) {
            c -= element;
           
            xBin.unshift(1);
        } else {
            xBin.unshift(0);
        }
    }
    let x = binaryToDecimal(xBin.join(""), 2);
    printToConsole(`S | ${s.join("|")} <br>`);
    printToConsole(`x | ${xBin.join("|")} <br>`);

    if (c == 0) {
        printToConsole(`x = ${x} <br>`);
    } else {
        printToConsole(`Vì còn dư ${c} nên x không tồn tại <br>`);
    }
};
function binaryToDecimal(binaryString) {
    // Kiểm tra xem chuỗi nhập vào có hợp lệ không
    if (!/^[01]+$/.test(binaryString)) {
        return "Chuỗi không hợp lệ!";
    }

    // Chuyển chuỗi nhị phân thành số thập phân
    var decimalNumber = parseInt(binaryString, 2);

    return decimalNumber;
}