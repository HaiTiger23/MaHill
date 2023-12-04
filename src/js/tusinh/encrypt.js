const encrypt = ()=> {
   
    let key = document.getElementById('key').value;
    let text = document.getElementById('textEncode').value.toUpperCase();
    const charArray = text.split('');
    let html ="Mã hóa tự sinh ---------------- \n";
    html += charArray.join(' | ') + '\n';
    const numberArray = charArray.map(e => charToNumber(e));
    html += numberArray.join(' | ') + '\n';
    let keyArray =[key];
    let newNumberArray = numberArray.map(e => {(
        value = (e +parseInt(key))) 
        console.log(value);
        key = e;
        keyArray.push(e);
        return value % 26;
        
    })
    html += keyArray.join(' | ') + '\n';
    html += newNumberArray.join(' | ') + '\n';
    let newTextArray = newNumberArray.map(e => numberToChar(e));
    html += newTextArray.join(' | ') + '\n';
    printToConsole(html);
  }
