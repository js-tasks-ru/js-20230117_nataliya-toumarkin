/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const arr = [
  "Детский велосипед Lexus Trike Racer Trike",
  "Соска (пустышка) NUK 10729357",
  "Соска (пустышка) Philips SCF182/12",
  "ТВ тюнер D-COLOR  DC1301HD",
  "Powerbank аккумулятор Hiper SP20000",
];

export function sortStrings(arr, param = "asc") {
  const arrSort = arr
    .slice()
    .sort((a, b) => a.localeCompare(b, "ru", { caseFirst: "upper" }));
  if (param === "asc") {
    return arrSort;
  } else {
    return arrSort.reverse();
  }
}
const sorted = sortStrings(arr, "desc");
console.log(sorted);
