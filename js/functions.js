function isEqualToLength (string, maxSymbols) {
  return string.length <= maxSymbols;
}

isEqualToLength();

const isPolyndrom = (string) => {
  const normalizedString = string;
  normalizedString.replaceAll(' ', '');
  normalizedString.toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--){
    reversedString += normalizedString[i];
  }

  return string === reversedString;
};

isPolyndrom();
