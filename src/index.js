const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newExp = expr.split('**********');
    let a = [];
    for (let i = 0; i < newExp.length; i++) {
        let count = 0;
        let c = [];
        let b = [];
        for (let j of newExp[i]) {
            b.push(j);
            count += 1;
            if (count === 10) {
                c.push(b.join(''));
                b = [];
                count = 0;
            }
        }
        b = [];
        for (let i = 0; i < c.length; i++) {
            let count = 0;
            let g = [];
            let h = [];
            for (let j of c[i]) {
                g.push(j);
                count += 1;
                if (count === 2) {
                    if (g.join('') == '10') {
                        h.push('.');
                    } else if (g.join('') == '11') {
                        h.push('-');
                    }
                    g = [];
                    count = 0;
                }
            }
            b.push(MORSE_TABLE[h.join('')]);
        }
        a.push(b.join(''));
    }
    return a.join(" ");
}

module.exports = {
    decode
}

