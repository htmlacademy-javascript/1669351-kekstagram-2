function getLengthCheck (string, maxSymbols) {
  return (string.length <= maxSymbols) ? 'true' : 'false';
}

getLengthCheck();

function getPolyndromeCheck (string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--){
    reversed += string[i];
  }

  return string === reversed ? 'ура полиндром' : 'нет, не полиндром';
}

getPolyndromeCheck();
