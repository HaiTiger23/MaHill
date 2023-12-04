const decrypt = ()=> {
   
    let key = document.getElementById('key').value;
    let text = document.getElementById('textDecode').value.toUpperCase();
    const charArray = text.split('');
    let html ="Giải mã tự sinh ---------------- \n";
    html += charArray.join(' | ') + '\n';
    const numberArray = charArray.map(e => charToNumber(e));
    html += numberArray.join(' | ') + '\n';
    let keyArray =[key];
    let newNumberArray = numberArray.map(e => {(
        value = (e - parseInt(key))) 
        value = value < 0 ? 26 + value: value % 26;
        key = value;
        keyArray.push(value);
        return value;
        
    })
    html += "key:"+keyArray.join(' | ') + '\n';
    html += newNumberArray.join(' | ') + '\n';
    let newTextArray = newNumberArray.map(e => numberToChar(e));
    html += newTextArray.join(' | ') + '\n';
    printToConsole(html);
  }