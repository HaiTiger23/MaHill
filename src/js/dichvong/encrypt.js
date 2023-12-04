const encrypt = ()=> {
   
    let key = document.getElementById('key').value;
    let text = document.getElementById('textEncode').value.toUpperCase();
    const charArray = text.split('');
    let html ="Mã hóa dịch vòng ---------------- \n";
    html += charArray.join(' | ') + '\n';
    const numberArray = charArray.map(e => charToNumber(e));
    html += numberArray.join(' | ') + '\n';
    let keyArray = numberArray.map(e => key);
    html += keyArray.join(' | ') + '\n';
    let newNumberArray = numberArray.map(e => (e +parseInt(key)) % BANGMA.length)
    html += newNumberArray.join(' | ') + '\n';
    let newTextArray = newNumberArray.map(e => numberToChar(e));
    html += newTextArray.join(' | ') + '\n';
    printToConsole(html);
  }
