const isEqualToLength = (string, maxSymbols) => string.length <= maxSymbols;

isEqualToLength();

const isPolyndrom = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--){
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
};

isPolyndrom();
