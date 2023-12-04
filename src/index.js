const BANGMA = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
const charToNumber = (char) => {
    return BANGMA.indexOf(char);
};
const numberToChar = (number) => {
    let index = number < 0 ? number + BANGMA.length : number % BANGMA.length;
    return BANGMA[index];
};
const printToConsole = (text) => {
    let consoleResult = document.getElementById("consoleResult");
    consoleResult.innerHTML = consoleResult.innerHTML + "\n" + text;
};
const euclid = (a) => {
    let html = `Tính: ${a} <sup>-1</sup> mod ${BANGMA.length} <br>`;
    let x = [BANGMA.length, a];
    let b = [0, 1];
    let y = [0, Math.floor(BANGMA.length / a)];
    html += " x | b | y <br>";
    let i = 0;
    let result;
    while (true) {
        if (i > 1) {
            let _x = x[i - 2] % x[i - 1];
            let _b = b[i - 2] - b[i - 1] * y[i - 1];
            let _y = Math.floor(x[i - 1] / _x);
            x.push(_x);
            y.push(_y);
            b.push(_b);
            if (x[i] > 1) {
                html += `${x[i]} | ${b[i]} | ${y[i]} <br>`;
            } else if (_x == 1) {
                html += `${x[i]} | ${b[i]} | ${y[i]} <br>`;
                result = _b;
                break;
            } else {
                html += `${x[i]} | ${b[i]} | ${y[i]} <br>`;
                result = false;
                break;
            }
        } else {
            html += `${x[i]} | ${b[i]} | ${y[i]} <br>`;
        }
        i++;
    }
    printToConsole(html);
    return result < 0 ? BANGMA.length + result : result;
};
const euclidOpen = (a, n) => {
    let html = `Tính: ${a} <sup>-1</sup> mod ${n} <br>`;
    let x = [n, a];
    let b = [0, 1];
    let y = [0, Math.floor(n / a)];
    html += " x | b | y <br>";
    let i = 0;
    let result;
    while (true) {
        if (i > 1) {
            let _x = x[i - 2] % x[i - 1];
            let _b = b[i - 2] - b[i - 1] * y[i - 1];
            let _y = Math.floor(x[i - 1] / _x);
            x.push(_x);
            y.push(_y);
            b.push(_b);
            if (x[i] > 1) {
                html += `${x[i]} | ${b[i]} | ${y[i]} <br>`;
            } else if (_x == 1) {
                html += `${x[i]} | ${b[i]} | ${y[i]} <br>`;
                result = _b;
                break;
            } else {
                html += `${x[i]} | ${b[i]} | ${y[i]} <br>`;
                result = false;
                break;
            }
        } else {
            html += `${x[i]} | ${b[i]} | ${y[i]} <br>`;
        }
        i++;
    }
    printToConsole(html);
    return result < 0 ? n + result : result;
};
const clearConsole = () => {
    let consoleResult = document.getElementById("consoleResult");
    consoleResult.innerHTML = "";
};
const caculateKeyRSA = () => {
    let p = document.getElementById("p").value;
    let q = document.getElementById("q").value;
    let e = document.getElementById("e").value;
    let n = p * q;
    let phiN = (p - 1) * (q - 1);
    let html = `<br>có n = p * q = ${p} * ${q} = ${n} <br>phiN = (p -1) * (q -1) =  ${
        p - 1
    } * ${q - 1} = ${phiN} <br>Tính d <br> `;
    printToConsole(html);
    let d = euclidOpen(e, phiN);
    printToConsole(
        `<br> Vậy khóa công khai là : (n,e) = (${n}, ${e}) <br> Khóa bí mật là d = ${d}<br>`
    );
    return { n, e, d };
};
const soMuLon = (_a, _x, _d) => {
    printToConsole(`<br> tính ${_a}<sup>${_x}</sup> mod ${_d}<br>`);
    let x = _x;
    let a = _a;
    let d = x % 2 == 0 ? 1: _a;

    printToConsole("x | a | d <br>");
    printToConsole(`${x} | ${a} | ${d} <br>`);
    while (x != 1) {
        x = Math.floor(x / 2);
        a = (a * a) % _d;
        if (x % 2 != 0) {
            d = (a * d) % _d;
        }
        printToConsole(`${x} | ${a} | ${d} <br>`);
    }
    return d;
};
