module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }
  let num = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred'
}


if (number > 99) {
    return `${num[Math.floor(number / 100)]} hundred ${convertNumber(number % 100, num)}`.trimRight();
} else {
    return convertNumber(number, num);
};

function convertNumber(number, num) {
    if (number < 10) {
        return num[number];
    } else if (number >= 10 && number < 20) {
        return num[number];
    } else {
        return `${num[Math.floor(number / 10) * 10]} ${num[number % 10]}`.trimRight();
    }
}

}