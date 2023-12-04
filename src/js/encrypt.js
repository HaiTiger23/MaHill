
  const encrypt = ()=> {
   
    let x1 = parseInt(document.getElementById('x1').value);
    let x2 = parseInt(document.getElementById('x2').value);
    let x3 = parseInt(document.getElementById('x3').value);
    let x4 = parseInt(document.getElementById('x4').value);
    let text = document.getElementById('textEncode').value.toUpperCase();
    let html ="Mã hóa Hill ----------------<br>";
    let matrix = [
        [x1, x2],
        [x3, x4],
    ];
    let result = ''
    let textArray = text.split('');
    let numberArray = textArray.map(e => charToNumber(e));
    for (let index = 0; index < numberArray.length
      ; index+=2) {
      html += `| y${index+1} | = k * |x${index+1}| <br>| y${index+2} |-------|x${index+2}|<br><br>`
      const x = numberArray[index];
      const _x = numberArray[index + 1] ?? 0;
      html += `|${x1}  ${x2}| * | ${x} | <br>
               |${x3}  ${x4}| -- | ${_x} | <br><br>`
      let y =  (x1 * x) + (x2 * _x);
      let _y = (x3 * x) + (x4 * _x);
      html += `= | ${y} | <br>--| ${_y} |  <br><br>`
      y =  y % BANGMA.length;
      _y = _y % BANGMA.length;
      html += `= | ${y} | <br>--| ${_y} |  <br><br>`
      y = numberToChar(y)
      _y = numberToChar(_y)
      html += `= | ${y} | <br>--| ${_y} |  <br><br>`
      result+= y+_y
    }
    html+= text +"=>"+result+"<br><br>"
    printToConsole(html);
  }


  