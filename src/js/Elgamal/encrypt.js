const encrypt = () => {
    let x = document.getElementById("textEncode").value.toUpperCase();
    let p = document.getElementById("p").value;
    let alpha = document.getElementById("alpha").value;
    let a = document.getElementById("a").value;
    let k = document.getElementById("k").value;
    console.log(p, alpha, a, k, x);
    let beta = soMuLon(alpha, a, p);
    printToConsole(`</br> => beta = ${beta}`);
    printToConsole(
        `</br> => Khóa công khai (alpha,beta,P) = (${alpha}, ${beta}, ${p})`
    );
    printToConsole(`</br> => Khóa bí mật: a = ${a}`);
    printToConsole(`</br> -- x = ${x},  k = ${k}`);
    printToConsole(`</br>chữ ký = signk(x)`);
    printToConsole(
        `</br>= {γ = alpha <sup>k</sup> mod p <br> và  δ =  (x - a x γ) x k <sup>-1</sup> mod (p-1)}`
    );
    printToConsole(
        `</br> + Tính: γ = alpha <sup>k</sup> mod p = ${alpha} <sup>${k}</sup> mod ${p} `
    );
    let Gamma = soMuLon(alpha, k, p);
    printToConsole(
      `</br> => Gamma = ${Gamma}`
      )
      printToConsole(`</br>+ Tính δ =  (x - a x γ) x k <sup>-1</sup> mod (p-1)`);
      printToConsole(`</br> =  (${x} - ${a} x ${Gamma}) x ${k} <sup>-1</sup> mod (${p}-1)`);
      printToConsole(`</br> =  (${x} - ${a} x ${Gamma}) x ${k} <sup>-1</sup> mod (${p-1})`);
      let beforeNumber = (x - a*Gamma);
      let afterNumber = euclidOpen(k, p-1);
      printToConsole(
          `</br>==> δ =  ${beforeNumber}  x ${afterNumber} mod (${
              p - 1
          })`
      );
      let delta = (beforeNumber * afterNumber) % (p-1)
      if(delta < 0) delta = delta + (p-1);
      printToConsole(`</br>==> δ =  ${delta}`);
      printToConsole(`</br> vậy (x,γ,δ ) = (${x}, ${Gamma}, ${delta})`);
};
