export const BIRTH_DATE = "1983-03-30";

// Whole years between a "YYYY-MM-DD" birth date and `today`.
export function getAge(birthDate = BIRTH_DATE, today = new Date()) {
  const [year, month, day] = birthDate.split("-").map(Number);
  let age = today.getFullYear() - year;
  const monthDiff = today.getMonth() + 1 - month;
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < day)) {
    age -= 1;
  }
  return age;
}

// Replaces every "{age}" token in a string with the current age.
export function withAge(text, today = new Date()) {
  return text.replaceAll("{age}", String(getAge(BIRTH_DATE, today)));
}
