const encrypt = document.getElementById('encrypt');
const decrypt = document.getElementById('decrypt');
const input = document.getElementById('input-textarea');
const output = document.getElementById('output');
const copy = document.getElementById('btn-copy');
const clear = document.getElementById('clear');

encrypt.addEventListener('click', function() {
  const inputText = input.value;
  if (/[^a-z\sñ]/g.test(inputText)) {
    alert("Accents, symbols and capital letters are not allowed");
  } else {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
      if (
        inputText[i] == "a" ||
        inputText[i] == "e" ||
        inputText[i] == "i" ||
        inputText[i] == "o" ||
        inputText[i] == "u"
      ) {
        switch (inputText[i]) {
          case "a":
            result += "ai";
            break;
          case "e":
            result += "enter";
            break;
          case "i":
            result += "imes";
            break;
          case "o":
            result += "ober";
            break;
          case "u":
            result += "ufat";
            break;
        }
      } else {
        result += inputText[i];
      }
    }
    output.value = result;
  }
  
});

decrypt.addEventListener('click', function() {
  const inputText = input.value;

  if (/[^a-z\sñ]/g.test(inputText)) {
    alert("Accents, symbols and capital letters are not allowed");
  } else {

    let result = input.value;
    let aux = '';
    result = inputText.replace(/ai/g, 'a');
    aux = result.replace(/enter/g, "e");
    result = aux.replace(/ober/g, "o");
    aux = result.replace(/imes/g, "i");
    result = aux.replace(/ufat/g, "u");
  
    output.value = result;
  }
});

copy.addEventListener("click", async function() {
   try {
      await navigator.clipboard.writeText(output.value);
      let aux = copy.innerHTML;
      setTimeout(() => {
        copy.innerHTML = aux;
      }, 2000);
      copy.innerHTML = "&#10003;";
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
});

clear.addEventListener('click', function() {
  input.value = '';
  output.value = '';
});


