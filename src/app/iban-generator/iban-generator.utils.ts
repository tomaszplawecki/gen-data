export const generatePolishIban = (): string => {
  const countryCode = "PL";

  // Generowanie 26 losowych cyfr
  const accountNumber = Array.from({ length: 26 }, () => Math.floor(Math.random() * 10)).join('');

  // Obliczanie cyfr kontrolnych
  const ibanWithoutCheckDigits = accountNumber + "2521";

  // Zamiana liter na cyfry
  let ibanNumeric = '';
  for (let char of ibanWithoutCheckDigits) {
    if (/\d/.test(char)) {
      ibanNumeric += char;
    } else {
      // A=10, B=11, ..., Z=35
      ibanNumeric += (char.charCodeAt(0) - 55).toString();
    }
  }

  // Obliczanie kontrolnych cyfr IBAN
  const checkDigits = (98 - (parseInt(ibanNumeric, 10) % 97)).toString().padStart(2, '0');

  // Tworzenie pełnego IBAN
  const iban = `${countryCode}${checkDigits}${accountNumber}`;

  return iban;
}
