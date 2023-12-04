const encrypt = ()=> {
   
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let text = document.getElementById('textEncode').value.toUpperCase();
    const charArray = text.split('');
    let html ="Mã hóa Affine ---------------- </br>";
    html += charArray.join(' | ') + '</br>';
    const numberArray = charArray.map(e => charToNumber(e));
    html += numberArray.join(' | ') + '</br>';
    let newNumberArray = numberArray.map(e => (e*a +b));
    html += newNumberArray.join(' | ') + '</br>';
    newNumberArray = newNumberArray.map(e => e % BANGMA.length)
    html += newNumberArray.join(' | ') + '</br>';
    let newTextArray = newNumberArray.map(e => numberToChar(e));
    html += newTextArray.join(' | ') + '</br>';
    printToConsole(html);
  }
