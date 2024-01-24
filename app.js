const encrypt = document.getElementById('encrypt');
const decrypt = document.getElementById('decrypt');
const input = document.getElementById('input-textarea');
const output = document.getElementById('output');

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
    output.innerText = result;
  }
  
});

decrypt.addEventListener('click', function() {
  const inputText = input.value;
  let result = '';
  result = inputText.replace('ai', 'a');
  result = inputText.replace("enter", "e");
  result = inputText.replace("ober", "o");
  result = inputText.replace("imes", "i");
  result = inputText.replace("ufat", "u");
 
  output.innerText = result;
});


