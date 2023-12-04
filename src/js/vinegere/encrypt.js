const encrypt = ()=> {
   
    let key = document.getElementById('key').value.toUpperCase();
    let text = document.getElementById('textEncode').value.toUpperCase();
    const charArray = text.split('');
    const keyArray = key.split('');
    console.log(keyArray);
    let html ="Mã hóa Vinegere ---------------- \n";
    let keyNumberArray =  keyArray.map(key => charToNumber(key));
    let charNumberArray = charArray.map(char => charToNumber(char));

    console.log(keyNumberArray, charNumberArray);
    html += charArray.join(' | ') + '\n';
    let lineChar = "";
    let resultNumber = "";
    let resultChar = "";
    let keyString = "";
    for (let index = 0; index < charArray.length; index++) {
        const charItem = charArray[index];
        const numberItem = charNumberArray[index];
        lineChar += charItem+"|";
        keyString += keyNumberArray[index % keyNumberArray.length]+"|";
        resultNumber += (numberItem + keyNumberArray[index % keyNumberArray.length] % BANGMA.length)+"|"; 
        resultChar += numberToChar(numberItem + keyNumberArray[index % keyNumberArray.length] % BANGMA.length)+"|"; 
        if((index+1 )% keyArray.length == 0) {
            lineChar += "--"
            resultNumber += "--";
            resultChar += "--";
            keyString += "--";
        }
    }
   html += lineChar+"\n";
   html += keyString + "\n";
   html += resultNumber + "\n";
   html += resultChar + "\n";
    printToConsole(html);
  }
