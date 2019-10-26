let message;
const input = document.getElementById('input');
const output = document.getElementById('output');
const morseDictionary = {
  'a': '.-',
  'b': '-...',
  'c': '-.-.',
  'd': '-..',
  'e': '.',
  'f': '..-.',
  'g': '--.',
  'h': '....',
  'i': '..',
  'j': '.---',
  'k': '-.-',
  'l': '.-..',
  'm': '--',
  'n': '-.',
  'o': '---',
  'p': '.--.',
  'q': '--.-',
  'r': '.-.',
  's': '...',
  't': '-',
  'u': '..-',
  'v': '...-',
  'w': '.--',
  'x': '-..-',
  'y': '-.--',
  'z': '--..',
  ' ': ' ', // added space for words/letters input
};


input.addEventListener("keypress", pressEnter);

function pressEnter(e) {
  const isEnter = e.keyCode === 13;
  if (isEnter) {
    translate();
    resetInput();
  }
}

function translate() {
  const message = getInputValue();
  if (isMorse(message)) {
    output.value = decrypt(message);
  } else {
    output.value = encrypt(message);
  }
}

function isMorse(message){
  for (let i = 0, max = message.length; i < max; i++){
    const char = message[i];
    if (char !== '-' && char !== '.' && char !== ' '){
      return false;
    }
  }
  return true;
}

function encrypt(str) {
  const encryption = [];
  str = str.toLowerCase();
  for (i = 0; i < str.length; i++) {
    const morseValue = morseDictionary[str[i]];
    if (!morseValue) {
      alert('Wrong Morse value!');
      return;
    }
    encryption.push(morseValue);
  }
  return encryption.join(' ');
}

function decrypt(str) {
  const decryption = [];
  str = str.split(' ');
  for (i = 0; i < str.length; i++) {
    for (let key in morseDictionary) {
      if (str[i] === morseDictionary[key]) {
        decryption.push(key);
      }
    }
  }
  return decryption.join('');
}

function resetInput() {
  input.value = '';
}

function getInputValue() {
  return input.value;
}
