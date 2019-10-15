let input = document.getElementById('input');
let output = document.getElementById('output');
let message;
let morseDictionary = {
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
  'n': '_.',
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
};


function translate() {
	message = input.value;
	if (message[0] === '-' || message[0] === '.') {
	  decrypt(message);
	} else {
	  encrypt(message);
	}
}

function encrypt(str) {
	let encryption = [];
	str = str.split('');
	for (i = 0; i < str.length; i++) {
		for (let key in morseDictionary) {
			if (key === str[i])
			encryption.push(morseDictionary[key]);
		}
	}
	output.value = encryption.join(' ');
}

function decrypt(str) {
	let decryption = [];
	str = str.split(' ');
	for (i = 0; i < str.length; i++) {
		for (let key in morseDictionary) {
			if (morseDictionary[key] === str[i])
			decryption.push(key);
		}
	}
	output.value = decryption.join('');
}


input.onkeypress = function(e) {
  if (e.keyCode === 13) {
	translate();
	input.value = '';
  }
};
