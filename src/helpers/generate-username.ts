export function generateUsername() {
  const min = Math.ceil(1);
  const max = Math.floor(3599641);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}