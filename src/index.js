module.exports = function toReadable (number) {
   let humaneNum = {
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

if (number === 0) {
  return 'zero';
}

function readableNum(number, humaneNum) {
  if (number < 20) {
    return humaneNum[number];
  } else {
    return (`${humaneNum[Math.floor(number / 10) * 10]} ${humaneNum[number % 10]}`.trimRight());
  }
}

if (number > 99) {
  return (`${humaneNum[Math.floor(number / 100)]} hundred ${readableNum(number % 100, humaneNum)}`.trimRight());
} else {
  return readableNum(number, humaneNum);
}

}