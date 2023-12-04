const decrypt = () => {
      let x = document.getElementById("textEncode").value.toUpperCase();
    let alpha = document.getElementById("alpha").value;
    let gama = document.getElementById("gama").value;
    let delta = document.getElementById("delta").value;
    let p = document.getElementById("p").value;
    let a = document.getElementById("a").value;
    let k = document.getElementById("k").value;
    printToConsole(`<br> Xác minh chữ ký với (x,γ,δ) = (${x}, ${gama}, ${delta}) `);
    printToConsole(`<br> Ta có ver(x,γ,δ) = β<sup>γ</sup> x γ<sup>δ</sup> = alpha<sup>x</sup> mod P `);
    printToConsole(`<br> Ta tính β`);
    let beta = soMuLon(alpha, a, p);
    printToConsole(`</br> => β = ${beta}`);
    printToConsole(
        `<br> Tính β<sup>γ</sup> mod p = ${beta}<sup>${gama}</sup> mod ${p}`
    );
    let firstResult = soMuLon(beta,gama,p)
     printToConsole(`<br> =>  ${beta}<sup>${gama}</sup> mod ${p} =  ${firstResult}`);

      printToConsole(
          `<br> Tính γ<sup>δ</sup> mod p = ${gama}<sup>${delta}</sup> mod ${p}`
      );
      let secondResult = soMuLon(gama, delta, p);
      printToConsole(
          `<br> =>   ${gama}<sup>${delta}</sup> mod ${p} =  ${secondResult}`
      );
      let leftResult = (firstResult*secondResult) % p;
      if(leftResult < 0) leftResult = p - leftResult;
      printToConsole(
          `<br> =>   β<sup>γ</sup> x γ<sup>δ</sup> mod p =  ${firstResult * secondResult} mod ${p} <br> = ${leftResult}`
      );
      printToConsole(`<br> Tính alpha<sup>x</sup> mod P = ${alpha}<sup>${x}</sup> mod ${p}`);
      let rightResult = soMuLon(alpha,x,p);
      printToConsole(`</br> Vậy ${alpha}<sup>${x}</sup> mod ${p} = ${rightResult}`);
      if(rightResult == leftResult) {
        printToConsole(`<br> Vì ${leftResult} = ${rightResult} => Đây là chữ ký`)
      }else {
        printToConsole(
            `<br> Vì ${leftResult} != ${rightResult} => Đây không là chữ ký`
        );
      }
};
