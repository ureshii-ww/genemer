import { monthMap } from './month-map';

export function convertDateToString(date: Date) {
  return `${date.getDate().toString().padStart(2, '0')} ${monthMap.get(
    date.getMonth() + 1
  )} ${date.getFullYear()} в ${padDate(date.getHours())}:${padDate(date.getMinutes())}:${padDate(
    date.getSeconds()
  )}`;
}

function padDate(number: number) {
  return number.toString().padStart(2, '0');
}
