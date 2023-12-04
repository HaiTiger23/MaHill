const decrypt = ()=> {
   
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let text = document.getElementById('textDecode').value.toUpperCase();
    const charArray = text.split('');
    let html ="Giải mã Affine ---------------- <br/>";
    let euclidNumber = euclid(a);
    console.log(euclidNumber);
   
    const numberArray = charArray.map(e => charToNumber(e)); 
    html += 'y ||'+numberArray.join(' | ') + '<br>';  
    const euclidArray = charArray.map(e=> euclidNumber);
    html += "a<sup>-1</sup> ||" + euclidArray.join(" | ") + "<br>";
    let newNumberArray = numberArray.map(y => euclidNumber*(y - b));
    html += "a<sup>-1</sup>* (y-b) ||" + newNumberArray.join(" | ") + "<br>"; 
    newNumberArray = newNumberArray.map(e => e % BANGMA.length)
    html +=
        "a<sup>-1</sup> *(y-b) mod 26 ||" + newNumberArray.join(" | ") + "<br>";
    let newTextArray = newNumberArray.map(e => numberToChar(e));
    html += "x ||" + newTextArray.join(" | ") + "<br>";
    printToConsole(html);
  }