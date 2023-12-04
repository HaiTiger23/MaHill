
const decrypt = ()=> {
   
    let x1 = parseInt(document.getElementById('x1').value);
    let x2 = parseInt(document.getElementById('x2').value);
    let x3 = parseInt(document.getElementById('x3').value);
    let x4 = parseInt(document.getElementById('x4').value);
    let text = document.getElementById('textDecode').value.toUpperCase();
    let html ="Giải mã Hill ----------------<br>";
    let _x1 = x4;
    let _x2 = -x2;
    let _x3 = -x3;
    let _x4 = x1;
    html += `k <sup>*</sup> = [${_x1} ${_x2}] [${_x3} ${_x4}] <br>`;
    html += `|k| = k<sub>11</sub> * k<sub>22</sub> - k<sub>21</sub> * k<sub>12</sub> <br>`;
    html += `|k| = ${x4} * ${x1} - ${x2} * ${x3} <br>`;
    let _k = x4*x1 - x2* x3; 
    html += `|k| = ${_k} <br>`;
    html += `k<sup>-1</sup> = ${_k}<sup>-1</sup> * [${_x1} ${_x2}] [${_x3} ${_x4}] mod n  <br>`;
    html += `k<sup>-1</sup> = ${_k}<sup>-1</sup> * mod n * [${_x1} ${_x2}] [${_x3} ${_x4}]  <br>`;
    printToConsole(html);
    let k_1 = euclid(_k);
    html = `${_k}<sup>-1</sup> * mod n = ${k_1} <br>`
    html += `k<sup>-1</sup> = ${k_1} * mod n * [${_x1} ${_x2}] [${_x3} ${_x4}]  <br>`;
    _x1 = _x1 * k_1;
    _x2 = _x2 * k_1;
    _x3 = _x3 * k_1;
    _x4 = _x4 * k_1;
    html += `k<sup>-1</sup> = [${_x1} ${_x2}] [${_x3} ${_x4}]  <br>`;
    _x1 = _x1 % BANGMA.length <0 ? (_x1 % BANGMA.length) + BANGMA.length :_x1 % BANGMA.length  ;
    _x2 = _x2 % BANGMA.length <0 ? (_x2 % BANGMA.length) + BANGMA.length :_x2 % BANGMA.length  ;
    _x3 = _x3 % BANGMA.length <0 ? (_x3 % BANGMA.length) + BANGMA.length :_x3 % BANGMA.length  ;
    _x4 = _x4 % BANGMA.length <0 ? (_x4 % BANGMA.length) + BANGMA.length :_x4 % BANGMA.length  ;
    html += `k<sup>-1</sup> = [${_x1} ${_x2}] [${_x3} ${_x4}]  <br><br>`;


    let result = ''
    let textArray = text.split('');
    let numberArray = textArray.map(e => charToNumber(e));
    for (let index = 0; index < numberArray.length ; index+=2) {
        let y1 = numberArray[index];
        let y2 = numberArray[index+1] ?? 0;
     html += `[ x${index+1} x${index+2}] = k<sup>-1</sup> * [ y${index+1} y${index+2}] </br>`;
     html += `= [${_x1} ${_x2}] [${_x3} ${_x4}] * [ ${y1} ${y2}] </br>`;
     let result1 = _x1 * y1 + _x2 * y2;
     let result2 = _x3 * y1 + _x4 * y2;
     html += `= [${result1} ${result2}] </br>`;
      result1 = result1 % BANGMA.length
      result2 = result2 % BANGMA.length;
     html += `= [${result1} ${result2}] </br>`;
   
      result1 = numberToChar(result1)
      result2 = numberToChar(result2);
     html += `= [${result1} ${result2}] </br>`;
     result += result1+ result2;
    }
    html+= text +"=>"+result+"<br><br>"
    printToConsole(html);
  }


  