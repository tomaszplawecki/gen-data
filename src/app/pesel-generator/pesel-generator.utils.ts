export const generatePESEL = (
  year?: number,
  month?: number,
  day?: number,
  gender?: 'M' | 'F'
): string => {
  year = year ?? Math.floor(Math.random() * 100) + 1920;
  month = month ?? Math.floor(Math.random() * 12) + 1;
  day = day ?? Math.floor(Math.random() * 30) + 1;
  gender = gender ?? Math.random() > 0.5 ? 'M' : 'F';

  if (year >= 2000) {
    month += 20;
  } else if (year >= 1800 && year < 1900) {
    month += 80;
  } else if (year >= 2100 && year < 2200) {
    month += 40;
  } else if (year >= 2200 && year < 2300) {
    month += 60;
  }

  const yearString = year.toString().slice(-2).padStart(2, '0');
  const monthString = month.toString().padStart(2, '0');
  const dayString = day.toString().padStart(2, '0');

  const serialNumber = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');

  let genderDigit: number;
  if (gender === 'M') {
    genderDigit = Math.floor(Math.random() * 5) * 2 + 1;
  } else {
    genderDigit = Math.floor(Math.random() * 5) * 2;
  }

  const peselWithoutChecksum = `${yearString}${monthString}${dayString}${serialNumber}${genderDigit}`;

  const checksum = calculateChecksum(peselWithoutChecksum);

  return `${peselWithoutChecksum}${checksum}`;
};

export const calculateChecksum = (pesel: string): number => {
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(pesel[i]) * weights[i];
  }

  const modulo = sum % 10;
  return modulo === 0 ? 0 : 10 - modulo;
};
